import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'ML-Driven Groundwater Prediction Model',
        description:
            'Developed a machine learning system to forecast groundwater levels using GWERS dataset. Built complete ML pipeline with preprocessing, feature engineering, and hyperparameter tuning. Achieved high accuracy with R² score of 0.92 using XGBoost.',
        tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
        code: 'https://github.com/dhan345raj',
        demo: '#',
        color: 'from-blue-500/10 to-cyan-500/10',
        accent: 'text-blue-600 dark:text-blue-400',
    },
    {
        title: 'Brainstorm Connect',
        description:
            'A web platform for managing college clubs, announcements, and memberships. Implemented REST APIs with authentication and full CRUD operations. Improved communication and engagement among users.',
        tech: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB'],
        code: 'https://github.com/dhan345raj',
        demo: '#',
        color: 'from-purple-500/10 to-pink-500/10',
        accent: 'text-purple-600 dark:text-purple-400',
    },
    {
        title: 'Full Stack MERN Training Project',
        description:
            'Built a complete web application during training with authentication and CRUD features. Learned real-world development practices including debugging and deployment basics.',
        tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/dhan345raj',
        demo: '#',
        color: 'from-emerald-500/10 to-teal-500/10',
        accent: 'text-emerald-600 dark:text-emerald-400',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="glass-card overflow-hidden group hover:shadow-float hover:-translate-y-3 transition-all duration-500"
                        >
                            <div
                                className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                            >
                                <div className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                                    🚀
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-slate-900/30 to-transparent" />
                            </div>

                            <div className="p-6">
                                <h3 className={`text-lg font-bold font-display mb-3 ${project.accent}`}>
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 text-xs font-medium bg-primary/8 dark:bg-primary/15 text-primary rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <FiGithub size={15} /> View Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
                                    >
                                        <FiExternalLink size={15} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
