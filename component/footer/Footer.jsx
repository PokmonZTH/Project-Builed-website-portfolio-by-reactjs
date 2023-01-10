import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>TCPCK</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://web.facebook.com/thongchai.pornchaisureesiamkits.3/'><FaFacebook /></a>
        <a href='http://instagram.com/mzx_15/'><AiOutlineInstagram /></a>
        <a href='http://twitter.com'><AiFillTwitterCircle /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TCPCK PROJECT . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
