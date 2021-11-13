import React from 'react';
import './payment.css'
import pay from '../../../images/coming-soon.jpg'
const Payment = () => {
    return (
        // payment message show 
        <div className='error-container'>
            <img className='payment-img' src={pay} alt=''></img>
        </div>
    );
};

export default Payment;