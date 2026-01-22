import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import './ParallaxHero.css';

// Utility hook for smooth parallax
const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
};

const ParallaxHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Smooth spring animation
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Different parallax speeds for each layer
    const bgY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
    const shape1Y = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
    const shape2Y = useTransform(smoothProgress, [0, 1], ['0%', '40%']);
    const shape3Y = useTransform(smoothProgress, [0, 1], ['0%', '20%']);

    // Chart moves slower (sticky feel)
    const chartY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);
    const chartScale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);
    const chartRotate = useTransform(smoothProgress, [0, 1], [0, 15]);

    // Text reveal animations
    const titleY = useTransform(smoothProgress, [0, 0.3], ['0%', '-20%']);
    const titleOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

    // Floating cards move in opposite directions
    const card1X = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
    const card2X = useTransform(smoothProgress, [0, 1], ['0%', '-80%']);
    const card3Y = useTransform(smoothProgress, [0, 1], ['0%', '120%']);

    // Stats counter animation
    const statsY = useTransform(smoothProgress, [0, 0.5], ['0%', '30%']);
    const statsOpacity = useTransform(smoothProgress, [0.1, 0.4], [1, 0]);

    return (
        <section className="parallax-hero" id="home" ref={containerRef}>
            {/* Animated Background Shapes */}
            <div className="parallax-bg">
                <motion.div
                    className="floating-shape shape-1"
                    style={{ y: shape1Y }}
                />
                <motion.div
                    className="floating-shape shape-2"
                    style={{ y: shape2Y }}
                />
                <motion.div
                    className="floating-shape shape-3"
                    style={{ y: shape3Y }}
                />

                {/* Animated Wave */}
                <motion.svg
                    className="wave-svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ y: bgY }}
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7B2D8E" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#9B4DCA" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#3498db" stopOpacity="0.15" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#waveGradient)"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
                    />
                </motion.svg>
            </div>

            <div className="parallax-container">
                {/* Left Content with Parallax */}
                <motion.div
                    className="hero-content"
                    style={{ y: titleY, opacity: titleOpacity }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-icon">⚡</span>
                        <span>Yerel Yönetimler İçin</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="gradient-text">SECAPSoft</span>
                        <br />
                        Enerji ve iklim eylem planlarınız için{' '}
                        <span className="highlight">dijital izleme</span> ve{' '}
                        <span className="highlight">raporlama</span> platformu.
                    </motion.h1>

                    <motion.ul
                        className="hero-features"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <li>
                            <span className="check-icon">✓</span>
                            Yerel yönetim ölçeğinde sera gazı emisyon envanteri hesaplama
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            İklim tehlikeleri ve risklerine ilişkin veri girişi ve raporlama
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            SECAP'ler ve emisyon envanterlerinin bütünleşik izlenmesi
                        </li>
                    </motion.ul>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#demo" className="btn btn-primary btn-lg">
                            <span>▶</span> Demo İzle
                        </a>
                        <a href="#story" className="btn btn-glass btn-lg">
                            Daha Fazla Bilgi <span>→</span>
                        </a>
                    </motion.div>

                    {/* Stats with Parallax */}
                    <motion.div
                        className="hero-stats"
                        style={{ y: statsY, opacity: statsOpacity }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">150</span>
                            <span className="stat-plus">+</span>
                            <span className="stat-label">Belediye</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">1000</span>
                            <span className="stat-plus">+</span>
                            <span className="stat-label">Rapor</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">99</span>
                            <span className="stat-plus">%</span>
                            <span className="stat-label">Memnuniyet</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual with Parallax */}
                <motion.div
                    className="hero-visual"
                    style={{ y: chartY }}
                >
                    {/* Animated Radial Chart */}
                    <motion.div
                        className="radial-chart"
                        style={{ scale: chartScale, rotate: chartRotate }}
                    >
                        <motion.div
                            className="chart-ring ring-1"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="chart-ring ring-2"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="chart-ring ring-3"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="chart-ring ring-4"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="chart-center">
                            <span className="co2-icon">☁️</span>
                            <span className="co2-text">CO₂</span>
                        </div>
                    </motion.div>

                    {/* Floating Cards with Parallax */}
                    <motion.div
                        className="floating-card card-1"
                        style={{ x: card1X }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <span className="card-icon">📊</span>
                        <span className="card-text">Emisyon Analizi</span>
                    </motion.div>

                    <motion.div
                        className="floating-card card-2"
                        style={{ x: card2X }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <span className="card-icon">🌿</span>
                        <span className="card-text">Sürdürülebilirlik</span>
                    </motion.div>

                    <motion.div
                        className="floating-card card-3"
                        style={{ y: card3Y }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <span className="card-icon">🌍</span>
                        <span className="card-text">İklim Hedefleri</span>
                    </motion.div>

                    {/* Particles */}
                    <div className="particles">
                        {[...Array(8)].map((_, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            >
                <span>Keşfetmek için kaydırın</span>
                <div className="scroll-arrow">↓</div>
            </motion.div>
        </section>
    );
};

export default ParallaxHero;
