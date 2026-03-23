import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fullName = 'Dhananjay Raj';

const Hero = () => {
    const [displayedName, setDisplayedName] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedName(fullName.slice(0, i + 1));
            i++;
            if (i >= fullName.length) {
                clearInterval(interval);
                setTypingDone(true);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center section-padding pt-24 relative"
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                    {/* Profile Image — left side, no background, just the person */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.85 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="flex-shrink-0"
                    >
                        <div className="relative animate-float">
                            <img
                                src="/assets/profile/preview.png"
                                alt="Dhananjay Raj"
                                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
                                style={{
                                    filter: 'drop-shadow(0 20px 40px rgba(108,99,255,0.18))',
                                }}
                            />
                            {/* Subtle glow behind the person */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 blur-3xl -z-10 scale-110 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Text content — right side */}
                    <div className="text-center md:text-left flex-1">
                        {/* Name with typing animation */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-4"
                        >
                            <span className="gradient-text">{displayedName}</span>
                            {!typingDone && <span className="typing-cursor" />}
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium mb-3"
                        >
                            Aspiring Machine Learning Engineer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="text-base md:text-lg text-slate-400 dark:text-slate-500 mb-10 italic"
                        >
                            Building intelligent systems with data &amp; code
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center md:items-start gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-float hover:scale-105 transition-all duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 glass-card text-primary font-semibold rounded-xl hover:shadow-float hover:scale-105 transition-all duration-300 border border-primary/20"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
