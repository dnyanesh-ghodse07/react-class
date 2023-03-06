import React from 'react'
import {Instagram,Facebook,Twitter,Mail} from 'react-feather'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
                <div className="social">
                    <Instagram className='icon'/> 
                    <Facebook className='icon'/>
                    <Twitter className='icon'/>
                    <Mail className='icon'/>
                </div>
        </div>
        <div className="footer-main">
            <div className="left">
                <h1>About Us</h1>
                <ul>
                    <li>About Us</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="middle">
                <h1>Contact</h1>
                <ul>
                    <li>Mail : shopper@mail.com</li>
                    <li>Tel : 12341234</li>
                </ul>
            </div>
            <div className="right">
                <h1>Address</h1>
                <address>
                Shppper Limited,
                Buildings ABC,
                Tree Embassy Tech Village,
                Outer W Road, Banana Village,
                West, 560103,
                Maharashtra, India
                Telephone: 123234234
                </address>
            </div>
        </div>
        <div className="footer-bottom">
                <div>
                Copyright @ 2023
                </div> 
        </div>

    </div>
  )
}

export default Footer