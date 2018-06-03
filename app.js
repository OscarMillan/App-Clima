const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Ciudad a sacar el clima para obtener el clima',
        demand: true
    }
}).argv;




 let getInfoClima = async (direccion)=>{

    try{
        let coordenadas = await lugar.GetLugarCoordenadas(direccion);
        let temp = await clima.getClima(coordenadas.latitud,coordenadas.longitud);
   
        return `La temperatura en ${direccion} es de: ${temp.clima} grados`;

    }catch(e){
        return `No se pudo determinar el clima en ${direccion}`;

    }
     
 }

 getInfoClima(argv.direccion)
 .then(resp =>{
     console.log(resp);
 })
 .catch(e => {
     console.log(e);
 })