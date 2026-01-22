import React from 'react';
import './SwissCTA.css';

const SwissCTA: React.FC = () => {
    return (
        <section className="swiss-cta">
            <div className="swiss-cta-container">
                <div className="swiss-cta-left">
                    <h2>READY<br />TO START?</h2>
                </div>
                <div className="swiss-cta-right">
                    <p>Join the network of sustainable municipalities.</p>
                    <a href="#" className="swiss-cta-link">CONTACT SALES →</a>
                </div>
            </div>
        </section>
    );
};

export default SwissCTA;
