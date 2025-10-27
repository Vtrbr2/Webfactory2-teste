// ===== FAQ interativo =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});


// ===== ATUALIZAR NAVBAR ATIVA =====


// Swiper carousel - apenas se existir
const swiperElement = document.querySelector('.swiper');
if (swiperElement) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        touchAngle: 45,
        grabCursor: true,
        speed: 400,

        breakpoints: {
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
        },
    });
}

// Footer current year - apenas se existir
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.innerText = new Date().getFullYear();
    }
//whats flutuante 
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.WhatsApp-flot');
  if (!btn) return;

  // margem mínima da viewport
  const MARGIN = 12;

  // Inicializa posição (se quiser manter o bottom/right originais, pode ajustar aqui)
  // Remove propriedades que podem conflitar (right/bottom) para usar left/top
  btn.style.right = 'auto';
  btn.style.bottom = 'auto';

  // Se o botão ainda não tiver left/top, posiciona no canto inferior direito por padrão
  const rect = btn.getBoundingClientRect();
  if (!btn.style.left && !btn.style.top) {
    const initialLeft = window.innerWidth - rect.width - 40;
    const initialTop = window.innerHeight - rect.height - 40;
    btn.style.left = `${Math.max(MARGIN, initialLeft)}px`;
    btn.style.top  = `${Math.max(MARGIN, initialTop)}px`;
  }

  let isDragging = false;
  let startX = 0, startY = 0, origLeft = 0, origTop = 0, pointerId = null;

  const getFooterTop = () => {
    const footer = document.querySelector('.footer');
    if (!footer) return Infinity;
    return footer.getBoundingClientRect().top;
  };

  const clampPosition = (left, top, elWidth, elHeight) => {
    const footerTop = getFooterTop();
    const maxLeft = window.innerWidth - elWidth - MARGIN;
    // se houver footer, evita descer demais para não cobrir o footer
    const maxTopDefault = window.innerHeight - elHeight - MARGIN;
    const maxTop = footerTop === Infinity ? maxTopDefault : Math.min(maxTopDefault, footerTop - elHeight - 8);

    left = Math.max(MARGIN, Math.min(left, maxLeft));
    top  = Math.max(MARGIN, Math.min(top, maxTop));
    return { left, top };
  };

  btn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    isDragging = true;
    pointerId = e.pointerId;
    btn.setPointerCapture(pointerId);

    startX = e.clientX;
    startY = e.clientY;
    const r = btn.getBoundingClientRect();
    origLeft = r.left;
    origTop = r.top;

    btn.classList.add('dragging');
  });

  document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    // calcula novo left/top
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = origLeft + dx;
    const newTop  = origTop + dy;
    const w = btn.offsetWidth;
    const h = btn.offsetHeight;
    const pos = clampPosition(newLeft, newTop, w, h);

    btn.style.left = `${pos.left}px`;
    btn.style.top  = `${pos.top}px`;
  });

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    try { btn.releasePointerCapture(pointerId); } catch (err) {}
    btn.classList.remove('dragging');

    // snap: encaixa no lado esquerdo ou direito da tela (sem cobrir footer)
    const r = btn.getBoundingClientRect();
    const centerX = r.left + r.width / 2;
    const finalLeft = centerX < window.innerWidth / 2 ? MARGIN : (window.innerWidth - r.width - MARGIN);

    // garante top válido (não cobrir footer)
    const footerTop = getFooterTop();
    const maxTopDefault = window.innerHeight - r.height - MARGIN;
    const maxTop = footerTop === Infinity ? maxTopDefault : Math.min(maxTopDefault, footerTop - r.height - 8);
    const finalTop = Math.max(MARGIN, Math.min(r.top, maxTop));

    // animação suave ao encaixar
    btn.style.transition = 'left 0.22s ease, top 0.22s ease';
    btn.style.left = `${finalLeft}px`;
    btn.style.top  = `${finalTop}px`;

    // remove transition depois da animação
    setTimeout(() => { btn.style.transition = ''; }, 230);
  };

  document.addEventListener('pointerup', onPointerUp);
  document.addEventListener('pointercancel', onPointerUp);



// ===== Menu Hambúrguer =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Ativar link ao rolar =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
