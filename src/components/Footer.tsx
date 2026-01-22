import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <div className="logo-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L13.09 8.26L19 7L14.74 11.91L21 14L14.74 16.09L19 21L13.09 17.74L12 24L10.91 17.74L5 21L9.26 16.09L3 14L9.26 11.91L5 7L10.91 8.26L12 2Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="logo-text">
                                SECAP<span className="logo-accent">Soft</span>
                            </span>
                        </a>
                        <p className="footer-description">
                            Yerel yönetimler için enerji ve iklim eylem planı izleme platformu.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Özellikler</a></li>
                            <li><a href="#">Fiyatlandırma</a></li>
                            <li><a href="#">Entegrasyonlar</a></li>
                            <li><a href="#">Güvenlik</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Kaynaklar</h4>
                        <ul>
                            <li><a href="#">Dokümantasyon</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Webinarlar</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>İletişim</h4>
                        <ul>
                            <li>
                                <a href="mailto:info@secapsoft.com">
                                    <span className="contact-icon">✉️</span>
                                    info@secapsoft.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+902121234567">
                                    <span className="contact-icon">📞</span>
                                    +90 212 123 45 67
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="contact-icon">📍</span>
                                    İstanbul, Türkiye
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>&copy; 2026 SECAPSoft. Tüm hakları saklıdır.</p>
                    <div className="footer-legal">
                        <a href="#">Gizlilik Politikası</a>
                        <a href="#">Kullanım Şartları</a>
                        <a href="#">KVKK</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
