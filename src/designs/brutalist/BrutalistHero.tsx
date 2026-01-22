import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './BrutalistHero.css';

// Typing animation hook
const useTypingEffect = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        setDisplayedText('');
        setIsComplete(false);

        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                setIsComplete(true);
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return { displayedText, isComplete };
};

const BrutalistHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { displayedText, isComplete } = useTypingEffect('SECAPSoft_', 80);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const titleY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
    const gridOpacity = useTransform(smoothProgress, [0, 0.5], [0.15, 0]);

    return (
        <section className="brutalist-hero" id="home" ref={containerRef}>
            {/* Animated Grid Background */}
            <motion.div className="grid-bg" style={{ opacity: gridOpacity }}>
                <div className="grid-lines"></div>
            </motion.div>

            {/* Grain Overlay */}
            <div className="grain-overlay"></div>

            <div className="brutalist-container">
                {/* Terminal Window */}
                <motion.div
                    className="terminal-window"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="terminal-header">
                        <span className="terminal-dot red"></span>
                        <span className="terminal-dot yellow"></span>
                        <span className="terminal-dot green"></span>
                        <span className="terminal-title">secapsoft.exe</span>
                    </div>
                    <div className="terminal-content">
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="command">init --climate-action</span>
                        </div>
                        <div className="terminal-line output">
                            <span className="success">✓</span> Enerji envanter sistemi yüklendi
                        </div>
                        <div className="terminal-line output">
                            <span className="success">✓</span> SECAP raporlama modülü aktif
                        </div>
                        <div className="terminal-line output">
                            <span className="success">✓</span> CO₂ izleme başlatıldı
                        </div>
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="cursor-blink">_</span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div className="brutalist-content" style={{ y: titleY }}>
                    <motion.div
                        className="glitch-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge-dot"></span>
                        YEREL YÖNETİMLER İÇİN
                    </motion.div>

                    <h1 className="brutalist-title">
                        <span className="title-main">
                            {displayedText}
                            {!isComplete && <span className="typing-cursor">|</span>}
                        </span>
                        <span className="title-sub">
                            İklim Eylem<br />
                            <span className="highlight-amber">Platformu</span>
                        </span>
                    </h1>

                    <p className="brutalist-description">
                        Sera gazı emisyonlarını takip edin. SECAP raporlarınızı otomatik oluşturun.
                        İklim hedeflerinize ulaşın.
                    </p>

                    <div className="brutalist-stats">
                        <div className="stat-block">
                            <span className="stat-number">&gt;150</span>
                            <span className="stat-label">Belediye</span>
                        </div>
                        <div className="stat-divider">//</div>
                        <div className="stat-block">
                            <span className="stat-number">&gt;1K</span>
                            <span className="stat-label">Rapor</span>
                        </div>
                        <div className="stat-divider">//</div>
                        <div className="stat-block">
                            <span className="stat-number">-35%</span>
                            <span className="stat-label">Emisyon</span>
                        </div>
                    </div>

                    <div className="brutalist-actions">
                        <motion.a
                            href="#demo"
                            className="btn-brutalist btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="btn-icon">&gt;_</span>
                            Demo Başlat
                        </motion.a>
                        <motion.a
                            href="#features"
                            className="btn-brutalist btn-outline"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Özellikleri Gör
                            <span className="btn-arrow">→</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Floating Data Visualizations */}
                <div className="data-visuals">
                    <motion.div
                        className="data-card card-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-header">
                            <span className="card-icon">📊</span>
                            <span>Emisyon Trendi</span>
                        </div>
                        <div className="mini-chart">
                            {[65, 58, 72, 45, 38, 42, 35].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="chart-bar"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="data-card card-2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="co2-display">
                            <span className="co2-value">-12.4%</span>
                            <span className="co2-label">CO₂ Azalma</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="data-card card-3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="status-indicator">
                            <span className="status-dot active"></span>
                            <span>Sistem Aktif</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator-brutalist"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default BrutalistHero;
