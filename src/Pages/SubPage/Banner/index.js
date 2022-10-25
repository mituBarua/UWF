import React from 'react';
import './style.css';

const Banner = (props) => {
    return (
        <div className="inner-banner">
            <div className="banner-text">
                <h1>{props.name}</h1>
                <p className="banner-p">Home <span>| {props.name}</span></p>
            </div>
        </div>
    );
};

export default Banner;