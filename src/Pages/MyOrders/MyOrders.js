import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './myorders.css'

const MyOrders = () => {
    const {user} = useAuth();
    console.log(user.email)
    
    const [orders, setOrders]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`https://obscure-garden-07693.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        console.log(orders.name)


    },[])

           //delete an order and DELETE Method Apply Here
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
        <div className='page-size-bg'>
        <Row>
        <Col className='sidebar' md={2} xs={2}>      
        <Sidebar/>
           
        </Col>
        <Col className='mt-5 mx-auto' md={10} xs={10}>
        <div className='mb-5'><h2 className=''>My Orders List</h2></div>
        <div className='d-flex mt-2 order-list'>
        
         <ul>
            
                {
                   
                        orders.map(order => <li className='mb-3'
                            key={order._id}
                            >Product Name: {order.ProductName} E-mail: {order.email} Phone: {order.phone} 
                            <span className='icon-delete'>
                            <FontAwesomeIcon onClick={()=>handleDeleteOrder(order._id)} className='ms-3 mt-1' icon={faTrash} />
                            </span>
                            <Button className='ms-2 py-0 px-2'>{order.status}</Button>
                        </li>)
                        
                }
                    
                
               
        </ul>
    </div>
        </Col> 
    </Row>
    </div>

        
    );
};

export default MyOrders;