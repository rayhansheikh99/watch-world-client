import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { RatingView} from 'react-simple-star-rating'



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
                        <RatingView ratingValue={rating} /* RatingView Props */ />
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Reviews;