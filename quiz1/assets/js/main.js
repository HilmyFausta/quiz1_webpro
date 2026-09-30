// nunggu semuanya ke load
document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (!toggleButton || !navLinks) {
    return;
  }

  // nunjukin tombol navigasi
  toggleButton.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // kalau klik salah satu, langsung ketutup
  navLinks.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});
