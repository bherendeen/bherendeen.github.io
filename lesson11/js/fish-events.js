const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const fishHaven = towns.filter(towns => (towns.name == 'Fish Haven'));
        const fishHavenEvents = fishHaven[0].events;

        let unorderedList = "<ul>";
        fishHavenEvents.forEach(eventFunction);
        unorderedList += "</ul>";
        document.querySelector(".events").innerHTML = unorderedList;

        function eventFunction(event) {
            unorderedList += "<li>" + event + "</li>";
        }
    });