
import React from 'react';
import { useInView } from '../hooks/useInView';
import { DateIcon, FriendIcon, GroupIcon, BusinessIcon } from './Icons';

const ConnectionModesSection: React.FC = () => {
    const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });

    const modes = [
        { Icon: DateIcon, title: 'Date', description: 'Meet someone special naturally.' },
        { Icon: FriendIcon, title: 'Friend', description: 'Find good people to hang out with.' },
        { Icon: GroupIcon, title: 'Group', description: 'Join circles that feel like home.' },
        { Icon: BusinessIcon, title: 'Business', description: 'Meet people who work like you—and get you.' },
    ];

    return (
        <section ref={ref} className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Choose Your Way to Connect
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {modes.map((mode, index) => (
                        <div 
                            key={index} 
                            className={`bg-[#FBF9F4] p-8 rounded-2xl text-center transition-all duration-700 ease-out border border-transparent hover:border-stone-200/60 hover:bg-white hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div 
                                className={`flex justify-center mb-4 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${(index * 150) + 300}ms` }}
                            >
                                <mode.Icon />
                            </div>
                            <h3 
                                className={`text-2xl font-bold mb-2 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${(index * 150) + 400}ms` }}
                            >
                                {mode.title}
                            </h3>
                            <p 
                                className={`text-stone-600 transition-all duration-500 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${(index * 150) + 500}ms` }}
                            >
                                {mode.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className={`text-center mt-16 text-xl text-stone-600 transition-all duration-700 ease-out delay-500 max-w-3xl mx-auto ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    From dating to chai circles to co-working—Companion brings people together, your way.
                </p>
            </div>
        </section>
    );
};

export default ConnectionModesSection;
