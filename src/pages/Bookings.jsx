import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Bookings = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
           bookings 
           {name} 
        </div>
    );
};

export default Bookings;