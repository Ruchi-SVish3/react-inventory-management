import React, { useState , useEffect } from 'react'
import './Signup.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';





function Login() {

  const navigate = useNavigate()
const [data , setData] = useState({
  email : "",
  password : "",
})

const handleChange = (e)=>{

  setData({...data , [e.target.name]: e.target.value})
}
console.log(data)

  const {register , handleSubmit , formState :{errors}} = useForm()


const handleSignUp = async()=>{

await axios.post( "https://inventorymanagement-cil1.onrender.com/api/v2/user/signIn" , data).then((res)=>{
  localStorage.setItem('token' , res.data.token)
  localStorage.setItem('useremail' , res.data.data)
  navigate('/dashboard')
 })
}


  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>InsiderStock.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:"white"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"white"}}>Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/" style={{color:"white" , fontWeight:"bold"}}>Home</Nav.Link>

            <Nav.Link eventKey={2} href="/signup" style={{color:"white" ,  fontWeight:"bold"}}>
            SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='main'>
         <div className='form'>
         <Form >
          <h2>Login</h2>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control  type="text" placeholder="Enter Email" {...register('email' , {
          required :{value: true , message :"Mandatory Field"},
          minLength :{value : 12, message :"Must be greate than 12 character"},
          maxLength : {value : 30 , message : "Must be less than 30 character"}
        }
       )} onChange={handleChange} />
        <label style={{color:"red"}} >{errors?.email?.message}</label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   type="password" placeholder="Password" {...register('password' , {
          required: {value :true , message:"Mandatory Field"},
          minLength: {value :5 , message : "Must be greate than 5 character"}
        })} onChange={handleChange} />
          <label style={{color:"red"}}>{errors?.password?.message}</label>
      </Form.Group>
     
      <Button variant="primary" type="submit"  onClick={handleSubmit(handleSignUp)}style={{width:"10rem" }}>
       Login
      </Button>
      
    </Form>
         </div>
         <div className='img' ></div>
    </div>
    <div >
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               InsiderStock.com
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Meta
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Google
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Twitter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               India, U.P 10012
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         InsiderStock.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
    </>
  )
}

export default Login