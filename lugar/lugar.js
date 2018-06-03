
const axios = require('axios');




const GetLugarCoordenadas =  async (direccion) => {

    let encodedurl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedurl}&key=AIzaSyCquZork3BZarz_MQartaevPMZt0LiydNc`);

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No se encontro direccion para ${direccion}`)
    }

    let locacion =  resp.data.results[0];

    return {
        direccion: locacion.formatted_address,
        latitud: locacion.geometry.location.lat,
        longitud: locacion.geometry.location.lng
    }
    
}

module.exports = {
    GetLugarCoordenadas
}




