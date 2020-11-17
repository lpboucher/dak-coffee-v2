import React from 'react';

import SEO from '../utils/seo/SEO';
import Contact from '../components/Contact';
import HeroImage from '../components/HeroImage';

const ContactPage = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com" />
        <HeroImage
          imageFile="BlacktableHeader_jfgusd"
          overlayTitle="contact.overlay.title"
          overlayText="contact.overlay.text"
        />
        <Contact />
    </>
  );
}

export default ContactPage;
