console.log("this works");
const API_KEY = config.WEATHER_API_KEY;


let input = document.querySelector(".zipcode");
let btn = document.querySelector(`.search-button`);
let zipcode = document.querySelector(`.zipcode`)

let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");


function getZipCode(event){
    event.preventDefault()
    let Zip_Code = zipcode.value;
    getWeatherData(Zip_Code)
}

// write a function to get weather data
const getWeatherData = (zip) => {
    // store your open weather API Key
    const API_KEY = "[YOUR API KEY HERE]";
    // store the API endpoint and API key
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
        // store the requested data in a variable
        let local_weather_data = data;
        // manipulate the city name content
        CITY_NAME.textContent = getWeatherData.name;
        // process the temperature data before manipulating the content
        let weather_in_celsius = Math.round(
            local_weather_data.main.temp - 273
        );
        // manipulate the temperature content
        CITY_TEMP.textContent = weather_in_celsius + " C"
    });
}

btn.addEventListener('click', getZipCode);