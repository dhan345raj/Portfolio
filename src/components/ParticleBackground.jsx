import React from 'react';

const ParticleBackground = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4,
        opacity: Math.random() * 0.15 + 0.05,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        background: `radial-gradient(circle, rgba(108,99,255,${p.opacity}), rgba(167,139,250,${p.opacity * 0.5}))`,
                        animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
