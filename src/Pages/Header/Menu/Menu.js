import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo/watch-logo.PNG'
import './menu.css'

const Menu = () => {
  // nav menu section 
  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className='nav-color' variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src={logo}
          width="250"
          height="50"
          className="d-inline-block align-top"
        />
  </Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" className='menu-text'>Home</Nav.Link>
      <Nav.Link as={Link} to="/products" className='menu-text'>Products</Nav.Link>
      {user?.email?<Nav.Link as={Link} to="/myorders" className='menu-text'>My Orders</Nav.Link>: ('')}
      {user?.email?<Nav.Link as={Link} to="/review" className='menu-text'>Review</Nav.Link>: ('')}
      {user?.email?<Nav.Link as={Link} to="/payment" className='menu-text'>Payment</Nav.Link>: ('')}
      {/* {user?.email?<Nav.Link as={Link} to="/ordersmanage" className='menu-text'>Manage All Orders</Nav.Link>: ('')}
      {user?.email?<Nav.Link as={Link} to="/addproduct" className='menu-text'>Add Product</Nav.Link>: ('')} */}
      <Nav.Link as={Link} to="/contact" className='menu-text'>Contact Us</Nav.Link>
      
    </Nav>
    <Nav>
      {user?.email?
       <Nav.Link onClick={logOut} as={Link} to="/login" className='me-5 menu-text'>Logout</Nav.Link>:
      <Nav.Link as={Link} to="/login" className='menu-text'>Login</Nav.Link>}
    </Nav>
      <Navbar.Text className='menu-text'>
        Signed in as: {user?.displayName}
      </Navbar.Text>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menu;