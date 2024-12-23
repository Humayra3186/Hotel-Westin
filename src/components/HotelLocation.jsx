
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import location from "../assets/img/location.png"
const HotelLocation = () => {
  const position = [23.79324,  90.41457]
  return (

    <div className='h-[17rem]'>

             {/* tittle */}
      <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Map To Trace</p>
      <div className='flex items-center justify-center mb-[2rem]'>
      <h2 className='play text-[2.5rem] font-bold text-gray-600'>Location Of Our Place !</h2>
        <img className='w-[2.5rem] h-[2.5rem]' src={location} alt="" />
        
      </div>


               {/* map */}


      <MapContainer center={position} zoom={18}  scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            The Westin Hotel,Dhaka
          </Popup>
        </Marker>
      </MapContainer>

    </div>

  );
};

export default HotelLocation;