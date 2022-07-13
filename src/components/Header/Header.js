import React, { useState } from 'react'
import './Header.scss'
import { images } from '../../constants'
import { motion } from 'framer-motion';
import {HiMenuAlt4, HiX} from 'react-icons/hi';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const [visible, setVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }
  
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
                <div className={visible ? 'element-hidden' : 'element-visible'}><p>Sign In</p></div>
                </div>
                <div className="header__right-icons">
                    <img src={images.bag} alt="" />
                    <span>5</span>
                    
                        <style>{` .element-visible { display: block }
                                    .element-hidden { display: none }
                                `}
                        </style>
                    
                    <div className={visible ? 'element-visible' : 'element-hidden'}><input type="text" placeholder="Search..."></input></div>
                    <img  style={{ cursor: isHovering ? 'pointer' : ''}} 
                          onClick={() => setVisible(!visible)}
                          src={images.search} 
                          alt=""
                    />
                </div>
            </div>
        </div>

        {/* HAMBURGER MENU */}
        <div className="header__hamburger">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {
                toggle && (
                    <motion.div
                        whileInView={{ x: [300,0] }}
                        transition={{ duration: 0.85, ease: 'easeInOut' }}
                    >
                        
                            <div className="header__hamburger-right">
                                <HiX onClick={() => setToggle(false)} />
                                <div className="header__hamburger-right-search">
                                    <a href=""><p>Sign In</p></a>

                                    <div className="icon-holder">
                                        <img src={images.bag} alt="" />
                                        <span>5</span>
                                        
                                        <img  style={{ cursor: isHovering ? 'pointer' : ''}} 
                                        onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave} 
                                        onClick={() => setVisible(!visible)}
                                        src={images.search} 
                                        alt=""
                                        />
                                    </div>

                                    <div className={visible ? 'element-visible' : 'element-hidden'}><input type="text" placeholder="Search..."></input></div>
                                </div>
                                
                                <ul>
                                    {['baby apparel', 'baby gifts', 'furniture', 'bedding', 'lighting', 'sale', 'about'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>   
                                        </li>
                                    ))}
                                </ul>
                            </div>

            </motion.div>
                )
            }
        </div>

    </>
  )
}

export default Header