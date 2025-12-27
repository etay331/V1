/* ========= helpers ========= */
const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => [...el.querySelectorAll(q)];
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
/* ========= i18n dictionary ========= */
const i18n = {
  zh: {
    "nav.about":"關於我",
    "nav.portfolio":"作品集",
    "nav.projects":"專案與研究",
    "nav.resources":"資源/Blog",
    "nav.interactive":"互動Demo",
    "nav.contact":"聯絡我",

    "hero.pill":"張煒䕒的個人網頁",
    "hero.h1":"用健康教育與數位互動<br/>把「難懂」變成「好懂、想學、會用」",
    "hero.lead":"我做的是：可視化衛教、多媒體教材、互動測驗、AR/遊戲化學習設計，讓知識更貼近日常、也更容易被記住。",
    "hero.cta.portfolio":"看作品集",
    "hero.cta.demo":"玩互動小遊戲",
    "hero.stat1":"代表作品",
    "hero.stat2":"互動教材/工具",
    "hero.stat3":"研究/活動經驗",

    "carousel.badge":"精選",
    "carousel.s1.title":"把健康知識做成看得懂、用得上的內容",
    "carousel.s1.desc":"Vivian｜健康教育 × 數位互動設計",
    "carousel.s2.title":"衛教不只是「告訴你」，而是「陪你理解」",
    "carousel.s2.desc":"用插畫、動態與互動，降低理解門檻",
    "carousel.s3.title":"想找願意一起把內容做好的夥伴",
    "carousel.s3.desc":"實習、專案合作、教材設計都歡迎",

    "sec.about":"關於我",
    "sec.about.sub":"讓實習單位快速理解：我是誰、我能做什麼、我在乎什麼。",
    "about.cta":"Let’s Chat →",
    "about.name":"Vivian｜健康教育 × 數位互動",
    "about.intro":"具護理背景，喜歡把專業知識做成「好懂、好記、願意分享」的內容。",
    "about.tag1":"互動式衛教",
    "about.tag2":"多媒體教材",
    "about.tag3":"AR / 體驗設計",
    "about.tag4":"研究與成效評估",
    "about.li1":"<strong>我擅長：</strong>把抽象概念變成圖像、情境與互動任務。",
    "about.li2":"<strong>我重視：</strong>可理解性、可使用性、與真實情境連結。",
    "about.li3":"<strong>我提供：</strong>教材設計、互動Demo、專案支援與簡報呈現。",
    "about.map":"能力地圖",
    "about.mapSub":"用很直覺的方式，快速看到我能幫上什麼。",
    "about.skill1":"衛教內容設計",
    "about.skill2":"互動教材/測驗",
    "about.skill3":"多媒體設計（動畫/影片）",
    "about.skill4":"研究方法與成效評估",
    "about.noteT":"給實習單位：",
    "about.noteP":"看「作品集」了解成品，看「專案與研究」了解流程與角色。",

    "sec.portfolio":"作品集",
    "sec.portfolio.sub":"用卡片式案例快速了解我的作品與角色。",
    "pf.all":"全部",
    "pf.health":"衛教內容",
    "pf.interactive":"互動教材",
    "pf.research":"研究",
    "pf.searchPh":"搜尋作品：例如「動畫」「預立醫療」「失智症」",

    "work1.t":"重拾食慾，重拾活力｜老年人營養三折頁與動畫",
    "work1.p":"把專業變成看得懂的內容",
    "work2.t":"預立醫療電子書",
    "work2.p":"讓內容更好讀、更好看",
    "work3.t":"國科會大專生研究計畫｜12月衛教內容與前後測題目",
    "work3.p":"在細節裡把關品質",
    "work4.t":"Lumi 失智症衛教互動教材",
    "work4.p":"在思考裡讓內容更有意義",

    "common.more":"看更多",
    "common.contact":"想合作",
    "common.design":"看設計",
    "common.try":"試玩",

    "sec.projects":"專案與研究",
    "sec.projects.sub":"更正式的呈現方式：背景、目標、方法、成果、我的角色。",
    "proj1.t":"國科會大專生研究計畫",
    "proj1.p":"將健康識能內容轉化為可互動學習素材，並評估成效。",
    "proj1.li1":"<strong>目標：</strong>提升理解與可用性。",
    "proj1.li2":"<strong>方法：</strong>情境化內容＋互動教材與前後測。",
    "proj1.li3":"<strong>成果：</strong>教材成品、活動實施與成效指標。",
    "proj2.t":"實習／參訪與跨文化經驗",
    "proj2.p":"將現場觀察轉為可改進的內容設計與溝通策略。",
    "proj2.li1":"<strong>我做了什麼：</strong>紀錄、整理、產出教材與簡報。",
    "proj2.li2":"<strong>我學到：</strong>流程理解、跨文化溝通、使用者思維。",

    "sec.resources":"資源 / Blog",
    "sec.resources.sub":"這區是流量引擎：用長尾關鍵字文章讓網站被搜尋到。",
    "resources.tip":"小技巧",
    "resources.tip2":"每篇文末加「下載/小測驗」提升停留時間",
    "blog1.t":"如何把衛教做得更好懂？3個情境化技巧",
    "blog1.p":"從日常情境切入，把抽象概念變成可理解、可使用的行動建議。",
    "blog2.t":"互動測驗為什麼能提升停留時間？",
    "blog2.p":"用小成本互動做出大差異：增加參與感、分享、回訪。",
    "blog3.t":"新手也能做的AR展示：從故事到Demo",
    "blog3.p":"用最簡單的流程，把你的內容變成可展示、可理解的體驗。",
    "blog.btn":"閱讀摘要",

    "sec.interactive":"互動Demo",
    "sec.interactive.sub":"讓訪客動手玩：停留更久、也更容易分享。",
    "quiz.badge":"小測驗",
    "quiz.t":"健康小測驗（示範）",
    "quiz.p":"你可以把題目改成：失智症/口腔保健/營養/傷口照護…任何主題。",
    "quiz.reset":"重來一次",
    "tool.badge":"小工具",
    "tool.t":"我是哪種學習者？（超短小互動）",
    "tool.p":"選一個你最常用的方法，我給你一個「最適合的內容呈現方式」建議。",
    "tool.opt1":"看圖比較快",
    "tool.opt2":"故事更有感",
    "tool.opt3":"步驟最實用",
    "tool.hintT":"提示：",
    "tool.hintP":"點上面按鈕試試看 ✨",

    "sec.contact":"聯絡我",
    "sec.contact.sub":"實習洽談、專案合作或一般詢問都歡迎。",
    "contact.mailto":"寄信給我 →",
    "contact.info.t":"聯絡資訊",
    "contact.info.email":"Email：",
    "contact.info.role":"<strong>合作方向：</strong>衛教內容、互動教材、研究專案、AR/體驗設計",
    "contact.info.note":"<strong>適合對象：</strong>實習單位、學校、非營利組織、一般民眾",
    "contact.tip.t":"給實習單位：",
    "contact.tip.p":"想快速看成果→作品集；想看流程→專案與研究。",
    "contact.form.t":"快速聯絡（示範）",
    "contact.form.name":"你的稱呼",
    "contact.form.namePh":"例如：王小姐 / 某某單位",
    "contact.form.email":"Email",
    "contact.form.emailPh":"example@mail.com",
    "contact.form.msg":"想說的話",
    "contact.form.msgPh":"例如：想了解作品、想談實習、想合作…",
    "contact.form.submit":"送出（示範）",
    "contact.form.note":"此表單為前端示範：目前不會真的寄出信件。",

    "footer.top":"回到頂部 ↑",
  },

  en: {
    "nav.about":"ABOUT",
    "nav.portfolio":"WORK",
    "nav.projects":"PROJECTS",
    "nav.resources":"BLOG",
    "nav.interactive":"DEMO",
    "nav.contact":"CONTACT",

    "hero.pill":"For internship units & the general public",
    "hero.h1":"Health education + digital interaction<br/>Make complex ideas easy, usable, and shareable",
    "hero.lead":"I create visual health education, multimedia learning materials, interactive quizzes, and playful AR/gamified experiences—so knowledge feels closer to daily life and easier to remember.",
    "hero.cta.portfolio":"See Work",
    "hero.cta.demo":"Play the Demo",
    "hero.stat1":"Featured pieces",
    "hero.stat2":"Interactive tools",
    "hero.stat3":"Research / activities",

    "carousel.badge":"FEATURED",
    "carousel.s1.title":"Turning health knowledge into content you can actually use",
    "carousel.s1.desc":"Vivian | Health Education × Digital Interaction",
    "carousel.s2.title":"Not just “telling”—but helping people truly understand",
    "carousel.s2.desc":"Illustration, motion, and interaction reduce the learning barrier",
    "carousel.s3.title":"Looking for partners who love making content better",
    "carousel.s3.desc":"Internships, collaborations, and learning design—welcome",

    "sec.about":"About",
    "sec.about.sub":"A quick overview: who I am, what I do, and what I care about.",
    "about.cta":"Let’s Chat →",
    "about.name":"Vivian | Health Education × Digital Interaction",
    "about.intro":"Nursing background. I love translating professional knowledge into content that feels clear, friendly, and worth sharing.",
    "about.tag1":"Interactive Health Education",
    "about.tag2":"Multimedia Learning",
    "about.tag3":"AR / Experience Design",
    "about.tag4":"Research & Evaluation",
    "about.li1":"<strong>Strength:</strong> Turning abstract concepts into visuals, scenarios, and interactive tasks.",
    "about.li2":"<strong>Focus:</strong> Clarity, usability, and real-life relevance.",
    "about.li3":"<strong>I can help with:</strong> Learning materials, interactive demos, and project support.",
    "about.map":"Skill Map",
    "about.mapSub":"A quick glance at where I can contribute.",
    "about.skill1":"Health Education Design",
    "about.skill2":"Interactive Learning & Quizzes",
    "about.skill3":"Multimedia (Motion/Video)",
    "about.skill4":"Research & Outcome Evaluation",
    "about.noteT":"For internship units:",
    "about.noteP":"Check “Work” for outputs and “Projects” for process & role.",

    "sec.portfolio":"Featured Work",
    "sec.portfolio.sub":"Case cards that show what I made and what role I played.",
    "pf.all":"ALL",
    "pf.health":"HEALTH",
    "pf.interactive":"INTERACTIVE",
    "pf.research":"RESEARCH",
    "pf.searchPh":"Search: animation, ACP, dementia…",

    "work1.t":"Bring Back Appetite, Bring Back Energy | Older Adult Nutrition (Brochure + Animation)",
    "work1.p":"Making professional content easy to understand",
    "work2.t":"Advance Care Planning (ACP) E-book",
    "work2.p":"Better structure + visuals for smoother reading",
    "work3.t":"NSTC Undergraduate Research | Health Education Content + Pre/Post Tests",
    "work3.p":"Quality in the details—from content to assessment",
    "work4.t":"LUMI Interactive Dementia Health Education",
    "work4.p":"Meaningful learning through guided interaction",

    "common.more":"Learn more",
    "common.contact":"Collaborate",
    "common.design":"See process",
    "common.try":"Try it",

    "sec.projects":"Projects",
    "sec.projects.sub":"Background, goals, methods, outcomes, and my role.",
    "proj1.t":"NSTC Undergraduate Research Project",
    "proj1.p":"Transforming health literacy content into interactive learning materials and evaluating outcomes.",
    "proj1.li1":"<strong>Goal:</strong> Improve understanding and usability.",
    "proj1.li2":"<strong>Method:</strong> Scenario-based content + interactive materials and pre/post tests.",
    "proj1.li3":"<strong>Outcome:</strong> Learning outputs, activities, and evaluation indicators.",
    "proj2.t":"Internship / Field Visits & Cross-cultural Experience",
    "proj2.p":"Turning on-site observations into better content design and communication strategies.",
    "proj2.li1":"<strong>What I did:</strong> Documentation, organization, and material creation.",
    "proj2.li2":"<strong>What I learned:</strong> Workflow thinking, cross-cultural communication, and user-centered design.",

    "sec.resources":"Blog",
    "sec.resources.sub":"A traffic engine: long-tail keywords help people find your work.",
    "resources.tip":"Tip",
    "resources.tip2":"Add a quiz or download at the end to boost time-on-page",
    "blog1.t":"Make Health Education Easier: 3 Scenario-based Tricks",
    "blog1.p":"Start from daily life and turn abstract ideas into actionable suggestions.",
    "blog2.t":"Why Quizzes Increase Time-on-Page",
    "blog2.p":"Low-cost interaction creates engagement, sharing, and return visits.",
    "blog3.t":"Beginner-friendly AR: From Story to Demo",
    "blog3.p":"A simple workflow to turn content into a showable experience.",
    "blog.btn":"Read summary",

    "sec.interactive":"Demo",
    "sec.interactive.sub":"Let visitors play—stay longer and remember more.",
    "quiz.badge":"Quiz",
    "quiz.t":"Mini Health Quiz (Demo)",
    "quiz.p":"Swap the topic anytime: dementia, oral care, nutrition, wound care…",
    "quiz.reset":"Restart",
    "tool.badge":"Tool",
    "tool.t":"What kind of learner are you?",
    "tool.p":"Pick what you use most. I’ll suggest the best way to present content.",
    "tool.opt1":"I learn fast with visuals",
    "tool.opt2":"Stories help me feel it",
    "tool.opt3":"Steps are the most useful",
    "tool.hintT":"Hint:",
    "tool.hintP":"Tap a button to see a suggestion ✨",

    "sec.contact":"Contact",
    "sec.contact.sub":"Internships, collaborations, or questions—welcome.",
    "contact.mailto":"Email me →",
    "contact.info.t":"Contact Info",
    "contact.info.email":"Email:",
    "contact.info.role":"<strong>Collaboration:</strong> Health education, interactive learning, research projects, AR experiences",
    "contact.info.note":"<strong>For:</strong> Internship units, schools, NGOs, and the general public",
    "contact.tip.t":"For internship units:",
    "contact.tip.p":"Quick results → Work. Process & role → Projects.",
    "contact.form.t":"Quick Message (Demo)",
    "contact.form.name":"Name",
    "contact.form.namePh":"e.g., organization / your name",
    "contact.form.email":"Email",
    "contact.form.emailPh":"example@mail.com",
    "contact.form.msg":"Message",
    "contact.form.msgPh":"I’d like to know more about your work / internship / collaboration…",
    "contact.form.submit":"Send (Demo)",
    "contact.form.note":"Front-end demo only. This form does not send emails.",

    "footer.top":"Back to top ↑",
  }
};

