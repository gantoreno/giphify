import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <Jumbotron className="bg-dark">
      <Container className="text-center">
        <h1 className="text-light mb-4">👾 Giphify</h1>
        <p className="text-white-50 mb-4">
          The last video to GIF converter you'll ever need.
        </p>
        <div>
          <a href="/#about">
            <Button variant="info">Learn more</Button>
          </a>
          <a href="/#convert">
            <Button className="ml-4" variant="outline-info">
              Convert Something
            </Button>
          </a>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Intro;
