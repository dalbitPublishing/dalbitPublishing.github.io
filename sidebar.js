function renderSidebar(activePage) {
  const pages = {
    about:   'index.html',
    works:   'works.html',
    quiz:    'quiz.html',
    library: 'library.html',
    contact: 'contact.html',
    rights:  'rights.html'
  };

  // 언어 목록 (각국 자국어 표기)
  const LANGS = [
    { code: 'ko',    label: '한국어' },
    { code: 'en',    label: 'English' },
    { code: 'ja',    label: '日本語' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'th',    label: 'ภาษาไทย' },
    { code: 'fr',    label: 'Français' },
    { code: 'de',    label: 'Deutsch' },
    { code: 'es',    label: 'Español' },
    { code: 'ar',    label: 'العربية' },
    { code: 'vi',    label: 'Tiếng Việt' },
    { code: 'id',    label: 'Bahasa Indonesia' },
  ];

  const langOptions = LANGS.map(l =>
    `<option value="${l.code}">${l.label}</option>`
  ).join('');

  document.getElementById('sidebar').innerHTML = `
    <a href="${pages.about}" class="logo">
      <img src="logo.png" alt="달빛출판사" onerror="this.src='https://cdn.imweb.me/thumbnail/20260513/1f3f41f7e3698.png'">
    </a>
    <nav id="sidebar-nav">
      <ul>
        <li class="nav-item">
          <a href="${pages.about}" class="nav-link${activePage==='about'?' active':''}">회사소개</a>
        </li>
        <li class="nav-item">
          <a href="${pages.works}" class="nav-link${['works','quiz','library'].includes(activePage)?' active':''}">작품소개</a>
          <ul class="nav-sub">
            <li class="nav-item"><a href="${pages.quiz}"    class="nav-link${activePage==='quiz'?' active':''}">취향매칭테스트(GL)</a></li>
            <li class="nav-item"><a href="${pages.library}" class="nav-link${activePage==='library'?' active':''}">달빛 라이브러리(GL)</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="${pages.contact}" class="nav-link${activePage==='contact'?' active':''}">CONTACT</a>
        </li>
      </ul>
      <hr class="nav-divider">
    </nav>
    <div class="sns">
      <a href="https://blog.naver.com/dalbit8789" target="_blank" title="네이버 블로그">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
      </a>
      <a href="https://www.instagram.com/dalbitpub" target="_blank" title="인스타그램">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://x.com/dalbit8789" target="_blank" title="X(트위터)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
    </div>
    <!-- 커스텀 언어 선택 -->
    <div style="margin-top:auto;padding-top:16px;border-top:1px solid #eee;">
      <div style="font-size:11px;color:#aaa;margin-bottom:6px;">🌐 Language</div>
      <select id="custom-lang-select" onchange="applyLang(this.value)" style="width:100%;font-size:12px;border:1px solid #ddd;border-radius:4px;padding:4px 6px;color:#555;background:#fff;cursor:pointer;outline:none;">
        ${langOptions}
      </select>
    </div>
    <!-- Google Translate 숨김 엘리먼트 -->
    <div id="google_translate_element" style="position:absolute;opacity:0;pointer-events:none;height:0;overflow:hidden;"></div>
  `;

  // 모바일 상단 바 삽입
  if (!document.getElementById('mobile-topbar')) {
    const topbar = document.createElement('div');
    topbar.id = 'mobile-topbar';
    topbar.className = 'mobile-topbar';
    topbar.innerHTML = `
      <a href="${pages.about}">
        <img src="logo.png" alt="달빛출판사" onerror="this.src='https://cdn.imweb.me/thumbnail/20260513/1f3f41f7e3698.png'">
      </a>
      <button class="hamburger" id="hamburger-btn" aria-label="메뉴">
        <span></span><span></span><span></span>
      </button>
    `;
    document.body.prepend(topbar);

    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    document.getElementById('hamburger-btn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
      overlay.classList.toggle('visible');
    });
    overlay.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('open');
      overlay.classList.remove('visible');
    });
  }

  // Google Translate 스타일 (툴바 숨김)
  if (!document.getElementById('gt-style')) {
    const s = document.createElement('style');
    s.id = 'gt-style';
    s.textContent = '.goog-te-banner-frame{display:none!important;}body{top:0!important;}.skiptranslate iframe{display:none!important;}';
    document.head.appendChild(s);
  }

  // Google Translate 로드 (한 번만)
  if (!window._gtLoaded) {
    window._gtLoaded = true;
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({
        pageLanguage: 'ko',
        includedLanguages: 'en,ja,zh-TW,zh-CN,th,fr,de,es,ar,vi,id',
        autoDisplay: false
      }, 'google_translate_element');

      // 브라우저 언어 자동감지
      function tryAutoTranslate() {
        var gtSelect = document.querySelector('.goog-te-combo');
        if (!gtSelect) { setTimeout(tryAutoTranslate, 500); return; }

        var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        var map = {
          'ja':'ja','ja-jp':'ja',
          'zh-tw':'zh-TW','zh-hk':'zh-TW','zh-mo':'zh-TW',
          'zh-cn':'zh-CN','zh-sg':'zh-CN','zh':'zh-CN',
          'th':'th','fr':'fr','de':'de','es':'es','ar':'ar','vi':'vi','id':'id'
        };
        var target = map[nav] || map[nav.split('-')[0]];
        if (target && !nav.startsWith('ko')) {
          setGoogleTranslate(gtSelect, target);
          // 커스텀 드롭다운도 동기화
          var sel = document.getElementById('custom-lang-select');
          if (sel) sel.value = target;
        }
        window._gtSelect = gtSelect;
      }
      setTimeout(tryAutoTranslate, 1000);
    };

    const sc = document.createElement('script');
    sc.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(sc);
  }
}

function setGoogleTranslate(gtSelect, langCode) {
  gtSelect.value = langCode;
  gtSelect.dispatchEvent(new Event('change'));
}

function applyLang(code) {
  if (code === 'ko') {
    // 한국어 원문 복원
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=' + window.location.hostname + '; path=/';
    window.location.reload();
    return;
  }
  function tryApply() {
    var gtSelect = window._gtSelect || document.querySelector('.goog-te-combo');
    if (!gtSelect) { setTimeout(tryApply, 300); return; }
    window._gtSelect = gtSelect;
    setGoogleTranslate(gtSelect, code);
  }
  tryApply();
}
