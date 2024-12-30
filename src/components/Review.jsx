import axios from 'axios';
import React, { useEffect } from 'react';

const Review = () => {

    useEffect(() => {

        
        fetchReviews()

    }, [])

    const fetchReviews = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allReview`)

       console.log(data)

    }
    return (
        <div>
            
        </div>
    );
};

export default Review;