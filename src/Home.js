import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css'


import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';


function Home() {
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
            <Nav.Link href="/login" style={{color:"white" , fontWeight:"bold"}}>Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup" style={{color:"white" ,  fontWeight:"bold"}}>
             SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='home-main'>
      <div className='para3'>
      <p>The features of an inventory management system such as physical inventory counting and cycle counting can enhance an organization. With the availability of various kinds of inventory systems, in the current environment the size of a business is not a concern because there are various kinds of systems to suit any business.</p>
      </div>
          <div className='Image'>
            
          </div>
          <div className='para'>
            <p>Inventory is a physical resource that a business holds in their stock with the intention of selling it or transforming it into a more valuable state. The inventory could range from raw materials, finished goods, works in process or maintenance, repair and operation (MRO). The main concept of inventory control is focusing on the process of movements and accountability of inventory. This concept strictly bases on the principle of physical and cycle counting, physical and systematic movement of materials and, good accounting practices.</p>
            <p>In business management, inventory consists of a list of goods and materials held available in stock. Inventory management is the process of specifying the placement and size of the stocked goods within a business whereby the inventory is to be managed at different locations or levels within a facility or within multiple different locations of a supply network to safe guard production against overstocking or running out of goods.</p>
          </div>
    </div>
    <div className='div2'>
         <div className='image'></div>
         <div className='para1'>
            <h3>Management System</h3>
            <p>A management system is an information system that is used by a business to ensure they can manage and fulfill their tasks through a framework of procedures and processes. Typical management systems are used to maintain data within an organization as well as ensuring data is shared accurately, or for the management of services or products offered. A management system could also be defined as the integration of traditional management methods with a computer system to create a tool for strategic and automated information management.</p>
         </div>
    </div>
    <div className='footer'>
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

export default Home