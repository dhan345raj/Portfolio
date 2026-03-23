import React from 'react';
import { motion } from 'framer-motion';
import { IoSchoolOutline } from 'react-icons/io5';

const educationData = [
    {
        degree: 'B.Tech in Computer Science Engineering',
        institution: 'Lovely Professional University, Punjab',
        score: 'CGPA: 7.9',
        duration: 'Aug 2023 – Present',
        current: true,
    },
    {
        degree: 'Intermediate',
        institution: 'Sumitra Modern School, Sitapur',
        score: 'Percentage: 63%',
        duration: 'Completed',
        current: false,
    },
    {
        degree: 'Matriculation',
        institution: 'Regency Public School, Sitapur',
        score: 'Percentage: 83%',
        duration: 'Completed',
        current: false,
    },
];

const Education = () => {
    return (
        <section id="education" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="relative">
                    <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30" />

                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="relative flex items-start mb-8 last:mb-0"
                        >
                            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-md ${edu.current
                                    ? 'bg-gradient-to-br from-primary to-secondary text-white'
                                    : 'bg-white dark:bg-slate-800 border-2 border-primary/20 text-primary'
                                }`}>
                                <IoSchoolOutline className="text-xl" />
                            </div>

                            <div className="ml-6 glass-card p-6 flex-1 hover:shadow-float hover:-translate-y-1 transition-all duration-500">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                    <h3 className="font-display font-bold text-slate-700 dark:text-slate-200">{edu.degree}</h3>
                                    {edu.current && (
                                        <span className="text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary px-3 py-0.5 rounded-full mt-1 sm:mt-0 w-fit">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{edu.institution}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                    <span className="text-sm font-semibold text-primary">{edu.score}</span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">{edu.duration}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
