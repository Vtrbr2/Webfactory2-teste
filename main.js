// Navbar functionality
class Navbar {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menuToggle = document.getElementById('menu-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.header = document.querySelector('header');
        this.init();
    }

    init() {
        // Scroll effect - único event listener
        window.addEventListener('scroll', () => {
            // Efeito de scroll na navbar
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Efeito de scroll no header (se existir)
            if (this.header) {
                window.scrollY > 0
                    ? (this.header.style.top = '10px')
                    : (this.header.style.top = '32px');
            }
        });

        // Mobile menu toggle
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.mobileMenu.classList.toggle('active');
                this.animateHamburger();
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenu.classList.remove('active');
                this.resetHamburger();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.mobileMenu && 
                !this.navbar.contains(e.target) && 
                this.mobileMenu.classList.contains('active')) {
                this.mobileMenu.classList.remove('active');
                this.resetHamburger();
            }
        });

        // Active link functionality
        this.setupActiveLinks();
    }

    animateHamburger() {
        const lines = document.querySelectorAll('.hamburger-line');
        if (lines.length && this.mobileMenu.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            this.resetHamburger();
        }
    }

    resetHamburger() {
        const lines = document.querySelectorAll('.hamburger-line');
        lines.forEach(line => {
            line.style.transform = 'none';
            line.style.opacity = '1';
        });
    }

    setupActiveLinks() {
        // Add active class to nav links based on current page/section
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active-link'));
                // Add active class to clicked link
                this.classList.add('active-link');
            });
        });

        // Optional: Auto-detect active section on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active-link');
                }
            });
        });
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
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
