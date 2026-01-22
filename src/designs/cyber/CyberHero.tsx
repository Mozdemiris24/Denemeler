import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CyberHero.css';

const CyberHero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Matrix Rain Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "SECAPSOFT01010101XYZA";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="cyber-hero" id="home">
            <canvas ref={canvasRef} className="matrix-canvas"></canvas>

            <div className="cyber-overlay">
                <motion.div
                    className="cyber-terminal-window"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="terminal-header">
                        <div className="btns">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <div className="title">root@secapsoft:~</div>
                    </div>
                    <div className="terminal-body">
                        <p className="line">Initialize SECAP_PROTOCOL_V2...</p>
                        <p className="line">Loading environmental modules... <span className="green-text">OK</span></p>
                        <p className="line">Connecting to city grid... <span className="green-text">ESTABLISHED</span></p>
                        <br />
                        <h1 className="cyber-glitch-title" data-text="WAKE UP, CITY MANAGER.">
                            WAKE UP, CITY MANAGER.
                        </h1>
                        <p className="typing-effect">The climate crisis is real. The solution is digital.</p>

                        <div className="cyber-actions">
                            <a href="#demo" className="btn-cyber primary">INITIALIZE_DEMO []</a>
                            <a href="#features" className="btn-cyber secondary">READ_DOCS ()</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CyberHero;
