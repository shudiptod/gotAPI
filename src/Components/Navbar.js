import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (

        
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    
                        <Navbar.Brand as={Link} to='/' >Game Of Thrones API</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                                <Nav.Link as={Link} to='/characters'  >Characters</Nav.Link>
                            
                                <Nav.Link as={Link} to='/houses' >Houses</Nav.Link>
                            
                                <Nav.Link as={Link} to='/events'>Events</Nav.Link>
                            
                            
                                <Nav.Link as={Link}  to='/battles' >Battles</Nav.Link>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>









            </Container>
        

    )
}

export default NavBar
