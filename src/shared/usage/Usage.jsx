import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Usage = () => {
  return (
    <Container className="py-4 text-center" id="usage">
      <h2>📑 How To Use Giphify</h2>
      <div
        className="my-4 text-muted bg-info mx-auto"
        style={{ padding: '3px', width: '30px', borderRadius: '5px' }}
      ></div>
      <p className="text-muted font-paragraph mb-4">
        Using Giphihy is really easy, follow the next steps to get your files up
        and running.
      </p>
      <div className="steps">
        <div className="step">
          <h3>
            Step 1️⃣ - <span className="text-info">Select a file</span>
          </h3>
          <div
            className="my-4 text-muted bg-dark mx-auto"
            style={{ padding: '3px', width: '15px', borderRadius: '5px' }}
          ></div>
          <p className="text-muted font-paragraph mb-4">
            Head down to the{' '}
            <a href="#convert" className="text-info">
              convert
            </a>{' '}
            section, and press the 'Choose File' button. It will open a file
            picker to select a video file.
          </p>
        </div>
        <div className="step">
          <h3>
            Step 2️⃣ - <span className="text-info">Convert the file</span>
          </h3>
          <div
            className="my-4 text-muted bg-dark mx-auto"
            style={{ padding: '3px', width: '15px', borderRadius: '5px' }}
          ></div>
          <p className="text-muted font-paragraph mb-4">
            You'll see the file being displayed in the window, now you can press
            <span className="text-info">convert</span> and the video will get
            converted by the FFmpeg backend utility.
          </p>
        </div>
        <div className="step">
          <h3>
            Step 3️⃣ - <span className="text-info">Download your file</span>
          </h3>
          <div
            className="my-4 text-muted bg-dark mx-auto"
            style={{ padding: '3px', width: '15px', borderRadius: '5px' }}
          ></div>
          <p className="text-muted font-paragraph mb-4">
            You'll see the end result being displayed in the window below the{' '}
            <span className="text-info">convert</span> button. To download it,
            press right-click on the gif, and press 'Save image as...', this
            will open a file window to set the name and choose the location for
            saving it, and voilá! You have successfully converted your file.
          </p>
        </div>
      </div>
      <p>
        <a href="/#convert">
          <Button variant="outline-info">Try it out</Button>
        </a>
      </p>
    </Container>
  );
};

export default Usage;
