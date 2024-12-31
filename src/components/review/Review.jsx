import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import "./Review.css"
import ReactStars from 'react-stars';

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {


        fetchReviews()

    }, [])

    const fetchReviews = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allReview`)

        setReview(data)

    }
    return (
        <div className='w-[85%] mx-auto mb-8 '>

            <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Reviews</p>
            <div className='flex items-center justify-center mb-[2rem]'>
                <h2 className='play text-[2.2rem] md:text-[2.5rem] font-bold text-gray-600'>Our Client Reviews!</h2>
            </div>


            <div className='shadow-lg border'>
              

                    {/* title */}




                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,

                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {
                            review.map(card =>
                              
                                <SwiperSlide className=' justify-between items-center flex-col md:flex-row rounded-lg pb-6 '> 


<div className='h-[15rem] md:h-[29rem] lg:h-[20rem] w-full  lg:w-[49%] '>
                                <img className='w-full h-full rounded-lg' src={card.img} alt="" />
                            </div>
            
                            <div className='w-full  lg:w-[46%] pl-8'>
                                
                                 <div>

                                    <div className='flex items-center my-12 gap-4'>
                                        <div className='w-10 h-10 '>
                                            <img className='w-full h-full rounded-full' src={card.photo} alt="" />
                                        </div>

                                        <p className='font-bold text-[#745c45]'>{card.name}</p>
                                    </div>

                                    {/* star */}
                                    <div className='flex gap-1 text-[#f7b61e] pb-4'>
                                    <ReactStars
                    count={5}
                    value={card.rate}
                    size={24}
                    color2={'#ffd700'} />
                                    </div>
                                    <FaQuoteLeft className='text-[#745c45]'></FaQuoteLeft>
                                    <p className='py-3'>{card.comment} </p>
                                    <div className='flex justify-end'>
                                        <FaQuoteRight className='text-[#745c45]'></FaQuoteRight>
                                    </div>


                                </div>    </div> </SwiperSlide>
                            )
                        }




                    </Swiper>

            


            </div>


        </div >
    );
};

export default Review;