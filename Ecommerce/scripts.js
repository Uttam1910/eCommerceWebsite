document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
        sideNav.style.width = '250px';
    });

    closeBtn.addEventListener('click', () => {
        sideNav.style.width = '0';
    });
});
