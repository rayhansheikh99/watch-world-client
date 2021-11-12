import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageProducts = () => {
    const [products, setProducts]=useState([])
   
    // data fetch 
    useEffect(()=>{
        fetch('https://obscure-garden-07693.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    },[])

    const handleDeleteProduct = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://obscure-garden-07693.herokuapp.com/products/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingProducts = products.filter(product => product._id!==id);
                setProducts(remainingProducts);
                
            }
        })
 
    }
        }

    return (
        <div>
              <Row>
                    <Col className='sidebar' sm={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='details package-details' sm={10}>
                    <h4>Products Management</h4>
                    <div className='mt-5 card-design1'>
                    <div><h4>OUR PRODUCTS</h4></div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
                        
                        {
                        products.map(product=>
                        <div> 
                       
                       <Card className="card h-100 card-design">
                            <Card.Img className="img-service d-block" variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><b>Price:</b> {product.price}</ListGroupItem>
                                <ListGroupItem>{product.describe}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            
                            <span className='icon-delete'>
                            <Button className='px-5 btn-design'><FontAwesomeIcon  onClick={()=>handleDeleteProduct(product._id)} className='ms-3 mt-1 me-2' icon={faTrash} />Delete</Button>
                            </span>
                            
                            </Card.Body>
                     </Card>
                     </div>)
                        }
                       
                    </div>
                    </div>
                    </Col> 
                </Row>
        </div>
    );
};

export default ManageProducts;