import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"


const Shit = ({img , tittle , description}) => {
    return (
        <div className='w-[85%] mx-auto'>
            <div
                className="hero h-[34rem]"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{tittle}</h1>
                        <p className="mb-7 mt-4">
                           {description}
                        </p>
                        <Link className='btn-all px-6 py-4 font-bold text-[1.2rem] rounded-md' to={'rooms'}>Take A Tour</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shit;