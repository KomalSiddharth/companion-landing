
import React from 'react';
import { useInView } from '../hooks/useInView';

const DifferentiatorSection: React.FC = () => {
    const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.1 });

    const images = [
        { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', alt: 'Two people laughing over coffee' },
        { src: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=800&auto=format&fit=crop', alt: 'Group of friends on a walk' },
        { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop', alt: 'Person reading a book in a park' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', alt: 'Small group collaborating at a table' },
    ];

    return (
        <section ref={ref} className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <div className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-emerald-700">No fake profiles.</h2>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-700 my-2">No weird messages.</h2>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-amber-700">No pressure.</h2>
                    <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mt-8">
                        Just small moments that turn into real memories.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                loading="lazy"
                                className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80 hover:scale-105 transition-transform duration-500 cursor-pointer" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorSection;
