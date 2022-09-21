function toggleMobileMenu() {
    let iconOpen = document.querySelector('.menu-icon-open');
    let iconClose = document.querySelector('.menu-icon-close');
    let menu = document.querySelector('.mobile-list');
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
    }
}