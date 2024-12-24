
import React from 'react';
import logo from "../assets/img/wes-logo.png"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";

const Footer = () => {
    return (
        <div className='bg-[#f5ebe2] '>
            <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>


                {/* col 01 */}
                <div>
                <img className='w-[12rem] h-[8rem]' src={logo} alt="" />
                <p className='text-[0.9rem] text-gray-600'>
                Experience unparalleled luxury at Westin Hotel, a 5-star haven offering world-class amenities and exceptional service. Our elegant rooms and suites are designed to provide ultimate comfort and sophistication.
                </p>
                <div className='flex gap-2 my-7'>
                    <div className='bg-white inline-block py-2 px-2'><FaFacebookF className='text-[#C4A484] '></FaFacebookF></div>
                    <div className='bg-white inline-block py-2 px-2'><IoLogoTwitter className='text-[#C4A484] '></IoLogoTwitter></div>
                    <div className='bg-white inline-block py-2 px-2'><FaWhatsapp className='text-[#C4A484] '></FaWhatsapp></div>
                    <div className='bg-white inline-block py-2 px-2'><FaInstagram className='text-[#C4A484] '></FaInstagram></div>
                    <div className='bg-white inline-block py-2 px-2'><FaYoutube className='text-[#C4A484] '></FaYoutube></div>
                </div>
                </div>

                 {/* col 02 */}
                 <div>
                <h1 className='play text-[1.6rem] mt-[1rem] md:mt-[3rem] mb-[2rem]  text-center font-semibold'>Services</h1>
                <p className='text-center font-semibold text-gray-600 mb-4'>Swimming Pool</p>
                <p className='text-center font-semibold text-gray-600 mb-4'>Restaurant</p>
                <p className='text-center font-semibold text-gray-600 mb-4'>Gaming Zone</p>
                <p className='text-center font-semibold text-gray-600 mb-4'>Tour Consultancy</p>
                </div>


                 {/* col 03 */}
                 <div>
                 <h1 className='play text-[1.6rem] mt-[1rem] md:mt-[3rem] mb-[2rem]  text-center font-semibold'>Contact Us</h1>
                 <div className='flex justify-center items-center gap-4'>
                    <FaPhoneVolume className='text-[#C4A484] text-[2.2rem] '></FaPhoneVolume>
                <div>
                <h1 className='play text-[1.2rem] text-gray-600  text-center font-semibold'>Phone Number</h1>
                <p className='text-center  text-gray-600 mb-4 text-[0.9rem]'>+346-678-235</p>
                </div>
                 </div>

                 <div className='flex justify-center items-center gap-4'>
                    <MdLocalPostOffice className='text-[#C4A484] text-[2.2rem] '></MdLocalPostOffice>
                <div>
                <h1 className='play text-[1.2rem] text-gray-600  text-center font-semibold'>Email Address</h1>
                <p className='text-center  text-gray-600 mb-4 text-[0.9rem]'>westin@email.com</p>
                </div>
                 </div>


                 <div className='flex justify-center items-center gap-4'>
                    <SiOnlyoffice className='text-[#C4A484] text-[2.2rem] '></SiOnlyoffice>
                <div>
                <h1 className='play text-[1.2rem] text-gray-600  text-center font-semibold'>Office Address</h1>
                <p className='text-center  text-gray-600 mb-4 text-[0.9rem]'>Gulshan,Dhaka</p>
                </div>
                 </div>
                </div>

            </div>
            <div className='w-[85%] mx-auto py-[2rem] border-t-2 text-[0.9rem] text-gray-500'>
                <p className='text-center'>Copyright 2024, Westin. All Rights Reserved.</p>

            </div>
        </div>
    );
};

export default Footer;