/* =====================================================
   icons.js — عائلة أيقونات SVG الخطية الموحدة لموقع نماء
   - أسلوب واحد: 24×24، سماكة 2، أطراف دائرية، currentColor
   - تُحقن مرة واحدة وتُستخدم عبر <use> في كل الصفحات
   - تستبدل إيموجي الواجهة (تنقل/أزرار/عناوين) فقط،
     وتبقي رموز المحتوى المرفقة بتسمياتها كما هي
   - الأسهم الاتجاهية مضبوطة لـRTL، والرموز غير الاتجاهية
     (تشغيل الوسائط) لا تُعكس
   ===================================================== */
(function () {
  var S = function (id, inner) {
    return '<symbol id="i-' + id + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + "</symbol>";
  };
  var SPRITE =
    S("home", '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M10 20v-5h4v5"/>') +
    S("layers", '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>') +
    S("grid", '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>') +
    S("clipboard", '<rect x="6" y="4" width="12" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="4" rx="1"/><path d="M9.5 11h5M9.5 15h5M9.5 18.5h3"/>') +
    S("chart", '<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8.5 16v-5M13 16V8M17.5 16v-3"/>') +
    S("book-open", '<path d="M12 6c-2-1.5-4.5-2-8-2v14c3.5 0 6 .5 8 2 2-1.5 4.5-2 8-2V4c-3.5 0-6 .5-8 2z"/><path d="M12 6v14"/>') +
    S("book", '<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13"/>') +
    S("pencil", '<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"/><path d="M14.5 6.5l3 3"/>') +
    S("printer", '<path d="M7 8V3h10v5"/><rect x="3.5" y="8" width="17" height="8" rx="2"/><rect x="7" y="12.5" width="10" height="7.5"/>') +
    S("copy", '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>') +
    S("folder", '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>') +
    S("moon", '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>') +
    S("sun", '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>') +
    S("search", '<circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/>') +
    S("eye", '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>') +
    S("external", '<path d="M17 17 7 7"/><path d="M16 7H7v9"/>') +
    S("arrow-up", '<path d="M12 19V5"/><path d="M5 12l7-7 7 7"/>') +
    S("arrow-right", '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>') +
    S("arrow-left", '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>') +
    S("check", '<path d="M4.5 12.5l5 5 10-11"/>') +
    S("star", '<path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.9-5.3-2.8-5.3 2.8 1-5.9L3.5 9.7l5.9-.9L12 3.5z"/>') +
    S("calendar", '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>') +
    S("calendar-check", '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/><path d="M10 15l2 2 4-4"/>') +
    S("music", '<circle cx="7" cy="17" r="3.5"/><circle cx="17" cy="15" r="3.5"/><path d="M10.5 17V6l10-2v11"/>') +
    S("play", '<path d="M8 5.5v13l11-6.5-11-6.5z"/>') +
    S("sprout", '<path d="M12 21v-8"/><path d="M12 13c0-4 3-7 8-7 0 5-3 8-8 7z"/><path d="M12 13c0-4-3-7-8-7 0 5 3 8 8 7z"/>') +
    S("compass", '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>') +
    S("list", '<path d="M8.5 6h12M8.5 12h12M8.5 18h12"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/>') +
    S("link", '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1.5-1.5"/>') +
    S("shield", '<path d="M12 3l7.5 3v6c0 4.5-3 7.5-7.5 9-4.5-1.5-7.5-4.5-7.5-9V6L12 3z"/><path d="M9 12l2 2 4-4"/>');

  function mount() {
    if (document.getElementById("namaa-sprite")) return;
    var w = document.createElement("div");
    w.innerHTML = '<svg id="namaa-sprite" width="0" height="0" style="position:absolute" aria-hidden="true">' + SPRITE + "</svg>";
    document.body.insertBefore(w.firstChild, document.body.firstChild);
    var st = document.createElement("style");
    st.textContent = ".ic{width:1.2em;height:1.2em;flex:none;vertical-align:-.22em}nav.tabs .ic{width:1.35em;height:1.35em}h1 .ic,h2 .ic,h3 .ic{width:1.4em;height:1.4em}.btn .ic,.tab .ic,.chip .ic{width:1.15em;height:1.15em}.song .pl{background:var(--brand-soft);color:var(--brand)}.song .pl .ic{width:1.3em;height:1.3em}";
    document.head.appendChild(st);
  }

  /* قاموس الإيموجي → الأيقونة (مرتب الأطول أولًا) */
  var DICT = [
    ["👶🧑‍🎓", "layers"], ["🗺️", "compass"], ["🏠", "home"], ["🗂️", "layers"], ["📝", "clipboard"],
    ["📊", "chart"], ["📚", "book-open"], ["📋", "clipboard"], ["🖨️", "printer"],
    ["🌙", "moon"], ["☀️", "sun"], ["↗", "external"], ["👁", "eye"],
    ["🗓️", "calendar"], ["⭐", "star"], ["🌟", "compass"], ["🧭", "compass"],
    ["🌿", "sprout"], ["🎵", "music"], ["🕌", "moon"], ["📖", "book-open"],
    ["🤝", "pencil"], ["📱", "shield"], ["🔍", "search"], ["▶", "play"],
    ["📂", "folder"], ["→", "arrow-right"], ["←", "arrow-left"], ["↑", "arrow-up"]
  ];
  function iconSVG(id, extra) {
    return '<svg class="ic" aria-hidden="true"' + (extra ? " " + extra : "") + '><use href="#i-' + id + '"/></svg>';
  }
  /* سياق خاص: 📋 نسخ→copy، 📚 مراجع→link، 🧭 معايير→list، 🗓️ خطة التقرير→calendar */
  function resolve(emoji, el) {
    var txt = el.textContent || "";
    if (emoji === "📋" && txt.indexOf("نسخ") !== -1) return "copy";
    if (emoji === "📋" && txt.indexOf("أوراق") !== -1) return "pencil";
    if (emoji === "📚" && txt.indexOf("مراجع") !== -1) return "link";
    if (emoji === "🧭" && txt.indexOf("المعايير") !== -1) return "list";
    if (emoji === "🗓️" && txt.indexOf("ورقة") !== -1) return "calendar-check";
    if (emoji === "⭐" && txt.indexOf("ورقة") !== -1) return "star";
    if (emoji === "🗓️") return "calendar";
    var map = { "🗺️": "compass", "🏠": "home", "🗂️": "layers", "📝": "clipboard", "📊": "chart", "📚": "book-open", "📋": "clipboard", "🖨️": "printer", "🌙": "moon", "☀️": "sun", "↗": "external", "👁": "eye", "⭐": "star", "🌟": "compass", "🧭": "compass", "🌿": "sprout", "🎵": "music", "🕌": "moon", "📖": "book-open", "🤝": "pencil", "📱": "shield", "🔍": "search", "▶": "play", "📂": "folder", "→": "arrow-right", "←": "arrow-left", "↑": "arrow-up", "👶🧑‍🎓": "layers" };
    return map[emoji] || null;
  }
  var joint = DICT.map(function (p) { return p[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|");
  var RE = new RegExp(joint, "gu");
  var SCOPE = "nav.tabs a,nav.tabs button,.hero-cta .btn,.hero-cta a,.panel h2,.wsheet h2,#reportBox h3,.no-print .btn,.no-print button,.song .pl,#themeBtn,.search";

  function replaceIn(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (!node.nodeValue || node.parentNode.tagName === "svg" || node.parentNode.tagName === "use") return;
      RE.lastIndex = 0;
      if (!RE.test(node.nodeValue)) return;
      RE.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = RE.exec(node.nodeValue))) {
        if (m.index > last) frag.appendChild(document.createTextNode(node.nodeValue.slice(last, m.index)));
        var id = resolve(m[0], el);
        if (id) {
          var t = document.createElement("span");
          t.innerHTML = iconSVG(id);
          frag.appendChild(t.firstChild);
        } else {
          frag.appendChild(document.createTextNode(m[0]));
        }
        last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }
  function pass() {
    mount();
    document.querySelectorAll(SCOPE).forEach(function (el) {
      if (el.id === "themeBtn") { replaceIn(el); return; } /* يعاد معالجته عند كل تبديل */
      if (el.hasAttribute("data-ic-done")) return;
      replaceIn(el);
      el.setAttribute("data-ic-done", "1");
    });
    var top = document.getElementById("toTop");
    if (top && !top.hasAttribute("aria-label")) top.setAttribute("aria-label", top.getAttribute("title") || "للأعلى");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pass);
  else pass();
  if (window.MutationObserver) {
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(pass, 200); }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
})();
