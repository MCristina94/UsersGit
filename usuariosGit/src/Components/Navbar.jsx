import React from 'react'
import { Link } from 'react-router-dom'
import n from './styleComponents/navbar.module.css'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className={n.bg}>
      <img src={logo} className={n.logo}/>
      <div className={n.container}>
        <Link to={'/'} className={n.tittle}>Home</Link>
        <Link to={'/contact'} className={n.tittle}>Contact</Link>
        <Link to={'/favs'} className={n.tittle}>Favs</Link> 
      </div>
      
    </div>
  )
}

export default Navbar
