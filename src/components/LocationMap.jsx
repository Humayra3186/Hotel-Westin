import React from 'react';
import { Map, Marker } from 'pigeon-maps'
import location from "../assets/img/location.png"

const LocationMap = () => {
    return (
        <div className='h-[30rem] w-[85%] mx-auto'>

            {/* tittle */}
            <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Map To Trace</p>
            <div className='flex items-center justify-center mb-[2rem]'>
                <h2 className='play text-[2.5rem] font-bold text-gray-600'>Location Of Our Place !</h2>
                <img className='w-[2.5rem] h-[2.5rem]' src={location} alt="" />

            </div>

            <Map height={400} defaultCenter={[23.79324, 90.41457]} defaultZoom={17}>
                <Marker width={50} anchor={[23.79324, 90.41457]} />
            </Map>
        </div>
    );
};

export default LocationMap;