import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BrutalistFeatures.css';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    command: string;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, command, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="brutalist-feature-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            whileHover={{
                borderColor: '#00ff9f',
                transition: { duration: 0.2 }
            }}
        >
            <div className="card-terminal-header">
                <span className="terminal-dot"></span>
                <span className="terminal-cmd">{command}</span>
            </div>
            <div className="card-body">
                <div className="card-icon">{icon}</div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
                <span className="prompt">$</span>
                <span className="run-cmd">--help</span>
                <span className="arrow">→</span>
            </div>
        </motion.div>
    );
};

const BrutalistFeatures: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    const features: Omit<FeatureCardProps, 'index'>[] = [
        {
            icon: '💾',
            title: 'Veri Yönetimi',
            description: 'Sera gazı emisyon verilerinizi tek bir platformda toplayın, analiz edin.',
            command: 'data.collect()',
        },
        {
            icon: '📊',
            title: 'Gelişmiş Raporlama',
            description: 'SECAP formatına uygun otomatik raporlar oluşturun.',
            command: 'report.generate()',
        },
        {
            icon: '🛡️',
            title: 'Risk Değerlendirme',
            description: 'İklim tehlikelerini ve riskleri belirleyin.',
            command: 'risk.analyze()',
        },
        {
            icon: '👥',
            title: 'İşbirliği',
            description: 'Farklı birimler ve paydaşlarla gerçek zamanlı çalışın.',
            command: 'team.connect()',
        },
        {
            icon: '🤖',
            title: 'AI Destekli Analiz',
            description: 'Yapay zeka ile trend analizi ve öngörüler elde edin.',
            command: 'ai.predict()',
        },
        {
            icon: '📱',
            title: 'Mobil Erişim',
            description: 'Her yerden, her cihazdan verilerinize güvenle erişin.',
            command: 'mobile.sync()',
        },
    ];

    return (
        <section className="brutalist-features" id="features">
            <div className="features-container">
                {/* Header */}
                <motion.div
                    className="features-header"
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="header-badge">
                        <span className="badge-dot"></span>
                        <span>MODÜLLER</span>
                    </div>
                    <h2 className="header-title">
                        <span className="title-main">Platform</span>
                        <span className="title-accent">Özellikleri_</span>
                    </h2>
                    <p className="header-description">
                        İklim hedeflerinize ulaşmanız için gerekli tüm araçlar tek bir platformda.
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>

                {/* Terminal Output */}
                <motion.div
                    className="terminal-output"
                    initial={{ opacity: 0 }}
                    animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="output-line">
                        <span className="prompt">$</span>
                        <span className="cmd">secapsoft --list-modules</span>
                    </div>
                    <div className="output-result">
                        <span className="success">✓</span> 6 modül yüklendi ve aktif
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrutalistFeatures;
