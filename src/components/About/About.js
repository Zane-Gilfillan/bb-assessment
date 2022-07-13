import React from 'react'
import './About.scss'
import { images } from '../../constants'

const About = () => {
  return (
    <>
        <div className="about__container">
            <div className="about__container-statement">
                <h1>we love babies</h1>
                <img src={images.stardiv} alt="" />
                <p>Beautiful Beginnings offers finely crafted baby cribs as well as complete suites of nursery furniture, from traditional to contemporary. All the finest names in crib bedding and baby blankets are featured with thousands of fabrics available to customize your baby crib. We offer everything you need to personalize your baby nursery with one of a kind decor from distinctive lamps, clocks, wall hangings, picture frames and other decorative items.</p>
                <p>To receive a gift from Beautiful Beginnings is a new mom's biggest wish. There are so many unique and beautiful baby gifts to select from including baby burp cloths, designer diaper bags, baby clothes and many baby toys. Whether you are looking for Christening gifts, a baby shower gift, a newborn gift or even a gift for a child's birthday, we have many baby gifts to choose from. Beautiful Beginnings is your one stop shop for all family and friends</p>
                <img src={images.signature} alt="" />
            </div>
        </div>

        <div className="news__letter">
            <div className="news__letter-card">
                <div className="news__letter-form">
                    <h2>newsletter</h2>
                    <h1>Sign-up</h1>
                    <p>Get the latest promotions and speciall offers delivered diretly to you inbox!</p>
                    <div className="news__letter-form-input">
                        <input type="email" placeholder='Your Email' />
                        <img src={images.email} alt="" />
                    </div>
                    <button className='btn__newsletter'>Sign Me Up!</button>
                </div>
                <div className="news__letter-banner">
                    <img src={images.percent} alt="" />
                    <h1>your first order</h1>
                    <h2>when you sign up.</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default About