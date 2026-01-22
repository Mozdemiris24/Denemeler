import React from 'react';
import { motion } from 'framer-motion';
import './MonoFeatures.css';

const MonoFeatures: React.FC = () => {
    const features = [
        { id: '01', title: 'Analysis', desc: 'Precision data evaluation.' },
        { id: '02', title: 'Strategy', desc: 'Long-term climate goals.' },
        { id: '03', title: 'Report', desc: 'Comprehensive documentation.' },
    ];

    return (
        <section className="mono-features">
            <div className="mono-features-container">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="mono-feature-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <span className="mono-id">{f.id}</span>
                        <h3 className="mono-feature-title">{f.title}</h3>
                        <p className="mono-feature-desc">{f.desc}</p>
                        <div className="mono-line"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MonoFeatures;
