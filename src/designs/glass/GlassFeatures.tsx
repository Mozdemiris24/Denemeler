import React from 'react';
import { motion } from 'framer-motion';
import './GlassFeatures.css';

const GlassFeatures: React.FC = () => {
    const features = [
        { icon: '📊', title: 'Canlı İzleme', desc: 'Emisyon verilerini gerçek zamanlı takip et.' },
        { icon: '🌍', title: 'SECAP Uyumu', desc: 'Uluslararası standartlarda raporlama.' },
        { icon: '⚡', title: 'Enerji Analizi', desc: 'Tüketim noktalarını optimize et.' },
    ];

    return (
        <section className="glass-features">
            {/* Background Blobs */}
            <div className="glass-blob blob-1"></div>
            <div className="glass-blob blob-2"></div>

            <div className="glass-container">
                <motion.h2
                    className="glass-section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Şeffaf ve <span className="text-gradient">Güçlü.</span>
                </motion.h2>

                <div className="glass-grid">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                        >
                            <div className="glass-card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlassFeatures;
