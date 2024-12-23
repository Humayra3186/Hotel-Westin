import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Top = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetchAllRooms()

    }, [])

    const fetchAllRooms = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured`)

        setRooms(data)

    }

    console.log(rooms)
    return (
        <div>
            
        </div>
    );
};

export default Top;