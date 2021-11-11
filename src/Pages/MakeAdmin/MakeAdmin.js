import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div>
             <Row>
                    <Col className='sidebar' sm={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='details package-details' sm={10}>
                    <h4>Make an Admin</h4>
              
                    </Col> 
                </Row>
            
        </div>
    );
};

export default MakeAdmin;