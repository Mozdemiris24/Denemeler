import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './StorySection.css';

const StorySection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Platform layers assembly animation
    // Each layer comes from different directions and assembles into a complete dashboard
    const layer1Y = useTransform(smoothProgress, [0, 0.3, 0.5], [100, 0, 0]);
    const layer1Opacity = useTransform(smoothProgress, [0, 0.2, 0.5], [0, 1, 1]);

    const layer2X = useTransform(smoothProgress, [0.1, 0.35, 0.5], [-100, 0, 0]);
    const layer2Opacity = useTransform(smoothProgress, [0.1, 0.25, 0.5], [0, 1, 1]);

    const layer3X = useTransform(smoothProgress, [0.15, 0.4, 0.5], [100, 0, 0]);
    const layer3Opacity = useTransform(smoothProgress, [0.15, 0.3, 0.5], [0, 1, 1]);

    const layer4Y = useTransform(smoothProgress, [0.2, 0.45, 0.5], [-80, 0, 0]);
    const layer4Opacity = useTransform(smoothProgress, [0.2, 0.35, 0.5], [0, 1, 1]);

    const layer5Scale = useTransform(smoothProgress, [0.25, 0.5], [0.8, 1]);
    const layer5Opacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

    // Text reveal animations
    const text1Opacity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);
    const text1Y = useTransform(smoothProgress, [0.1, 0.2], [30, 0]);

    const text2Opacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);
    const text2Y = useTransform(smoothProgress, [0.2, 0.3], [30, 0]);

    const text3Opacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
    const text3Y = useTransform(smoothProgress, [0.3, 0.4], [30, 0]);

    const text4Opacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);
    const text4Y = useTransform(smoothProgress, [0.4, 0.5], [30, 0]);

    // Progress indicator
    const progressWidth = useTransform(smoothProgress, [0, 0.5], ['0%', '100%']);

    return (
        <section className="story-section" id="story" ref={containerRef}>
            <div className="story-container">
                {/* Left: Sticky Text Content */}
                <div className="story-content">
                    <div className="story-header">
                        <span className="section-badge">🚀 Platform Özellikleri</span>
                        <h2 className="story-title">
                            Tek Platformda <span className="gradient-text">Tam Entegrasyon</span>
                        </h2>
                    </div>

                    {/* Progress Bar */}
                    <div className="story-progress">
                        <motion.div
                            className="progress-fill"
                            style={{ width: progressWidth }}
                        />
                    </div>

                    {/* Story Steps */}
                    <div className="story-steps">
                        <motion.div
                            className="story-step"
                            style={{ opacity: text1Opacity, y: text1Y }}
                        >
                            <div className="step-icon">💾</div>
                            <div className="step-content">
                                <h4>Veri Toplama</h4>
                                <p>Tüm enerji tüketim verilerini tek noktada toplayın</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="story-step"
                            style={{ opacity: text2Opacity, y: text2Y }}
                        >
                            <div className="step-icon">📊</div>
                            <div className="step-content">
                                <h4>Akıllı Analiz</h4>
                                <p>Yapay zeka destekli trend ve öngörü analizleri</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="story-step"
                            style={{ opacity: text3Opacity, y: text3Y }}
                        >
                            <div className="step-icon">📋</div>
                            <div className="step-content">
                                <h4>Otomatik Raporlama</h4>
                                <p>SECAP formatına uygun hazır raporlar oluşturun</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="story-step"
                            style={{ opacity: text4Opacity, y: text4Y }}
                        >
                            <div className="step-icon">🎯</div>
                            <div className="step-content">
                                <h4>Hedef Takibi</h4>
                                <p>İklim hedeflerinizi gerçek zamanlı izleyin</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Fragmenting/Assembling Visual */}
                <div className="story-visual">
                    <div className="dashboard-assembly">
                        {/* Base Layer - Main Dashboard Frame */}
                        <motion.div
                            className="dashboard-layer layer-base"
                            style={{ y: layer1Y, opacity: layer1Opacity }}
                        >
                            <div className="dashboard-header">
                                <div className="header-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <span className="header-title">SECAPSoft Dashboard</span>
                            </div>
                            <div className="dashboard-body">
                                <div className="sidebar-placeholder"></div>
                                <div className="content-area"></div>
                            </div>
                        </motion.div>

                        {/* Layer 2 - Charts Panel (from left) */}
                        <motion.div
                            className="dashboard-layer layer-charts"
                            style={{ x: layer2X, opacity: layer2Opacity }}
                        >
                            <div className="mini-chart chart-bar">
                                <div className="bar" style={{ height: '60%' }}></div>
                                <div className="bar" style={{ height: '80%' }}></div>
                                <div className="bar" style={{ height: '45%' }}></div>
                                <div className="bar" style={{ height: '90%' }}></div>
                                <div className="bar" style={{ height: '70%' }}></div>
                            </div>
                        </motion.div>

                        {/* Layer 3 - Pie Chart (from right) */}
                        <motion.div
                            className="dashboard-layer layer-pie"
                            style={{ x: layer3X, opacity: layer3Opacity }}
                        >
                            <div className="mini-chart chart-pie">
                                <div className="pie-segment segment-1"></div>
                                <div className="pie-segment segment-2"></div>
                                <div className="pie-segment segment-3"></div>
                            </div>
                        </motion.div>

                        {/* Layer 4 - Stats Cards (from top) */}
                        <motion.div
                            className="dashboard-layer layer-stats"
                            style={{ y: layer4Y, opacity: layer4Opacity }}
                        >
                            <div className="stat-card">
                                <span className="stat-icon">🌡️</span>
                                <span className="stat-value">-12%</span>
                                <span className="stat-desc">Emisyon</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-icon">⚡</span>
                                <span className="stat-value">+8%</span>
                                <span className="stat-desc">Verimlilik</span>
                            </div>
                        </motion.div>

                        {/* Layer 5 - CO2 Badge (scale in) */}
                        <motion.div
                            className="dashboard-layer layer-badge"
                            style={{ scale: layer5Scale, opacity: layer5Opacity }}
                        >
                            <div className="co2-badge">
                                <span>🌍</span>
                                <span>Karbon Nötr</span>
                            </div>
                        </motion.div>

                        {/* Glow Effect */}
                        <motion.div
                            className="assembly-glow"
                            style={{ opacity: layer5Opacity }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
