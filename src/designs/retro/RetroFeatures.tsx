import React from 'react';
import './RetroFeatures.css';

const RetroFeatures: React.FC = () => {
    return (
        <section className="retro-features">
            <div className="retro-grid-bg"></div>

            <div className="retro-features-container">
                <h2 className="retro-title-glitch" data-text="SYSTEM MODULES">SYSTEM MODULES</h2>

                <div className="retro-deck">
                    <div className="retro-card cyan">
                        <div className="scanline"></div>
                        <h3>TURBO MODE</h3>
                        <p>Accelerated data processing with 99% efficiency.</p>
                        <div className="retro-stats">SPD: 100% | CPU: 45%</div>
                    </div>

                    <div className="retro-card pink">
                        <div className="scanline"></div>
                        <h3>NEON SYNC</h3>
                        <p>Real-time synchronization across all municipality nodes.</p>
                        <div className="retro-stats">PING: 2ms | UPTIME: 99.9%</div>
                    </div>

                    <div className="retro-card purple">
                        <div className="scanline"></div>
                        <h3>CYBER SEC</h3>
                        <p>Advanced firewall protection against digital threats.</p>
                        <div className="retro-stats">SHIELD: ACTIVE | LOGS: SECURE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetroFeatures;
