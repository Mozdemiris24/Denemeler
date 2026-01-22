import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BrutalistCTA.css';

const BrutalistCTA: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="brutalist-cta" ref={ref}>
            <div className="cta-container">
                {/* ASCII Art decoration */}
                <div className="ascii-decoration left">
                    {'>>>'}
                </div>

                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="cta-badge">
                        <span className="badge-icon">⚡</span>
                        <span>HEMEN BAŞLA</span>
                    </div>

                    <h2 className="cta-title">
                        <span className="title-line">İklim Hedeflerinize</span>
                        <span className="title-highlight">Bugün_</span>
                        <span className="title-line">Başlayın</span>
                    </h2>

                    <div className="cta-terminal">
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="cmd">secapsoft --init --municipality="Belediyeniz"</span>
                        </div>
                        <div className="terminal-output">
                            <span className="success">✓</span> Hesabınız hazır. Demo modunda başlayabilirsiniz.
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <motion.a
                            href="/register"
                            className="btn-brutalist btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="btn-icon">&gt;_</span>
                            Ücretsiz Deneyin
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn-brutalist btn-outline"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            📞 Bizi Arayın
                        </motion.a>
                    </div>

                    <div className="cta-stats">
                        <div className="stat">
                            <span className="stat-icon">🏛️</span>
                            <span className="stat-value">&gt;150</span>
                            <span className="stat-label">Belediye</span>
                        </div>
                        <div className="stat-divider">//</div>
                        <div className="stat">
                            <span className="stat-icon">📄</span>
                            <span className="stat-value">&gt;1K</span>
                            <span className="stat-label">Rapor</span>
                        </div>
                        <div className="stat-divider">//</div>
                        <div className="stat">
                            <span className="stat-icon">⏱️</span>
                            <span className="stat-value">99%</span>
                            <span className="stat-label">Uptime</span>
                        </div>
                    </div>
                </motion.div>

                <div className="ascii-decoration right">
                    {'<<<'}
                </div>
            </div>
        </section>
    );
};

export default BrutalistCTA;
