// ── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
const topbar = document.getElementById('topbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── HAMBURGER MENU ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── BOARDING TABS ──────────────────────────────────────────
function showTab(type) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-content-' + type).classList.add('active');
  document.getElementById('tab-' + type).classList.add('active');
}

// ── SCROLL REVEAL ──────────────────────────────────────────
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in classes programmatically
const sections = document.querySelectorAll('.section > .container > *');
sections.forEach((el, i) => {
  if (!el.classList.contains('section-header')) {
    el.classList.add('fade-in');
  }
  revealObserver.observe(el);
});

document.querySelectorAll('.section-header').forEach(el => {
  el.classList.add('fade-in');
  revealObserver.observe(el);
});

document.querySelectorAll('.service-card').forEach((el, i) => {
  el.classList.add('stagger');
  el.style.transitionDelay = `${(i % 3) * 0.1}s`;
  revealObserver.observe(el);
});

document.querySelectorAll('.team-card').forEach((el, i) => {
  el.classList.add('stagger');
  el.style.transitionDelay = `${(i % 2) * 0.12}s`;
  revealObserver.observe(el);
});

document.querySelectorAll('.review-card').forEach((el, i) => {
  el.classList.add('stagger');
  el.style.transitionDelay = `${(i % 2) * 0.12}s`;
  revealObserver.observe(el);
});

document.querySelectorAll('.about-img-wrap').forEach(el => {
  el.classList.add('fade-in-left');
  revealObserver.observe(el);
});

document.querySelectorAll('.about-content').forEach(el => {
  el.classList.add('fade-in-right');
  revealObserver.observe(el);
});

document.querySelectorAll('.boarding-content').forEach(el => {
  el.classList.add('fade-in-left');
  revealObserver.observe(el);
});

document.querySelectorAll('.boarding-img-wrap').forEach(el => {
  el.classList.add('fade-in-right');
  revealObserver.observe(el);
});

document.querySelectorAll('.contact-info').forEach(el => {
  el.classList.add('fade-in-left');
  revealObserver.observe(el);
});

document.querySelectorAll('.map-wrap').forEach(el => {
  el.classList.add('fade-in-right');
  revealObserver.observe(el);
});

// ── ACTIVE NAV LINK ON SCROLL ──────────────────────────────
const sectionEls = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.style.color = 'var(--teal-600)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sectionEls.forEach(s => activeObserver.observe(s));

// ── FAB HIDE ON FOOTER ─────────────────────────────────────
const fab    = document.getElementById('fab');
const footer = document.querySelector('.footer');

const fabObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    fab.style.opacity = entry.isIntersecting ? '0' : '1';
    fab.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
  });
}, { threshold: 0.1 });

if (footer) fabObserver.observe(footer);

// ── COUNTER ANIMATION (hero stats) ─────────────────────────
function animateCount(el, target, suffix) {
  let start = 0;
  const duration = 1600;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) heroObserver.observe(heroSection);
