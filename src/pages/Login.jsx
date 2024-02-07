import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function LoginPage() {
    const [validated, setValidated] = useState(false);
    const [loginForm,setLoginForm]=useState({
        username:'',password:''
    })
    const handleInput=(e)=>{
        setLoginForm({...loginForm,[e.target.id]:e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!loginForm.password.trim() || !loginForm.username.trim()){
           return setValidated(true)
        };
        console.log('Login form' , loginForm);
      };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}
     className='px-md-0 w-75  mt-5 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-warning fw-bolder'>Username</Form.Label>
        <Form.Control  
        id='username'
         value={loginForm.username} 
         onChange={handleInput} required
          type="text" placeholder="Username..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid username.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='text-warning fw-bolder'>Password</Form.Label>
        <Form.Control 
        id='password'
        value={loginForm.password} 
        onChange={handleInput} required
        type="password" placeholder="Password..." />
        <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      </Form.Group>
      <NavLink style={{color:'goldenrod'}} to={'/register'}>
        Don't Have an Account? Register Now!
      </NavLink>
      <div className="text-center">
      <Button variant="warning" className='w-50 mt-4  ' type="submit">
        Login
      </Button>
      </div>
    </Form>
  );
}

export default LoginPage;