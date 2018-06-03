const axios = require('axios');

const getClima = async (lat,lng) =>{


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c34c3b3f315808eb8ccb37cdf3667b4e`);
     if (resp == null){
        throw new Error("ha ocurrido un error");
     }

     let clima = resp.data.main.temp;

     return {
         clima : clima
     }

}

module.exports = {
    getClima
}