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
//carrosel
const swiper = new Swiper('.logo-carousel', {
            // Quantidade de slides por visualização (pode ser 'auto')
            slidesPerView: 5,
            
            // Espaço entre os slides
            spaceBetween: 40,
            
            // Loop infinito
            loop: true,

            // Ativa o modo "Free" que não trava em slides (ideal para ticker)
            freeMode: true,

            // Configuração do Autoplay (o que faz ele "passar sozinho")
            autoplay: {
                delay: 1, // Delay de 1 milissegundo entre transições
                disableOnInteraction: false, // Não para de rodar se o usuário mexer
                pauseOnMouseEnter: true, // PAUSA quando o mouse está em cima
            },
            
            // Velocidade da transição (quanto mais alto, mais lento o scroll)
            speed: 4000, // 4 segundos para atravessar

            // Configuração de "Breakpoints" para ser responsivo
            breakpoints: {
                // Quando a tela for menor que 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // Quando a tela for menor que 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // Quando a tela for menor que 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
// ===== EFEITO DE SCROLL (fade-in nos cards e textos) =====
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

       
        // ===== FUNÇÃO DE NOTIFICAÇÃO VISUAL =====
        function showNotification(message) {
            const box = document.getElementById("notification");
            if (!box) return;
            box.textContent = message;
            box.classList.add("show");
            setTimeout(() => box.classList.remove("show"), 3000);
        }
// ===== MENSAGEM AUTOMÁTICA (exemplo) =====
        window.addEventListener("load", () => {
            showNotification("Bem-vindo à AI Web Factory 🚀");
        });
