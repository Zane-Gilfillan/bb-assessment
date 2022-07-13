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
                            <MDBCarouselElement src={images.slide1} alt='baby sitting on bed' />
                        </div>
                        <div className="hero__banner-one">
                            <p>on sale</p>
                            <h1>Infant Fall Outfits</h1>
                            <img src={images.stardiv} alt="blue line with star" />
                            <h2>Save up to 50%</h2>
                            <button className='hero__btn-one'>Shop Sale</button>
                        </div>
                    </div>

                </MDBCarouselItem>
                <MDBCarouselItem>
                    <div className="slide__two">
                        <div className="hero__image-two">
                            <MDBCarouselElement src={images.slide2} alt='baby sleeping on green pillow'></MDBCarouselElement>
                        </div>
                        <div className="hero__banner-two">
                            <p>brand new</p>
                            <h1>Baby Knit Outfits</h1>
                            <img src={images.stardiv} alt="blue line with star" />
                            <h2>Handmade, soft, comfortable,<br></br> and breathable</h2>
                            <button className='hero__btn-two'>Shop Sale</button>
                        </div>
                    </div>
                </MDBCarouselItem>
                 
                <MDBCarouselItem>
                    <div className="slide__three">
                        <div className="hero__image-three">
                            <MDBCarouselElement src={images.slide3} alt='teddy bear'></MDBCarouselElement>
                        </div>
                        <div className="hero__banner-three">
                            <p>cuddly soft</p>
                            <h1>Plush Stuffed Animals</h1>
                            <img src={images.stardiv} alt="blue line with star" />
                            <h2>Huggable construction and charming design</h2>
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