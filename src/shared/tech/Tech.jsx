import React, { Fragment } from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';

const Tech = () => {
  return (
    <Fragment>
      <Container className="py-4 text-center" id="tech">
        <h2>👨🏻‍💻 Giphify's Tech Stack</h2>
        <div
          className="my-4 text-muted bg-info mx-auto"
          style={{ padding: '3px', width: '30px', borderRadius: '5px' }}
        ></div>
        <p className="text-muted font-paragraph mb-4">
          Take a look at the technologies Giphihy uses.
        </p>
        <Carousel className="mb-4">
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center bg-dark"
              style={{ height: '500px' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                alt="React"
                style={{
                  width: '200px',
                }}
              />
            </div>
            <Carousel.Caption>
              <h3>React</h3>
              <p>
                The open-source front-end JavaScript library for building user
                interfaces from UI components.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-flex justify-content-center align-items-center bg-dark"
              style={{ height: '500px' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png"
                alt="Web Assembly"
                style={{ width: '200px' }}
              />
            </div>
            <Carousel.Caption>
              <h3>Web Assembly</h3>
              <p>
                The binary instruction format for stack-based virtual machine
                web apps.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p className="text-muted font-paragraph mb-4">
          As you can see, Giphify implements the latest technologies from the
          web to bring an awesome experience to its end-users. Based on the
          power of{' '}
          <a
            href="https://webassembly.org/"
            target="_blank"
            className="text-info"
          >
            Web Assembly
          </a>
          , it can convert files by implementing the C Library{' '}
          <a href="https://ffmpeg.org/" target="_blank" className="text-info">
            FFmpeg
          </a>{' '}
          for video handling.
        </p>
        <p>
          <a href="/#usage">
            <Button variant="outline-info">See how it works</Button>
          </a>
        </p>
      </Container>
    </Fragment>
  );
};

export default Tech;