let lang = "zh";

function applyI18n(){
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang]?.[key] != null) el.textContent = i18n[lang][key];
  });
  $$("[data-i18n-html]").forEach(el=>{
    const key = el.getAttribute("data-i18n-html");
    if(i18n[lang]?.[key] != null) el.innerHTML = i18n[lang][key];
  });
  $$("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(i18n[lang]?.[key] != null) el.setAttribute("placeholder", i18n[lang][key]);
  });

  const btn = $("#langToggle");
  if(btn) btn.textContent = lang === "zh" ? "EN" : "中文";
}

/* ========= header mobile nav ========= */
function setupNav(){
  const burger = $("#burger");
  const mobile = $("#mobileNav");
  if(!burger || !mobile) return;

  burger.addEventListener("click", ()=>{
    const open = mobile.hasAttribute("hidden");
    if(open){
      mobile.removeAttribute("hidden");
      burger.setAttribute("aria-expanded","true");
    }else{
      mobile.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    }
  });

  // close after click
  mobile.addEventListener("click", (e)=>{
    if(e.target.matches("a")){
      mobile.setAttribute("hidden","");
      burger.setAttribute("aria-expanded","false");
    }
  });
}

/* ========= progress bar ========= */
function setupProgress(){
  const bar = $("#progress");
  if(!bar) return;
  window.addEventListener("scroll", ()=>{
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = (h.scrollHeight - h.clientHeight) || 1;
    bar.style.width = (scrolled / max * 100) + "%";
  });
}

