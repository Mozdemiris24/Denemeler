import React from 'react';
import './GlassCTA.css';

const GlassCTA: React.FC = () => {
    return (
        <section className="glass-cta">
            <div className="glass-cta-card">
                <div className="glass-glow"></div>
                <h2>Geleceğe Hazır Mısınız?</h2>
                <p>Modern şehirlerin modern çözümlere ihtiyacı var.</p>
                <button className="btn-glass-cta">Konsola Giriş Yap</button>
            </div>
        </section>
    );
};

export default GlassCTA;
