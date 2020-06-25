const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=7f3a044384f1f53298096cafcc0b978a';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });

/*
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=&APPID=7f3a044384f1f53298096cafcc0b978a';//api url to pull information from
fetch(apiURL)//to retrieve needed weather info.
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   // document.getElementById('current-temp').textContent = jsObject.main.temp;//show current temp in city

    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//const desc = jsObject.weather[0].description;  // note how we reference the weather array
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc);
  });
  */