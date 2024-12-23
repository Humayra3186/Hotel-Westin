import React from 'react';
import Banner from '../components/Banner/swiper/Banner';
import Top from '../components/Top';
import LocationMap from '../components/LocationMap';
import Food from '../components/Food';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
          <LocationMap></LocationMap>
         <Top></Top>
         <Food></Food>
         
         
        </div>
    );
};

export default Home;