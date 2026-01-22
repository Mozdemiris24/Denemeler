import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Features.css';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    featured?: boolean;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, featured, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={`feature-card ${featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
            }}
        >
            {featured && <div className="feature-badge">Popüler</div>}
            <motion.div
                className="feature-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {icon}
            </motion.div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
            <motion.a
                href="#"
                className="feature-link"
                whileHover={{ x: 5 }}
            >
                Detayları İncele <span className="arrow">→</span>
            </motion.a>
        </motion.div>
    );
};

const Features: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

    const features: Omit<FeatureCardProps, 'index'>[] = [
        {
            icon: '💾',
            title: 'Veri Yönetimi',
            description: 'Sera gazı emisyon verilerinizi tek bir platformda toplayın, analiz edin ve raporlayın.',
        },
        {
            icon: '📊',
            title: 'Gelişmiş Raporlama',
            description: 'SECAP formatına uygun otomatik raporlar oluşturun, görselleştirmelerle sunun.',
            featured: true,
        },
        {
            icon: '🛡️',
            title: 'Risk Değerlendirme',
            description: 'İklim tehlikelerini ve riskleri belirleyin, adaptasyon stratejileri geliştirin.',
        },
        {
            icon: '👥',
            title: 'İşbirliği',
            description: 'Farklı birimler ve paydaşlarla gerçek zamanlı işbirliği yapın.',
        },
        {
            icon: '🤖',
            title: 'AI Destekli Analiz',
            description: 'Yapay zeka ile trend analizi ve öngörüler elde edin.',
        },
        {
            icon: '📱',
            title: 'Mobil Erişim',
            description: 'Her yerden, her cihazdan verilerinize güvenle erişin.',
        },
    ];

    return (
        <section className="features-section" id="features" ref={containerRef}>
            <div className="features-container">
                <motion.div
                    className="section-header"
                    ref={headerRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-badge">✨ Özellikler</span>
                    <h2 className="section-title">
                        Neden <span className="gradient-text">SECAPSoft?</span>
                    </h2>
                    <p className="section-description">
                        Yerel yönetimlerin iklim hedeflerine ulaşması için tasarlanmış kapsamlı çözümler
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
