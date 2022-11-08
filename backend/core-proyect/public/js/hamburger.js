let hambuerger = document.querySelector('#hambuerger');
let openHamburger = false;
let navInfo = document.querySelector('#navInfo');
hambuerger.addEventListener('click', (e) => {
    openHamburger = !openHamburger;
    (openHamburger) ? navInfo.classList.replace('nav', 'nav-info'): navInfo.classList.replace('nav-info', 'nav');
})