import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='text-center'>
            <h1 className='text-[4rem] text-[#C4A484] font-extrabold  mb-5 '>Oops!</h1>
            <h2 className='mt-4 mb-2 text-[2rem] font-semibold'>404 - Page NOT Found</h2>
            <p className='mb-6 font-bold text-gray-600'>The page you are looking for might have been removed <br /> had it's name changed or is temporary unavailable.....</p>

            <Link to={"/"} className=' py-2 px-4 rounded-3xl bg-[#C4A484] text-white'>Go To HomePage</Link>
        </div>
        
    </div>
    );
};

export default ErrorPage;