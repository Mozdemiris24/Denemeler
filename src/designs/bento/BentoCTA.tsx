import React from 'react';
import './BentoCTA.css';

const BentoCTA: React.FC = () => {
    return (
        <section className="bento-cta">
            <div className="bento-cta-container">
                <div className="bento-cta-card">
                    <div className="content">
                        <h2>Start for free today.</h2>
                        <p>No credit card required. 14-day free trial on Premium plans.</p>
                        <div className="buttons">
                            <button className="btn-primary">Get Started</button>
                            <button className="btn-secondary">View Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoCTA;
