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
//nav slide
// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os três elementos que precisamos
    const navToggle = document.getElementById('navToggle'); // Botão hamburger
    const navClose = document.getElementById('navClose');   // Botão 'X'
    const navMenu = document.getElementById('navMenu');     // O menu popup

    // Verifica se os elementos existem antes de adicionar os eventos
    if (navToggle && navMenu) {
        // 1. Quando clicar no 'hamburger', abre o menu
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('is-active');
        });
    }

    if (navClose && navMenu) {
        // 2. Quando clicar no 'X', fecha o menu
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
        });
    }

    // (Bônus) Fecha o menu se o usuário clicar fora dele
    document.addEventListener('click', (event) => {
        // Verifica se o menu está ativo E se o clique NÃO foi dentro do menu
        // E também se o clique NÃO foi no botão de abrir
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (navMenu.classList.contains('is-active') && !isClickInsideMenu && !isClickOnToggle) {
            navMenu.classList.remove('is-active');
        }
    });

});
const swiper = new Swiper('.logo-carousel', {
  loop: true, // Faz o carrossel ser infinito
  
  // AQUI ESTÁ A MÁGICA:
  autoplay: {
    delay: 3000, // Tempo em milissegundos (3 segundos)
    disableOnInteraction: false, // Continua tocando mesmo se o usuário mexer
  },
  
  slidesPerView: 5,
  spaceBetween: 30,
});
