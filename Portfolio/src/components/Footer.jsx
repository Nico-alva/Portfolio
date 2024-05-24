import React from 'react'
import "../css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    
    <div className='footer'>
      <h4>Mis redes</h4>
      <div className='linkedin'>
        <a href="https://www.linkedin.com/in/nicolas-nahuel-alvarez-7ab712247/" target='_vblank'>
      <FaLinkedin  style={{width:"30px",height:"30px"}}/>
      {' '}
      </a>
      </div>
      <div className='facebook'>
        <a href="https://www.facebook.com/nicolas.alvarez.1232760?mibextid=ZbWKwL" target='_vblank'>
      <FaFacebook style={{width:"30px",height:"30px"}}/>
      {' '}</a>
      </div>
      <div className='insta'>
        <a href="https://www.instagram.com/nicolas_alvarez96?igsh=OGphODB2ZXNsajRo" target='_vblank'>
      <FaInstagramSquare style={{width:"30px",height:"30px"}}/>
      {' '}</a>
      </div>
      <div className='mail'>
        <a href="https://accounts.google.com/SignOutOptions?hl=es&continue=https://mail.google.com/mail/&service=mail&ec=GBRAFw" target='_vblank'>
      <CiMail style={{width:"30px",height:"30px"}} />
      </a>
      </div>
    </div>
  )
}

export default Footer
