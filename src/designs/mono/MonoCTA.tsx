import React from 'react';
import './MonoCTA.css';

const MonoCTA: React.FC = () => {
    return (
        <section className="mono-cta">
            <div className="mono-cta-wrapper">
                <h2>The Art of Sustainability.</h2>
                <a href="#register" className="mono-btn">BEGIN JOURNEY</a>
            </div>
        </section>
    );
};

export default MonoCTA;
