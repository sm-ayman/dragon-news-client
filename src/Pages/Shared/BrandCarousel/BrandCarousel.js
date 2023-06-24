import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bkash from '../../../assets/brands/bkash1.png';
import unicef from '../../../assets/brands/unicef.png';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bkash}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={unicef}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;