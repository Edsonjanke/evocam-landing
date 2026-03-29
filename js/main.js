// ── Initialize AOS ──
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,
  offset: 80
});

// ── Initialize Lucide Icons ──
lucide.createIcons();

// ── Mobile Hamburger Menu ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ── Form → WhatsApp ──
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value;
    const empresa = form.empresa.value;
    const whatsapp = form.whatsapp.value;
    const cidade = form.cidade.value;
    const maquina = form.maquina.value;
    const interesse = form.interesse.value;

    const msg = encodeURIComponent(
      `Olá! Quero conhecer o EvoCAM.\n\n` +
      `Nome: ${nome}\n` +
      `Empresa: ${empresa}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Cidade: ${cidade}\n` +
      `Máquina: ${maquina}\n` +
      `Interesse: ${interesse}`
    );

    window.open(`https://wa.me/5547997283675?text=${msg}`, '_blank');
  });
}

// ── Hero Slideshow ──
const slides = document.querySelectorAll('.mockup-slide');
const titleEl = document.getElementById('mockupTitle');
const dotsContainer = document.getElementById('mockupDots');

if (slides.length > 0 && dotsContainer) {
  let current = 0;
  let autoTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'mockup-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.mockup-dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    if (titleEl) titleEl.textContent = slides[current].dataset.title;
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo((current + 1) % slides.length), 4000);
  }

  // Arrow navigation
  const prevArrow = document.querySelector('.mockup-prev');
  const nextArrow = document.querySelector('.mockup-next');
  if (prevArrow) prevArrow.addEventListener('click', (e) => { e.stopPropagation(); goTo((current - 1 + slides.length) % slides.length); resetAuto(); });
  if (nextArrow) nextArrow.addEventListener('click', (e) => { e.stopPropagation(); goTo((current + 1) % slides.length); resetAuto(); });

  // Click to zoom (open lightbox with arrows)
  const zoomOverlay = document.getElementById('mockupZoom');
  const heroSlideImages = Array.from(slides);
  function openHeroLightbox() {
    if (window._openLightbox) {
      window._openLightbox(heroSlideImages, current);
    }
  }
  if (zoomOverlay) zoomOverlay.addEventListener('click', (e) => { e.stopPropagation(); openHeroLightbox(); });
  document.querySelector('.mockup-slides').addEventListener('click', (e) => {
    if (e.target.classList.contains('mockup-slide')) openHeroLightbox();
  });

  resetAuto();
}

// ── Gallery Arrows ──
const galleryScroll = document.getElementById('galleryScroll');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');

if (galleryScroll && prevBtn && nextBtn) {
  const scrollAmount = 500;
  prevBtn.addEventListener('click', () => galleryScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => galleryScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}

// ── Lightbox ──
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lightbox-close');
  const lbPrev = lightbox.querySelector('.lightbox-prev');
  const lbNext = lightbox.querySelector('.lightbox-next');
  let lbImages = [];
  let lbIndex = 0;

  function openLightbox(images, index) {
    lbImages = images;
    lbIndex = index;
    lbImg.src = lbImages[lbIndex].src;
    lbImg.alt = lbImages[lbIndex].alt;
    lbPrev.style.display = lbImages.length > 1 ? 'flex' : 'none';
    lbNext.style.display = lbImages.length > 1 ? 'flex' : 'none';
    lightbox.classList.add('open');
  }

  function lbGoTo(index) {
    lbIndex = (index + lbImages.length) % lbImages.length;
    lbImg.src = lbImages[lbIndex].src;
    lbImg.alt = lbImages[lbIndex].alt;
  }

  if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); lbGoTo(lbIndex - 1); });
  if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); lbGoTo(lbIndex + 1); });

  // Gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryImgs = Array.from(galleryItems).map(item => item.querySelector('img'));
  galleryItems.forEach((item, i) => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.gallery-overlay');
    const open = () => openLightbox(galleryImgs, i);
    if (overlay) overlay.addEventListener('click', open);
    if (img) img.addEventListener('click', open);
  });

  lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowLeft') lbGoTo(lbIndex - 1);
    if (e.key === 'ArrowRight') lbGoTo(lbIndex + 1);
  });

  // Expose openLightbox for hero slideshow
  window._openLightbox = openLightbox;
}

// ── Navbar background on scroll ──
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}
