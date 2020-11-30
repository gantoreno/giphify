import React, { Fragment, useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

const Converter = () => {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();

    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const convertToGif = async () => {
    try {
      ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

      await ffmpeg.run('-i', 'test.mp4', '-f', 'gif', 'out.gif');

      const data = ffmpeg.FS('readFile', 'out.gif');
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: 'image/gif' }),
      );

      setGif(url);
    } catch (e) {
      alert(
        "Something went wrong, please make sure you're uploading a valid format file!",
      );
    }
  };

  return (
    <Container className="py-4 text-center" id="convert">
      <h2>🛠 Convert Something</h2>
      <div
        className="my-4 text-muted bg-info mx-auto"
        style={{ padding: '3px', width: '30px', borderRadius: '5px' }}
      ></div>
      <p className="text-muted font-paragraph mb-4">
        Choose a file with any of the{' '}
        <a
          href="https://www.npmjs.com/package/@ffmpeg/ffmpeg?activeTab=readme"
          target="_blank"
          className="text-info"
          noopener="true"
          noreferrer="true"
        >
          supported
        </a>{' '}
        file formats and upload it with the input down below. Then, you can
        press{' '}
        <span className="text-info">
          <strong>convert</strong>
        </span>{' '}
        to convert the file.
      </p>
      <div className="input-group mb-4 w-50 mx-auto">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            onChange={(e) => setVideo(e.target.files?.item(0))}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
      {video && (
        <Fragment>
          <div className="mb-4">
            <video
              controls
              width="250"
              src={URL.createObjectURL(video)}
            ></video>
          </div>
          <Button
            className="mb-4"
            variant="outline-info"
            onClick={() => convertToGif()}
          >
            Convert
          </Button>
        </Fragment>
      )}
      {gif && (
        <div>
          <img src={gif} width="250" />
        </div>
      )}
    </Container>
  );
};

export default Converter;