/* ========= counters ========= */
function setupCounters(){
  const nums = $$(".stat__num[data-count]");
  if(!nums.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || 0);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(()=>{
        cur += step;
        if(cur >= target){ cur = target; clearInterval(timer); }
        el.textContent = String(cur);
      }, 18);
      io.unobserve(el);
    });
  }, {threshold:.5});

  nums.forEach(n=>io.observe(n));
}

/* ========= carousel ========= */
function setupCarousel(){
  const track = $("#carouselTrack");
  const prev = $("#carouselPrev");
  const next = $("#carouselNext");
  const dotsWrap = $("#carouselDots");
  if(!track || !prev || !next || !dotsWrap) return;

  const slides = $$(".carousel__slide", track);
  let idx = 0;

  // dots
  dotsWrap.innerHTML = "";
  slides.forEach((_, i)=>{
    const d = document.createElement("button");
    d.className = "dot" + (i===0 ? " is-active" : "");
    d.type = "button";
    d.addEventListener("click", ()=> go(i));
    dotsWrap.appendChild(d);
  });
  const dots = $$(".dot", dotsWrap);

  function render(){
    track.style.transform = `translateX(-${idx * 100}%)`;
    slides.forEach((s,i)=> s.classList.toggle("is-active", i===idx));
    dots.forEach((d,i)=> d.classList.toggle("is-active", i===idx));
  }
  function go(i){
    idx = (i + slides.length) % slides.length;
    render();
  }

  prev.addEventListener("click", ()=> go(idx - 1));
  next.addEventListener("click", ()=> go(idx + 1));

  // autoplay
  let t = setInterval(()=> go(idx+1), 5200);
  [prev,next,track,dotsWrap].forEach(el=>{
    el.addEventListener("mouseenter", ()=> clearInterval(t));
    el.addEventListener("mouseleave", ()=> t = setInterval(()=> go(idx+1), 5200));
  });
}

