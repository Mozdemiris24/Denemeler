import React from 'react';
import './NeoFooter.css';

const NeoFooter: React.FC = () => {
    return (
        <footer className="neo-footer">
            <div className="neo-footer-grid">
                <div className="neo-col brand">
                    <h3>SECAP(S)</h3>
                    <p>Belediye Yöneticilerinin<br />Gizli Silahı.</p>
                </div>
                <div className="neo-col links">
                    <a href="#">TASARIMLAR</a>
                    <a href="#">FİYATLAR</a>
                    <a href="#">KAYNAKLAR</a>
                </div>
                <div className="neo-col contact">
                    <button>BİZE YAZIN</button>
                    <span>hello@secap.com</span>
                </div>
            </div>
            <div className="neo-ticker-bottom">
                <span>COPYRIGHT 2026 © SECAPSOFT • ALL RIGHTS RESERVED • </span>
                <span>COPYRIGHT 2026 © SECAPSOFT • ALL RIGHTS RESERVED • </span>
            </div>
        </footer>
    );
};

export default NeoFooter;
