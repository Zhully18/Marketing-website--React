import React from 'react'
import "./Footer.css"
import facebook from '../Assets/facebook_icon.png'
import twitter from '../Assets/twitter_icon.png'
import linkedin from '../Assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className="content_left">
                <h2>INFIGIO</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quam natus dolor consequuntur, cupiditate labore velit eos accusamus quibusdam, minima dolorem ipsa. Cupiditate doloremque repellat nam, voluptas ipsum odit nihil!</p>
                <div className="footer_social-icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+23499686548</li>
                    <li>contact@email.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer_copyright">Copyright 2024 @Company. All right Reserved</p>
    </div>
  )
}

export default Footer