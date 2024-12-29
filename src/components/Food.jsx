import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Food = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {

        fetchAllFoods()

    }, [])

    const fetchAllFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`)

        setFoods(data)

    }

   
    return (
        <div className='w-[85%] mx-auto mb-[5rem]'>
            {/* tittle */}
            <p className='text-center play font-bold text-[#af865c] text-[1.1rem] mt-[4rem]'>Food Service</p>
            <div className='flex items-center justify-center mb-[2rem]'>
                <h2 className='play text-[2.2rem] md:text-[2.5rem] font-bold text-gray-600'>Categories Of Food !</h2>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    foods.map(food => <div key={food._id} className='shadow-md'>

                        <div className='md:flex items-center   '>
                            <img className='w-[100%] md:w-[14rem] h-[11rem] md:h-[10rem]' src={food.image
                            } alt="" />

                            <div className='hover:bg-[#C4A484] hover:text-white text-gray-600  flex flex-col justify-center h-[10rem]'>
                                <h2 className='play text-[1.3rem] font-semibold text-center '>{food.name}</h2>
                                <p className='text-[1rem] md:text-[0.8rem] text-center px-6  mt-2'>{food.short_description
                                }</p>
                            </div>
                        </div>


                    </div>)
                }
            </div>




        </div>
    );
};

export default Food;