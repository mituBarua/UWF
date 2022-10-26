import React from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import Footer from '../../Shared/Footer';
import Banner from '../Banner';
import Appeals from './Appeals';
const AppealPage = (props) => {
    return (
        <div>
            <HeaderMenu />
            <Banner name="Appeals" />
            <Appeals/>
            <Footer/>
        </div>
    );
};

export default AppealPage;