import React from 'react';
import {Container, Row, Col, Nav} from "react-bootstrap";
import './dashboard.css'
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div className='dash-page'>
        
                <Row>
                    <Col className='sidebar' sm={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col  sm={10}>
                        <p>Admin Dashboard</p>
                    </Col> 
                </Row>

          
        </div>
    );
};
export default Dashboard;