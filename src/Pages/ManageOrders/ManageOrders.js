import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './manageorders.css'

const ManageOrders = () => {

    const [orders, setOrders]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://obscure-garden-07693.herokuapp.com/allorder')
        .then(res=>res.json())
        .then(data=> setOrders(data))


    },[])

       //delete an order
       const handleDeleteOrder = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://obscure-garden-07693.herokuapp.com/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingOrders = orders.filter(order => order._id!==id);
                setOrders(remainingOrders);
            }
        })
 
    }
        }


    return (
        <div className='dash-page'>
             <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mx-auto mt-5'  md={10} xs={10}>
                    <div className=' mb-5'><h2 className=''>Manage All Order</h2></div>
            <div className='d-flex mt-2 order-list-all'>
            
             <ul>
                {
                    //showing data here
                    orders.map(order => <li
                        key={order._id}
                        >Product Name: {order.ProductName} E-mail: {order.email} Phone: {order.phone}
                        <span className='icon-delete'>
                        <FontAwesomeIcon onClick={()=>handleDeleteOrder(order._id)} className='ms-3 mt-1' icon={faTrash} />
                        </span>
                    </li>)
                }
            </ul>
        </div>
                    </Col> 
                </Row>
            
        </div>
    );
};

export default ManageOrders;