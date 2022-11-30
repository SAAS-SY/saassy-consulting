import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ActivityContent.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ActivityContent({ activityContent }) {
    return (
        <div className="activityContent">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {activityContent && activityContent.map((data, index) => {
                    return (
                        <div key={index}>
                            <SwiperSlide><img src={data.imageSrc} alt={data.altText} /></SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}
