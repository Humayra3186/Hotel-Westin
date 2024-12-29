import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Common from '../common/Common';
import room from '../assets/img/room.jpg'
import { Link } from 'react-router-dom';
import { MdCleaningServices, MdFastfood } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { IoKey } from 'react-icons/io5';
import { FaLock, FaMusic, FaPhoneAlt } from 'react-icons/fa';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    const [loading , setLoading] = useState(true)
   

    //handle rooms



    useEffect(() => {

        fetchAllRooms()

    }, [])

    const fetchAllRooms = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)

        setRooms(data)
        setLoading(false)

    }

    
    return (
        <div>
            <Common img={room} tittle='All Rooms' description='Our All Rooms'></Common>


            {/* cards */}

            <div className='bg-base-200'>
                {
                    loading? <div className='min-h-screen flex justify-center items-center'>
                                        <span className="loading loading-spinner loading-lg"></span></div>:
  <div className='w-[85%] py-[5rem] md:py-[6rem] mx-auto '>

        
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        {
                            rooms?.map(room => <Link to={`/details/${room._id}`} key={room._id} className='border bg-white hover:shadow-xl' >

                                <div className='overflow-hidden'>
                                    <img className='w-full h-[14rem] transition-transform duration-300 ease-in-out transform hover:scale-110' src={room.imageUrl} alt="" />
                                </div>

                                {/* icons */}
                                <div className='flex justify-center items-center'>
                                    <div className='inline-flex  relative bottom-5 shadow-sm justify-center items-center gap-5 bg-white  py-4 px-4'>
                                        <MdFastfood className='text-gray-500'></MdFastfood>
                                        <GiBathtub className='text-gray-500'></GiBathtub>
                                        <IoKey className='text-gray-500'></IoKey>
                                        <FaPhoneAlt className='text-gray-500'></FaPhoneAlt>
                                        <FaMusic className='text-gray-500'></FaMusic>
                                        <FaLock className='text-gray-500'></FaLock>
                                        <MdCleaningServices className='text-gray-500'></MdCleaningServices>

                                    </div>

                                </div>

                                <h2 className='play text-[1.3rem] font-semibold text-center text-gray-600'>{room.name}</h2>

                                <p className='text-[1rem] md:text-[0.8rem] text-center px-6 text-gray-500 mt-2'>
                                    {
                                        room.
                                            shortDescription

                                    }
                                </p>

                                <div className='mx-4 border-b my-4'>

                                </div>

                                <div className=' flex justify-between pl-5 items-end   mb-5 '>

                                     <p className='text-[#C4A484] font-bold'>Total review : <span className='text-gray-600'>{room.review}</span>
                                     </p>
                                </div>




                            </Link>)
                        }

                    </div>

                </div>
            
                }
              </div>
        </div>
    );
};

export default Rooms;