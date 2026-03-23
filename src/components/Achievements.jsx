import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaProjectDiagram } from 'react-icons/fa';

const achievements = [
    {
        icon: <FaTrophy className="text-amber-500" />,
        title: '15th Rank — Coding Ninjas Web Hackathon',
        description: 'Secured 15th rank among 1000+ participants in a competitive web development hackathon.',
        date: 'Jan 2024',
    },
    {
        icon: <FaProjectDiagram className="text-blue-500" />,
        title: 'Multiple ML & Full Stack Projects',
        description: 'Built and deployed several machine learning and full stack development projects solving real-world problems.',
        date: 'Ongoing',
    },
    {
        icon: <FaCode className="text-emerald-500" />,
        title: 'Strong Problem-Solving Background',
        description: 'Consistently solving algorithmic problems across multiple competitive programming platforms.',
        date: 'Ongoing',
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 hidden sm:block" />

                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className={`relative flex flex-col sm:flex-row items-start mb-8 ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                }`}
                        >
                            <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white dark:border-slate-900 shadow-md z-10 top-6" />

                            <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                                <div className="glass-card p-6 hover:shadow-float hover:-translate-y-1 transition-all duration-500 ml-12 sm:ml-0">
                                    <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="text-xs font-medium text-primary/60 bg-primary/10 px-2.5 py-0.5 rounded-full">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-slate-700 dark:text-slate-200 mb-1.5">{item.title}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
