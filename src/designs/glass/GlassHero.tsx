import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import './GlassHero.css';

const GlassHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(contentRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
    const contentY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);

    return (
        <section className="glass-hero" id="home" ref={containerRef}>
            {/* Animated Mesh Gradient Background */}
            <motion.div className="mesh-bg" style={{ scale: bgScale }}>
                <div className="mesh-gradient"></div>
                <div className="mesh-orb orb-1"></div>
                <div className="mesh-orb orb-2"></div>
                <div className="mesh-orb orb-3"></div>
            </motion.div>

            {/* Floating Particles */}
            <div className="particles-glass">
                {[...Array(15)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="particle"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${4 + Math.random() * 8}px`,
                            height: `${4 + Math.random() * 8}px`,
                        }}
                    />
                ))}
            </div>

            <div className="glass-container">
                {/* Main Content */}
                <motion.div
                    className="glass-content"
                    ref={contentRef}
                    style={{ y: contentY }}
                >
                    {/* Badge */}
                    <motion.div
                        className="glass-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-glow"></span>
                        <span className="badge-text">✨ Yeni Nesil Platform</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="glass-title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="title-line">İklim Eylemi</span>
                        <span className="title-gradient">Yeniden Tanımlandı</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="glass-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        SECAPSoft ile sera gazı emisyonlarını takip edin, SECAP raporlarınızı
                        otomatik oluşturun ve iklim hedeflerinize ulaşın.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        className="glass-stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {[
                            { value: '150+', label: 'Belediye' },
                            { value: '1K+', label: 'Rapor' },
                            { value: '99%', label: 'Uptime' },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-glass">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        className="glass-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.a
                            href="#demo"
                            className="btn-glass btn-primary"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="btn-shine"></span>
                            Demo Başlat
                            <span className="btn-arrow">→</span>
                        </motion.a>
                        <motion.a
                            href="#features"
                            className="btn-glass btn-secondary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Özellikleri Gör
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* 3D Glass Cards */}
                <motion.div
                    className="glass-visuals"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Main Dashboard Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ y: -10, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-glass-header">
                            <div className="header-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="header-title">SECAPSoft Dashboard</span>
                        </div>

                        <div className="card-glass-body">
                            <div className="mini-widget widget-chart">
                                <div className="widget-title">Emisyon Trendi</div>
                                <div className="line-chart">
                                    <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#0066ff" />
                                                <stop offset="100%" stopColor="#ff6b6b" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d="M0,50 Q30,45 50,40 T100,30 T150,35 T200,20"
                                            fill="none"
                                            stroke="url(#lineGrad)"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            animate={isInView ? { pathLength: 1 } : {}}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="mini-widgets-row">
                                <div className="mini-widget widget-stat">
                                    <div className="widget-icon">📉</div>
                                    <div className="widget-value">-24%</div>
                                    <div className="widget-label">CO₂</div>
                                </div>
                                <div className="mini-widget widget-stat">
                                    <div className="widget-icon">⚡</div>
                                    <div className="widget-value">+18%</div>
                                    <div className="widget-label">Verimlilik</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 1 */}
                    <motion.div
                        className="float-card card-1"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <span className="card-icon">🌍</span>
                        <div className="card-info">
                            <span className="card-title">Karbon Nötr</span>
                            <span className="card-desc">2030 Hedefi</span>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        className="float-card card-2"
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    >
                        <span className="card-icon">📊</span>
                        <div className="card-info">
                            <span className="card-title">SECAP Raporu</span>
                            <span className="card-desc">Otomatik Oluştur</span>
                        </div>
                    </motion.div>

                    {/* Floating Card 3 */}
                    <motion.div
                        className="float-card card-3"
                        animate={{ y: [-5, 15, -5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="card-icon">✅</span>
                        <span className="card-title">%99 Doğruluk</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-glass"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Aşağı Kaydır</span>
            </motion.div>
        </section>
    );
};

export default GlassHero;
