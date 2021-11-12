import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './review.css'

const Review = () => {
    const {user} = useAuth();
    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://obscure-garden-07693.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className='details review-page package-details'>
            <h4>Give Your Review</h4>
            <form className="booking-form package-form" onSubmit={handleSubmit(onSubmit)}>
        
                <input defaultValue={user.displayName} {...register("name",{ required: true })} />
                <input placeholder="Give Rating(0-5)" defaultValue="" {...register("rating", { required: true })} />
                <input placeholder="Write Your comment" defaultValue="" {...register("review",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Submit</Button>
            </form>
        </div>
    );
};

export default Review;