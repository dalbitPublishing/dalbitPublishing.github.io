function renderSidebar(activePage) {
  const pages = {
    about:   'index.html',
    works:   'works.html',
    quiz:    'quiz.html',
    library: 'library.html',
    contact: 'contact.html'
  };
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
}
