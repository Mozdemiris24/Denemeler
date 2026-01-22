import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        İklim Hedeflerinize <span className="gradient-text">Bugün</span> Başlayın
                    </h2>
                    <p className="cta-description">
                        SECAPSoft ile yerel yönetiminizin sürdürülebilirlik yolculuğunu başlatın.
                    </p>
                    <div className="cta-buttons">
                        <a href="/register" className="btn btn-primary btn-lg">
                            <span>🚀</span>
                            Ücretsiz Deneyin
                        </a>
                        <a href="#contact" className="btn btn-glass btn-lg">
                            <span>📞</span>
                            Bizi Arayın
                        </a>
                    </div>
                </div>

                <div className="cta-visual">
                    <div className="cta-card">
                        <div className="cta-card-header">
                            <span className="status-dot"></span>
                            <span>Canlı Demo</span>
                        </div>
                        <div className="cta-chart">
                            <div className="bar" style={{ '--height': '40%' } as React.CSSProperties}></div>
                            <div className="bar" style={{ '--height': '65%' } as React.CSSProperties}></div>
                            <div className="bar" style={{ '--height': '45%' } as React.CSSProperties}></div>
                            <div className="bar" style={{ '--height': '80%' } as React.CSSProperties}></div>
                            <div className="bar" style={{ '--height': '55%' } as React.CSSProperties}></div>
                            <div className="bar" style={{ '--height': '90%' } as React.CSSProperties}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
