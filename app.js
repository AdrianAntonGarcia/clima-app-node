const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
//clima.getClima(40.750000, -74.000000).then(console.log).catch(err => console.log('Error', err));
//lugar.getLugarLatLng(argv.direccion).then(console.log);


const getInfo = async(direccion) => {
    try {
        const sitio = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(sitio.lat, sitio.lng);
        return `El clima de ${direccion} es de ${temp} grados`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);