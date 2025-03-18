import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './BookshelfCarousel.css'

import dadoes from '../assets/bookshelf/dadoes.jpg';
import purecolour from '../assets/bookshelf/pure colour.jpg';
import intchina from '../assets/bookshelf/interior chinatown.jpg';
import flowers from '../assets/bookshelf/flowers for algernon.jpg';
import kafka from '../assets/bookshelf/kafka on the shore.jpg';
import oewbg from '../assets/bookshelf/oewabg.jpg';
import dsom from '../assets/bookshelf/darker shade of magic.jpg';
import villains from '../assets/bookshelf/if we were villains.webp';

const BookshelfCarousel = () => {
    const images = [dadoes, purecolour, intchina, flowers, kafka, oewbg, dsom, villains];

    return (
        <Swiper
            className="custom-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            slidesPerView={3}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index} className="custom-slide">
                    <img src={img} alt={`Book ${index + 1}`} className="w-full h-auto" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BookshelfCarousel;