const keyApi = "8a4c2183108a86dcdfab91111e806fe9";

const http = require('http');

const fetch = require('node-fetch');

async function getCurrentWeatherCity(city)
{
    let data = await fetch("http://api.weatherstack.com/current?access_key=" + keyApi + "&query=" + city);
    return (await data.json());
}

exports.getCurrentWeatherCity = getCurrentWeatherCity;