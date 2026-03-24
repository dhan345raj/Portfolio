import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { PiCertificateBold } from 'react-icons/pi';

const certificates = [
    {
        title: 'Master Generative AI & Tools',
        platform: 'Online Certification',
        date: 'Aug 2025',
        link: 'https://drive.google.com/file/d/1ZiWDWujF2bOo86QYXGqJ7o4yGpfJ5jFk/view',
    },
    {
        title: 'Full Stack Development in React & Node',
        platform: 'Online Certification',
        date: 'June 2025',
        link: 'https://drive.google.com/file/d/1GsKuIQqx71wps4LFy5Q_yurL90ERu2Jk/view',
    },
    {
        title: 'Responsive Web Design',
        platform: 'Online Certification',
        date: 'Nov 2023',
        link: 'https://drive.google.com/file/d/1l6z0-Vfo1su0M0YvXZlK8HnXl8wzd3ov/view',
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Certificates</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 text-center hover:shadow-float hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <PiCertificateBold className="text-2xl text-primary" />
                            </div>
                            <h3 className="font-display font-bold text-slate-700 dark:text-slate-200 mb-1">{cert.title}</h3>
                            <p className="text-sm text-slate-400 dark:text-slate-500 mb-1">{cert.platform}</p>
                            <p className="text-xs text-primary/60 font-medium mb-4">{cert.date}</p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-lg bg-primary/10 transition-all duration-300"
                            >
                                <FiExternalLink size={14} /> View Certificate
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
