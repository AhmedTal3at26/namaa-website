/* =====================================================
   i18n.js — التبديل بين العربية والإنجليزية لكامل الواجهة
   - زر التبديل يُحقن في كل الصفحات، والاختيار محفوظ
   - EN: يقلب lang/dir ويترجم الكروم + الرئيسية + الاستبانة
     والتقرير والملفات، مع أسئلة إنجليزية كاملة
   - نصوص المنهج (المعايير والأنشطة) تبقى بالعربية مع وسم
     يوضح أنها النص الأصلي
   ===================================================== */
(function () {
  var LANG = "ar";
  try { LANG = localStorage.getItem("namaa_lang") || "ar"; } catch (e) {}
  if (LANG !== "en") LANG = "ar";
  window.NAMAA_LANG = LANG;

  var DN_EN = {iman:"Faith",shar:"Sacred Knowledge",sulu:"Conduct & Morals",aql:"Intellect",daw:"Da\u2018wah",fikr:"Thought & Method",nafs:"Self & Psychology",usar:"Family & Society",lugh:"Language & Communication",tiqn:"Tech & Media",qiy:"Leadership"};
  var ST_EN = {s1:"Infants (0\u20132)",s2:"Early Childhood (3\u20135)",s3:"Early Distinction (6\u20138)",s4:"Late Distinction (9\u201311)",s5:"Accountability Threshold (12\u201314)",s6:"Identity Building (15\u201317)",s7:"Launch & Beyond (18+)"};
  var LV_EN = {"\u0645\u062A\u0645\u064A\u0632 \uD83C\uDF1F":"Excellent \uD83C\uDF1F","\u062C\u064A\u062F \uD83D\uDC4D":"Good \uD83D\uDC4D","\u064A\u062D\u062A\u0627\u062C \u062F\u0639\u0645\u064B\u0627 \uD83C\uDF31":"Needs support \uD83C\uDF31","\u0623\u0648\u0644\u0648\u064A\u0629 \u0642\u0635\u0648\u0649 \uD83D\uDEA8":"Top priority \uD83D\uDEA8"};
  window.DN_EN = DN_EN; window.ST_EN = ST_EN; window.LV_EN = LV_EN;

  /* أسئلة الاستبانة بالإنجليزية (بنفس ترتيب QUESTIONS) */
  window.EN_Q = [
    "Shows love for Allah (glad in worship, remembers Allah, supplicates Him)",
    "Senses that Allah sees him, so avoids wrongdoing even when alone",
    "Loves the Prophet \uFDFA, sends blessings upon him and follows him",
    "Keeps the prayers on time as appropriate for his age",
    "Memorizes Qur\u2019an and adhkar suited to his stage, and revises them",
    "Knows his religion\u2019s basics (purification, seerah, pillars) for his age",
    "Truthful: tells the truth and admits his mistakes",
    "Trustworthy and respectful: asks permission, keeps trusts, respects elders",
    "Modest tongue and gaze, with good table and gathering manners",
    "Asks, thinks, and loves discovery and learning",
    "Solves age-appropriate problems and anticipates consequences",
    "Reads, or is read to, regularly — and understands",
    "Guides others to good (prayer, charity, manners) politely",
    "Takes part in charitable or voluntary work, even small",
    "Loves good for his friends and rejoices in their benefit",
    "Distinguishes right from wrong and does not copy everything he sees",
    "Verifies news before believing it (asks adults / checks the source)",
    "Takes prophets and companions as role models, not bad celebrities",
    "Controls his emotions (anger, crying) in healthy ways most of the time",
    "Self-confident: expresses his opinion and needs politely",
    "Organized: sleeps early and manages his time, money and health",
    "Dutiful to his parents: obeys them, helps them, lowers his voice",
    "Kind to relatives and friends, cooperates and never mocks",
    "Chooses righteous company and keeps away from bad company",
    "Speaks fluently for his age and converses politely",
    "Listens well and reads Arabic regularly",
    "Writes or delivers as fits his age (sentence, paragraph, speech)",
    "Uses devices with safe time and content under supervision",
    "Avoids harmful digital content (nudity, violence, addiction, strangers)",
    "Produces with technology (learning, research, projects), not only consumes",
    "Handles a steady responsibility at home or school",
    "Initiates useful ideas, plans them and carries them out",
    "Works in a team and respects roles and the leader"
  ];
  window.SCALE_EN = [{v:5,t:"Always"},{v:4,t:"Often"},{v:3,t:"Sometimes"},{v:2,t:"Rarely"},{v:1,t:"Never"}];

  /* قاموس الواجهة: عربي → إنجليزي (مطابقة نصية دقيقة) */
  var D = {
    "الرئيسية":"Home","صفحات المراحل":"Stages","الاستبانة":"Questionnaire","التقرير":"Report","عن المنهج":"About the Method","أوراق العمل والأناشيد":"Worksheets & Songs",
    "من الرضاعة إلى ما بعد الجامعة — مؤسسة المربي":"From infancy to post-university \u2014 Al-Murabbi Foundation",
    "من الرضاعة إلى ما بعد الجامعة":"From Infancy to Post-University",
    "مرحبًا بكم في موقع":"Welcome to",
    "إخلاء":"Disclaimer","مسؤولية":" ",
    "أقسام":"Site","الموقع":"Sections",
    "اختر ما":"Choose what you",
    "تريد فعله":"want to do",
    "اضغط على القسم المطلوب للانتقال إليه مباشرة:":"Click a section to go there directly:",
    "التعرف على المنهج":"Learn About the Method",
    "قراءة المراحل":"Browse the Stages",
    "معرفة المجالات":"Explore the Domains",
    "بدء الاستبانة":"Start the Questionnaire",
    "استبانة":"Questionnaire","الوالدين":"Parents","لتقييم الطفل":"Child Assessment",
    "ملف الطفل (يمكن إضافة أكثر من طفل)":"Child profile (you can add several children)",
    "طفل جديد: الاسم":"New child: name","الاسم":"Name","العمر":"Age",
    "عمر الطفل بالسنوات":"Child age (years)",
    "+ إضافة":"+ Add","حذف الملف":"Delete profile","حذف":"Delete","عرض":"View",
    "المرحلة العمرية (تُقترح تلقائيًا حسب العمر — ويمكن تغييرها)":"Age stage (suggested automatically \u2014 changeable)",
    "طريقة عرض الأسئلة":"How to show questions",
    "كل الأسئلة في صفحة واحدة":"All questions on one page",
    "سؤال واحد في كل صفحة":"One question per page",
    "مُجاب":"answered","مسح الإجابات":"Clear answers",
    "عرض التقرير المفصل":"Show Detailed Report",
    "مراجعة معايير المرحلة":"Review stage standards",
    "التقرير":"Report","المفصل":"Detailed","والاقتراحات":"& Suggestions",
    "طباعة / حفظ PDF":"Print / Save PDF","نسخ ملخص التقرير":"Copy report summary","استرجاع آخر تقرير":"Load latest report","→ العودة للاستبانة":"Back to questionnaire",
    "لم يتم إنشاء تقرير بعد. أجب عن الاستبانة ثم اضغط «عرض التقرير المفصل».":"No report yet. Answer the questionnaire, then press \u201CShow Detailed Report\u201D.",
    "→ المرحلة السابقة":"→ Previous stage","المرحلة التالية ←":"Next stage ←","→ كل المراحل":"→ All stages","كل المراحل ←":"All stages ←",
    "المراحل الأخرى:":"Other stages:","المجالات الأخرى:":"Other domains:",
    "العودة للرئيسية":"Back to home","العودة للاستبانة":"Back to questionnaire",
    "موقع تفاعلي لمنهج «نماء»: استبانة تقييم للوالدين، تقرير واقتراحات حسب العمر، صفحات المراحل والمجالات، أوراق عمل وأناشيد — نسأل الله أن ينبت أبناءنا نباتًا حسنًا 🌱":"Interactive Namaa site: parent assessment, age-based report and suggestions, stage and domain pages, worksheets and songs.",
    "موقع تفاعلي لمنهج «نماء»: استبانة تقييم للوالدين، تقرير واقتراحات حسب العمر، صفحات المراحل والمجالات، أوراق عمل وأناشيد — نسأل الله أن ينبت أبناءنا نباتًا حسنًا 🌱":"Interactive site for the Namaa method: parent assessment, age-based report and suggestions, stage and domain pages, worksheets and songs.",
    "أوراق":"Worksheets","العمل والأناشيد":"& Songs",
    "مكتبة":"Library","المراجع":"References","لكل مجال":"per Domain",
    "مراجع منتقاة لكل مجال من المجالات الأحد عشر — اضغط أي رابط للقراءة أو التحميل (جميع الروابط تم التحقق من عملها).":"Selected references per domain \u2014 click any link to read or download (all links verified).",
    "المصادر":"Sources","بنية":"Structure","المنهج الأصلية":"of the Original Method",
    "مثال":"Example","مما ستجده":"of what you will find",
    "كيف":"How","تستخدم":"to use","الموقع؟":"this site?",
    "طباعة الصفحة":"Print page","قيّم طفلك في هذه المرحلة":"Assess your child at this stage",
    "قيّم ابنك/ابنتك في هذه المرحلة":"Assess your child at this stage",
    "قيّم نفسك/ابنك في هذه المرحلة":"Assess at this stage",
    "استبانة هذه المرحلة":"This stage\u2019s questionnaire",
    "كل المراحل":"All stages","فتح صفحات المراحل":"Open stage pages",
    "سمات":"Traits","النمو":"of Growth","في هذه المرحلة":"at this stage",
    "المجالات":"Domains","والمعايير":"& Standards","المناسبة لهذا العمر":"for this age",
    "طبيعة":"Nature","المجال":"of the Domain","وأهدافه":"and goals",
    "المعايير":"Standards","عبر المراحل السبع":"across the seven stages",
    "مراجع":"References",
    "صفحة المرحلة":"Stage page",
    "ابحث في المعايير… مثال: الصلاة، الصدق، الحفظ، التقنية":"Search standards\u2026 e.g. prayer, honesty, memorization, tech",
    "تقارير":"Reports","المحفوظة":"saved","المحفوظ":"saved",
    "استبانة نماء":"the Namaa Questionnaire",
    "«نماء» إطار يجيب عن سؤال:":"\u201CNamaa\u201D is a framework answering:",
    "ماذا نربي؟":"What should we nurture?",
    "— منهج بالمعايير عبر":"\u2014 a standards-based method across",
    "11 مجالًا":"11 domains",
    "من الرضاعة إلى ما بعد الجامعة، أعدّته مؤسسة المربي":"from infancy to post-university, prepared by Al-Murabbi Foundation",
    "للأسرة أولًا":"for the family first",
    "ثم للمؤسسات التربوية والدعوية.":"then for educational and da\u2018wah institutions.",
    "اختر ما تريد فعله بالأسفل": "Choose what to do below",
    ": تعرف على المنهج، أو اقرأ المراحل والمجالات، أو ابدأ الاستبانة مباشرة.":": learn about the method, browse stages and domains, or start the questionnaire.",
    "استكشف المنهج":"Explore the method","أجب عن الاستبانة":"Answer the questionnaire","كيف تستخدم المنهج؟":"How to use this site?",
    "هذا الموقع ليس بديلًا عن الكتاب ولا جهة تربوية رسمية — بل هو":"This site is neither a substitute for the book nor an official body \u2014 it is",
    "تحويل لكتاب «نماء — منهج بناء الشخصية الإسلامية» الصادر عن مؤسسة المربي إلى استبانة تقييم وأدوات مساندة للوالدين":"a conversion of \u201CNamaa \u2014 Building the Islamic Personality\u201D (Al-Murabbi Foundation) into an assessment questionnaire and supporting tools for parents",
    "المحتوى بصياغة مبسطة، والمرجع الحاكم عند التعارض هو الكتاب الورقي، ونتائج الاستبانة استرشادية وليست تشخيصًا طبيًا أو نفسيًا.":"Content is simplified; the printed book prevails in case of conflict, and results are indicative, not a medical or psychological diagnosis.",
    "بنية منهج نماء الأصلية ومثال من المحتوى ومصادره.":"The original structure, a content sample, and sources.",
    "7 مراحل من 0–2 إلى +18: المجالات والمعايير والأنشطة لكل عمر.":"7 stages from 0\u20132 to 18+: domains, standards and activities per age.",
    "11 مجالًا: طبيعة كل مجال ومعاييره عبر المراحل ومراجعه.":"11 domains: each domain\u2019s nature, standards and references.",
    "أدخل بيانات الطفل الأساسية ثم أجب عن الأسئلة بأي طريقة عرض.":"Enter the child\u2019s basic data, then answer in either display mode.",
    "أجب بصدق حسب ملاحظتك لطفلك خلال آخر شهر. المقياس: دائمًا (5) • غالبًا (4) • أحيانًا (3) • نادرًا (2) • أبدًا (1). تُحفظ الإجابات تلقائيًا في جهازك فقط.":"Answer honestly based on the last month. Scale: Always (5) \u2022 Often (4) \u2022 Sometimes (3) \u2022 Rarely (2) \u2022 Never (1). Answers auto-save on your device only.",
    "اسم الطفل (اختياري)":"Child name (optional)",
    "فتح صفحة المثال":"Open the sample page","العودة للاستبانة":"Back to questionnaire",
    "عن":"About","منهج نماء":"the Namaa Method",
    "الكتاب:":"Book:","«نماء — منهج بناء الشخصية الإسلامية من الرضاعة إلى ما بعد الجامعة» — إعداد مجموعة باحثين بـ":"\u201CNamaa \u2014 Building the Islamic Personality from Infancy to Post-University\u201D \u2014 by a team of researchers at",
    "مؤسسة المربي":"Al-Murabbi Foundation","بإشراف د. محمد بن عبدالله الدويش، الرياض 1431هـ (~400 صفحة).":"supervised by Dr. Muhammad Al-Duwaish, Riyadh 1431H (~400 pages).",
    "الفكرة:":"Idea:","إطار عام «ماذا نربي؟» بنموذج":"A general \u201Cwhat to nurture?\u201D framework using",
    "المعايير":"standards","على أربعة مستويات: الرؤية العامة ←":"across four levels.",
    "المستفيدون:":"Beneficiaries:","الأسرة أولًا (خاصة المراحل الأولى)، ثم المؤسسات التربوية والدعوية.":"Families first (especially early stages), then educational and da\u2018wah institutions.",
    "المنهجية:":"Methodology:","عمل جماعي، باحثون من السعودية ومصر والأردن، ورش تحكيم، توسط بين الإجمال والتفصيل.":"Teamwork by researchers from Saudi Arabia, Egypt and Jordan, review workshops, balancing brevity and detail.",
    "الهدف:":"Goal:","شخصية إسلامية مؤهلة للأدوار الدعوية والإصلاحية، تجمع بين صلاح الدنيا والآخرة.":"An Islamic personality qualified for da\u2018wah and reform roles, joining worldly and otherworldly good.",
    "المجالات الأحد عشر (نص الكتاب)":"The eleven domains (book text)",
    "المراحل المعتمدة في هذا الموقع":"Stages adopted in this site",
    "المصدر: صفحة المرحلة في هذا الموقع (صياغة مبسطة من الكتاب) — ولكل معيار مراجع وأنشطة وخطة في صفحته.":"Source: this site\u2019s stage page (simplified from the book) \u2014 each standard has references, activities and a plan.",
    "من صفحة":"From the page","تجد المعيار: «يصدق دائمًا ويعترف بخطئه ويعتذر»، وتحته نشاط تطبيقي: «ميثاق شرف عائلي موقع من الجميع».":"find the standard: \u201Che is always truthful, admits mistakes and apologizes,\u201D with an activity: \u201Ca signed family honor code.\u201D",
    "طباعة / حفظ PDF":"Print / Save PDF",
    "خط المتن: IBM Plex Sans Arabic (خط ثمانية الرسمي) • العناوين: Aref Ruqaa • الآيات: Amiri Quran":"Body: IBM Plex Sans Arabic (Thamania font) \u2022 Headings: Aref Ruqaa \u2022 Verses: Amiri Quran",
    "موقع تفاعلي لمنهج «نماء»: استبانة تقييم للوالدين، تقرير واقتراحات حسب العمر، صفحات المراحل والمجالات، أوراق عمل وأناشيد — نسأل الله أن ينبت أبناءنا نباتًا حسنًا 🌱":"Interactive Namaa site: parent assessment, age-based report and suggestions, stage and domain pages, worksheets and songs.",
    "لا نتيجة مطابقة للبحث في هذا المجال.":"No matching result in this domain."
  };
  var PH = {
    "ابحث في المعايير… مثال: الصلاة، الصدق، الحفظ، التقنية":"Search standards\u2026 e.g. prayer, honesty, memorization, tech",
    "مثال: عبدالله":"e.g. Abdallah","الاسم":"Name"
  };
  function norm(s){ return (s||"").replace(/\s+/g," ").trim(); }
  function applyStatic(){
    if (LANG !== "en") return;
    var sel = "nav.tabs a,nav.tabs button,.hero-cta .btn,.hero-cta a,.hero h1,.hero p,.panel h2,.panel p.note,.panel li,.dcard h4,.dcard p,.dcard .btn,.dcard a,label.f,.tip,.warn,.plan,.rep-domain h4,.rep-domain .note,footer,.chip,.bar-row .nm,.bar-row b,.badge,#quizCount,.q p,.likert button,.domain-block h4,.stg h3,.song small,.song a";
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      if (!n.nodeValue) return;
      var pn = n.parentNode && n.parentNode.tagName;
      if (pn === "SCRIPT" || pn === "STYLE" || pn === "svg" || pn === "use") return;
      var k = norm(n.nodeValue);
      if (!k) return;
      if (D[k]) { n.nodeValue = n.nodeValue.replace(k, D[k]); return; }
      for (var key in D) { if (k === key) { n.nodeValue = D[key]; return; } }
    });
    document.querySelectorAll("[placeholder]").forEach(function (el) {
      var p = el.getAttribute("placeholder");
      if (p && PH[p]) el.setAttribute("placeholder", PH[p]);
    });
  }
  function setLang(l){
    try { localStorage.setItem("namaa_lang", l); } catch (e) {}
    location.reload();
  }
  window.NAMAA_SETLANG = setLang;
  /* زر التبديل في كل الصفحات */
  function mountBtn(){
    var c = document.querySelector(".controls");
    if (!c || document.getElementById("langBtn")) return;
    var b = document.createElement("button");
    b.className = "btn btn-icon";
    b.id = "langBtn";
    var toEN = LANG !== "en";
    b.textContent = toEN ? "EN" : "عربي";
    b.setAttribute("aria-label", toEN ? "Switch to English" : "التبديل إلى العربية");
    b.title = toEN ? "English" : "عربي";
    b.onclick = function () { setLang(toEN ? "en" : "ar"); };
    c.appendChild(b);
  }
  function boot(){
    document.documentElement.lang = LANG === "en" ? "en" : "ar";
    document.documentElement.dir = LANG === "en" ? "ltr" : "rtl";
    mountBtn();
    applyStatic();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
