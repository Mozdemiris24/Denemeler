import React from 'react';
import './RetroFooter.css';

const RetroFooter: React.FC = () => {
    return (
        <footer className="retro-footer">
            <div className="retro-scanlines"></div>
            <div className="retro-footer-content">
                <div className="retro-logo">SECAPSOFT</div>
                <div className="retro-links">
                    <a href="#">[ HOME ]</a>
                    <a href="#">[ ABOUT ]</a>
                    <a href="#">[ CONTACT ]</a>
                </div>
                <div className="retro-copy">
                    GAME OVER.<br />INSERT COIN TO CONTINUE.
                </div>
            </div>
        </footer>
    );
};

export default RetroFooter;
