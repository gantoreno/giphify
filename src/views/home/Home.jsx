import React, { Fragment } from 'react';

import Navbar from '../../shared/navbar/Navbar';
import Intro from '../../shared/intro/Intro';
import About from '../../shared/about/About';
import Tech from '../../shared/tech/Tech';
import Usage from '../../shared/usage/Usage';
import Converter from '../../shared/converter/Converter';
import Footer from '../../shared/footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <About />
      <Tech />
      <Usage />
      <Converter />
      <Footer />
    </Fragment>
  );
};

export default Home;
