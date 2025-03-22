function changeLanguage(lang) {
  const t = translations[lang];

  // Index.html fejléc kezelése
  if (document.querySelector('.heading-primary span:not(.project-title)')) {
      document.querySelector('.header__text p').textContent = t.header.tagline; // Ez az "A passionate developer based in Hungary."
      document.querySelector('.tech-stack p').textContent = t.header.techStack;
      document.querySelector('.header__text .btn').textContent = t.header.getInTouch;
  }
  else if (document.querySelector('.project-title')) {
      document.querySelector('.project-tagline').textContent = t.work.project1.desc; // Csak a projekt leírása
      document.querySelector('.btn--pink').textContent = t.work.project1.backToHome; // Back to Home gomb
  }

  // További elemek frissítése (nav, work, stb.)
  document.querySelectorAll('.nav__link').forEach((link, index) => {
      if (index === 0) link.textContent = t.nav.work;
      if (index === 1) link.textContent = t.nav.clients;
      if (index === 2) link.textContent = t.nav.about;
      if (index === 3) link.textContent = t.nav.contact;
  });
  // ...
}