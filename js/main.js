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

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'mockup-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
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

  setInterval(() => goTo((current + 1) % slides.length), 4000);
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

  document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.gallery-overlay');
    const openLb = () => { lbImg.src = img.src; lbImg.alt = img.alt; lightbox.classList.add('open'); };
    if (overlay) overlay.addEventListener('click', openLb);
    if (img) img.addEventListener('click', openLb);
  });

  lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}

// ── Navbar background on scroll ──
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}
