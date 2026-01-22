import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import './NordicHero.css';

const NordicHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(contentRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const bgY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);

    return (
        <section className="nordic-hero" id="home" ref={containerRef}>
            {/* Topographic Pattern Background */}
            <motion.div className="topo-bg" style={{ y: bgY }}>
                <svg className="topo-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="topoPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                            <path d="M0 50 Q25 30 50 50 T100 50" fill="none" stroke="rgba(45, 90, 74, 0.08)" strokeWidth="1" />
                            <path d="M0 70 Q25 50 50 70 T100 70" fill="none" stroke="rgba(45, 90, 74, 0.06)" strokeWidth="1" />
                            <path d="M0 30 Q25 10 50 30 T100 30" fill="none" stroke="rgba(45, 90, 74, 0.05)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topoPattern)" />
                </svg>
            </motion.div>

            {/* Decorative Elements */}
            <div className="nordic-shapes">
                <motion.div
                    className="shape shape-circle"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="shape shape-ring"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="shape shape-dot-grid"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            <div className="nordic-container">
                <motion.div
                    className="nordic-content"
                    ref={contentRef}
                    style={{ y: contentY }}
                >
                    {/* Badge */}
                    <motion.div
                        className="nordic-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-leaf">🌿</span>
                        <span>Sürdürülebilir Gelecek İçin</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="nordic-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="title-serif">Doğayla</span>
                        <span className="title-emphasis">Uyumlu</span>
                        <span className="title-sans">İklim Yönetimi</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="nordic-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        SECAPSoft ile yerel yönetimlerin enerji ve iklim eylem planlarını
                        basit, etkili ve sürdürülebilir bir şekilde yönetin.
                    </motion.p>

                    {/* Feature Pills */}
                    <motion.div
                        className="nordic-pills"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="pill">Emisyon Takibi</span>
                        <span className="pill">SECAP Raporları</span>
                        <span className="pill">Risk Analizi</span>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        className="nordic-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#demo" className="btn-nordic btn-primary">
                            Platformu Keşfet
                        </a>
                        <a href="#contact" className="btn-nordic btn-minimal">
                            İletişime Geç →
                        </a>
                    </motion.div>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    className="nordic-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="visual-card">
                        <div className="card-header">
                            <div className="header-icon">📊</div>
                            <div className="header-text">
                                <span className="header-title">Emisyon Özeti</span>
                                <span className="header-subtitle">2024 Yıllık Rapor</span>
                            </div>
                        </div>

                        <div className="card-chart">
                            <div className="chart-bars">
                                {[
                                    { label: 'Enerji', value: 75, color: '#2d5a4a' },
                                    { label: 'Ulaşım', value: 60, color: '#c4785c' },
                                    { label: 'Bina', value: 45, color: '#8b9a8e' },
                                    { label: 'Atık', value: 30, color: '#d4c5b9' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        className="bar-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    >
                                        <span className="bar-label">{item.label}</span>
                                        <div className="bar-track">
                                            <motion.div
                                                className="bar-fill"
                                                style={{ background: item.color }}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${item.value}%` } : {}}
                                                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                                            />
                                        </div>
                                        <span className="bar-value">{item.value}%</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="footer-stat">
                                <span className="stat-value">-18%</span>
                                <span className="stat-label">Yıllık Azalma</span>
                            </div>
                            <div className="footer-stat">
                                <span className="stat-value">A+</span>
                                <span className="stat-label">Performans</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className="floating-tag tag-1"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span>🌱</span> Karbon Nötr
                    </motion.div>

                    <motion.div
                        className="floating-tag tag-2"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <span>⚡</span> %35 Tasarruf
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-nordic"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-text">Keşfet</div>
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default NordicHero;
