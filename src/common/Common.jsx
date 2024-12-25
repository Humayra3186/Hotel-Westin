import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import { div } from 'motion/react-client';

const Common = ({img,description,tittle}) => {
    return (
       
             
           <div className='overflow-hidden relative'>
             <motion.div  
            animate={{  scale: [1 , 1.3, 1] }}
            transition={{
                duration: 20,
                
                repeat: Infinity,
                ease: easeInOut,
                
            }}
                className="hero bg-right-bottom bg-cover  w-full h-[12rem] md:h-[17rem]"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-64"></div>
               
            </motion.div>
            <div className="ml-[3rem] md:ml-[5rem] text-neutral-content absolute top-[6rem]">
                    <div className="w-[100%] ">
                    <p className="mb-4 mt-4 font-bold play text-[1.1rem] md:text-[1rem] mx-3 md:mx-0">
                           {description}
                        </p>
                        <h1 className=" play text-5xl md:text-6xl font-bold">{tittle}</h1>
                       
                       
                    </div>
                </div>
           </div>
       
    );
};

export default Common;