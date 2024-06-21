import React, { useEffect, useState } from 'react'
import c from './styleComponents/card.module.css'
import { Link } from 'react-router-dom'

const Card = ({usuario}) => {

  //añadir a lista de favoritos con el boton fav
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favUsers = JSON.parse(localStorage.getItem('favUsers')) || [];
    setIsFavorite(favUsers.some(user => user.id === usuario.id))
  },[usuario.id])

  const handleFavToggle = () =>{
    let favUsers = JSON.parse(localStorage.getItem('favUsers')) || [];
    if(isFavorite){
      //como isFavorite es true, entonces el usuario desea removerlo
      favUsers = favUsers.filter(user => user.id !== usuario.id);
    }else{
      //como isFavorite es false, entonces el usuario desea agregarlo
      favUsers.push(usuario);
    }
    localStorage.setItem('favUsers', JSON.stringify(favUsers));
    setIsFavorite(!isFavorite);
    console.log('------favs-------');
    console.log(favUsers);
    console.log('------favs-------');
  }
  

  return (
    <div className={c.containerCard}>
      <div>
        <h3 className={c.name}>{usuario.login.charAt(0).toUpperCase() + usuario.login.slice(1)}</h3>
        <img src={usuario.avatar_url} className={c.img} />
      </div>
      
      <div className={c.containerButtons}>
        <Link to={'/detail/' + usuario.id}>
          <button className={c.buttonKnowMe} >Know me</button>
        </Link>
        <div className={c.container2Buttons}>
          <button className={c.buttons}>Like</button>
          <button onClick={handleFavToggle} className={c.buttons}>{isFavorite ? 'Remove fav' : 'Add fav'}</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Card
