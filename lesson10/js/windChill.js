let temp = parseFloat(document.getElementById('current-temp').textContent);
let windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

let windChill = windChillCalc(temp, windSpeed);

if (windChill == 'N/A') {
    document.getElementById('windChillOutput').textContent = windChill;
} else {
    document.getElementById('windChillOutput').innerHTML = windChill + '&deg;F';
}


function windChillCalc(temp, windSpeed) {

    if (temp <= 50 && windSpeed >= 3) {
        let chillCalc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);
        return Math.round(chillCalc * 10) / 10;
    } else {
        return 'N/A';
    }

}