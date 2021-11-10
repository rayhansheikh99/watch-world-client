import React from 'react';
import './error.css'
import error from '../../images/404_page_cover.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        // error message show 
        <div className='error-container'>
            <img src={error} alt=''></img>
            <Button className='btn-error' as={Link} to="/home#home">Go Back</Button>
        </div>
    );
};

export default Error;