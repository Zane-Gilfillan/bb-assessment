import React from 'react';
import './Hero.scss'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';
import { images } from '../../constants'

const Hero = () => {

  return (
    <>
        <MDBCarousel showIndicators dark showControls>
            <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                     <div className="slide__one">
                        <div className="hero__image-one">
                            <MDBCarouselElement src={images.slide1} alt='...' />
                        </div>
                        <div className="hero__banner-one">
                            <p>on sale</p>
                            <h1>Infant Fall Outfits</h1>
                            <img src={images.stardiv} alt="" />
                            <h2>Save up to 50%</h2>
                            <button className='hero__btn-one'>Shop Sale</button>
                        </div>
                    </div>

                </MDBCarouselItem>
                <MDBCarouselItem>
                    <div className="slide__two">
                        <div className="hero__image-two">
                            <MDBCarouselElement src={images.slide2} alt='...'></MDBCarouselElement>
                        </div>
                        <div className="hero__banner-two">
                            <p>on sale</p>
                            <h1>Infant Fall Outfits</h1>
                            <img src={images.stardiv} alt="" />
                            <h2>Save up to 50%</h2>
                            <button className='hero__btn-two'>Shop Sale</button>
                        </div>
                    </div>
                </MDBCarouselItem>
                 
                <MDBCarouselItem>
                    <div className="slide__three">
                        <div className="hero__image-three">
                            <MDBCarouselElement src={images.slide3} alt='...'></MDBCarouselElement>
                        </div>
                        <div className="hero__banner-three">
                            <p>on sale</p>
                            <h1>Infant Fall Outfits</h1>
                            <img src={images.stardiv} alt="" />
                            <h2>Save up to 50%</h2>
                            <button className='hero__btn-three'>Shop Sale</button>
                        </div>
                    </div>
                    
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    </>

  )
}

export default Hero