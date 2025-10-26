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
            // Seleciona elementos
const menuIcon = document.querySelector('.fa-notdog-duo');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-sidebar');


// Abrir menu lateral
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuIcon.classList.add('active');
});


// Fechar menu lateral
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuIcon.classList.remove('active');
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
