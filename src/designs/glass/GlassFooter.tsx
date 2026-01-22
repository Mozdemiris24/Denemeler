import React from 'react';
import './GlassFooter.css';

const GlassFooter: React.FC = () => {
    return (
        <footer className="glass-footer">
            <div className="glass-footer-container">
                <div className="glass-footer-logo">
                    SECAP<span className="accent">Soft</span>
                </div>
                <div className="glass-footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>
                <div className="glass-footer-copy">
                    © 2026 Designed in Future.
                </div>
            </div>
        </footer>
    );
};

export default GlassFooter;
