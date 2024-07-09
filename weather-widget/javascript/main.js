console.log("this works");
const API_KEY = config.WEATHER_API_KEY;

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");

function getWeatherData() {
    const getWeatherData = (zip) => {
    const API_KEY = config.WEATHER_API_KEY;
    const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&APPID=${API_KEY}`
    
    fetch(API_ENDPOINT)    
        .then((response) => response.json())
        .then((data) => {
            let local_weather_data = data;
            CITY_NAME.textContent = local_weather_data.name;
            let weather_in_celsius = Math.round(
                local_weather_data.main.temp - 273
            );
            CITY_TEMP.textContent = weather_in_celsius + " C"
    });
    form.reset();
    input.focus();
}}

const getZipcode = e => {
    e.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipcode);