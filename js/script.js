const hamburger = document.querySelector('#humburger')
const header = document.querySelector('#header')
const navMenu = document.querySelector('#navMenu')

window.onscroll = () => {
    const fixedNav = header.add.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.add.classList.add("navbar-fixed");
        navMenu.add.classList.add("text-black");
    } else {
        header.add.classList.remove("navbar-fixed");
    }
};

const clickHamburger = () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
};



hamburger.addEventListener('click', clickHamburger)