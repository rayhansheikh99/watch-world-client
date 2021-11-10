import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './products.css'

const Products = (props) => {

    const{_id, name, image, price, describe}=props.product

    return (
        <div>
             <Card className="card h-100 card-design">
                    <Card.Img className="img-service d-block" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Price:</b> {price}</ListGroupItem>
                        <ListGroupItem>{describe}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                  <Link to={`/Shipping`}><Button className='px-5 btn-design'>Buy Now</Button></Link>
                    
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Products;