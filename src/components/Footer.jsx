import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="relative py-10 px-4 mt-8">
            <div className="max-w-5xl mx-auto">
                <div className="glass-card p-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <a
                            href="https://linkedin.com/in/dhananjayraj04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/dhan345raj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href="mailto:dhananjayraj23.work@gmail.com"
                            className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>

                    <div className="w-20 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 mx-auto mb-4" />

                    <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
                        © {new Date().getFullYear()} Dhananjay Raj. Made with{' '}
                        <FiHeart className="text-rose-400" size={14} /> & React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
