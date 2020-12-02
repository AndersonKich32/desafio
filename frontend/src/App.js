import React, { useState } from 'react'
import api from './services/api'
import Toastify from './services/toastfy'
import './App.css';
import { FaArrowRight } from 'react-icons/fa'


 
export default function App(){

const [resultado, setResultado] = useState([])
const [city, setCity] = useState('')

async function handleSearch(e){
  e.preventDefault();
  const aux = city
  if(!aux) {
    setResultado([])
    throw Toastify({type:'error', message:'Error, Empty Field!'})
  }
  try{    
   
    await api.get(`/search/${aux}`)
      .then(response =>{
        setResultado(response.data)
      })
      Toastify({type:'success', message:'Successful Search'}) 
  }
  catch(err){
    setResultado([])
    Toastify({type:'error', message:`${err.response.data}`})
  }
  
}

const renderTbodyScroll =()=>{   
  return resultado.map(address =>(
          <tr key={address.geoLocalidadeId}>
              <td>{address.pais}</td>
              <td>{address.estado}</td>
              <td>{address.cidade}</td>
              <td>{address.geoLocalidadeId}</td>
          </tr>
      ))  
 
}

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className='barraDePesquisa'>
          <input type='text' 
                  className='pesquisa'
                  placeholder='Search' 
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  ></input>

          <label className='btn-box'>
            <input type='submit' 
                    className='btn'
                    value=' '
                    ></input>
            <FaArrowRight size={24} color='#4a28ea'/>
          </label>        
        </div>
      </form>

      <div className='box-table'>
        <table className='table'>
          <thead>
              <tr>
                  <td>País</td>
                  <td>Estado</td>
                  <td>Cidade</td>
                  <td>id</td>
              </tr>
          </thead>                   
          <tbody>
            {renderTbodyScroll()}
          </tbody>
        </table>   

      </div>
      <Toastify/>
    </div>
  );
}


