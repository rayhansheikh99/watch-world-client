// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebase from '../../../Hooks/useFirebase';
import './login.css'
const Login = () => {

  //login system apply here
  const {loginWithGoogle, handleSignIn, handleEmailChange, handlePasswordChange} = useFirebase();
  const history = useHistory();
  let location = useLocation();
  const redirect_uri = location.state?.from || '/home'
  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result =>{
        history.push(redirect_uri)
    })
       
  }
    return (
        <div className='page-size'>
            <Form className='login-form' onSubmit={handleSignIn}>
              <h3>Please Login</h3><br/>
  <Form.Group className="mb-3 input-size" controlId="formBasicEmail">
    <Form.Control className="input-size" onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
  </Form.Group>
  <Button className='px-5 btn-desing-all' type="submit">
    Login
  </Button><br/>
  <p>or Login with</p>
  <h1 onClick={handleGoogleLogin} className='icon-google'>G</h1><br/>
  
  <Link to="/signup">Create a New Accoount</Link>
</Form>
        </div>
    );
};

export default Login;