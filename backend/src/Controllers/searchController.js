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
                    let nome = pesq.name. toUpperCase()
                    let estado = pesq.country. toUpperCase()
                    let cidade = pesq.subcountry. toUpperCase()
                   
                   if(nome.includes(value. toUpperCase()) || estado.includes(value. toUpperCase()) || cidade.includes(value. toUpperCase()))
                return pesq                 
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

