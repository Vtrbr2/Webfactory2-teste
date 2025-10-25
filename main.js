const header = document.querySelector('.header-container');
const navBar = document.querySelector('.nav-bar');
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const navLinks = document.querySelectorAll('.nav-links a');

// Header scroll event
window.addEventListener('scroll', () => {
  window.scrollY > 0
    ? (header.style.top = '10px')
    : (header.style.top = '32px');
});

// Mobile menu icon toggle
menuToggleBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');

  // Change icon
  navBar.classList.contains('active')
    ? (menuToggleBtn.innerHTML = '<i class="fas fa-xmark"></i>')
    : (menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>');
});

// Activate nav link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeNavLink = document.querySelector('#navLinks a.active-link');
    const activeMobNavLink = document.querySelector(
      '#mobNavLinks a.active-link'
    );

    // Remove 'active-link' class
    activeNavLink && activeNavLink.classList.remove('active-link');
    activeMobNavLink && activeMobNavLink.classList.remove('active-link');

    // Add 'active-link' class
    link.classList.add('active-link');
  });
});

// Swiper carousel
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Touch and mouse events
  touchAngle: 45,
  grabCursor: true,

  // Transitions
  speed: 400,

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
  },
});
// ===== ATUALIZAR NAVBAR ATIVA =====
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
// Footer current year
document.getElementById('currentYear').innerText = new Date().getFullYear();

// === TROCA DE TEMA (CLARO / ESCURO) ===
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Verifica tema salvo
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Clique para alternar
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// === MENU RESPONSIVO (NAVBAR) ===
const menuIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // mostra/esconde o menu
  menuIcon.classList.toggle("open");   // animação opcional no ícone
});
