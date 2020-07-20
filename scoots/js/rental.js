const apiURL = '../data/rental.json';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const rental = jsObject.rentals;

        let i = 0;
        rental.forEach(vehicleRental => {
            document.getElementById(`vName${i + 1}`).textContent = `${vehicleRental.name}`;
            document.getElementById(`maxPerson${i + 1}`).textContent = `Max Persons: ${vehicleRental.maxPerson}`;
            document.getElementById(`ccEngine${i + 1}`).textContent = `Engine: ${vehicleRental.ccEngine}cc`;
            document.getElementById(`color${i + 1}`).textContent = `Color: ${vehicleRental.color}`;
            document.getElementById(`transmission${i + 1}`).textContent = `Transmission: ${vehicleRental.transmission}`;
            document.getElementById(`resHalf${i + 1}`).textContent = `Half-Day (3hr): $${vehicleRental.reservation[0].halfDay}`;
            document.getElementById(`resFull${i + 1}`).textContent = `Full-Day: $${vehicleRental.reservation[0].fullDay}`;
            document.getElementById(`walkHalf${i + 1}`).textContent = `Half-Day (3hr): $${vehicleRental.walkIn[0].halfDay}`;
            document.getElementById(`walkFull${i + 1}`).textContent = `Full-Day: $${vehicleRental.walkIn[0].fullDay}`;
            document.getElementById(`img${i + 1}`).setAttribute('src', `../img/${vehicleRental.imageurl}.jpg`);
            document.getElementById(`img${i + 1}`).setAttribute('alt', `${vehicleRental.name}`);
            i++;
        });

    });
//
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