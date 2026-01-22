import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './NeoHero.css';

const NeoHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section className="neo-hero" ref={containerRef} id="home">
            {/* Background Marquee */}
            <div className="neo-marquee-container">
                <motion.div className="neo-marquee" style={{ x }}>
                    <span>CLIMATE ACTION • SÜRDÜRÜLEBİLİRLİK • SECAP • NET ZERO • </span>
                    <span>CLIMATE ACTION • SÜRDÜRÜLEBİLİRLİK • SECAP • NET ZERO • </span>
                </motion.div>
            </div>

            <div className="neo-container">
                <div className="neo-content">
                    <motion.div
                        className="neo-badge"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: -2 }}
                        whileHover={{ rotate: 2, scale: 1.1 }}
                    >
                        NEW GENERATION
                    </motion.div>

                    <h1 className="neo-title">
                        <span className="block-reveal">DAHA TEMİZ</span>
                        <span className="block-reveal highlight-yellow">BİR GELECEK</span>
                        <span className="block-reveal">İÇİN</span>
                    </h1>

                    <p className="neo-description">
                        **SECAPSoft** yerel yönetimlerin süper gücü. Sera gazı emisyonlarını
                        takip et, raporla ve dünyayı kurtar. Hem de hemen şimdi.
                    </p>

                    <div className="neo-buttons">
                        <motion.a
                            href="#demo"
                            className="neo-btn btn-primary"
                            whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                            whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px #000" }}
                        >
                            HEMEN BAŞLA
                        </motion.a>
                        <motion.a
                            href="#features"
                            className="neo-btn btn-secondary"
                            whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                            whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px #000" }}
                        >
                            DAHA FAZLA
                        </motion.a>
                    </div>
                </div>

                <div className="neo-visual">
                    <motion.div
                        className="neo-card card-main"
                        style={{ rotate }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <div className="card-header">
                            <div className="traffic-lights">
                                <span className="light red"></span>
                                <span className="light yellow"></span>
                                <span className="light green"></span>
                            </div>
                            <span>dashboard.exe</span>
                        </div>
                        <div className="card-body">
                            <div className="neo-stat">
                                <span className="label">EMİSYON</span>
                                <span className="value">-24%</span>
                            </div>
                            <div className="neo-chart">
                                <div className="bar" style={{ height: '40%' }}></div>
                                <div className="bar" style={{ height: '70%' }}></div>
                                <div className="bar" style={{ height: '50%' }}></div>
                                <div className="bar highlight" style={{ height: '90%' }}></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="neo-float-box box-1"
                        animate={{ y: [-10, 10, -10], rotate: [5, -5, 5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        🌱
                    </motion.div>

                    <motion.div
                        className="neo-float-box box-2"
                        animate={{ y: [10, -10, 10], rotate: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        ⚡
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NeoHero;
