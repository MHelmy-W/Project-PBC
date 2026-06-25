/* ===========================================================
   ATLAS VERTEBRATA — main.js
   Interaksi: menu mobile, lightbox placeholder gambar,
   tab jantan/betina, animasi reveal saat scroll.
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Menu navigasi mobile ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Tutup menu saat link diklik (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Lightbox untuk slot foto ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxDesc = document.getElementById('lightbox-desc');
  var lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('.photo-slot').forEach(function (slot) {
    slot.addEventListener('click', function () {
      if (!lightbox) return;
      var title = slot.getAttribute('data-title') || 'Slot Gambar';
      var filename = slot.getAttribute('data-filename') || '';
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = filename
        ? 'Ganti placeholder ini dengan file: ' + filename + ' — letakkan pada folder images/ yang sesuai, lalu perbarui atribut src pada tag <img>.'
        : 'Ganti placeholder ini dengan foto hasil praktikum Anda di dalam kode HTML.';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    });

    // Aksesibilitas: bisa dibuka dengan keyboard
    slot.setAttribute('tabindex', '0');
    slot.setAttribute('role', 'button');
    slot.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        slot.click();
      }
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- 3. Tab Jantan / Betina (halaman Burung Dara) ---------- */
  var tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');

        document.querySelectorAll('.tab-btn').forEach(function (b) {
          b.classList.remove('is-active');
        });
        document.querySelectorAll('.tab-panel').forEach(function (p) {
          p.classList.remove('is-active');
        });

        btn.classList.add('is-active');
        var panel = document.getElementById(target);
        if (panel) panel.classList.add('is-active');
      });
    });
  }

  /* ---------- 4. Tandai link navigasi aktif berdasar halaman ---------- */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
  

});
