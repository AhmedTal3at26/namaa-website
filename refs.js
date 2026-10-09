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
  var css = ".refs-box{background:var(--brand-soft);border:1px dashed var(--brand2);border-radius:12px;padding:.5rem .8rem;font-size:.85em;margin-top:.45rem;line-height:2.1}.refs-box a{color:var(--text);text-decoration:none;border-bottom:1px dotted var(--gold);white-space:nowrap}.refs-box a:hover{color:var(--gold)}.rk{font-size:.72em;background:var(--card);border:1px solid var(--border);border-radius:999px;padding:0 .55rem;color:var(--muted)}";
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
