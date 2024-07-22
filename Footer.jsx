import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big .png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo}/>
        <p>TREND</p><p1> SETTER</p1>
      </div>
      <ul className="footer-links">
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon}/>
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon}/>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon}/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ Nishant \ 2024 All Rights
          \ Reserved</p>
      </div>
    </div>
  )
}
export default Footer;
