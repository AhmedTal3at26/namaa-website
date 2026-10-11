/* ============================================================
   Namaa — Service Worker (Workbox, runtime strategies only)
   - Pages        : NetworkFirst (+ offline fallback)
   - Static assets: CacheFirst  (same-origin only)
   - Auth/OAuth   : NetworkOnly (never cached, never intercepted)
   No precache manifest: the site ships as plain static files, no build step.
   ============================================================ */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js');

if (self.workbox) {
  workbox.setConfig({ debug: false });

  var OFFLINE_FALLBACK =
    '<!DOCTYPE html><html lang="ar" dir="rtl"><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>نماء — دون اتصال</title>' +
    '<body style="font-family:system-ui,\'Segoe UI\',Tahoma,sans-serif;text-align:center;' +
    'padding:3rem 1.5rem;background:#F2F5F1;color:#1C2B3A">' +
    '<h1 style="color:#1D5D9D;margin:0 0 .5rem">نماء</h1>' +
    '<p>لا يوجد اتصال بالإنترنت، ولم تُخزَّن هذه الصفحة بعد.</p></body></html>';

  /* auth-ish detection (site has no auth today; these guards are precautionary) */
  function isAuthLike(url) {
    if (url.searchParams.has('code') || url.searchParams.has('access_token')) return true;
    return /\/(login|logout|signin|sign-in|signout|sign-out|auth|oauth|oauth2|callback|connect)(\/|$)/i.test(
      url.pathname
    );
  }

  /* ---- 1) auth / oauth  ->  network only (highest priority) ----- */
  workbox.routing.registerRoute(({ url }) => isAuthLike(url), new workbox.strategies.NetworkOnly());

  /* ---- 2) navigations  ->  network first + offline fallback ---- */
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
      cacheName: 'namaa-pages-v1',
      networkTimeoutSeconds: 4,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 24,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    })
  );

  /* ---- 3) same-origin assets  ->  cache first ------------------- */
  workbox.routing.registerRoute(
    ({ request, url }) =>
      url.origin === self.location.origin &&
      (['style', 'script', 'image', 'font'].includes(request.destination) ||
        /\.(?:css|js|png|jpg|jpeg|svg|webp|woff2?|ico|webmanifest)$/i.test(url.pathname)),
    new workbox.strategies.CacheFirst({
      cacheName: 'namaa-assets-v1',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 80,
          maxAgeSeconds: 60 * 24 * 60 * 60,
          purgeOnQuotaError: true,
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [0, 200] }),
      ],
    })
  );

  /* ---- offline fallback for navigations with no cached copy ----- */
  workbox.routing.setCatchHandler(async ({ request }) => {
    if (request.mode === 'navigate') {
      const cached = await caches.match('./index.html', { ignoreSearch: true });
      if (cached) return cached;
      return new Response(OFFLINE_FALLBACK, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }
    return Response.error();
  });

  self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
  });
}