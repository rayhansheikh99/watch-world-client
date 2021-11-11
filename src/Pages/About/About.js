import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from "../../images/watch-1.jpg"
import './about.css'

const About = () => {
    return (

        // about section

        <div  className='about-page'>
            <Row xs={1} md={2} className="g-4">

                <Col>
                <Card.Img className='' variant="top" src={img} />
                </Col>
                <Col>
                <p>At Watch World we are passionate about watches and this horological passion extends to the corporate culture at our headquarters in Brooklyn, NY. Our team of experts and aficionados live and breathe watches. We are watch collectors too and appreciate the quality of fine timepieces.<br/>At Watch World we're also passionate about offering our customers the very best prices on popular brand-name watches. We directly source top watches from around the globe. We, in turn, bring this directly to you, eliminating the middle man, providing savings to our valued customers. This gives us the buying power to offer authentic, brand new watches at the very best prices.</p> 
                </Col>
                </Row>
           

        </div>
    );
};

export default About;