import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Table from '../components/Table';
import booking from "../assets/img/booking.jpg"
import Common from '../common/Common';
import axios from 'axios';

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)


    const { user } = useContext(AuthContext)

    const email = user.email


    useEffect(() => {

        fetchAllBooks()

    }, [user])

    const fetchAllBooks = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/mybookings/${email}`, { withCredentials: true })

        setBookings(data)
        setLoading(false)

    }

    console.log(bookings)



    return (

        <>

            <div >
                <Common img={booking} tittle="Booked Rooms" description='My Bookings'></Common>

                {loading ? <div className='min-h-[15rem] flex justify-center items-center'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div> : <div className="overflow-x-auto  my-[5rem] w-[85%] mx-auto">


                    <table className="table border">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-[1rem]'>Room</th>
                                <th className='text-[1rem]'>Name</th>
                                <th className='text-[1rem]'>Price</th>
                                <th className='text-[1rem]'>Date</th>
                                <th className='text-[1rem]'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                bookings?.map((book, index) => <Table key={book._id} book={book} fetchAllBooks={fetchAllBooks} index={index}></Table>)
                            }


                        </tbody>
                    </table>
                </div>
                }

            </div>





        </>





    );
};

export default Bookings;