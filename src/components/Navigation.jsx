import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="d-none d-sm-inline">Robot Delivery</span>
          <span className="d-inline d-sm-none">RD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/order" className="px-3">Place Order</Nav.Link>
            <Nav.Link as={Link} to="/tracking" className="px-3">Track Delivery</Nav.Link>
            <Nav.Link as={Link} to="/control-panel" className="px-3">Control Panel</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
