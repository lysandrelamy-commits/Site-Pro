/* AutoFlow — script.js */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile burger menu ──
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Contact form (simulation) ──
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;
  btn.style.opacity = '.7';

  setTimeout(() => {
    successMsg.style.display = 'block';
    form.reset();
    btn.textContent = 'Envoyer ma demande';
    btn.disabled = false;
    btn.style.opacity = '1';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 1200);
});

// ── Reveal on scroll (cards & sections) ──
const revealEls = document.querySelectorAll(
  '.service-card, .step, .why-item, .flow-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
  revealObserver.observe(el);
});

// ── Metric bars animation on scroll ──
const metricsBox = document.querySelector('.metrics-box');
if (metricsBox) {
  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.metric-bar').forEach(bar => {
          bar.style.animationPlayState = 'running';
        });
        metricsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Pause bars initially
  metricsBox.querySelectorAll('.metric-bar').forEach(bar => {
    bar.style.animationPlayState = 'paused';
  });

  metricsObserver.observe(metricsBox);
}
