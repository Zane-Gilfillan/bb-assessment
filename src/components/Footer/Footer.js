import React from 'react'
import './Footer.scss'
import { images } from '../../constants'

const Footer = () => {
  return (
    <>
        {/* MAIN FOOTER */}
        <div className="footer__container">
            <div className="footer__container-card">
                <h1>Shop</h1>
                <a href=""><p>baby apparel</p></a>
                <a href=""><p>baby gifts</p></a>
                <a href=""><p>furniture</p></a>
                <a href=""><p>bedding</p></a>
                <a href=""><p>lighting</p></a>
                <a href=""><p>sale</p></a>
            </div>
            <div className="footer__container-card">
                <h1>Service</h1>
                <a href=""><p>contact us</p></a>
                <a href=""><p>order status</p></a>
                <a href=""><p>shipping policy</p></a>
                <a href=""><p>return policy</p></a>
                <a href=""><p>my account</p></a>
                <a href=""><p>faq</p></a>
            </div>
            <div className="footer__container-card">
                <h1>About</h1>
                <a href=""><p>our story</p></a>
                <a href=""><p>baby registry</p></a>
                <a href=""><p>store location</p></a>
                <a href=""><p>reviews</p></a>
                <a href=""><p>news</p></a>
                <a href=""><p>subscribe</p></a>
            </div>
            <div className="footer__container-card">
                <h1>Contact</h1>
                <a href=""><p>4472 Lawn Avenue<br></br><br></br>Western Springs, IL 60658</p></a>
                <a href=""><p>1-708-246-1212</p></a>
                <a href=""><p>Store Hours</p></a>
                <div className="footer__container-card-icons">
                    <i className='facebook'><img src={images.facebook} alt="" /></i>
                    <i className='twitter'><img src={images.twitter} alt="" /></i>
                    <i><img className='instagram' src={images.instagram} alt="" /></i>
                    <i><img className='tiktok' src={images.tiktok} alt="" /></i>
                </div>
            </div>
        </div>

        {/* SUBFOOTER */}

        <div className="subfooter__container">
            <div className="subfooter__container-list">
                <ul>
                    <li><span>©</span>2022 beautiul beginnings. all rights reserved</li>
                </ul>
                <ul>
                    <li><a>Site Map</a></li>
                </ul>
                <ul>
                    <li><a>Privacy Policy</a></li>
                </ul>
                <ul>
                    <li><a>Terms & Conditions</a></li>
                </ul>
            </div>

            <p>Designed and developed by <span>americaneagle.com</span></p>
            <img src={images.logo} alt="" />
        </div>
    </>
  )
}

export default Footer