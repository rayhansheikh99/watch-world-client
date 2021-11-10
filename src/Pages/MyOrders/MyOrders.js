import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './myorders.css'

const MyOrders = () => {
    const {user} = useAuth();
    console.log(user.email)
    
    const [orders, setOrders]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))
        console.log(orders.name)


    },[])

           //delete an order and DELETE Method Apply Here
           const handleDeleteOrder = id =>{
            const proceed = window.confirm("Are you want to delete?")
            if(proceed){
                const url = `http://localhost:5000/orders/${id}`
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
        <div className='mb-5'><h2 className=''>My Booking List</h2></div>
        <div className='d-flex mt-2 order-list'>
        
         <ul>
            
                {
                   
                        orders.map(order => <li
                            key={order._id}
                            >Package Name: {order.packageName} E-mail: {order.email} Phone: {order.phone}
                            <span className='icon-delete'>
                            <FontAwesomeIcon onClick={()=>handleDeleteOrder(order._id)} className='ms-3 mt-1' icon={faTrash} />
                            </span>
                        </li>)
                        
                }
                    
                
               
        </ul>
    </div>
    </div>
    );
};

export default MyOrders;