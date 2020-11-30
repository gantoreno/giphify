import React from 'react';
import { Navbar as N, Nav, NavLink, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <N
      className="py-4 sticky-top"
      id="navbar"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <N.Brand href="/#">👾 Giphify</N.Brand>
        <N.Toggle aria-controls="basic-navbar-nav" />
        <N.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/#about">❓ About</Nav.Link>
            <Nav.Link href="/#tech">👨🏻‍💻 Tech Stack</Nav.Link>
            <Nav.Link href="/#usage">📑 Usage</Nav.Link>
            <Nav.Link href="/#convert">🛠 Convert</Nav.Link>
          </Nav>
        </N.Collapse>
      </Container>
    </N>
  );
};

export default Navbar;
