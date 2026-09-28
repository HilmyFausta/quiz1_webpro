// Mengatur buka/tutup menu navigasi di layar kecil.
// Tidak ada animasi hias, hanya fungsi tampil/sembunyi biasa.

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (!toggleButton || !navLinks) {
    return;
  }

  toggleButton.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});
