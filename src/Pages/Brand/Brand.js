import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../images/watch-1.jpg'
import img2 from '../../images/watch-2.jpg'
import img3 from '../../images/watch-3.jpg'
import './brand.css'

const Brand = () => {
    return (
        <div className='card-design1 mb-3 mt-3'>
            <h4>SHOP BY BRAND</h4>
            <Row xs={1} md={3} className="g-4 mt-2">
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Img className="img-service d-block" variant="top" src={img1} />
                    <Link to={'/products'}><Button className='px-3 btn-brand'>SHOP NOW</Button></Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Img className="img-service d-block" variant="top" src={img2} />
                    <Link to={'/products'}><Button className='px-3 btn-brand'>SHOP NOW</Button></Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Img className="img-service d-block" variant="top" src={img3} />
                    <Link to={'/products'}><Button className='px-3 btn-brand'>SHOP NOW</Button></Link>
                    </Card.Body>
                </Card>
                </Col>
               
            </Row>
        </div>
    );
};

export default Brand;