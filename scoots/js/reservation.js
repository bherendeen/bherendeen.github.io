function vehicleSelect() {
    let x = document.getElementById("rentalVehicle").value;

    const apiURL = '../data/rental.json';

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

            const rental = jsObject.rentals;

            if (x == "Honda Metro Scooter") {
                document.getElementById("name").textContent = `${rental[0].name}`;
            } else if (x == "Honda Dio Scooter") {
                document.getElementById("name").textContent = `${rental[1].name}`;
            } else if (x == "Honda PCX150 Scooter") {
                document.getElementById("name").textContent = `${rental[2].name}`;
            } else if (x == "Honda Pioneer ATV") {
                document.getElementById("name").textContent = `${rental[3].name}`;
            } else if (x == "Jeep Wrangler - 4 door") {
                document.getElementById("name").textContent = `${rental[4].name}`;
            } else {
                document.getElementById("name").textContent = `${rental[5].name}`;
            }

        });
}

function timeSelect() {
    let y = document.getElementById("rentalVehicle").value;
    let z = document.getElementById("timeFrame").value;

    const apiURL = '../data/rental.json';

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {

            const time = jsObject.rentals;

            if (y == "Honda Metro Scooter" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[0].reservation[0].halfDay}`;
            } else if (y == "Honda Metro Scooter" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[0].reservation[0].fullDay}`;
            } else if (y == "Honda Dio Scooter" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[1].reservation[0].halfDay}`;
            } else if (y == "Honda Dio Scooter" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[1].reservation[0].fullDay}`;
            } else if (y == "Honda PCX150 Scooter" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[2].reservation[0].halfDay}`;
            } else if (y == "Honda PCX150 Scooter" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[2].reservation[0].fullDay}`;
            } else if (y == "Honda Pioneer ATV" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[3].reservation[0].halfDay}`;
            } else if (y == "Honda Pioneer ATV" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[3].reservation[0].fullDay}`;
            } else if (y == "Jeep Wrangler - 4 door" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[4].reservation[0].halfDay}`;
            } else if (y == "Jeep Wrangler - 4 door" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[4].reservation[0].fullDay}`;
            } else if (y == "Jeep Wrangler - 2 door" && z == "halfDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[5].reservation[0].halfDay}`;
            } else if (y == "Jeep Wrangler - 2 door" && z == "fullDay") {
                document.getElementById("amount").innerHTML = `&dollar;${time[5].reservation[0].fullDay}`;
            }

        });
}

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