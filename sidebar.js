// ── 공통 사이드바 렌더링 ──
// 각 페이지에서 renderSidebar('about') 처럼 현재 페이지 ID를 넘기면 됩니다.
function renderSidebar(activePage) {
  const pages = {
    about:   'index.html',
    works:   'works.html',
    quiz:    'quiz.html',
    library: 'library.html',
    contact: 'contact.html'
  };
  document.getElementById('sidebar').innerHTML = `
    <a href="${pages.about}" class="logo"><span class="logo-y">달</span><span class="logo-b">빛</span></a>
    <nav>
      <ul>
        <li class="nav-item">
          <a href="${pages.about}" class="nav-link${activePage==='about'?' active':''}">회사소개</a>
        </li>
        <li class="nav-item nav-bold">
          <a href="${pages.works}" class="nav-link${activePage==='works'||activePage==='quiz'||activePage==='library'?' active':''}">작품소개</a>
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
      <a href="mailto:dalbit8789@gmail.com" title="이메일">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" title="인스타그램">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://twitter.com" target="_blank" title="트위터">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
    </div>
  `;
}
