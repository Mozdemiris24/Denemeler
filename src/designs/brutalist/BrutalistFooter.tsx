import React from 'react';
import './BrutalistFooter.css';

const BrutalistFooter: React.FC = () => {
    return (
        <footer className="brutalist-footer">
            <div className="footer-container">
                {/* Main Grid */}
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-bracket">[</span>
                            <span className="logo-text">SECAP</span>
                            <span className="logo-accent">Soft</span>
                            <span className="logo-bracket">]</span>
                        </a>
                        <p className="footer-description">
                            <span className="comment">// Yerel yönetimler için</span><br />
                            <span className="comment">// enerji ve iklim eylem planı</span><br />
                            <span className="comment">// izleme platformu</span>
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="GitHub" className="social-link">
                                <span className="social-icon">{'<>'}</span>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social-link">
                                <span className="social-icon">in</span>
                            </a>
                            <a href="#" aria-label="Twitter" className="social-link">
                                <span className="social-icon">X</span>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <h4 className="links-title">
                            <span className="folder-icon">📁</span> Platform
                        </h4>
                        <ul>
                            <li><a href="#">├─ Özellikler</a></li>
                            <li><a href="#">├─ Fiyatlandırma</a></li>
                            <li><a href="#">├─ Entegrasyonlar</a></li>
                            <li><a href="#">└─ Güvenlik</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="links-title">
                            <span className="folder-icon">📁</span> Kaynaklar
                        </h4>
                        <ul>
                            <li><a href="#">├─ Dokümantasyon</a></li>
                            <li><a href="#">├─ API</a></li>
                            <li><a href="#">├─ Blog</a></li>
                            <li><a href="#">└─ Webinarlar</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="links-title">
                            <span className="folder-icon">📁</span> İletişim
                        </h4>
                        <ul className="contact-list">
                            <li>
                                <span className="contact-key">email:</span>
                                <a href="mailto:info@secapsoft.com">info@secapsoft.com</a>
                            </li>
                            <li>
                                <span className="contact-key">tel:</span>
                                <a href="tel:+902121234567">+90 212 123 45 67</a>
                            </li>
                            <li>
                                <span className="contact-key">loc:</span>
                                <span>İstanbul, Türkiye</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <div className="copyright">
                        <span className="prompt">$</span>
                        <span className="cmd">echo</span>
                        <span className="output">"© 2026 SECAPSoft. Tüm hakları saklıdır."</span>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Gizlilik</a>
                        <span className="separator">|</span>
                        <a href="#">Kullanım Şartları</a>
                        <span className="separator">|</span>
                        <a href="#">KVKK</a>
                    </div>
                </div>

                {/* Version Badge */}
                <div className="version-badge">
                    <span className="version-label">v1.0.0</span>
                    <span className="version-status">stable</span>
                </div>
            </div>
        </footer>
    );
};

export default BrutalistFooter;