/* ========= portfolio filter + search ========= */
function setupPortfolio(){
  const grid = $("#portfolioGrid");
  const search = $("#searchInput");
  if(!grid) return;

  const filters = $$(".filter");
  let current = "all";

  function matchCard(card){
    const tags = (card.dataset.tags || "").toLowerCase();
    const title = (card.dataset.title || "").toLowerCase() + " " + (card.innerText || "").toLowerCase();
    const q = (search?.value || "").trim().toLowerCase();

    const okFilter = current === "all" ? true : tags.includes(current);
    const okSearch = !q ? true : title.includes(q);

    return okFilter && okSearch;
  }

  function render(){
    $$(".work", grid).forEach(card=>{
      card.style.display = matchCard(card) ? "" : "none";
    });
  }

  filters.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      filters.forEach(b=> b.classList.remove("is-active"));
      btn.classList.add("is-active");
      current = btn.dataset.filter || "all";
      render();
    });
  });

  search?.addEventListener("input", render);
}

/* ========= modal ========= */
function setupModal(){
  const modal = $("#modal");
  const closeBtn = $("#modalClose");
  const content = $("#modalContent");
  if(!modal || !closeBtn || !content) return;

  const modalData = {
    m1: {
  zh: {
    title: "重拾食慾，重拾活力｜老年人營養三折頁與動畫",
    body: `
      <!-- Video -->
body: `
  <!-- Video -->
  <div style="position:relative;padding-top:56.25%;margin-bottom:16px;">
    <iframe
      src="https://www.youtube.com/embed/VIDEO_ID_HERE"
      title="老年人營養動畫示範"
      style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Modal Image Carousel -->
  <div class="mcar" data-mcar="m1">
    <div class="mcar__viewport">
      <div class="mcar__track">
        <img class="mcar__img" src="assets/nutrition-1.jpg" alt="營養三折頁設計1">
        <img class="mcar__img" src="assets/nutrition-2.jpg" alt="營養三折頁設計2">
      </div>
    </div>

    <button class="mcar__btn mcar__btn--prev" type="button" aria-label="Previous image">‹</button>
    <button class="mcar__btn mcar__btn--next" type="button" aria-label="Next image">›</button>

    <div class="mcar__dots" aria-label="Image dots"></div>
  </div>

  <p>
    本作品以<strong>年長者常見的食慾下降情境</strong>為出發點，
    將營養專業內容轉化為<strong>插畫式三折頁</strong>與<strong>短動畫</strong>，
    協助一般民眾與照護者在日常生活中理解並實際應用。
  </p>
`


      <!-- Description -->
      <p>
        本作品以<strong>年長者常見的食慾下降情境</strong>為出發點，
        將營養專業內容轉化為<strong>插畫式三折頁</strong>與<strong>短動畫</strong>，
        協助一般民眾與照護者在日常生活中理解並實際應用。
      </p>

      <ul>
        <li>📌 內容形式：插畫三折頁＋動畫</li>
        <li>📌 設計重點：情境化、好讀、好記</li>
        <li>📌 適合對象：年長者、照護者、一般民眾</li>
      </ul>
    `
  },
/* ========= modal image carousel ========= */
let __mcarTimer = null;

function initModalCarousels(){
  // 找 modal 內容區裡的 mcar（因為 modal 每次打開會重新塞內容）
  const car = document.querySelector("#modalContent .mcar");
  if(!car) return;

  const track = car.querySelector(".mcar__track");
  const imgs = [...car.querySelectorAll(".mcar__img")];
  const prev = car.querySelector(".mcar__btn--prev");
  const next = car.querySelector(".mcar__btn--next");
  const dotsWrap = car.querySelector(".mcar__dots");
  if(!track || imgs.length <= 1 || !prev || !next || !dotsWrap) return;

  let idx = 0;

  // dots
  dotsWrap.innerHTML = "";
  imgs.forEach((_, i)=>{
    const d = document.createElement("button");
    d.type = "button";
    d.className = "mcar__dot" + (i===0 ? " is-active" : "");
    d.addEventListener("click", ()=> go(i));
    dotsWrap.appendChild(d);
  });
  const dots = [...dotsWrap.querySelectorAll(".mcar__dot")];

  function render(){
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d,i)=> d.classList.toggle("is-active", i===idx));
  }

  function go(i){
    idx = (i + imgs.length) % imgs.length;
    render();
  }

  prev.addEventListener("click", ()=> go(idx - 1));
  next.addEventListener("click", ()=> go(idx + 1));

  // autoplay
  clearInterval(__mcarTimer);
  __mcarTimer = setInterval(()=> go(idx + 1), 3200);

  // pause on hover (desktop)
  car.addEventListener("mouseenter", ()=> clearInterval(__mcarTimer));
  car.addEventListener("mouseleave", ()=>{
    clearInterval(__mcarTimer);
    __mcarTimer = setInterval(()=> go(idx + 1), 3200);
  });

  render();
}

function destroyModalCarousels(){
  clearInterval(__mcarTimer);
  __mcarTimer = null;
}

  en: {
    title: "Bring Back Appetite, Bring Back Energy",
    body: `
      <!-- Video -->
      <div style="position:relative;padding-top:56.25%;margin-bottom:16px;">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          title="Older Adult Nutrition Animation"
          style="position:absolute;inset:0;width:100%;height:100%;border-radius:14px;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>

      <!-- Images -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
        <img src="assets/nutrition-1.jpg" style="width:100%;border-radius:12px;">
        <img src="assets/nutrition-2.jpg" style="width:100%;border-radius:12px;">
      </div>

      <!-- Description -->
      <p>
        This project translates nutrition knowledge for older adults into
        <strong>illustrated brochures</strong> and <strong>short animations</strong>,
        helping caregivers and the general public understand and apply the ideas
        in everyday life.
      </p>

      <ul>
        <li>📌 Format: Illustrated brochure + animation</li>
        <li>📌 Focus: Scenario-based, easy to understand</li>
        <li>📌 Audience: Older adults, caregivers, general public</li>
      </ul>
    `
  }
},

    m2: {
      zh: { title:"預立醫療電子書", body:"把較難讀的內容重新整理：分層、改寫、配圖與版面，讓讀者在有限時間內抓到重點。" },
      en: { title:"ACP E-book", body:"Re-structured and redesigned for clarity: better hierarchy, friendlier wording, and visual guidance for quick understanding." }
    },
    m3: {
      zh: { title:"國科會大專生研究計畫｜12月衛教內容與前後測題目", body:"從內容設計到測驗題目都顧到：可理解性、可用性與成效評估，讓活動不是做完就算，而是看得見改變。" },
      en: { title:"NSTC Undergraduate Research (Content + Pre/Post Tests)", body:"From content design to assessments: focused on clarity, usability, and measurable outcomes—so the activity leads to visible learning gains." }
    },
    m4: {
      zh: { title:"LUMI 失智症衛教互動教材", body:"用互動引導理解：小步驟、回饋、選擇題與情境題，讓學習更有參與感、更容易記住。" },
      en: { title:"LUMI Interactive Dementia Health Education", body:"Guided interaction with small steps, feedback, and scenario-based questions to increase engagement and retention." }
    },
    blog1: {
      zh: { title:"如何把衛教做得更好懂？3個情境化技巧", body:"1) 先找『日常時刻』當開場；2) 用『一句話結論＋三個要點』；3) 讓讀者能『立刻做一個小動作』。" },
      en: { title:"3 Scenario-based Tricks for Clearer Health Education", body:"1) Start with a real-life moment; 2) One-sentence takeaway + 3 key points; 3) Give readers a small action they can do right away." }
    },
    blog2: {
      zh: { title:"互動測驗為什麼能提升停留時間？", body:"因為它讓人『參與』：一點點挑戰＋即時回饋＋可分享，會自然拉長停留時間與回訪率。" },
      en: { title:"Why Quizzes Increase Time-on-Page", body:"Interaction creates participation: small challenge + instant feedback + shareability—naturally boosting time-on-page and return visits." }
    },
    blog3: {
      zh: { title:"新手也能做的AR展示：從故事到Demo", body:"先寫一句故事核心→拆成3個場景→每個場景只做一個重點互動→就能完成可展示的Demo。" },
      en: { title:"Beginner-friendly AR: From Story to Demo", body:"One-sentence story core → 3 scenes → 1 interaction per scene. Simple and showable." }
    }
  };

  function open(id){
    const data = modalData[id];
    if(!data) return;
    const d = data[lang] || data.zh;
    content.innerHTML = `<h3>${d.title}</h3><p>${d.body}</p>`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    setTimeout(initModalCarousels, 0);
  }
  function close(){
    destroyModalCarousels();
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".openModal");
    if(btn){
      open(btn.dataset.modal);
      return;
    }
    if(e.target.matches("[data-close]")) close();
  });

  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") close(); });
}

