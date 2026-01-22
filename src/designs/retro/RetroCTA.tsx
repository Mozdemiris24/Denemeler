import React from 'react';
import './RetroCTA.css';

const RetroCTA: React.FC = () => {
    return (
        <section className="retro-cta">
            <div className="retro-cta-content">
                <h2 className="glitch-text">INSERT COIN TO START</h2>
                <div className="retro-btn-wrapper">
                    <button className="retro-start-btn">PRESS START</button>
                    <div className="retro-arrow">▶</div>
                </div>
            </div>
        </section>
    );
};

export default RetroCTA;
