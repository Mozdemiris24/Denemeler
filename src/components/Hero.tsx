import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateNumbers = () => {
            const numbers = document.querySelectorAll('.stat-number');
            numbers.forEach((num) => {
                const target = parseInt(num.getAttribute('data-count') || '0');
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    num.textContent = Math.floor(current).toString();
                }, 30);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateNumbers();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="home">
            {/* Background Animation */}
            <div className="hero-bg">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <svg className="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7B2D8E" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#9B4DCA" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#3498db" stopOpacity="0.15" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#waveGradient)"
                        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">⚡</span>
                        <span>Yerel Yönetimler İçin</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="gradient-text">SECAPSoft</span>
                        <br />
                        Enerji ve iklim eylem planlarınız için{' '}
                        <span className="highlight">dijital izleme</span> ve{' '}
                        <span className="highlight">raporlama</span> platformu.
                    </h1>

                    <ul className="hero-features">
                        <li>
                            <span className="check-icon">✓</span>
                            Yerel yönetim ölçeğinde sera gazı emisyon envanteri hesaplama altyapısı
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            İklim tehlikeleri ve risklerine ilişkin veri girişi ve raporlama
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            SECAP'ler ve emisyon envanterlerinin bütünleşik izlenmesi
                        </li>
                    </ul>

                    <div className="hero-buttons">
                        <a href="#demo" className="btn btn-primary btn-lg">
                            <span className="btn-icon">▶</span>
                            Demo İzle
                        </a>
                        <a href="#contact" className="btn btn-glass btn-lg">
                            Daha Fazla Bilgi
                            <span className="btn-arrow">→</span>
                        </a>
                    </div>

                    <div className="hero-stats" ref={statsRef}>
                        <div className="stat-item">
                            <span className="stat-number" data-count="150">0</span>
                            <span className="stat-plus">+</span>
                            <span className="stat-label">Belediye</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="1000">0</span>
                            <span className="stat-plus">+</span>
                            <span className="stat-label">Rapor</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="99">0</span>
                            <span className="stat-plus">%</span>
                            <span className="stat-label">Memnuniyet</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="hero-visual">
                    <div className="radial-chart">
                        <div className="chart-ring ring-1"></div>
                        <div className="chart-ring ring-2"></div>
                        <div className="chart-ring ring-3"></div>
                        <div className="chart-ring ring-4"></div>
                        <div className="chart-center">
                            <span className="co2-icon">☁️</span>
                            <span className="co2-text">CO₂</span>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="floating-card card-1">
                        <span className="card-icon">📊</span>
                        <span className="card-text">Emisyon Analizi</span>
                    </div>
                    <div className="floating-card card-2">
                        <span className="card-icon">🌿</span>
                        <span className="card-text">Sürdürülebilirlik</span>
                    </div>
                    <div className="floating-card card-3">
                        <span className="card-icon">🌍</span>
                        <span className="card-text">İklim Hedefleri</span>
                    </div>

                    {/* Particles */}
                    <div className="particles">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
