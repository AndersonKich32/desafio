const { existsOrError } = require('../config/validate')

module.exports = {

    list(req, res){
        
        const value = req.params.address
        const csvFilePath='world-cities_csv.csv'
        const csv=require('csvtojson')
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{

            try{

                let pesquisa = jsonObj.filter(function(pesq){
                return pesq.name.includes(value) || pesq.country.includes(value) || pesq.subcountry.includes(value)             
                })
        
                existsOrError(pesquisa, 'Error, city ​​does not exist!')
                        
                let resutFinal = pesquisa.map(item=>{
                    const pais = item.country
                    const estado = item.subcountry
                    const cidade = item.name            
                    const geoLocalidadeId = item.geonameid
        
                    return {
                        pais,
                        estado,
                        cidade,               
                        geoLocalidadeId
                    }
                })
                return res.json(resutFinal)    
                
            }
            catch(msg){
                return res.status(404).send(msg);
            }
        })    
    }
}

