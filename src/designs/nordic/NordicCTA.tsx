import React from 'react';
import { motion } from 'framer-motion';
import './NordicCTA.css';

const NordicCTA: React.FC = () => {
    return (
        <section className="nordic-cta">
            <div className="nordic-cta-bg"></div>
            <div className="nordic-container">
                <motion.div
                    className="nordic-cta-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="cta-title">Geleceği Tasarlayın.</h2>
                    <p className="cta-text">
                        Sürdürülebilir bir şehir için ilk adımı bugün atın.
                        SECAPSoft ile doğayla uyum içinde çalışın.
                    </p>
                    <div className="cta-actions">
                        <button className="btn-nordic-primary">Ücretsiz Başlayın</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NordicCTA;
