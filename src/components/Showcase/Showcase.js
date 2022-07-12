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
                <img src={images.stardiv} alt="..." />
                <button className='btn__featured'> View All</button>
            </div>
            <div className="featured__products-card-container">
                <div className="card">
                    <img src={images.elephantsleeper} alt="..." />
                    <div className="card__info">
                        <h1>Elephant Sleeper</h1>
                        <p>$48</p>
                    </div>
                </div>
                <div className="card">
                    <img src={images.crib} alt="..." />
                    <div className="card__info">
                        <h1>Maple Baby Crib</h1>
                        <p>$899</p>
                    </div>
                </div>
                <div className="card">
                    <img src={images.fox} alt="..." />
                    <div className="card__info">
                        <h1>Foxy Baby Plush Doll</h1>
                        <p>$32</p>
                    </div>
                </div>
            </div>
        </div>

        {/* MIDDLE SECTION LEFT */}

        <div className="featured__products-middle-left">
            <img src={images.cribbedding} alt="" />
            <div className="featured__products-middle-banner-left">
                <p>SLEEP TIGHT</p>
                <h1>Crib<br></br>Bedding</h1>
                <img src={images.stardiv} alt="..." />
                <h2>Make sure your little one <br></br> catches all the Z's</h2>
                <button className='btn__middle-blue'>Shop Bedding</button>
            </div>
        </div>
        {/* MIDDLE SECTION RIGHT */}
        <div className="featured__products-middle-right">
            <div className="featured__products-middle-banner-right">
                <p>SLEEP TIGHT</p>
                <h1>Crib<br></br>Bedding</h1>
                <img src={images.stardiv} alt="..." />
                <h2>Make sure your little one <br></br> catches all the Z's</h2>
                <button className='btn__middle-red'>Browse All</button>
            </div>
            <img src={images.furniture} alt="" />
        </div>

        {/* BOTTOM SECTION */}
    </>
  )
}

export default Showcase