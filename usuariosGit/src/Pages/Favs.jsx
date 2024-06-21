import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

const Favs = () => {
  const [listFavorites, setListFavorites] = useState([]);
  useEffect(() => {
    const favUsers = JSON.parse(localStorage.getItem('favUsers')) || [];
    setListFavorites(favUsers)
  }, []);
  return (
    <div>
      <h1>Your Favorite Users</h1>
      <div>
        {listFavorites.length > 0 ? 
        listFavorites.map(usuario => <Card key={usuario.id} usuario={usuario} /> ) : <p>You don't have favorites</p>}
      </div>
    </div>
  )
}

export default Favs
