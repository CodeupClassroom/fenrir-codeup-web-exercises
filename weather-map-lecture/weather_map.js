"use strict";

//Where should we keep our super-secret keys? Let's try setting up a "keys.js" file to keep locally but tell GitHub to ignore

const WEATHER_KEY = "8b97e72cf367ae59745d93ec66b1f8c2";

//Nice - now we have all the keys locally to access, but it won't be as easy for them to be publicly exposed

// OpenWeatherAPI

//Has three "hallways" (paths) we can talk to once we have an account:

//"Current Weather"
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`

// Other information we need:
// `lat=${lat}&$lon={lon}&appid=${API key}`;

//My house long/lat: 29.510358642924487, -98.64660526616521

//Get the DATA!

$.get(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_KEY}`)
    .done((data) => console.log(data))

//Here's a thing called fetch: ** Wow **; modern way to do AJAX!

fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_KEY}`)
    .then((response) => response.json())
    .then((response) => console.log(response))

//"5 Day Weather"
//"One Call" (asks for a credit card - but we can limit it to 1k calls a day in our dashboard / use a gift card)

