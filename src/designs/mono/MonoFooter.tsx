import React from 'react';
import './MonoFooter.css';

const MonoFooter: React.FC = () => {
    return (
        <footer className="mono-footer">
            <div className="mono-footer-top">
                <div className="mono-f-logo">SCS.</div>
                <div className="mono-f-nav">
                    <a href="#">MANIFESTO</a>
                    <a href="#">COLLECTIONS</a>
                    <a href="#">STUDIO</a>
                </div>
            </div>
            <div className="mono-footer-btm">
                <span>© 2026 SECAPSOFT LUXURY</span>
            </div>
        </footer>
    );
};

export default MonoFooter;
