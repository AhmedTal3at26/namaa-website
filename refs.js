/* refs.js — مراجع منهج نماء لكل مجال (روابط تم التحقق من عملها) */
(function () {
  var REFS = {
    iman: [
      { t: "القرآن الكريم تلاوة وتدبرًا", u: "https://quran.com/", k: "تلاوة" },
      { t: "الموسوعة العقدية — الدرر السنية", u: "https://dorar.net/aqeeda", k: "قراءة" },
      { t: "حديث جبريل في الإيمان — الأربعون النووية", u: "https://sunnah.com/nawawi40", k: "قراءة" }
    ],
    shar: [
      { t: "كتاب نماء PDF — تحميل مباشر", u: "https://saaid.org/book/downloadurl.php?type=pdf&id=13584", k: "تحميل" },
      { t: "السنة النبوية — الكتب التسعة", u: "https://sunnah.com/", k: "قراءة" },
      { t: "قسم كتب السنة — المكتبة الشاملة", u: "https://shamela.ws/category/6", k: "قراءة" },
      { t: "الموسوعة الفقهية — الدرر السنية", u: "https://dorar.net/feqhia", k: "قراءة" }
    ],
    sulu: [
      { t: "رياض الصالحين", u: "https://sunnah.com/riyadussalihin", k: "قراءة" },
      { t: "موسوعة الأخلاق والسلوك — الدرر السنية", u: "https://dorar.net/alakhlaq", k: "قراءة" },
      { t: "الأربعون النووية (أحاديث جامعة)", u: "https://sunnah.com/nawawi40", k: "قراءة" }
    ],
    aql: [
      { t: "قسم التفسير — المكتبة الشاملة", u: "https://shamela.ws/category/3", k: "قراءة" },
      { t: "التدبر والبحث الموضوعي في القرآن", u: "https://quran.com/", k: "تلاوة" },
      { t: "البحث في آلاف الكتب — الشاملة", u: "https://shamela.ws/search", k: "بحث" }
    ],
    daw: [
      { t: "شبكة صيد الفوائد — مواد دعوية", u: "https://saaid.org/", k: "قراءة" },
      { t: "اعرف نبيك ﷺ — صيد الفوائد", u: "https://saaid.org/mohamed/", k: "قراءة" },
      { t: "صفحة كتاب نماء (قراءة وتحميل)", u: "https://saaid.org/book/open.php?book=13584", k: "تحميل" }
    ],
    fikr: [
      { t: "الموسوعة العقدية — الدرر السنية", u: "https://dorar.net/aqeeda", k: "قراءة" },
      { t: "قسم العقيدة — المكتبة الشاملة", u: "https://shamela.ws/category/1", k: "قراءة" },
      { t: "الموسوعة الحديثية (التحقق من الأحاديث)", u: "https://dorar.net/hadith", k: "بحث" }
    ],
    nafs: [
      { t: "موسوعة الأخلاق والسلوك (تهذيب النفس)", u: "https://dorar.net/alakhlaq", k: "قراءة" },
      { t: "رياض الصالحين (الرقائق)", u: "https://sunnah.com/riyadussalihin", k: "قراءة" },
      { t: "كتاب نماء PDF", u: "https://saaid.org/book/downloadurl.php?type=pdf&id=13584", k: "تحميل" }
    ],
    usar: [
      { t: "الأدب المفرد — البخاري", u: "https://sunnah.com/adab", k: "قراءة" },
      { t: "موسوعة الآداب الشرعية — الدرر", u: "https://dorar.net/aadab", k: "قراءة" },
      { t: "قسم تربية الأبناء — صيد الفوائد", u: "https://saaid.org/tarbiah/", k: "قراءة" }
    ],
    lugh: [
      { t: "موسوعة اللغة العربية — الدرر السنية", u: "https://dorar.net/arabia", k: "قراءة" },
      { t: "قسم كتب اللغة — المكتبة الشاملة", u: "https://shamela.ws/category/29", k: "قراءة" },
      { t: "القرآن الكريم (نبع الفصاحة)", u: "https://quran.com/", k: "تلاوة" }
    ],
    tiqn: [
      { t: "العروض الدعوية — توظيف التقنية في الدعوة", u: "https://saaid.org/3rod/", k: "قراءة" },
      { t: "تنزيل برنامج المكتبة الشاملة", u: "https://shamela.ws/page/download", k: "تحميل" },
      { t: "كتاب نماء PDF", u: "https://saaid.org/book/downloadurl.php?type=pdf&id=13584", k: "تحميل" }
    ],
    qiy: [
      { t: "قسم السيرة النبوية — المكتبة الشاملة", u: "https://shamela.ws/category/24", k: "قراءة" },
      { t: "اعرف نبيك ﷺ (القدوة القيادية)", u: "https://saaid.org/mohamed/", k: "قراءة" },
      { t: "الشمائل المحمدية", u: "https://sunnah.com/shamail", k: "قراءة" }
    ]
  };
  var ORDER = ["iman", "shar", "sulu", "aql", "daw", "fikr", "nafs", "usar", "lugh", "tiqn", "qiy"];
  var DNAMES = { iman: "المجال الإيماني", shar: "مجال العلم الشرعي", sulu: "المجال السلوكي والأخلاقي", aql: "المجال العقلي", daw: "المجال الدعوي", fikr: "المجال الفكري والمنهجي", nafs: "المجال النفسي وإدارة الذات", usar: "المجال الأسري والاجتماعي", lugh: "مجال اللغة والتواصل", tiqn: "مجال التقنية والمعلومات", qiy: "المجال القيادي والإداري" };
  window.REFS = REFS;

  function linkHTML(r) {
    var badge = r.k === "تحميل" ? "📥" : r.k === "تلاوة" ? "🎧" : r.k === "بحث" ? "🔍" : "📖";
    return '<a href="' + r.u + '" target="_blank" rel="noopener">' + badge + " " + r.t + ' <span class="rk">' + r.k + "</span></a>";
  }
  function boxHTML(id) {
    var arr = REFS[id] || [];
    if (!arr.length) return "";
    return '<div class="refs-box">📚 <b>مراجع مقترحة:</b><br>' + arr.map(linkHTML).join(" • ") + "</div>";
  }
  window.refsBoxHTML = boxHTML;

  function fill(scope) {
    // 1) عناصر تحمل data-d مباشرة (العرض الديناميكي في index)
    (scope || document).querySelectorAll(".domain-block[data-d]:not([data-refs-done])").forEach(function (b) {
      var id = b.getAttribute("data-d");
      if (REFS[id]) { b.insertAdjacentHTML("beforeend", boxHTML(id)); b.setAttribute("data-refs-done", "1"); }
    });
    // 2) الصفحات الثابتة: 11 كتلة بالترتيب داخل كل .panel (باستثناء لوحة المكتبة)
    document.querySelectorAll(".panel").forEach(function (p) {
      if (p.querySelector("#refsLibrary")) return;
      var blocks = p.querySelectorAll(":scope > .domain-block:not([data-d]):not([data-refs-done])");
      if (blocks.length !== 11) return;
      blocks.forEach(function (b, i) {
        b.insertAdjacentHTML("beforeend", boxHTML(ORDER[i]));
        b.setAttribute("data-refs-done", "1");
      });
    });
    // 3) مكتبة المراجع المركزية (إن وجدت)
    var lib = document.getElementById("refsLibrary");
    if (lib && !lib.getAttribute("data-done")) {
      lib.innerHTML = ORDER.map(function (id) {
        return '<div class="domain-block" data-refs-done="1"><h4>📚 ' + DNAMES[id] + "</h4><div>" + REFS[id].map(linkHTML).join("<br>") + "</div></div>";
      }).join("");
      lib.setAttribute("data-done", "1");
    }
  }

  // تنسيقات صندوق المراجع (تُحقن تلقائيًا في كل الصفحات)
  var css = ".refs-box{background:var(--brand-soft);border:1px dashed var(--brand2);border-radius:12px;padding:.5rem .8rem;font-size:.85em;margin-top:.45rem;line-height:2.1}.refs-box a{color:var(--text);text-decoration:none;border-bottom:1px dotted var(--gold);white-space:nowrap}.refs-box a:hover{color:var(--gold)}.rk{font-size:.72em;background:var(--card);border:1px solid var(--border);border-radius:999px;padding:0 .55rem;color:var(--muted)}@media(max-width:640px){.refs-box a{white-space:normal;line-height:2.4}}@media screen and (max-width:640px){.btn,.tab,.chip{padding:.55rem 1rem;min-height:44px}table{display:block;max-width:100%;overflow-x:auto}.topbar{gap:.5rem}}@media screen and (min-width:1000px){.panel{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;align-items:start}.panel>div:not(.domain-block):not(.stg):not(.rep-domain):not(.q){grid-column:1/-1}.panel>ul,.panel>ol,.panel>h2,.panel>h3,.panel>p,.panel>.tip,.panel>.warn,.panel>.plan{grid-column:1/-1}#quizList{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}.stage-detail{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;align-items:start}.stage-detail>h3,.stage-detail>p,.stage-detail>div:not(.domain-block){grid-column:1/-1}.wsheet{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;align-items:start}.wsheet>h2,.wsheet>p,.wsheet>h3,.wsheet>table,.wsheet>.row,.wsheet>.tip,.wsheet>.warn,.wsheet>div:not(.song){grid-column:1/-1}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { fill(); });
  else fill();
  // لمتابعة العناصر الديناميكية (تفاصيل المرحلة في index)
  if (window.MutationObserver) {
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(function () { fill(); }, 150); }).observe(document.body, { childList: true, subtree: true });
  }
})();
/* ===== هوية نماء البصرية (تُطبق على كل الصفحات) ===== */
(function () {
  var PATTERN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Cg fill='none' stroke='%23b8860b' stroke-opacity='0.14'%3E%3Crect x='30' y='30' width='36' height='36'/%3E%3Crect x='30' y='30' width='36' height='36' transform='rotate(45 48 48)'/%3E%3Ccircle cx='48' cy='48' r='5'/%3E%3C/g%3E%3C/svg%3E\")";
  var LOGO_SVG = "<svg viewBox='0 0 64 64' role='img' aria-label='شعار نماء'><rect x='6' y='38' width='12' height='18' rx='6' style='fill:currentColor'/><rect x='24' y='28' width='12' height='28' rx='6' style='fill:currentColor'/><rect x='42' y='18' width='12' height='38' rx='6' style='fill:currentColor'/><path d='M48 18v-6' style='stroke:currentColor' stroke-width='4' stroke-linecap='round' fill='none'/><path d='M48 12C41 12 36 8 35 2c7 0 12 3 13 10z' style='fill:currentColor'/><path d='M48 12c7 0 12-4 13-10-7 0-12 3-13 10z' style='fill:var(--gold)'/></svg>";
  var FAVICON = "favicon.svg";
  var css = ".logo-mark{background:transparent;border:none;box-shadow:none;color:var(--brand);display:grid;place-items:center}.logo-mark svg{width:44px;height:44px;display:block}"
    + ".footer-brand{display:flex;align-items:center;justify-content:center;gap:.6rem;font-weight:700;font-size:1.2em;margin-bottom:.3rem}.footer-brand small{display:block;font-weight:400;color:var(--muted);font-size:.58em}.fb-mark{width:40px;height:40px;color:var(--brand);display:inline-flex;flex-shrink:0}.fb-mark svg{width:100%;height:100%}"
    + "body{background-image:" + PATTERN + ";background-size:96px 96px}"
    + ".hero{position:relative;overflow:hidden}.hero-pattern{position:absolute;inset:0;background-image:" + PATTERN + ";background-size:72px 72px;opacity:.55;pointer-events:none;-webkit-mask-image:linear-gradient(180deg,#000 30%,transparent 95%);mask-image:linear-gradient(180deg,#000 30%,transparent 95%)}"
    + ".hero-kicker{display:inline-block;font-size:.78em;font-weight:700;color:var(--gold);border:1px solid var(--gold);border-radius:999px;padding:.1rem 1rem;margin-bottom:.3rem;background:var(--gold-soft)}"
    + ".orn{display:flex;align-items:center;gap:.8rem;max-width:1180px;margin:1rem auto 0;padding:0 1rem;color:var(--gold)}"
    + ".orn::before,.orn::after{content:'';height:1px;flex:1;background:linear-gradient(90deg,transparent,var(--gold),transparent);opacity:.55}"
    + ".orn span{font-size:1.25rem;line-height:1}"
    + ".panel h2,.wsheet h2{border-inline-start:4px solid var(--gold);padding-inline-start:.6rem}"
    + ".panel,.wsheet{box-shadow:var(--shadow),inset 0 0 0 1px var(--bg)}"
    + ".btn.primary{box-shadow:0 6px 16px rgba(20,154,121,.22)}"
    + ":focus-visible{outline:2px solid var(--gold2);outline-offset:2px}"
    + "::selection{background:var(--gold2);color:#232a28}"
    + "section[id],.wsheet[id]{scroll-margin-top:90px}";
  var st = document.createElement("style");
  st.setAttribute("data-namaa-identity", "1");
  st.textContent = css;
  document.head.appendChild(st);
  // favicon
  if (!document.querySelector("link[rel='icon']")) {
    var fav = document.createElement("link");
    fav.rel = "icon"; fav.type = "image/svg+xml"; fav.href = FAVICON;
    document.head.appendChild(fav);
  }
  // استبدال إيموجي الشعار بالعلامة المخصصة
  document.querySelectorAll(".logo-mark").forEach(function (m) {
    m.innerHTML = LOGO_SVG;
    m.setAttribute("aria-hidden", "true");
  });
  function orn() {
    var d = document.createElement("div");
    d.className = "orn no-print";
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = "<span>\u06DE</span>";
    return d;
  }
  function decorate() {
    document.querySelectorAll("section.hero:not([data-orn])").forEach(function (h) {
      h.setAttribute("data-orn", "1");
      var p = document.createElement("div");
      p.className = "hero-pattern";
      p.setAttribute("aria-hidden", "true");
      h.insertBefore(p, h.firstChild);
      if (h.parentNode) h.parentNode.insertBefore(orn(), h.nextSibling);
    });
    var ft = document.querySelector("footer:not([data-orn])");
    if (ft && ft.parentNode) { ft.setAttribute("data-orn", "1"); ft.parentNode.insertBefore(orn(), ft); }
    var fb = document.querySelector("footer:not([data-brand])");
    if (fb) {
      fb.setAttribute("data-brand", "1");
      var b = document.createElement("div");
      b.className = "footer-brand";
      b.setAttribute("aria-label", "شعار نماء");
      b.innerHTML = "<span class='fb-mark'>" + LOGO_SVG + "</span><span class='fb-word'>\u0646\u0645\u0627\u0621<small>\u0645\u0646 \u0627\u0644\u0631\u0636\u0627\u0639\u0629 \u0625\u0644\u0649 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u2014 \u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0645\u0631\u0628\u064A</small></span>";
      fb.insertBefore(b, fb.firstChild);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", decorate);
  else decorate();
})();
/* ===== تحميل التوكنز المشتركة وخطوط Noto (مرة واحدة لكل الصفحات) ===== */
(function () {
  var t = document.createElement("link");
  t.rel = "stylesheet";
  t.href = "tokens.css";
  document.head.appendChild(t);
  var ic = document.createElement("script");
  ic.src = "icons.js";
  document.head.appendChild(ic);
  var f = document.querySelector('link[href*="fonts.googleapis.com/css2"]');
  if (f) f.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&family=Noto+Naskh+Arabic:wght@600;700&family=Amiri+Quran&display=swap";
})();
