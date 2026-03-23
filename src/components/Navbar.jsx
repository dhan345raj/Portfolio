import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { dark, toggle } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-glass border-b border-white/40 dark:border-slate-700/40'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font-display text-xl font-bold gradient-text">
                        DR.
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Theme toggle */}
                        <button
                            onClick={toggle}
                            className="ml-2 p-2.5 rounded-xl bg-primary/10 dark:bg-slate-700 text-primary dark:text-yellow-400 hover:bg-primary/20 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
                        </button>
                    </div>

                    {/* Mobile: theme toggle + menu button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggle}
                            className="p-2 rounded-lg bg-primary/10 dark:bg-slate-700 text-primary dark:text-yellow-400 hover:bg-primary/20 transition-all"
                            aria-label="Toggle theme"
                        >
                            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-all"
                        >
                            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border-b border-white/40 dark:border-slate-700/40"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
