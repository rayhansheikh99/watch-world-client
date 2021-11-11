import React from 'react';
import {Container, Row, Col, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './dashboard.css'
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div className='dash-page'>
        
                <Row>
                    <Col className='sidebar' sm={2}>      
                    {/* <Nav className=''>
                     <div className="sidebar-sticky">
                     <h3>Dashboard</h3>
                   
                        <Link className='dash-menu' to="/home">Add Product</Link>
                        <Link className='dash-menu' to="/home">Make Admin</Link>
                        <Link className='dash-menu' to="/home">Manage Orders</Link>
                        <Link className='dash-menu' to="/home">Log Out</Link>
                        
                        </div>
                    </Nav> */}
                    <Sidebar/>
                       
                    </Col>
                    <Col  sm={10}>
                        this is a test
                    </Col> 
                </Row>

          
        </div>
    );
};
export default Dashboard;