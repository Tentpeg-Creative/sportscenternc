     document.addEventListener('DOMContentLoaded', function () {
        const toggleMenu = document.querySelector('.toggle-menu');
        const nav = document.querySelector('nav');

        if (toggleMenu && nav) {
            toggleMenu.addEventListener('click', function () {
                nav.classList.toggle('active');
            });
        }
    });

