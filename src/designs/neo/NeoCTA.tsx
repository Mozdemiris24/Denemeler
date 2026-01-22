import React from 'react';
import './NeoCTA.css';

const NeoCTA: React.FC = () => {
    return (
        <section className="neo-cta">
            <div className="neo-cta-container">
                <div className="neo-box">
                    <h2>HADİ BAŞLAYALIM</h2>
                    <p>Beklemek yok. Bahane yok. Sadece sonuç var.</p>
                    <button className="neo-cta-btn">KAYIT OL →</button>
                    <div className="neo-sticker">NEW!</div>
                </div>
            </div>
        </section>
    );
};

export default NeoCTA;
