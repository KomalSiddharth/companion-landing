import React from 'react';
import { useInView } from '../hooks/useInView';

const HowItWorksSection: React.FC = () => {
    const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

    const cardData = [
        {
            step: '1',
            title: 'Post what you feel like doing',
            description: 'A walk, reading, chai, anything.',
            icon: '✨'
        },
        {
            step: '2',
            title: 'Others can join if they vibe with it',
            description: 'They swipe right if it feels right.',
            icon: '💬'
        },
        {
            step: '3',
            title: 'Meet for real',
            description: 'Safe, natural, and real-world.',
            icon: '🌍'
        }
    ];

    return (
        <section ref={ref} className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>How It Works</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cardData.map((card, index) => (
                        <div 
                            key={index} 
                            className={`bg-white p-8 rounded-2xl shadow-lg border border-stone-200/80 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl overflow-hidden ${isInView ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-10'}`}
                        >
                            <div className="flex items-center mb-4">
                                <div className={`text-4xl mr-4 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'}`}>{card.icon}</div>
                                <div className={`transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-4'}`}>
                                    <p className="text-sm font-bold text-emerald-600">STEP {card.step}</p>
                                    <h3 className="text-xl font-bold text-stone-800">{card.title}</h3>
                                </div>
                            </div>
                            <p className={`text-stone-600 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-4'}`}>{card.description}</p>
                        </div>
                    ))}
                </div>
                <p className={`text-center mt-16 text-xl text-stone-600 transition-all duration-700 ease-out delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    No pressure. No pretending. Just people being people.
                </p>
            </div>
        </section>
    );
};

export default HowItWorksSection;