import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import bed from "../../../assets/img/bed.jpg"
import swimming from "../../../assets/img/swimming.jpg"
import outer from "../../../assets/img/outer.jpg"
import dining from "../../../assets/img/dinning.jpg"
import Shit from '../Shit';
import "./Banner.css"



const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay,  Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Shit
                    img={outer}
                    tittle="Find Your Perfect Stay"
                    description="Explore handpicked hotels and unique accommodations tailored to your preferences. Book your dream getaway with ease and confidence."
                    ></Shit>
                </SwiperSlide>
                <SwiperSlide>
                    
                <Shit
                    img={swimming}
                    tittle="Stay Your Way, Anywhere"
                    description="Discover luxurious resorts, boutique stays, or budget-friendly hotels worldwide. Personalized search for every type of traveler."
                    ></Shit>

                </SwiperSlide>
                <SwiperSlide>
                <Shit
                    img={bed}
                    tittle="Luxury and Comfort, Redefined"
                    description="Dive into a world of curated stays, premium amenities, and hassle-free reservations. Experience travel like never before."
                    ></Shit>
                </SwiperSlide>
                <SwiperSlide>
                <Shit
                    img={dining}
                    tittle="Seamless Booking and Comfort"
                    description="Your journey starts here. Compare top-rated hotels, unlock exclusive deals, and secure your stay with just a few clicks."
                    ></Shit>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Banner;