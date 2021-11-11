import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div>

          {/* footer section  */}
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Watch World</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                  <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://twitter.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitterSquare} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faYoutube} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                  </div>
                </div>

                <p className="mt-5">
                  <small>Watch World &copy; All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  
                  <Nav.Link className="footer-menu" as={Link} to="/home#home">Home</Nav.Link>
                  <Nav.Link className="footer-menu" as={Link} to="/products">Products</Nav.Link>
                  <Nav.Link className="footer-menu" as={Link} to="/about#about">About Us</Nav.Link>
                  <Nav.Link className="footer-menu" as={Link} to="/contact#contact">Contact Us</Nav.Link>
            
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the Newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                /> <br/>
                <Button className='mt-1'>Subscribe</Button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </div>
                  <div>
                    <h5 className='ms-2'>+8801885458785</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div className='ms-2'>
                    <p>
                    Road No. 1, Dhanmondi, Dhaka
                      <br /> Dhaka Division, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;