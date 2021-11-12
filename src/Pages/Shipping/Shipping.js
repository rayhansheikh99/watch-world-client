import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './shipping.css';

const Shipping = () => {
  
    //useform use here and POST Method Apply here
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
        fetch('https://obscure-garden-07693.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div className=''>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name",{ required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Product Name" defaultValue="" {...register("ProductName",{ required: true })} />
                <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Confirm Order</Button>
            </form>
        </div>
    );
};

export default Shipping;