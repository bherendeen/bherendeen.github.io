const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=f5ff7b7b38b67404ea7851c0ce715ab3';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('weatherDes').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('current-temp').innerHTML = `Temp: ${jsObject.list[0].main.temp.toFixed(0)}&deg;F`;
        document.getElementById('humidity').innerHTML = `Humidity: ${jsObject.list[0].main.humidity}&percnt;`;
        // img
        let imagesrc = `https://openweathermap.org/img/wn/${jsObject.list[0].weather[0].icon}@2x.png`;
        document.getElementById(`weatherImg`).setAttribute('src', imagesrc);
        document.getElementById(`weatherImg`).setAttribute('alt', jsObject.list[0].weather[0].main);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("12:00:00"));
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        console.log(forecast);
        let i = 0;
        forecast.forEach(fiveDayForecast => {
            let d = new Date(fiveDayForecast.dt_txt);
            document.getElementById(`temp${i + 1}`).innerHTML = `${fiveDayForecast.main.temp.toFixed(0)}&deg;F`;
            document.getElementById(`day${i + 1}`).textContent = daysOfWeek[d.getDay()];
            let imagesrc = `https://openweathermap.org/img/wn/${fiveDayForecast.weather[0].icon}@2x.png`;
            const desc = fiveDayForecast.weather[0].description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);
            i++;
        });

    });