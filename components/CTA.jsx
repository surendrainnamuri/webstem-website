import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <div className="cta">
            <h2>Join Us for an Amazing Experience!</h2>
            <p>Don't miss out on our exclusive offers. Sign up now and be part of our community.</p>
            <div className="cta-buttons">
                <button className="cta-button">Sign Up</button>
                <button className="cta-button">Learn More</button>
            </div>
        </div>
    );
};

export default CTA;