/* ========= quiz ========= */
function setupQuiz(){
  const qEl = $("#quizQ");
  const optEl = $("#quizOptions");
  const prog = $("#quizProgress");
  const reset = $("#quizReset");
  if(!qEl || !optEl || !prog || !reset) return;

  const questions = [
    {
      zh: { q:"年長者食慾下降，第一步最重要的是？", a:["先了解原因（牙口/情緒/藥物）","直接補營養品","先強迫吃完"], correct:0, tip:"先找原因，才能選對方法。" },
      en: { q:"When appetite drops in older adults, the best first step is…", a:["Identify the cause (oral health/mood/meds)","Just add supplements","Force them to finish meals"], correct:0, tip:"Find the cause before choosing solutions." }
    },
    {
      zh: { q:"做衛教時，哪個最能提高理解？", a:["生活情境例子","大量專有名詞","越長越好"], correct:0, tip:"情境化可以降低理解門檻。" },
      en: { q:"What helps understanding the most in health education?", a:["Real-life scenarios","Lots of jargon","Longer is better"], correct:0, tip:"Scenarios lower the learning barrier." }
    },
    {
      zh: { q:"互動測驗的好處是？", a:["增加參與感與停留時間","讓內容更學術","完全取代真人教學"], correct:0, tip:"互動＝參與＝停留更久。" },
      en: { q:"A key benefit of quizzes is…", a:["More engagement and time-on-page","More academic tone","Replacing human teaching entirely"], correct:0, tip:"Interaction boosts engagement and time-on-page." }
    }
  ];

  let i = 0;
  let score = 0;
  let locked = false;

  function cur(){ return questions[i][lang] || questions[i].zh; }

  function render(){
    locked = false;
    const c = cur();
    qEl.textContent = c.q;
    optEl.innerHTML = "";
    c.a.forEach((txt, idx)=>{
      const b = document.createElement("button");
      b.className = "option";
      b.type = "button";
      b.textContent = txt;
      b.addEventListener("click", ()=> choose(idx));
      optEl.appendChild(b);
    });
    prog.textContent = `${i+1} / ${questions.length}`;
  }

  function choose(idx){
    if(locked) return;
    locked = true;

    const correct = (questions[i][lang] || questions[i].zh).correct ?? questions[i].zh.correct;
    const tip = (questions[i][lang] || questions[i].zh).tip ?? questions[i].zh.tip;

    const buttons = $$(".option", optEl);
    buttons.forEach((b, j)=>{
      if(j === correct) b.style.borderColor = "rgba(0,0,0,.35)";
      if(j === idx && idx !== correct) b.style.opacity = ".75";
      b.disabled = true;
    });

    if(idx === correct) score++;

    setTimeout(()=>{
      i++;
      if(i >= questions.length){
        qEl.textContent = lang === "zh"
          ? `完成！你答對 ${score} / ${questions.length} 🎉`
          : `Done! You got ${score} / ${questions.length} 🎉`;
        optEl.innerHTML = `<div class="note"><strong>${lang==="zh"?"小提醒：":"Tip:"}</strong> ${tip}</div>`;
        prog.textContent = "";
      }else{
        render();
      }
    }, 650);
  }

  reset.addEventListener("click", ()=>{
    i = 0; score = 0;
    render();
  });

  render();

  // expose rerender on language change
  window.__rerenderQuiz = () => render();
}

