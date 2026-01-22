import React from 'react';
import './BentoFooter.css';

const BentoFooter: React.FC = () => {
    return (
        <footer className="bento-footer">
            <div className="bento-container">
                <div className="bento-footer-top">
                    <div className="bento-brand">
                        <h3>SECAPSoft.</h3>
                        <span>© 2026</span>
                    </div>
                    <div className="bento-footer-nav">
                        <div className="nav-group">
                            <h4>Product</h4>
                            <a href="#">Analysis</a>
                            <a href="#">Reporting</a>
                            <a href="#">Roadmap</a>
                        </div>
                        <div className="nav-group">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Press</a>
                        </div>
                        <div className="nav-group">
                            <h4>Resources</h4>
                            <a href="#">Blog</a>
                            <a href="#">Docs</a>
                            <a href="#">Help Center</a>
                        </div>
                    </div>
                </div>
                <div className="bento-footer-bottom">
                    <p>Designed with ❤️ for a better planet.</p>
                </div>
            </div>
        </footer>
    );
};

export default BentoFooter;
