import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetchAllRooms()

    }, [])

    const fetchAllRooms = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)

        setRooms(data)

    }

    console.log(rooms)
    return (
        <div>
            rooms
        </div>
    );
};

export default Rooms;