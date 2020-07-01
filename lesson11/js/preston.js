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

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f5ff7b7b38b67404ea7851c0ce715ab3';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('weatherDes').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('current-temp').innerHTML = `${jsObject.list[0].main.temp.toFixed(0)}&deg;F`;
        document.getElementById('hum').innerHTML = `${jsObject.list[0].main.humidity}&percnt;`;
        document.getElementById('windSpeed').innerHTML = `${jsObject.list[0].wind.speed} mph`;

        const temp = jsObject.list[0].main.temp;
        const windSpeed = jsObject.list[0].wind.speed;

        let windChill = windChillCalc(temp, windSpeed);

        if (windChill == 'N/A') {
            document.getElementById('windChillOutput').textContent = windChill;
        } else {
            document.getElementById('windChillOutput').innerHTML = windChill + '&deg;F';
        }


        function windChillCalc(temp, windSpeed) {

            if (temp <= 50 && windSpeed > 3) {
                let chillCalc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);
                return Math.round(chillCalc * 10) / 10;
            } else {
                return 'N/A';
            }

        }

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let i = 0;
        forecast.forEach(fiveDayForecast => {
            let d = new Date(fiveDayForecast.dt_txt);
            document.getElementById(`temp${i + 1}`).innerHTML = `${fiveDayForecast.main.temp.toFixed(0)}&deg;F`;
            document.getElementById(`day${i + 1}`).textContent = daysOfWeek[d.getDay()];
            const imagesrc = `https://openweathermap.org/img/wn/${fiveDayForecast.weather[0].icon}@2x.png`;
            const desc = fiveDayForecast.weather[0].description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
            i++;
        });

    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const preston = towns.filter(towns => (towns.name == 'Preston'));
        const prestonEvents = preston[0].events;

        let unorderedList = "<ul>";
        prestonEvents.forEach(eventFunction);
        unorderedList += "</ul>";
        document.querySelector(".events").innerHTML = unorderedList;

        function eventFunction(event) {
            unorderedList += "<li>" + event + "</li>";
        }
    });