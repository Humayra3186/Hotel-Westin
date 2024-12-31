import React from 'react';
import Banner from '../components/Banner/swiper/Banner';
import Top from '../components/Top';
import LocationMap from '../components/LocationMap';
import Food from '../components/Food';
import Facilites from '../components/Facilites';
import Review from '../components/review/Review';



const Home = () => {
    return (
        <div>
         <Banner></Banner>
          <LocationMap></LocationMap>
         <Top></Top>
         <Review></Review>
         <Facilites></Facilites>
         <Food></Food>
        
         
         
        </div>
    );
};

export default Home;