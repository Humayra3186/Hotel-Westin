import React from 'react';
import { Map, Marker } from 'pigeon-maps'
import location from "../assets/img/location.png"
import { FaLocationDot } from "react-icons/fa6";
import { Bounce } from 'react-awesome-reveal';

const LocationMap = () => {
    return (
        <div className='   w-[85%] mx-auto'>

            {/* tittle */}
            <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Map To Trace</p>
            <div className='flex items-start justify-center mb-[2rem]'>
                <h2 className='play text-[2.2rem] md:text-[2.5rem] font-bold text-gray-600'>Location Of Our Place !</h2>
              <Bounce triggerOnce={false} duration={1600} delay={0}> <FaLocationDot className='text-[2.9rem] text-[#C4A484]'></FaLocationDot>
              </Bounce>
            </div>

            <Map height={400} defaultCenter={[23.79324, 90.41457]} defaultZoom={17}>
                <Marker width={50} anchor={[23.79324, 90.41457]} />
            </Map>
        </div>
    );
};

export default LocationMap;