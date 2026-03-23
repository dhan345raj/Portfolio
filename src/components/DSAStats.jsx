import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const platforms = [
    {
        name: 'LeetCode',
        icon: <SiLeetcode />,
        count: 100,
        suffix: '+',
        color: 'from-amber-400 to-orange-500',
        barColor: 'bg-gradient-to-r from-amber-400 to-orange-500',
        percent: 66,
    },
    {
        name: 'GeeksforGeeks',
        icon: <SiGeeksforgeeks />,
        count: 40,
        suffix: '+',
        color: 'from-green-400 to-emerald-500',
        barColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
        percent: 40,
    },
    {
        name: 'HackerRank',
        icon: <SiHackerrank />,
        count: 50,
        suffix: '+',
        color: 'from-emerald-400 to-teal-500',
        barColor: 'bg-gradient-to-r from-emerald-400 to-teal-500',
        percent: 50,
    },
];

const AnimatedCounter = ({ target, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span className="text-4xl md:text-5xl font-display font-extrabold">
            {count}
            {suffix}
        </span>
    );
};

const DSAStats = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="dsa" className="section-padding" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">DSA Stats</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {platforms.map((platform, idx) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="glass-card p-8 text-center hover:shadow-float hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} text-white text-2xl mb-5 shadow-lg`}>
                                {platform.icon}
                            </div>
                            <h3 className="font-display font-bold text-slate-700 dark:text-slate-200 mb-3">{platform.name}</h3>
                            <div className="mb-4">
                                <AnimatedCounter target={platform.count} suffix={platform.suffix} inView={inView} />
                            </div>
                            <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">Problems Solved</p>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${platform.barColor} transition-all duration-[1500ms] ease-out`}
                                    style={{ width: inView ? `${platform.percent}%` : '0%' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DSAStats;
