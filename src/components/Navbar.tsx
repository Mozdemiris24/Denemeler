import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
    currentDesign: number;
    onDesignChange: (design: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentDesign, onDesignChange }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const designNames = [
        '1. Parallax (Orijinal)',
        '2. Brutalist (Dark)',
        '3. Nordic (Minimal)',
        '4. Glass (Vivid)',
        '5. Neo-Brutalist (Pop)',
        '6. Swiss (Intl)',
        '7. Bento (Grid)',
        '8. Retro (Synth)',
        '9. Cyberpunk (Matrix)',
        '10. Monochrome (Lux)'
    ];

    const handleDesignSelect = (index: number) => {
        onDesignChange(index);
        setIsDesignDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    // Dark theme should be active for: Brutalist (1), Glass (3), Retro (7), Cyberpunk (8)
    const isDarkTheme = currentDesign === 1 || currentDesign === 3 || currentDesign === 7 || currentDesign === 8;

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkTheme ? 'dark-theme' : ''}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <a href="#home" className="logo">
                        <div className="logo-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L13.09 8.26L19 7L14.74 11.91L21 14L14.74 16.09L19 21L13.09 17.74L12 24L10.91 17.74L5 21L9.26 16.09L3 14L9.26 11.91L5 7L10.91 8.26L12 2Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="logo-text">
                            SECAP<span className="logo-accent">Soft</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        {/* Design Dropdown */}
                        <li className="dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={() => setIsDesignDropdownOpen(!isDesignDropdownOpen)}
                            >
                                {designNames[currentDesign]} <span className="arrow">▾</span>
                            </button>
                            {isDesignDropdownOpen && (
                                <ul className="dropdown-menu">
                                    {designNames.map((name, index) => (
                                        <li key={index}>
                                            <button
                                                className={currentDesign === index ? 'active' : ''}
                                                onClick={() => handleDesignSelect(index)}
                                            >
                                                {name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li><a href="#features" className="nav-link">Özellikler</a></li>
                        <li><a href="#contact" className="nav-link">Bize Ulaşın</a></li>
                        <li><a href="#blog" className="nav-link">SECAP Blog</a></li>
                    </ul>

                    {/* Desktop Auth & Mobile Toggle */}
                    <div className="nav-actions">
                        <div className="nav-buttons">
                            <a href="/login" className="btn btn-outline">Giriş</a>
                            <a href="/register" className="btn btn-primary">Kayıt Ol</a>
                        </div>

                        <button
                            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={toggleMobileMenu}
                        >
                            <span className="hamburger"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-links">
                        <span className="mobile-label">Tasarım Seç:</span>
                        <div className="mobile-design-grid">
                            {designNames.map((name, index) => (
                                <button
                                    key={index}
                                    className={`mobile-design-btn ${currentDesign === index ? 'active' : ''}`}
                                    onClick={() => handleDesignSelect(index)}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>

                        <div className="mobile-divider"></div>

                        <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Özellikler</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Bize Ulaşın</a>
                        <a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>SECAP Blog</a>

                        <div className="mobile-auth-buttons">
                            <a href="/login" className="btn btn-outline">Giriş</a>
                            <a href="/register" className="btn btn-primary">Kayıt Ol</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
