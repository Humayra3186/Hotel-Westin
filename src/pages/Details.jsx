import React, { useContext, useEffect, useState } from 'react';
import Common from '../common/Common';
import detail from '../assets/img/details.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../provider/AuthProvider';
import swal from 'sweetalert';



const Details = () => {


    const { user } = useContext(AuthContext)

    const [loading, setLoading] = useState(true)


    const [startDate, setStartDate] = useState(new Date());

    const { id } = useParams()

    //load data
    const [room, setRoom] = useState({})

    useEffect(() => {

        fetchDetails()
        fetchReviews()

    }, [])

    const fetchDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/details/${id}`)

        setRoom(data)
        
        setLoading(false)

    }

    const fetchReviews = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/review/${id}`)

       console.log(data)

    }



   

   



    //handle confirm

    const handleConfirm = () => {

        setLoading(true)

        const email = user.email
        const name = room.name
        const id = room._id
        const price = room.price
        const date = startDate
        const status = "unavailable"
        const img = room.imageUrl
        const data = { email, name, id, price, date, status, img }

        axios.post(`${import.meta.env.VITE_API_URL}/bookings`, data)
            .then(result => {
                setLoading(false)
                fetchDetails()
        
            }

            )
    }

    

    return (
        <div className='bg-base-200 pb-[5rem]'>
            <Common img={detail} tittle="Room's details" description='All Details'></Common>

            {
                loading ? <div className='min-h-screen flex justify-center items-center'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div> : <div className='border bg-white md:flex hover:shadow-xl w-[85%] mx-auto mt-[5rem]' >

                    <div className='overflow-hidden relative md:w-[48%] md:h-[36rem] lg:h-[34rem]'>
                        <img className='w-full  h-full  transition-transform duration-300 ease-in-out transform hover:scale-110' src={room.imageUrl} alt="" />


                    </div>



                    <div className='p-8 md:w-[52%]'>
                        {/* icons */}

                        <h2 className='play text-[1.1rem] font-medium text-gray-600'>{room.category}</h2>
                        <h2 className='play text-[1.6rem] font-bold  text-gray-600'>{room.name}</h2>

                       

                        <p className='text-[1rem] md:text-[0.8rem]   text-gray-500 mt-2'>
                            {
                                room.

                                    longDescription

                            }
                        </p>


                        <div className='border-b pb-3 my-4'>
                            <div>
                                <p className='text-[#C4A484] my-3 font-bold'>Key Features:
                                </p>
                                {
                                    room?.features?.map(feature =>



                                        <li className='list-disc  text-gray-700 text-[0.9rem] '>{feature}</li>
                                    )
                                }

                            </div>
                            <div>
                                <p className='text-[#C4A484] my-3 font-bold'>Common Features:
                                </p>
                                {
                                    room?.cofeatures?.map(feature => <li className='list-disc  text-gray-700 text-[0.9rem] '>{feature}</li>)
                                }
                            </div>

                        </div>

                        <div className=' flex justify-between items-end  '>

                            <p className='text-[#C4A484] text-[1.8rem] font-bold'>$ {room.price} <span className='text-[1rem]'>/ day</span>
                            </p>

                            {
                                room.status === "available" ? <button onClick={() => document.getElementById('my_modal_1').showModal()} className='font-bold text-[#C4A484] text-[1.1rem] py-2 px-4 hover:bg-[#C4A484] hover:text-white '>Book Now</button> : <p className='text-[#c52b20] text-[1.3rem] font-bold'> Unavailable
                                </p>
                            }


                        </div>



                    </div>


                </div>
            }




            {/* modal */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">

                    <h2 className='play text-[1.2rem] font-bold  text-gray-600'>{room.name}</h2>

                    <p className='text-[1rem] md:text-[0.9rem]   text-gray-500 mt-6'>
                        {
                            room.

                                longDescription

                        }
                    </p>



                    <p className=' my-3 text-[#C4A484] font-bold'>Booking date:</p>
                    <br />
                    <DatePicker className='border-2 p-3 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />

                    <p className='text-[#C4A484] text-[1.4rem] mt-4 font-bold'>$ {room.price} <span className='text-[1rem]'>/ day</span>
                    </p>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleConfirm} className="btn-all px-4 py-2">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Details;