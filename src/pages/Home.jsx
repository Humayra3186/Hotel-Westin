import React from 'react';
import Shit from '../components/Banner/Shit';
import Banner from '../components/Banner/swiper/Banner';
import HotelLocation from '../components/HotelLocation';
import Top from '../components/Top';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HotelLocation></HotelLocation>
         <Top></Top>
         
        </div>
    );
};

export default Home;