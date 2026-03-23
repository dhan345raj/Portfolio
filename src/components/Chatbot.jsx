import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleEllipsesOutline, IoCloseOutline, IoSendOutline } from 'react-icons/io5';

const responses = {
    skills:
        '🧠 My skills include:\n• Programming: C++, C, Java, Python, JavaScript\n• AI/ML: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch\n• Web: HTML, CSS, ReactJS, NodeJS, Tailwind CSS\n• Tools: MySQL, MongoDB, Git, GitHub',
    projects:
        '🚀 My key projects:\n1. ML-Driven Groundwater Prediction (XGBoost, R²=0.92)\n2. Brainstorm Connect — Community Web Platform\n3. Full Stack MERN Training Project\nCheck out the Projects section for more!',
    education:
        '🎓 Education:\n• B.Tech in CSE — Lovely Professional University (CGPA: 7.9)\n• Intermediate — Sumitra Modern School\n• Matriculation — Regency Public School',
    contact:
        '📬 You can reach me at:\n• Email: dhananjayraj23.work@gmail.com\n• Phone: +91-9415150690\n• GitHub: github.com/dhan345raj\n• LinkedIn: linkedin.com/in/dhananjayraj04',
    hello: '👋 Hey there! I\'m Dhananjay\'s portfolio bot. Ask me about skills, projects, education, or contact info!',
    hi: '👋 Hey there! I\'m Dhananjay\'s portfolio bot. Ask me about skills, projects, education, or contact info!',
    achievements:
        '🏆 Achievements:\n• 15th Rank among 1000+ in Coding Ninjas Hackathon\n• Multiple ML & Full Stack projects\n• Active problem solver on LeetCode, GfG & HackerRank',
    dsa: '📊 DSA Stats:\n• LeetCode: 100+ problems\n• GeeksforGeeks: 40+ problems\n• HackerRank: 50+ problems',
    certificates:
        '📜 Certificates:\n• Master Generative AI & Tools (Aug 2025)\n• Full Stack Dev in React & Node (June 2025)\n• Responsive Web Design (Nov 2023)',
};

const defaultReply =
    "🤖 I can help with: skills, projects, education, contact, achievements, dsa, or certificates. Just type a keyword!";

const getReply = (input) => {
    const lower = input.toLowerCase().trim();
    for (const [key, value] of Object.entries(responses)) {
        if (lower.includes(key)) return value;
    }
    return defaultReply;
};

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: '👋 Hi! I\'m Dhananjay\'s assistant. Ask me about skills, projects, education, or contact!' },
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const send = () => {
        if (!input.trim()) return;
        const userMsg = { from: 'user', text: input.trim() };
        const botMsg = { from: 'bot', text: getReply(input) };
        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput('');
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') send();
    };

    return (
        <>
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-float flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
                {open ? <IoCloseOutline size={26} /> : <IoChatbubbleEllipsesOutline size={24} />}
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 max-h-[28rem] flex flex-col rounded-2xl overflow-hidden shadow-float border border-white/40 dark:border-slate-700/40 bg-white/85 dark:bg-slate-900/90 backdrop-blur-xl"
                    >
                        <div className="px-5 py-3.5 bg-gradient-to-r from-primary to-secondary text-white">
                            <h4 className="font-display font-bold text-sm">💬 Portfolio Bot</h4>
                            <p className="text-xs opacity-80">Ask me anything about Dhananjay!</p>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[14rem]">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${msg.from === 'user'
                                                ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-sm'
                                                : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-white/50 dark:border-slate-700/50 rounded-bl-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        <div className="p-3 border-t border-white/30 dark:border-slate-700/30 bg-white/40 dark:bg-slate-800/40">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    placeholder="Type a keyword..."
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/70 dark:bg-slate-700/50 border border-white/40 dark:border-slate-600/40 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary/40 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                />
                                <button
                                    onClick={send}
                                    className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform"
                                >
                                    <IoSendOutline size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
