import React from 'react'
import imgFooter from '../Images/logoGitHub.png'
import f from './styleComponents/footer.module.css'

const Footer = () => {
  return (
    <div className={f.bg}>
      <i className="fa-brands fa-github" style={{color: "#6d7681", fontSize: "30px", margin: '50px'}}></i>
      <p className={f.parrafo}>This page is only for study, is not a real page</p>
    </div>
  )
}

export default Footer
