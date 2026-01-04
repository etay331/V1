document.addEventListener("DOMContentLoaded", () => {
    // 1. 中英文翻譯字典
    const i18n = {
        zh: {
            "nav.about": "關於我",
            "nav.portfolio": "作品集",
            "nav.interactive": "互動DEMO",
            "nav.guestbook": "留言板",
            "nav.contact": "聯絡我",
            "hero.pill": "張煒䕒的個人網頁",
            "hero.h1": "衛教不該只是單向傳遞<br/>而是一場有溫度的對話",
            "hero.lead": "面對疾病時，人們需要的不只是資訊，還有理解。我運用動畫、AR 與互動網頁，把冰冷的醫學名詞，變成能安撫焦慮、引發興趣的陪伴。",
            "hero.cta.portfolio": "看作品集",
            "hero.cta.demo": "玩互動小遊戲",
            "hero.tag": "2025 文山親角親子衛教",
            "sec.about": "關於我",
            "about.cta": "Let’s Chat →",
            "about.name": "Vivian｜健康教育 × 數位互動",
            "about.intro": "具護理背景，喜歡把專業知識做成「好懂、好記、願意分享」的內容。",
            "about.tag1": "互動式衛教",
            "about.tag2": "多媒體教材",
            "about.tag3": "AR / 體驗設計",
            "about.skills": "專業認證 & 技能",
            "skill.nurse": "護理師證書",
            "about.exp": "經歷 / 服務 / 成績",
            "exp.li1": "衛生股長 (113-1) | 管理班級健康狀況",
            "exp.li2": "系學會秘書長 (113-2) | 校慶擺攤統籌",
            "exp.li3": "勤學書卷獎 | 113-1、113-2",
            "about.journey": "我的經歷",
            "about.journeySub": "從學術研究到創新創業挑戰，我的成長軌跡。",
            "exp1.title": "114年度國科會大專生研究計畫",
            "exp2.title": "2025 NTUE 校園創業競賽 | 金獎",
            "exp3.title": "新南向學海築夢",
            "common.more": "看更多",
            "pf.title": "更多作品集",
            "pf.sub": "收錄各類專案，點擊按鈕可查看詳細內容或影片。",
            "tag.ebook": "電子書",
            "w1.title": "從心出發-預立醫囑",
            "w1.desc": "負責製作素材、腳本企劃，推廣預立醫囑概念。",
            "btn.video": "觀看影片 ►",
            "tag.marketing": "行銷競賽",
            "w2.title": "心之所向，海之所淨",
            "w2.desc": "結合創新與海洋環境永續宣導教育。",
            "btn.photos": "查看照片",
            "tag.design": "文宣設計",
            "w3.title": "重拾食慾，重拾活力",
            "w3.desc": "將複雜的文字設計成圖文並茂的三折頁及動畫。",
            "tag.manual": "手冊設計",
            "w4.title": "我的名片",
            "w4.desc": "獨一無二的個人品牌設計。",
            "btn.pdf": "預覽 PDF",
            "tag.teaching": "教學設計",
            "w5.title": "教案規劃 & 教學活動",
            "w5.desc": "以情境模擬教學法設計出常見傷口的模擬卡牌。",
            "btn.loadmore": "查看更多作品 ↓",
            "demo.title": "互動 Demo",
            "demo.sub": "繽紛客製手玩：停留更久、內容更生動。",
            "demo.tag1": "衛教問答",
            "demo.g.title": "互動衛教小遊戲",
            "demo.g.desc": "將衛教知識轉化為趣味的問答互動，讓使用者在遊戲中學習，提升學習動機與成效。",
            "demo.g.btn": "開始挑戰 ►",
            "demo.tag2": "AR 體驗",
            "demo.ar.title": "AR 擴增實境展示",
            "demo.ar.desc": "透過手機鏡頭，讓平面教材「動」起來。",
            "demo.ar.btn1": "APP 下載",
            "demo.ar.btn2": "操作步驟",
            "demo.hint": "提示：點上方按鈕開啟 AR 說明",
            "guest.title": "留言板",
            "guest.sub": "歡迎在這裡留下您的想法、鼓勵或建議！",
            "footer.top": "回到頂部 ↑",
            /* Modal Translations */
            "m1.topic": "主題: 運用多媒體與遊戲教學提升弱勢家庭之兒童保健健康識能",
            "common.scroll": "← 左右滑動看更多 →",
            "m1.ppt": "📄 大專生計畫分享簡報",
            "m2.title": "🏆 語觸視界 | LigoTouch",
            "m2.ppt": "📄 比賽簡報",
            "m3.title": "印尼巨港 UMP 參訪",
            "m3.video": "📄 成果影片",
            "v1.title": "🎥 正確洗手衛教短片",
            "p1.title": "📸 活動紀錄",
            "pdf1.title": "📄 糖尿病飲食手冊",
            "demo.ar.steps": "📱 AR 步驟"
        },
        en: {
            "nav.about": "About",
            "nav.portfolio": "Portfolio",
            "nav.interactive": "Demo",
            "nav.guestbook": "Guestbook",
            "nav.contact": "Contact",
            "hero.pill": "Vivian's Portfolio",
            "hero.h1": "Health Education: Not a Monologue,<br/>But a Warm Dialogue.",
            "hero.lead": "People need understanding, not just info. I use animation, AR, and interactive design to turn cold medical terms into comforting companions.",
            "hero.cta.portfolio": "See Work",
            "hero.cta.demo": "Play Demo",
            "hero.tag": "2025 Health Education Event",
            "sec.about": "About Me",
            "about.cta": "Let’s Chat →",
            "about.name": "Vivian | Health Ed × Interactive Design",
            "about.intro": "Nursing background. I love making professional knowledge 'easy to understand, remember, and share'.",
            "about.tag1": "Interactive Ed",
            "about.tag2": "Multimedia",
            "about.tag3": "AR / Experience",
            "about.skills": "Certifications & Skills",
            "skill.nurse": "Registered Nurse",
            "about.exp": "Experience / Service / Awards",
            "exp.li1": "Hygiene Chief (113-1) | Class Health Management",
            "exp.li2": "Student Assoc. Secretary (113-2) | Event Coordinator",
            "exp.li3": "Academic Excellence Award | 113-1, 113-2",
            "about.journey": "Journey",
            "about.journeySub": "From academic research to startup challenges.",
            "exp1.title": "114 NSTC Research Project",
            "exp2.title": "2025 NTUE Startup Competition | Gold",
            "exp3.title": "New Southbound Policy Internship",
            "common.more": "More",
            "pf.title": "Portfolio",
            "pf.sub": "Selected projects. Click to view details.",
            "tag.ebook": "E-Book",
            "w1.title": "Advance Care Planning",
            "w1.desc": "Script planning and material creation for ACP promotion.",
            "btn.video": "Watch Video ►",
            "tag.marketing": "Marketing",
            "w2.title": "Heart to Ocean",
            "w2.desc": "Combining innovation with marine sustainability education.",
            "btn.photos": "View Photos",
            "tag.design": "Design",
            "w3.title": "Regain Appetite",
            "w3.desc": "Transforming complex text into brochures and animations.",
            "tag.manual": "Brochure",
            "w4.title": "Personal Branding",
            "w4.desc": "Unique personal brand card design.",
            "btn.pdf": "Preview PDF",
            "tag.teaching": "Teaching Plan",
            "w5.title": "Scenario Simulation",
            "w5.desc": "Designed simulation cards for common wound care.",
            "btn.loadmore": "Show More Projects ↓",
            "demo.title": "Interactive Demo",
            "demo.sub": "Fun & Custom: Stay longer, engage more.",
            "demo.tag1": "Health Quiz",
            "demo.g.title": "Interactive Health Game",
            "demo.g.desc": "Turning health knowledge into fun quizzes to improve learning motivation.",
            "demo.g.btn": "Start Challenge ►",
            "demo.tag2": "AR Tool",
            "demo.ar.title": "AR Experience",
            "demo.ar.desc": "Use your phone to make flat materials 'move'.",
            "demo.ar.btn1": "Download App",
            "demo.ar.btn2": "Steps",
            "demo.hint": "Tip: Click buttons above for instructions",
            "guest.title": "Guestbook",
            "guest.sub": "Leave your thoughts or suggestions here!",
            "footer.top": "Back to Top ↑",
            "m1.topic": "Topic: Enhancing Health Literacy for Children",
            "common.scroll": "← Scroll to see more →",
            "m1.ppt": "📄 Project Presentation",
            "m2.title": "🏆 LigoTouch | Startup Project",
            "m2.ppt": "📄 Competition Slides",
            "m3.title": "Palembang UMP Visit",
            "m3.video": "📄 Result Video",
            "v1.title": "🎥 Hand Washing Video",
            "p1.title": "📸 Event Photos",
            "pdf1.title": "📄 Diabetes Diet Manual",
            "demo.ar.steps": "📱 AR Steps"
        }
    };

    let currentLang = "zh";

    function updateLanguage() {
        document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";
        const btnText = currentLang === "zh" ? "EN" : "中文";
        document.getElementById("langToggle").textContent = btnText;
        if(document.getElementById("mobileLangToggle")) {
            document.getElementById("mobileLangToggle").textContent = btnText;
        }

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (i18n[currentLang][key]) {
                el.textContent = i18n[currentLang][key];
            }
        });
        
        // 處理有 HTML 標籤的 (例如 <br>)
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            const key = el.getAttribute("data-i18n-html");
            if (i18n[currentLang][key]) {
                el.innerHTML = i18n[currentLang][key];
            }
        });
    }

    document.getElementById("langToggle").addEventListener("click", () => {
        currentLang = currentLang === "zh" ? "en" : "zh";
        updateLanguage();
    });
    
    // 手機版按鈕也要能切換
    const mobBtn = document.getElementById("mobileLangToggle");
    if(mobBtn){
        mobBtn.addEventListener("click", () => {
            currentLang = currentLang === "zh" ? "en" : "zh";
            updateLanguage();
        });
    }

    // 2. 手機版選單開關
    const burger = document.getElementById("burger");
    const mobileNav = document.getElementById("mobileNav");
    
    burger.addEventListener("click", () => {
        const isHidden = mobileNav.hasAttribute("hidden");
        if (isHidden) {
            mobileNav.removeAttribute("hidden");
        } else {
            mobileNav.setAttribute("hidden", "");
        }
    });

    // 點擊選單連結後自動關閉選單
    mobileNav.addEventListener("click", (e) => {
        if (e.target.tagName === 'A') {
            mobileNav.setAttribute("hidden", "");
        }
    });

    // 3. 查看更多作品功能
    window.showAllProjects = function() {
        const hiddenItems = document.querySelectorAll('.hidden-item');
        hiddenItems.forEach(item => {
            item.style.display = 'flex'; // 先顯示
            // 簡單的淡入效果
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s';
                item.style.opacity = 1;
            }, 50);
        });
        document.getElementById('showMoreBtn').style.display = 'none';
    };

    // 4. Modal 開關邏輯 (掛載到 window 以便 HTML onclick 使用)
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'flex';
            // 強制重繪以觸發 transition
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
            document.body.style.overflow = 'hidden'; // 禁止背後捲動
        }
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = ''; // 恢復捲動
            }, 300); // 等待動畫結束
        }
    };

    // 點擊遮罩關閉 (Optional, 已在 HTML onclick 設定 event.stopPropagation 避免誤觸內容關閉)
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                // 找到這個 overlay 的 ID 並關閉
                window.closeModal(overlay.id);
            }
        });
    });
    
    // 初始化語言
    updateLanguage();
});
