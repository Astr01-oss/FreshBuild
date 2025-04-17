document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
            header.style.transition = 'background-color 0.5s ease';
        } else {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.2)';
            header.style.boxShadow = 'none';
        }
    });
});

const burgerMenu = document.querySelector('.burger-menu');
const headerNav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    headerNav.classList.toggle('active');
});