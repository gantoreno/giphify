import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Jumbotron className="mb-0 bg-dark text-light">
      <Container className="text-center">
        <h1 className="mb-4">👾 Giphify</h1>
        <p className="text-white-50 mb-4">
          Copyright Gabriel Moreno &copy; 2020, all rights reserved.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
