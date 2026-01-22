import React from 'react';
import './NordicFooter.css';

const NordicFooter: React.FC = () => {
    return (
        <footer className="nordic-footer">
            <div className="nordic-container">
                <div className="nordic-footer-main">
                    <div className="footer-brand">
                        <h3>SECAPSoft.</h3>
                        <p>Doğa ve teknoloji arasında<br />zarif bir denge.</p>
                    </div>

                    <div className="footer-nav">
                        <div className="nav-col">
                            <h4>Platform</h4>
                            <a href="#">Keşfet</a>
                            <a href="#">Çözümler</a>
                            <a href="#">Etki</a>
                        </div>
                        <div className="nav-col">
                            <h4>Şirket</h4>
                            <a href="#">Hakkımızda</a>
                            <a href="#">Manifesto</a>
                            <a href="#">Kariyer</a>
                        </div>
                        <div className="nav-col">
                            <h4>İletişim</h4>
                            <a href="#">hello@secapsoft.com</a>
                            <a href="#">İstanbul HQ</a>
                        </div>
                    </div>
                </div>

                <div className="nordic-footer-bottom">
                    <span>© 2026 SECAPSoft</span>
                    <div className="socials">
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default NordicFooter;
