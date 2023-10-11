
import React from 'react';
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (

    <>
 

<Navbar bg="light" expand="lg">
      <Container className="Nav">
        
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHr_f2_gkxetGbmAKW4B_kAuqT67x3NKY-TDGF2_9W&s" alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main">
            <Nav.Link href="#home">MENU</Nav.Link>
            <Nav.Link href="#link">LOCATION</Nav.Link>
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#home">CONTACT</Nav.Link>
            <Button variant="danger" className='btn'>LOGIN</Button>{' '}
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>

  
  )
}

export default NavBar