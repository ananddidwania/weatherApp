const axios = require('axios');
const URL = "https://api.openweathermap.org/data/2.5/weather";
const APIKEY = 'f33a484cf794d08d0148764789aaba32';

const getWeatherData = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            APPID: APIKEY,
            units: 'metric'
        }
    });

    return data;
}

export default getWeatherData;