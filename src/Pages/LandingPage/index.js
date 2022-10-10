import React from 'react';
import HeaderMenu from '../Shared/HeaderMenu';
import About from './About';
import Banner from './Banner';
import Campaign from './Campaign';
import HelpUs from './HelpUs';
const LandingPage = () => {
  return (
    <div >
      <HeaderMenu/>
      <Banner/>
      <About/>
      <HelpUs/>
      <Campaign/>
    </div>
  );
};

export default LandingPage;