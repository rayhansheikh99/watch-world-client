import React, { useEffect, useState } from 'react';
// import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './allreview.css'

const AllReview = () => {
    const [reviews, setReviews]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))

    },[])
    return (
        <div  className='mt-5 card-design1'>
            <h4>CUSTOMER REVIEW</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            {
                reviews.map(review => <Reviews key={review._id} review={review}/>)
            }
        </div>
        </div>
    );
};

export default AllReview;