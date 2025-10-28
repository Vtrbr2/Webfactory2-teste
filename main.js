// ===== FAQ interativo =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});





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
             //=======    CARROSEL.  ==========



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

       //loader 

// Seleciona os elementos principais
const redirectButton = document.querySelector('.btn.shop-now');
const loaderOverlay = document.querySelector('.loader-overlay');
const loaderText = document.querySelector('.loader-text'); // <-- Seleciona o elemento de texto

// Adiciona o "ouvinte" de clique ao botão
redirectButton.addEventListener('click', function(event) {
  
  // 1. Previne o redirecionamento imediato
  event.preventDefault(); 
  const redirectUrl = this.href;

  // 2. Limpa o texto (caso o usuário clique de novo) e mostra o overlay
  loaderText.innerHTML = '';
  loaderOverlay.style.display = 'flex';

  // --- LÓGICA DE DIGITAÇÃO ---
  
  const textToType = "Redirecionado.....";
  const typingSpeed = 100; // Velocidade em milissegundos por letra (ajuste se quiser)
  let charIndex = 0;

  function type() {
    // Se ainda houver letras para digitar
    if (charIndex < textToType.length) {
      loaderText.innerHTML += textToType.charAt(charIndex);
      charIndex++;
      // Chama a si mesma para digitar a próxima letra
      setTimeout(type, typingSpeed);
    }
  }
  
  // 3. Inicia a digitação
  type();
  
  // --- FIM DA LÓGICA DE DIGITAÇÃO ---

  // 4. Redireciona após o tempo total
  // (A digitação vai demorar 17 * 100ms = 1.7 segundos)
  // O seu tempo de 2 segundos (2000ms) é perfeito.
  setTimeout(function() {
    window.location.href = redirectUrl;
  }, 4000); // Tempo total de espera antes de redirecionar

});

//troca de tema 


// Seleciona o input (checkbox) do botão
const themeSwitch = document.getElementById('theme-switch');

// Adiciona um "ouvinte" para o evento de 'mudança' (clique)
themeSwitch.addEventListener('change', function() {
  // 'this.checked' será 'true' se o modo claro (sol) estiver ativo
  // e 'false' se o modo escuro (lua) estiver ativo.
  
  if (this.checked) {
    // Se marcou (modo claro), adiciona a classe 'light-mode' ao body
    document.body.classList.add('light-mode');
  } else {
    // Se desmarcou (modo escuro), remove a classe 'light-mode' do body
    document.body.classList.remove('light-mode');
  }
});

