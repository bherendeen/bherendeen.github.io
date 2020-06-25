const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f5ff7b7b38b67404ea7851c0ce715ab3';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);


        document.getElementById('weatherDes').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.list[6].main.temp.toFixed(0);
        document.getElementById('hum').textContent = jsObject.list[0].main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.list[0].wind.speed;


        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        console.log(forecast);

        let i = 0;
        forecast.forEach(fiveDayForecast => {
            let d = new Date(fiveDayForecast.dt_txt);
            document.getElementById(`temp${i + 1}`).innerHTML = `${fiveDayForecast.main.temp.toFixed(0)}&deg;F`;
            document.getElementById(`day${i + 1}`).textContent = daysOfWeek[d.getDay()];
            const imagesrc = `https://openweathermap.org/img/wn/${fiveDayForecast.weather[0].icon}@2x.png`;
            const desc = fiveDayForecast.weather.description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
            i++;
        });

    });
/*
        for (let i = 0; i < forecast.length; i++) {
            document.getElementById(`temp${i + 1}`).textContent = `${forecast[i].main.temp.toFixed(0)}F`;
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather.icon + '.png';
            const desc = jsObject.weather[0].description;

            document.getElementById('imagesrc').textContent = imagesrc;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);

        }
    });
    */
/*
function getDays(day) {
    let date = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = date.getDay();

    dayOfWeek += day;

    return days[dayOfWeek];
}
*/