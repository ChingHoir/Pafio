// ── Navbar scroll shadow ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 32px rgba(0,0,0,0.4)'
    : 'none';
});

// ── Highlight active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Contact form submit ──
const form = document.querySelector('.contact-form');
if (form) {
  form.querySelector('button').addEventListener('click', () => {
    const name  = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const msg   = form.querySelector('textarea').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thanks ${name}! Your message has been sent.`);
    form.querySelector('input[type="text"]').value  = '';
    form.querySelector('input[type="email"]').value = '';
    form.querySelector('textarea').value            = '';
  });
}