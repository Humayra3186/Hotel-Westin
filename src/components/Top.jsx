import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GiBathtub } from "react-icons/gi";
import { IoKey } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { Link } from 'react-router-dom';
import { div } from 'motion/react-client';

const Top = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetchAllRooms()

    }, [])

    const fetchAllRooms = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured`)

        setRooms(data)

    }

    
    return (
        <div >
            <div className='w-[85%] mx-auto '>

                {/* tittle */}
                <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Top-Rated</p>
                <div className='flex items-center justify-center mb-[2rem]'>
                    <h2 className='play text-[2.2rem] md:text-[2.5rem] font-bold text-gray-600'>Our Top-Featured Rooms!</h2>


                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        rooms?.map(room => <div key={room._id} className='border shadow-xl' >

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
                                <div className='text-[1rem] md:text-[0.8rem] text-gray-500  '>
                                    <p className='text-gray-700 font-bold text-[0.9rem]'>Features :</p>
                                    <p>{room.features[0]}</p>
                                    <p>{room.features[1]}</p>
                                </div>
                         

                         
                                <Link to={`details/${room._id}`} className='text-[#C4A484] font-bold hover:bg-[#C4A484] hover:text-white px-5 py-1'> Book Now
                                </Link>
                            </div>




                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Top;