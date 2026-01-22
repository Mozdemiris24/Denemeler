import React from 'react';
import { motion } from 'framer-motion';
import './BentoHero.css';

const BentoHero: React.FC = () => {
    return (
        <section className="bento-hero" id="home">
            <div className="bento-container">
                {/* Header Section */}
                <motion.div
                    className="bento-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bento-badge">2026 ROADMAP READY</div>
                    <h1 className="bento-title">
                        Platform for Modern <br />
                        <span className="text-gradient">Climate Action.</span>
                    </h1>
                    <p className="bento-subtitle">
                        Automate your SECAP reporting, track emissions in real-time,
                        and collaborate with your team. All in one place.
                    </p>
                    <div className="bento-actions">
                        <a href="#demo" className="btn-bento primary">Get Started</a>
                        <a href="#features" className="btn-bento secondary">View Features</a>
                    </div>
                </motion.div>

                {/* Bento Grid Visuals */}
                <div className="bento-grid">
                    {/* Card 1: Main Stats */}
                    <motion.div
                        className="bento-card card-large"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="card-top">
                            <span className="card-label">Total Emissions</span>
                            <span className="card-value">1,240 <small>tCO2e</small></span>
                        </div>
                        <div className="chart-wave">
                            <svg viewBox="0 0 100 25" preserveAspectRatio="none">
                                <path d="M0,25 L0,15 Q10,5 20,15 T40,15 T60,5 T80,15 T100,5 L100,25 Z" fill="rgba(59, 130, 246, 0.1)" />
                                <path d="M0,15 Q10,5 20,15 T40,15 T60,5 T80,15 T100,5" fill="none" stroke="#3B82F6" strokeWidth="2" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card 2: Status */}
                    <motion.div
                        className="bento-card card-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="status-indicator">
                            <span className="dot pulse"></span>
                            <span>System Operational</span>
                        </div>
                        <div className="uptime-bar">
                            <div className="uptime-fill" style={{ width: '99%' }}></div>
                        </div>
                    </motion.div>

                    {/* Card 3: Map Preview */}
                    <motion.div
                        className="bento-card card-tall"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="card-label">Risk Map</div>
                        <div className="map-dots">
                            <div className="map-dot d1"></div>
                            <div className="map-dot d2"></div>
                            <div className="map-dot d3"></div>
                        </div>
                    </motion.div>

                    {/* Card 4: AI Insight */}
                    <motion.div
                        className="bento-card card-wide"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="ai-badge">✨ AI Insight</div>
                        <p className="ai-text">
                            Energy consumption in public buildings reduced by 12% compared to last month.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoHero;
