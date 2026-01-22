import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MonoHero.css';

const MonoHero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section className="mono-hero" id="home" ref={ref}>
            <div className="mono-hero-content">
                <motion.div
                    className="mono-brand"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    SECAP SOFTWARE
                </motion.div>

                <h1 className="mono-title">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        SUSTAINABLE
                    </motion.span>
                    <motion.span
                        className="italic"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    >
                        Elegance
                    </motion.span>
                </h1>

                <motion.div
                    className="mono-image-container"
                    style={{ y }}
                >
                    <div className="mono-image-placeholder"></div>
                </motion.div>

                <div className="mono-footer-hero">
                    <a href="#demo" className="mono-link">DISCOVER COLLECTION</a>
                    <span className="mono-edition">EST. 2026 — ISTANBUL</span>
                </div>
            </div>
        </section>
    );
};

export default MonoHero;
