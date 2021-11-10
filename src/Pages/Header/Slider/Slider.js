import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider/slider-1.png'
import slider2 from '../../../images/slider/slider-2.png'
import slider3 from '../../../images/slider/slider-3.jpg'
import './slider.css'

const Slider = () => {
    // home slider here
    return (
        <div>
            <Carousel className='mt-5' variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider1}
                    alt="First slide"
                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider2}
                    alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider3}
                    alt="Third slide"
                    />
                 
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;