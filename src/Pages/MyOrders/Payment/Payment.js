import React from 'react';
// import './error.css'
import error from '../../../images/coming-soon.jpg'
const Payment = () => {
    return (
        // error message show 
        <div className='error-container'>
            <img src={error} alt=''></img>
        </div>
    );
};

export default Payment;