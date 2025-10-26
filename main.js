const header = document.querySelector('.header-container');
const navBar = document.querySelector('.nav-bar');
// Header scroll event
window.addEventListener('scroll', () => {
  window.scrollY > 0
    ? (header.style.top = '10px')
    : (header.style.top = '32px');
});




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

// Footer current year
document.getElementById('currentYear').innerText = new Date().getFullYear();
// Navbar functionality
class Navbar {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menuToggle = document.getElementById('menu-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.init();
    }

    init() {
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        this.menuToggle.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('active');
            this.animateHamburger();
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenu.classList.remove('active');
                this.resetHamburger();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target) && this.mobileMenu.classList.contains('active')) {
                this.mobileMenu.classList.remove('active');
                this.resetHamburger();
            }
        });
    }

    animateHamburger() {
        const lines = document.querySelectorAll('.hamburger-line');
        if (this.mobileMenu.classList.contains('active')) {
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
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
});
