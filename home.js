// === NAVBAR SCROLL EFFECT ===
const navbar = document.querySelector('.main-header'); // konsisten pakai class

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// === CAROUSEL BACKGROUND CHANGER ===
const backgrounds = [
  '/asset/4.jpg',
  '/asset/3.jpg',
  '/asset/4.jpg',
];

let currentBackground = 0;

setInterval(() => {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  document.querySelector('.carousel-section').style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}, 5000);

// === HAMBURGER MENU TOGGLE ===
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// === FORM VALIDATION FUNCTION ===
function kirim() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!nama || !email || !message) {
    alert("Gagal mengirim: Pastikan semua kolom terisi.");
  } else {
    alert("Pesan terkirim!");
  }
}
