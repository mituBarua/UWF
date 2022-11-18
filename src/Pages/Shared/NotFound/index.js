import React from 'react';
import notFound from '../../../assets/404.png';
const NotFound = () => {
    return (
        <div className="text-center mt-3">
            <img src={notFound} style={{width:'60%'}} alt="not found"/>
        </div>
    );
};

export default NotFound;