"use strict";

//Where should we keep our super-secret keys? Let's try setting up a "keys.js" file to keep locally but tell GitHub to ignore (Gonzo and the crew knocked it out yesterday!)

//Nice - now our keys are locally accessible, but we are avoiding a public exposure on GitHub of our super secret keys

// OpenWeatherAPI

//Has three "hallways" (paths) we can talk to once we have an account:

//"Current Weather" [https://openweathermap.org/current]
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`

// Other information we need:
// `lat=${lat}&$lon={lon}&appid=${API key}`;

//My house lat/long: 29.510358642924487, -98.64660526616521

//Parent's house lat/long: 29.51, -98.65
//Let's see what the complete URL looks like:

console.log(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}`);

// $.get(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}&units=imperial`)
//     .done((data) => console.log(data)
//     )

// Oooo - we looked up the built-in Geocoder - let's get some weather data for a city we want to travel to in the US!

// Nashville

console.log(BASE_CURRENT_WEATHER_URL + `q=Nashville,TN,USA&appid=${WEATHER_MAP_KEY}&units=imperial`);
//


// HOW - do I get this weather into the DOM?

$.get(BASE_CURRENT_WEATHER_URL + `q=Nashville,TN,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => console.log(data))
$.get(BASE_CURRENT_WEATHER_URL + `q=Anaheim,CA,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
    // // current temp:
    // console.log(data.main.temp.toFixed(0));
    // // humidity:
    // console.log(data.main.humidity);
    // // city search result name:
    // console.log(data.name);
    // // Description of weather [e.g., 'overcast']
    // console.log(data.weather[0].description);

    let html = `
    <div>City Searched: ${data.name}</div>
    <div>Current Temp: ${data.main.temp.toFixed(0)}</div>      
    <div>Current Humidity: ${data.main.humidity}</div>
    <div>Current conditions: ${data.weather[0].description}</div>
`

    $("#insert-weather").html(html);
})

//Here's a thing called fetch: ** Wow **; modern way to do AJAX!

// fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_KEY}`)
//     .then((response) => response.json())
//     .then((response) => console.log(response))

//"5 Day Weather"
//"One Call" (asks for a credit card - but we can limit it to 1k calls a day in our dashboard / use a gift card)

