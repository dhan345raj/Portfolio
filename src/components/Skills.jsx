import React from 'react';
import { motion } from 'framer-motion';
import {
    SiPython, SiCplusplus, SiJavascript,
    SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch,
    SiHtml5, SiCss, SiReact, SiNodedotjs, SiTailwindcss,
    SiMysql, SiMongodb, SiGit, SiGithub,
} from 'react-icons/si';
import { FaJava, FaBrain, FaLightbulb, FaArrowsRotate } from 'react-icons/fa6';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { TbLetterC, TbChartBar } from 'react-icons/tb';

const skillCategories = [
    {
        title: 'Programming',
        color: 'from-blue-500 to-cyan-400',
        skills: [
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'C', icon: <TbLetterC /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
        ],
    },
    {
        title: 'AI / ML',
        color: 'from-purple-500 to-pink-400',
        skills: [
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'Matplotlib', icon: <BiBarChartAlt2 /> },
            { name: 'Power BI', icon: <TbChartBar /> },
        ],
    },
    {
        title: 'Web Development',
        color: 'from-emerald-500 to-teal-400',
        skills: [
            { name: 'HTML', icon: <SiHtml5 /> },
            { name: 'CSS', icon: <SiCss /> },
            { name: 'ReactJS', icon: <SiReact /> },
            { name: 'NodeJS', icon: <SiNodedotjs /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
    },
    {
        title: 'Tools & Platforms',
        color: 'from-amber-500 to-orange-400',
        skills: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
        ],
    },
    {
        title: 'Soft Skills',
        color: 'from-rose-500 to-pink-400',
        skills: [
            { name: 'Problem Solving', icon: <FaBrain /> },
            { name: 'Quick Learner', icon: <FaLightbulb /> },
            { name: 'Adaptability', icon: <FaArrowsRotate /> },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Skills & Tech Stack</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 hover:shadow-float hover:-translate-y-2 transition-all duration-500 group"
                            style={{ animationDelay: `${idx * 0.5}s` }}
                        >
                            <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${cat.color} text-white text-sm font-semibold mb-5`}>
                                {cat.title}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-white/10 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
