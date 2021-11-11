import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Reviews = (props) => {
    const {name, review, rating}=props.review
    return (
        <div>
             <Card className="card h-100 card-design card2">
                   
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <p> {review}</p>
                        <p>{rating}/5</p>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Reviews;