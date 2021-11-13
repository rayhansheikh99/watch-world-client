import React from 'react';
import './payment.css'
import pay from '../../../images/coming-soon.jpg'
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
const Payment = () => {
    return (
        // payment message show 



        <div className='mt-5'>
             <Row>
                    <Col className='sidebar mt-3' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mt-5 mx-auto' md={10} xs={10}>
                    <img className='payment-img mt-5' src={pay} alt=''></img>
                    </Col> 
                </Row>
            
        </div>
    );
};

export default Payment;