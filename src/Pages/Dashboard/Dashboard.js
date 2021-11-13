import React from 'react';
import {Container, Row, Col, Nav} from "react-bootstrap";
import AllProduct from '../AllProduct/AllProduct';
import './dashboard.css'
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div className='dash-page'>
        
                <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mt-5' md={10} xs={10}>
                    <h3>Welcome to Admin Dashboard</h3>
                    </Col> 
                </Row>

          
        </div>
    );
};
export default Dashboard;