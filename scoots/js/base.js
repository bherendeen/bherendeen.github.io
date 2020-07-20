const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle-burger');
    });
}

navSlide();
//
const copyright = () => {
    const year = new Date().getFullYear();
    document.querySelector('.copyright').innerHTML = `&copy; ${year} | ~Scoots - All Rights Reserved`;
}

copyright();
//
document.getElementById("lastModified").textContent = document.lastModified;
//
let scrollTop = document.getElementById("scrollTop");

const scrollFunc = () => {
    let y = window.scrollY;
    if (y >= 500) {
        scrollTop.className = "toTop show";
    } else {
        scrollTop.className = "toTop";
    }
};

window.addEventListener("scroll", scrollFunc);