import React from 'react';
import { motion } from 'framer-motion';
import './BentoFeatures.css';

const BentoFeatures: React.FC = () => {
    return (
        <section className="bento-features">
            <div className="bento-features-container">
                <div className="bento-feature-title">
                    <span className="badge">Platform</span>
                    <h2>Every Tool You Need.</h2>
                    <p>Designed for modern teams.</p>
                </div>

                <div className="bento-features-grid">
                    {/* Feature 1: Analytics */}
                    <motion.div
                        className="bento-box f-analytics"
                        whileHover={{ y: -5 }}
                    >
                        <h3>Analytics</h3>
                        <div className="mock-chart">
                            <div className="bar b1"></div>
                            <div className="bar b2"></div>
                            <div className="bar b3"></div>
                            <div className="bar b4"></div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Automation */}
                    <motion.div
                        className="bento-box f-automation"
                        whileHover={{ y: -5 }}
                    >
                        <div className="icon-circle">⚡</div>
                        <h3>Automation</h3>
                        <p>Set rules, relax.</p>
                    </motion.div>

                    {/* Feature 3: Team */}
                    <motion.div
                        className="bento-box f-team"
                        whileHover={{ y: -5 }}
                    >
                        <div className="avatars">
                            <span className="avatar">A</span>
                            <span className="avatar">B</span>
                            <span className="avatar">C</span>
                        </div>
                        <h3>Team Collab</h3>
                    </motion.div>

                    {/* Feature 4: Cloud */}
                    <motion.div
                        className="bento-box f-cloud"
                        whileHover={{ y: -5 }}
                    >
                        <h3>Cloud Native</h3>
                        <p>Access from anywhere, anytime. 99.9% Uptime.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
