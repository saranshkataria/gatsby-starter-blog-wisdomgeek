import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Footer from './footer';
import Header from './header';

library.add(
  faFacebook,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
  faChevronRight
);

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={pageStyles}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
