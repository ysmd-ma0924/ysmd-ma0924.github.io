// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
}

// Dummy form submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    alert('デモ版のため、送信は行われません。');
  });
}


