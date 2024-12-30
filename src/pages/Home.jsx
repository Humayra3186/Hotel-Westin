import React from 'react';
import Banner from '../components/Banner/swiper/Banner';
import Top from '../components/Top';
import LocationMap from '../components/LocationMap';
import Food from '../components/Food';
import Facilites from '../components/Facilites';
import Review from '../components/Review';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
          <LocationMap></LocationMap>
         <Top></Top>
         <Facilites></Facilites>
         <Food></Food>
         <Review></Review>
         
         
        </div>
    );
};

export default Home;