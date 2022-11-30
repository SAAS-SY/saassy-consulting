import React from 'react';
import './Listing.scss';
import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Listing = ({ heading, partners, className }) => {
    return (
        <>
            {isMobile ?
                <div>
                    <div className='listing'>
                        <div className='listing-heading'>
                            <h1>{heading}</h1>
                        </div>
                    </div>
                    <div className="image-spacing">
                        <Swiper className="mySwiper">
                            {partners && partners.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <SwiperSlide><img className="slider-image" src={data.imageSrc} alt={data.altText} /></SwiperSlide>
                                    </div>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
                :
                <div className='listing'>
                    <div className='listing-heading'>
                        <h1>{heading}</h1>
                    </div>
                    <div className='listing-types'>
                        {partners && partners.map((data, index) => {
                            return (
                                <div key={index} className={`listing-provided ${className}`}>
                                    <img className={`${className}`} src={data.imageSrc} alt={data.altText} />
                                    {data.partnerName && <h4>{data.partnerName}</h4>}
                                    <p>{data.text}</p>
                                    {data.buttonText && <a href='/services/voip'>{data.buttonText}</a>}
                                </div>
                            )
                        })}
                    </div>
                </div>}
        </>
    )
}

export default Listing;
