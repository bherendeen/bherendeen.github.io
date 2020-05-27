// dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// menu
const hamBtn = document.querySelector('.ham');
const nav = document.querySelector('.nav');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('show')
});

// notice
let d = new Date();
let dayOfWeek = d.getDay();

if (dayOfWeek == 5) {
    document.getElementById("notice").style.display = 'block';
} else {
    document.getElementById("notice").style.display = 'none';
}

// Font
// T = Temperature in degrees Fahrenheit | V = Wind velocity in miles per hour
// Wind chill = 35.74 + 0.6215T – 35.75(V ^ 0.16) + 0.4275T(V ^ 0.16)

let currentCondition = 'Sunny';
let highTemp = 30;
let lowTemp = 15;
let windSpeed = 3;

let windChill = windChillCalc(highTemp, windSpeed);

document.getElementById('currentCondition').innerHTML = currentCondition;
document.getElementById('highTemp').innerHTML = highTemp;
document.getElementById('lowTemp').innerHTML = lowTemp;
document.getElementById('windSpeed').innerHTML = windSpeed;
document.getElementById('output').innerHTML = windChill;

function windChillCalc(temp, windSpeed) {

    let chillCalc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);

    return Math.round(chillCalc);

}