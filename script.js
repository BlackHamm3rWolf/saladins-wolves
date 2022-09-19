function toggleMobileMenu() {
    let icon = document.querySelector('.menu-icon')
    let menu = document.querySelector('.mobile-list')
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        icon.style.color = '#5865F2';
    } else {
        icon.style.color = '#fdfdfd'
    }
}