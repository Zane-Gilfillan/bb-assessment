import React from 'react'
import './Header.scss'
import { images } from '../../constants'

function Header() {
  return (
    <>
        <div className="header">
                    {/* LEFT HEADER */}
            <div className="header__left">
                <div className="header__left-container">
                    <img src={images.phone} alt="" />
                    <p>Call</p>
                </div>
                <div className="header__left-container">
                    <img src={images.chat} alt="" />
                    <p> Chat</p>
                </div>
            </div>

            {/* CENTER HEADER */}
            <div className="header__center">
                <img src={images.logo} alt="" />
                <div className="header__center-links">
                    <a href=''><p>Baby Apparel</p></a>
                    <a href=''><p>Baby Gifts</p></a>
                    <a href=''><p>Furniture</p></a>
                    <a href=''><p>Bedding</p></a>
                    <a href=''><p>Lighting</p></a>
                    <a href=''><p>SALE</p></a>
                    <a href=''><p>About</p></a>

                </div>
            </div>

            {/* RIGHT HEADER */}
            <div className="header__right">
                <div className="header__right-signin">
                    <p>Sign In</p>
                </div>
                <div className="header__right-icons">
                    <img src={images.bag} alt="" />
                    <img src={images.search} alt="" />
                </div>
            </div>
        </div>

    </>
  )
}

export default Header