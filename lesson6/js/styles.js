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
