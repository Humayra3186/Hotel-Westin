import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegHandPointUp } from "react-icons/fa";
import { Bounce } from 'react-awesome-reveal';
import { MdOutlineWatchLater } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Facilites = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Facilities</p>
            <div className='flex items-center justify-center mb-[2rem]'>
                <h2 className='play text-[2.2rem] md:text-[2.5rem] font-bold text-gray-600'>Core Features!</h2>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {/* 01 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>01</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                            <div className='flex gap-2 '>
                                <FaStar className='text-[#C4A484] text-[1.1rem]'></FaStar>
                                <FaStar className='text-[#C4A484] text-[1.1rem]'></FaStar>
                                <FaStar className='text-[#C4A484] text-[1.1rem]'></FaStar>


                            </div>
                            <FaRegHandPointUp className='text-[#C4A484] mt-3 mb-5 ml-2 text-[3.8rem]'></FaRegHandPointUp>
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Having High Rating</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                        Our hotel is consistently rated highly by guests for exceptional service, comfortable accommodations, and unforgettable experiences. Book with confidence knowing you’re choosing a top-rated destination.
                    </p>

                </div>


                {/* 02 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>02</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                           
                            <MdOutlineWatchLater  className='text-[#C4A484] mb-5 text-[5.4rem]'></MdOutlineWatchLater>
                            
                           
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Quiet Hours</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                    Enjoy a peaceful and restful stay with our designated Quiet Hours. During this time, we ensure a serene environment by minimizing noise in common areas and guest rooms, allowing you to relax, recharge.
                    </p>

                </div>



                {/* 03 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>03</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                           
                            <TiLocationOutline className='text-[#C4A484] mb-5 text-[5.4rem]'></TiLocationOutline>
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Best Locations</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                    Experience unparalleled convenience with our hotel's prime locations. Nestled close to top attractions, shopping districts, and transportation hubs, we ensure you're always at the heart of the action.
                    </p>

                </div>


                {/* 04 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>04</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                           
                           
                            <RiDeleteBin2Line className='text-[#C4A484] mb-5 text-[5.4rem]'></RiDeleteBin2Line>
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Free Cancellation</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                    Enjoy peace of mind with our Free Cancellation feature—change your plans without hassle! Book now and stay flexible, knowing you can cancel up to [specific time] before check-in at no cost.
                    </p>

                </div>



                {/* 05 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>05</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                            
                           
                            <MdOutlinePayments  className='text-[#C4A484] mb-5 2 text-[5.4rem]'></MdOutlinePayments>
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Payment Options</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                    Enjoy a hassle-free booking experience with our flexible payment options. We accept a variety of payment methods, including major credit cards, digital wallets, and secure online transfers, ensuring convenience.
                    </p>

                </div>



                {/* 06 */}

                <div className='border p-7 relative hover:shadow-2xl'>
                    <h1 className='text-[5rem] absolute top-0 right-0 play text-[#dce4ec76] font-extrabold'>06</h1>
                    <Bounce triggerOnce={false} duration={1600} delay={0} >
                        <div>
                            
                            <BiSolidOffer className='text-[#C4A484]  mb-5  text-[5.4rem]'></BiSolidOffer>
                        </div>
                    </Bounce>


                    <h2 className='play text-[2rem] font-medium text-gray-600'>Special Offers</h2>

                    <p className='text-[0.9rem]  text-gray-500 mt-5'>
                    Discover our exclusive Special Offers and enjoy unbeatable deals on luxurious stays, dining, and experiences. Whether it’s a weekend escape, family getaway, or romantic retreat.
                    </p>

                </div>


            </div>
        </div>
    );
};

export default Facilites;