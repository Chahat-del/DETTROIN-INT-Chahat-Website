// ===== NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== FADE IN ON SCROLL =====
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach((el) => fadeObserver.observe(el));

// ===== MODERN INFRASTRUCTURE SLIDE-IN =====
const slideEls = document.querySelectorAll('.fade-slide');
const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      slideObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
slideEls.forEach((el) => {
  if (el.classList.contains('modern__block--left'))  el.classList.add('from-left');
  if (el.classList.contains('modern__block--right')) el.classList.add('from-right');
  slideObserver.observe(el);
});

// ===== HERO SLIDESHOW =====
const heroSlides = document.querySelectorAll('.hero__slide');
const heroPrev   = document.getElementById('heroPrev');
const heroNext   = document.getElementById('heroNext');
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  heroSlides[currentSlide].classList.remove('active');
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides[currentSlide].classList.add('active');
}

function startAutoplay() {
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 4000);
}

if (heroSlides.length) {
  startAutoplay();
  heroNext.addEventListener('click', () => { clearInterval(slideTimer); showSlide(currentSlide + 1); startAutoplay(); });
  heroPrev.addEventListener('click', () => { clearInterval(slideTimer); showSlide(currentSlide - 1); startAutoplay(); });
}

// ===== GALLERY FLIP CARDS =====
document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  // Also allow keyboard toggle
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq__q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq__item');
    const panel  = item.querySelector('.faq__a');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq__item').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      el.querySelector('.faq__a').style.height = '0';
    });

    // Open the clicked one if it was closed
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      // Measure real content height
      panel.style.height = 'auto';
      const h = panel.offsetHeight;
      panel.style.height = '0';
      panel.getBoundingClientRect(); // force reflow
      panel.style.height = h + 'px';
    }
  });
});

// ===== TESTIMONIALS CAROUSEL =====
(function () {
  const cards    = Array.from(document.querySelectorAll('.testi-card'));
  const dotsWrap = document.getElementById('testiDots');
  const tPrev    = document.getElementById('testiPrev');
  const tNext    = document.getElementById('testiNext');
  if (!cards.length || !dotsWrap) return;

  function visibleCount() {
    if (window.innerWidth <= 580) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  const total = cards.length;
  let current = 0;
  let autoTimer;

  function buildDots() {
    dotsWrap.innerHTML = '';
    const pages = Math.ceil(total / visibleCount());
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('button');
      d.className = 'testi-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Page ' + (i + 1));
      d.addEventListener('click', () => goTo(i * visibleCount()));
      dotsWrap.appendChild(d);
    }
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll('.testi-dot');
    const page = Math.floor(current / visibleCount());
    dots.forEach((d, i) => d.classList.toggle('active', i === page));
  }

  function show(index) {
    const vc  = visibleCount();
    const max = total - vc;
    current   = Math.max(0, Math.min(index, max));
    cards.forEach((c, i) => {
      c.classList.toggle('testi-hidden', i < current || i >= current + vc);
    });
    updateDots();
  }

  function goTo(index) { show(index); }
  function next() { goTo(current + visibleCount() >= total ? 0 : current + 1); }
  function prev() { goTo(current === 0 ? Math.max(0, total - visibleCount()) : current - 1); }
  function startAuto() { autoTimer = setInterval(next, 4500); }
  function stopAuto()  { clearInterval(autoTimer); }

  tNext.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  tPrev.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  window.addEventListener('resize', () => { buildDots(); show(0); });

  buildDots();
  show(0);
  startAuto();
})();

// ===== CONTACT FORM =====
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been received. We will contact you soon.');
    enquiryForm.reset();
  });
}