/* ========= mini tool ========= */
function setupPickTool(){
  const box = $("#pickResult");
  if(!box) return;

  const map = {
    visual: {
      zh:"你適合：多用圖像、icon、對照表、一步一步的『圖像化流程』。",
      en:"Best for you: visuals, icons, comparisons, and a step-by-step visual flow."
    },
    story: {
      zh:"你適合：用短故事＋角色情境，把重點藏在『一個場景』裡。",
      en:"Best for you: short stories and scenarios—embed key points in one scene."
    },
    steps: {
      zh:"你適合：把內容變成『3步驟清單』＋『常見錯誤提醒』，最實用。",
      en:"Best for you: a 3-step checklist + common mistakes—super practical."
    }
  };

  document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".pick__btn");
    if(!btn) return;
    const key = btn.dataset.pick;
    const msg = map[key]?.[lang] || map[key]?.zh;
    box.innerHTML = `<strong>${lang==="zh"?"建議：":"Suggestion:"}</strong> ${msg}`;
  });

  window.__rerenderPick = () => {
    box.innerHTML = `<strong>${i18n[lang]["tool.hintT"]}</strong> ${i18n[lang]["tool.hintP"]}`;
  };
}

/* ========= contact form (demo) ========= */
function setupContactForm(){
  const form = $("#contactForm");
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert(lang === "zh" ? "已送出（示範）✨" : "Sent (demo) ✨");
    form.reset();
  });
}

/* ========= language toggle ========= */
function setupLang(){
  const btn = $("#langToggle");
  if(!btn) return;

  btn.addEventListener("click", ()=>{
    lang = (lang === "zh") ? "en" : "zh";
    applyI18n();

    // re-render interactive pieces
    if(window.__rerenderQuiz) window.__rerenderQuiz();
    if(window.__rerenderPick) window.__rerenderPick();
  });

  applyI18n();
}

/* ========= init ========= */
function init(){
  $("#year").textContent = new Date().getFullYear();

  setupNav();
  setupProgress();
  setupCounters();
  setupCarousel();
  setupPortfolio();
  setupModal();
  setupQuiz();
  setupPickTool();
  setupContactForm();
  setupLang();
}

document.addEventListener("DOMContentLoaded", init);




