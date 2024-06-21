import React from 'react'
import logoBanner from '../Images/banner.avif'
import b from './styleComponents/banner.module.css'
const Banner = () => {
  return (
    <div>
      <img src={logoBanner} className={b.img}/> 
    </div>
  )
}

export default Banner
