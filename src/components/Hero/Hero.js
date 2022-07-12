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
                    <MDBCarouselElement src={images.slide1} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src={images.slide2} alt='...'></MDBCarouselElement>
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src={images.slide3} alt='...'></MDBCarouselElement>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    </>

  )
}

export default Hero