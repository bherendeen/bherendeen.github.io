const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const preston = towns.filter(towns => (towns.name == 'Preston'));
        const prestonEvents = preston.filter(preston => (preston));
        console.log(prestonEvents);

        preston.forEach(town => {
            let card = document.createElement('section');
            let containerTxt = document.createElement('div');
            let eventTxt = document.createElement('p');

            eventTxt.textContent = town.events;

            card.appendChild(containerTxt);

            containerTxt.appendChild(eventTxt);

            document.querySelector('div.cards').appendChild(card);
        });

    });
/*

let i = 0;
preston.events.forEach(town => {
    let eventTxt = document.createElement('p');

    eventTxt.textContent = town.events[i];


    i++;
});

    document.getElementById('event1').innerHTML = `<p>${town.events[0]}</p>`;
    document.getElementById('event2').innerHTML = `<p>${town.events[1]}</p>`;
    document.getElementById('event3').innerHTML = `<p>${town.events[2]}</p>`;
    */