import React from 'react';
import HeaderMenu from '../Shared/HeaderMenu';
import Footer from '../Shared/Footer';
import About from './About';
import Banner from './Banner';
import Campaign from './Campaign';
import HelpUs from './HelpUs';
import Volunteers from './Volunteers';
import ImageGallery from './ImageGallery';
const LandingPage = () => {
  return (
    <div >
      <HeaderMenu/>
      <Banner/>
      <About/>
      <HelpUs/>
      <Campaign/>
      <Volunteers/>
      <ImageGallery/>
      <br/>
      <Footer/>
    </div>
  );
};

export default LandingPage;