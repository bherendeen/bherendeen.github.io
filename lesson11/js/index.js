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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const idahoTowns = towns.filter(towns => (towns.name == 'Fish Haven' || towns.name == 'Preston' ||
            towns.name == 'Soda Springs'));

        idahoTowns.forEach(town => {
            let card = document.createElement('section');
            let containerTxt = document.createElement('div');
            let containerImg = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainFall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = town.name;
            motto.textContent = town.motto;
            yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainFall.textContent = 'Average Rainfall: ' + town.averageRainfall;
            image.setAttribute('src', town.photo);
            image.setAttribute('alt', town.name);

            card.appendChild(containerTxt);
            card.appendChild(containerImg);

            containerTxt.appendChild(h2);
            containerTxt.appendChild(motto);
            containerTxt.appendChild(yearFounded);
            containerTxt.appendChild(population);
            containerTxt.appendChild(rainFall);
            containerImg.appendChild(image);

            document.querySelector('div.cards').appendChild(card);

        });

    });