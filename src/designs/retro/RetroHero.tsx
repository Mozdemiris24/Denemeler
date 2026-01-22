import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './RetroHero.css';

const RetroHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const sunY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const gridSkew = useTransform(scrollYProgress, [0, 1], ['perspective(500px) rotateX(60deg)', 'perspective(500px) rotateX(45deg)']);

    return (
        <section className="retro-hero" ref={containerRef} id="home">
            {/* Retro Sun */}
            <motion.div className="retro-sun" style={{ y: sunY }}></motion.div>

            {/* Moving Grid Floor */}
            <motion.div
                className="retro-grid"
                style={{ transform: gridSkew }}
            >
                <div className="grid-lines"></div>
            </motion.div>

            {/* Silhouette Mountains */}
            <div className="retro-mountains"></div>

            <div className="retro-content">
                <motion.div
                    className="retro-glitch-text"
                    data-text="SECAPSOFT"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    SECAPSOFT
                </motion.div>

                <h2 className="retro-subtitle">
                    THE FUTURE IS <span className="neon-cyan">NOW</span>
                </h2>

                <p className="retro-description">
                    INITIATE CLIMATE ACTION PROTOCOL. <br />
                    TRACK EMISSIONS. OPTIMIZE ENERGY. SAVE THE PLANET.
                </p>

                <div className="retro-actions">
                    <a href="#demo" className="btn-retro btn-cyan">
                        <span>START_ENGINE</span>
                    </a>
                    <a href="#features" className="btn-retro btn-pink">
                        <span>DATA_LOGS</span>
                    </a>
                </div>

                <div className="retro-stats-bar">
                    <div className="stat-box">
                        <span className="retro-label">LEVEL</span>
                        <span className="retro-value">150+</span>
                    </div>
                    <div className="stat-separator"></div>
                    <div className="stat-box">
                        <span className="retro-label">SCORE</span>
                        <span className="retro-value">100%</span>
                    </div>
                    <div className="stat-separator"></div>
                    <div className="stat-box">
                        <span className="retro-label">CO2</span>
                        <span className="retro-value">-35%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetroHero;
