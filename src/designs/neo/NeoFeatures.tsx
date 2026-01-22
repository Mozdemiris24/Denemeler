import React from 'react';
import './NeoFeatures.css';

const NeoFeatures: React.FC = () => {
    const features = [
        { title: 'HIZLI', desc: 'Işık hızında veri akışı.', color: 'bg-yellow' },
        { title: 'GÜÇLÜ', desc: 'Devasa dataset analizi.', color: 'bg-purple' },
        { title: 'GÜVENLİ', desc: 'Askeri sınıf şifreleme.', color: 'bg-green' },
        { title: 'KOLAY', desc: 'Çocuk oyuncağı arayüz.', color: 'bg-pink' },
    ];

    return (
        <section className="neo-features">
            <div className="neo-marquee-strip">
                <div className="track">
                    <span>FEATURES • ÖZELLİKLER • FEATURES • ÖZELLİKLER • FEATURES • ÖZELLİKLER • </span>
                    <span>FEATURES • ÖZELLİKLER • FEATURES • ÖZELLİKLER • FEATURES • ÖZELLİKLER • </span>
                </div>
            </div>

            <div className="neo-container">
                <h2 className="neo-section-title">NEDEN <br />SECAPSOFT?</h2>

                <div className="neo-grid">
                    {features.map((f, i) => (
                        <div key={i} className={`neo-feature-card ${f.color}`}>
                            <div className="card-header">
                                <span className="icon-circle">★</span>
                                <span className="card-id">NO.0{i + 1}</span>
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NeoFeatures;
