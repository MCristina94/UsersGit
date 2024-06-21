import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Banner from '../Components/Banner'
import h from './stylePages/home.module.css'

const Home = () => {

  const url = 'https://api.github.com/users'
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const consultaUsuarios = async() => {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error ('Hubo error en recibir respuesta');
        }
        const data = await response.json();
          setUsuarios(data)
      }
      catch(error){
        console.error(error)
      }
    }
    consultaUsuarios();
  },[])
  console.log(usuarios);
  return (
    <div>
   
      <h1 className={h.tittle}>Usuarios Git</h1>
      <div className={h.cards}>
        {usuarios && usuarios.map(usuario => <Card key={usuario.id} usuario={usuario}/>)}
      </div>
    </div>
  )
}

export default Home
