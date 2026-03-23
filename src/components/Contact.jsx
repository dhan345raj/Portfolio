import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formRef.current,
                'YOUR_PUBLIC_KEY'
            )
            .then(() => {
                setStatus('sent');
                formRef.current.reset();
                setTimeout(() => setStatus('idle'), 4000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            });
    };

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-12" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h3 className="font-display font-bold text-xl text-slate-700 dark:text-slate-200 mb-6">
                            Let's Connect
                        </h3>
                        <div className="space-y-5">
                            <a href="mailto:dhananjayraj23.work@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiMail />
                                </div>
                                <span className="text-sm">dhananjayraj23.work@gmail.com</span>
                            </a>
                            <a href="tel:+919415150690" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiPhone />
                                </div>
                                <span className="text-sm">+91-9415150690</span>
                            </a>
                            <a href="https://github.com/dhan345raj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiGithub />
                                </div>
                                <span className="text-sm">github.com/dhan345raj</span>
                            </a>
                            <a href="https://linkedin.com/in/dhananjayraj04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FiLinkedin />
                                </div>
                                <span className="text-sm">linkedin.com/in/dhananjayraj04</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Dhananjay Raj"
                                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-slate-600/40 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="srivastavashiva2004@gmail.com"
                                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-slate-600/40 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-slate-600/40 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-float hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'sent' ? (
                                    '✓ Message Sent!'
                                ) : status === 'error' ? (
                                    'Failed — Try Again'
                                ) : (
                                    <>
                                        <FiSend size={16} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
