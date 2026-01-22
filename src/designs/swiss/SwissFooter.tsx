import React from 'react';
import './SwissFooter.css';

const SwissFooter: React.FC = () => {
    return (
        <footer className="swiss-footer">
            <div className="swiss-footer-grid">
                <div className="col brand">
                    <h3>SECAP(S)</h3>
                </div>
                <div className="col info">
                    <span>EST. 2026</span>
                    <span>TURKEY</span>
                </div>
                <div className="col address">
                    <p>Istanbul Technopark<br />Floor 4, Office 402</p>
                </div>
                <div className="col social">
                    <a href="#">INSTAGRAM</a>
                    <a href="#">LINKEDIN</a>
                </div>
            </div>
        </footer>
    );
};

export default SwissFooter;
