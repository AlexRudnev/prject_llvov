window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__ul'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger_menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_menu_active');
        menu.classList.toggle('menu__ul_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_menu_active');
            menu.classList.toggle('menu__ul_active');
        })
    })
})