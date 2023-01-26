const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}