import React from 'react';
import thankyouImg from '../../../assets/thank-you.png';
const Thankyou = () => {
    return (
        <div className="text-center" style={{backgroundColor: '#f2f2f2',height:'100vh'}}>
            <img className="mt-4" src={thankyouImg} alt="thank-you"/>
        </div>
    );
};

export default Thankyou;