import React  from "react";
import "./Nav.css" ;
import { Container,Nav,Navbar} from 'react-bootstrap';

import logo from "./../assits/logo.png";



const Navs=()=>{
  return (
    
   
        <Navbar className="fx" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt=".."/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">abuot Us </Nav.Link>
                    <Nav.Link href="#link">explore Food</Nav.Link>
                    <Nav.Link href="#link">reviews</Nav.Link>
                    <Nav.Link href="#link">faq</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="bttn">9389934838403</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
   
  );
}

export default Navs;
