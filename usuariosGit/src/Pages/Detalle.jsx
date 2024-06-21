import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DetailCard from '../Components/DetailCard'
import Comments from '../Components/Comments';

const Detalle = () => {

  const [user, setUser] = useState({});
  const params = useParams();
  const url = `https://api.github.com/users/${params.id}`

  useEffect(() => {
    infoUser();
  },[])

  const infoUser = async() => {
    try{
      const response = await fetch(url);
      if(!response.ok){throw new Error ('hubo un error al traer el usuario')}
      const data = await response.json();
      setUser(data);
    }
    catch(error){
      console.error(error);
    }
  }

  console.log(user);

  return (
    <div>
      {user && <DetailCard key={user.id} user = {user}/>}
      <Comments/>
    </div>
  )
}

export default Detalle
