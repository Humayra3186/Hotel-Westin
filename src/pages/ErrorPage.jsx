import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
      

<div className=' min-h-screen w-full'>
        <div className='text-center flex flex-col justify-center items-center'>

        <img className='w-[20rem]' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
           
            <h2 className='mt-4 mb-2 text-[2rem] font-semibold'>404 - Page NOT Found</h2>
            <p className='mb-6 font-bold text-gray-600'>The page you are looking for might have been removed <br /> had it's name changed or is temporary unavailable.....</p>

            <Link to={"/"} className=' py-2 px-4 text-lg rounded-3xl btn text-black'>Back to home</Link>
        </div>
        
    </div>
        </>
       
    );
};

export default ErrorPage;