import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <section>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        fixed='top'
      >
        <Container>
          <Navbar.Brand href='/'>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link className='d-block d-lg-none' href='/'>
                Category
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/cart'>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavBar;
