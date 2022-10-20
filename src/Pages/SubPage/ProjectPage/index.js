import React from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import Footer from '../../Shared/Footer';
import Banner from '../Banner';
import Projects from './Projects'
const ProjectPage = (props) => {
    return (
        <div>
            <HeaderMenu />
            <Banner name="Projects" />
            <Projects/>
            <Footer/>
        </div>
    );
};

export default ProjectPage;