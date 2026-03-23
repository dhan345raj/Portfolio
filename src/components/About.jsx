import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="glass-card p-8 md:p-12 animate-float-slow"
                >
                    <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                        <p>
                            I am a passionate Computer Science student who enjoys transforming data into
                            meaningful insights and intelligent systems. With a strong foundation in{' '}
                            <span className="font-semibold text-primary">Machine Learning</span> and{' '}
                            <span className="font-semibold text-primary">Full Stack Development</span>, I focus
                            on building real-world solutions that solve impactful problems.
                        </p>
                        <p>
                            From predicting groundwater levels using advanced ML models to developing scalable
                            web platforms for communities, I continuously explore the intersection of{' '}
                            <span className="font-semibold text-secondary">data, AI, and software engineering</span>.
                        </p>
                        <p>
                            A quick learner with strong problem-solving skills, I am always eager to experiment,
                            build, and innovate in the field of{' '}
                            <span className="font-semibold text-primary">
                                Artificial Intelligence and Data Science
                            </span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
