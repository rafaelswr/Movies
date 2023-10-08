import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/" style={{"color":"gold"}}>
                <FontAwesomeIcon icon={faVideoSlash}/>
                Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse>
                <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:"100px"}} navbarScroll>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchlist">Watch List</NavLink> 
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink> 
                </Nav>
                <Button variant="outline-info" className="me-2"> Login </Button>
                <Button variant="outline-info"> Register </Button>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
  )
};

export default Header;
