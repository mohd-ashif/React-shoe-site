
import React from 'react';
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (

    <>
 

<Navbar bg="light" expand="lg">
      <Container className="Nav">
        
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHr_f2_gkxetGbmAKW4B_kAuqT67x3NKY-TDGF2_9W&s" alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main">
            <Link to={'/menu'}><Nav.Link href='#home'>MENU</Nav.Link></Link>
            <Link to={'/Location'}><Nav.Link href='#location'>LOCATION</Nav.Link></Link>
            <Link to={'/about'}><Nav.Link href='#about'>ABOUT</Nav.Link></Link>
           <Link to={'/contact'}> <Nav.Link>CONTACT</Nav.Link></Link>
            <Button variant="danger" className='btn'>LOGIN</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <Outlet/>


    </>

  
  )
}

export default NavBar