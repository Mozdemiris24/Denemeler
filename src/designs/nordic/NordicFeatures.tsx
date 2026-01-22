import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './NordicFeatures.css';

const NordicFeatures: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    const features = [
        { title: 'Veri Entegrasyonu', desc: 'Tüm enerji verileriniz tek bir zarif arayüzde.' },
        { title: 'Akıllı Raporlar', desc: 'SECAP standartlarına uygun, sade ve anlaşılır raporlama.' },
        { title: 'Risk Analizi', desc: 'Geleceği öngören detaylı iklim risk değerlendirmeleri.' },
        { title: 'Takım Çalışması', desc: 'Kurum içi uyum için tasarlanmış işbirliği araçları.' },
    ];

    return (
        <section className="nordic-features">
            <div className="nordic-container">
                <motion.div
                    className="nordic-header"
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="nordic-overhead">ÖZELLİKLER</span>
                    <h2 className="nordic-title">Sadelik ve Güç</h2>
                    <p className="nordic-subtitle">Karmaşık verileri yönetmenin en zarif yolu.</p>
                </motion.div>

                <div className="nordic-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="nordic-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <span className="nordic-card-num">0{index + 1}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                            <div className="nordic-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NordicFeatures;
