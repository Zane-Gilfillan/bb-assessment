import React from 'react'
import './Showcase.scss'
import { images } from '../../constants'

const Showcase = () => {
  return (
    <>
        {/* TOP SECTION */}
        <div className="featured__products">
            <div className="featured__products-banner">
                <p>THIS MONTH'S</p>
                <h1>Featured <br></br> Products</h1>
                <img src={images.stardiv} alt="blue line with star" />
                <button className='btn__featured'> View All</button>
            </div>
            <div className="featured__products-card-container">
                <div className="card">
                    <img src={images.elephantsleeper} alt="elephant pajamas" />
                    <div className="card__info">
                        <h1>Elephant Sleeper</h1>
                        <p>$48</p>
                    </div>
                </div>
                <div className="card">
                    <img src={images.crib} alt="blue baby crib" />
                    <div className="card__info">
                        <h1>Maple Baby Crib</h1>
                        <p>$899</p>
                    </div>
                </div>
                <div className="card">
                    <img src={images.fox} alt="fox stuffed animal" />
                    <div className="card__info">
                        <h1>Foxy Baby Plush Doll</h1>
                        <p>$32</p>
                    </div>
                </div>
            </div>
        </div>

        {/* MIDDLE SECTION LEFT */}

        <div className="featured__products-middle-left">
            <img src={images.cribbedding} alt="baby sleeping in crib" />
            <div className="featured__products-middle-banner-left">
                <p>SLEEP TIGHT</p>
                <h1>Crib<br></br>Bedding</h1>
                <img src={images.stardiv} alt="blue line with star" />
                <h2>Make sure your little one <br></br> catches all the Z's</h2>
                <button className='btn__middle-blue'>Shop Bedding</button>
            </div>
        </div>
        {/* MIDDLE SECTION RIGHT */}
        <div className="featured__products-middle-right">
            <div className="featured__products-middle-banner-right">
                <p>Cozy Comfortable</p>
                <h1>Children's<br></br>Furniture</h1>
                <img src={images.stardiv} alt="blue line with star" />
                <h2>Unwind and relax<br></br>after playtime</h2>
                <button className='btn__middle-red'>Browse All</button>
            </div>
            <img src={images.furniture} alt="girl reading on couch" />
        </div>

        {/* BOTTOM SECTION */}

        <div className="benefits__container">
            <div className="benefits__container-heading">
                <h1>Beautiul Beginnings</h1>
                <h2>customer benefits</h2>
            </div>
            <div className="benefits__container-content">
                <div className="benefits__container-content-card">
                    <img src={images.stroller} alt="stroller icon" />
                    <h1>10% OFF Registery</h1>
                    <img src={images.stardiv} alt="blue line with star" />
                    <h2>when you enroll with us</h2>
                </div>
                <div className="benefits__container-content-card">
                    <img src={images.box} alt="box icon" />
                    <h1>Free Shipping</h1>
                    <img src={images.stardiv} alt="blue line with star" />
                    <h2>On all orders over $100</h2>
                </div>
                <div className="benefits__container-content-card">
                    <img src={images.gift} alt="gift icon" />
                    <h1>Free Gift Wrapping</h1>
                    <img src={images.stardiv} alt="blue line with star" />
                    <h2>On all gift purchases</h2>
                </div>
            </div>
        </div>

        {/* FINAL IMAGES */}

        <div className="final__img-container">
            <img src={images.babiesleft} alt="mother kissing baby" />
            <img src={images.babiesright} alt="mother snuggling baby" />
        </div>
    </>
  )
}

export default Showcase