const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach((el) => observer.observe(el));

// ===== HERO SLIDESHOW (with arrows) =====
const slides = document.querySelectorAll('.hero__slide');
const prevBtn = document.getElementById('heroPrev');
const nextBtn = document.getElementById('heroNext');
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function startAutoplay() {
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 4000);
}

if (slides.length) {
  startAutoplay();

  nextBtn.addEventListener('click', () => {
    clearInterval(slideTimer);
    showSlide(currentSlide + 1);
    startAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(slideTimer);
    showSlide(currentSlide - 1);
    startAutoplay();
  });
}
// ===== CONTACT FORM =====
const enquiryForm = document.getElementById('enquiryForm');
enquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your enquiry has been received. We will contact you soon.');
  enquiryForm.reset();
});