const axios = require('axios');


const getClima = async(lat, lng) => {

    //la api key se consigue registrandonos en https://home.openweathermap.org/api_keys
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=67a03efadc48315acf206b76f899c8f9&units=metric`);
    return resp.data.main.temp;
};


module.exports = {
    getClima
};