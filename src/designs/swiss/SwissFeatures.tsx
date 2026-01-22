import React from 'react';
import { motion } from 'framer-motion';
import './SwissFeatures.css';

const SwissFeatures: React.FC = () => {
    return (
        <section className="swiss-features">
            <div className="swiss-grid-lines">
                <div className="grid-line vertical v1"></div>
                <div className="grid-line vertical v2"></div>
                <div className="grid-line horizontal h1"></div>
            </div>

            <div className="swiss-features-grid">
                {/* Header Block */}
                <div className="swiss-feature-block header">
                    <h2>CORE<br />FEATURES</h2>
                </div>

                {/* Feature 1 */}
                <motion.div
                    className="swiss-feature-block f1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="swiss-num">01</span>
                    <h3>DATA SYNC</h3>
                    <p>Seamless integration with existing city infrastructure and IoT sensors.</p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                    className="swiss-feature-block f2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="swiss-num">02</span>
                    <h3>COMPLIANCE</h3>
                    <p>Automated reporting aligned with global SECAP and EU standards.</p>
                </motion.div>

                {/* Feature 3 (Red) */}
                <motion.div
                    className="swiss-feature-block f3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3>ZERO<br />EMISSION<br />TARGET</h3>
                    <div className="arrow-icon">→</div>
                </motion.div>
            </div>
        </section>
    );
};

export default SwissFeatures;
