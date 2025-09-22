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

// Scroll animations via IntersectionObserver
const animated = document.querySelectorAll('[data-animate]');
if (animated.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  animated.forEach(el => io.observe(el));
}



