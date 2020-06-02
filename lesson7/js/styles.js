// current date
let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("currentDate").innerHTML = days[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

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