const axios = require('axios');



const getLugarLatLng = async(direccionArg) => {
    /**
     * Hay que prevenir que se pongan espacios o caracteres extraños
     * en la dirección que se pasa por lo que hay que codificarla
     * y escaparla con el siguiente método
     */
    const encondeUrl = encodeURI(direccionArg);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: {
            'x-rapidapi-key': '6419b4181amsh0e0b6375b5b6bb2p11b8a0jsn150e5d8f8a95',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccionArg }`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat: lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};