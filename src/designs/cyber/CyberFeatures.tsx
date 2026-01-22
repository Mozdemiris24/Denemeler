import React from 'react';
import './CyberFeatures.css';

const CyberFeatures: React.FC = () => {
    return (
        <section className="cyber-features">
            <div className="cyber-container">
                <div className="cyber-grid">
                    <div className="cyber-card">
                        <div className="corner t-l"></div><div className="corner t-r"></div>
                        <div className="corner b-l"></div><div className="corner b-r"></div>
                        <h3>[01] ENCRYPTION</h3>
                        <p>Military grade SECAP data protection.</p>
                    </div>
                    <div className="cyber-card">
                        <div className="corner t-l"></div><div className="corner t-r"></div>
                        <div className="corner b-l"></div><div className="corner b-r"></div>
                        <h3>[02] NEURAL NET</h3>
                        <p>AI prediction models for carbon reduction.</p>
                    </div>
                    <div className="cyber-card">
                        <div className="corner t-l"></div><div className="corner t-r"></div>
                        <div className="corner b-l"></div><div className="corner b-r"></div>
                        <h3>[03] GRID LINK</h3>
                        <p>Direct connection to municipal IoT.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberFeatures;
