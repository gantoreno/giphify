import React, { Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Fragment>
      <Container className="py-4 text-center" id="about">
        <h2>❓ About Giphify</h2>
        <div
          className="my-4 text-muted bg-info mx-auto"
          style={{ padding: '3px', width: '30px', borderRadius: '5px' }}
        ></div>
        <p className="text-muted font-paragraph mb-4">
          Welcome to the latest and greatest video utility of the century.
          Giphify is here to change the video conversion world. It's a powerful
          web-based tool that allows you to easily and almost instantaneously
          convert any type of video file into gifs for your own personal usage.
          <br />
          <br />
          No more using online fake conversion websites, no more bad tools, no
          more waiting for your files to be converted. Giphihy is here to help.
        </p>
        <p>
          <a href="/#tech">
            <Button variant="outline-info">See the tech stack</Button>
          </a>
        </p>
      </Container>
    </Fragment>
  );
};

export default About;
