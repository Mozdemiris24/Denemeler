import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SwissHero.css';

const SwissHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yOne = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const yTwo = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

    return (
        <section className="swiss-hero" ref={containerRef} id="home">
            {/* Grid Lines Background */}
            <div className="swiss-grid-lines">
                <div className="grid-line vertical v1"></div>
                <div className="grid-line vertical v2"></div>
                <div className="grid-line vertical v3"></div>
                <div className="grid-line horizontal h1"></div>
            </div>

            <div className="swiss-container">
                {/* Quadrant 1: Brand */}
                <div className="swiss-block brand-block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="swiss-logo">SECAP(S)</span>
                        <div className="swiss-meta">
                            <span>EST. 2026</span>
                            <span>TURKEY</span>
                        </div>
                    </motion.div>
                </div>

                {/* Quadrant 2: Headline */}
                <div className="swiss-block title-block">
                    <motion.h1
                        className="swiss-title"
                        style={{ y: yOne }}
                    >
                        <span className="line">CLIMATE</span>
                        <span className="line indent">ACTION</span>
                        <span className="line color-red">PLANNING</span>
                    </motion.h1>
                </div>

                {/* Quadrant 3: Description & CTA */}
                <div className="swiss-block content-block">
                    <div className="swiss-text-wrapper">
                        <p className="swiss-description">
                            Comprehensive solution for sustainable energy
                            and climate action plans. Designed for
                            municipalities committed to a greener future.
                        </p>
                        <motion.a
                            href="#demo"
                            className="swiss-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            EXPLORE PLATFORM →
                        </motion.a>
                    </div>
                </div>

                {/* Quadrant 4: Visual Statement */}
                <div className="swiss-block visual-block">
                    <motion.div
                        className="swiss-circle"
                        style={{ y: yTwo }}
                    >
                        <div className="circle-text">
                            NET ZERO 2030 • NET ZERO 2030 •
                        </div>
                        <div className="stat-number">
                            -35%
                        </div>
                        <div className="stat-label">
                            CO₂ REDUCTION
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SwissHero;
