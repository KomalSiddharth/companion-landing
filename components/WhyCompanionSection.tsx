import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const WhyCompanionSection: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?q=80&w=800&auto=format&fit=crop",
      alt: "Person walking alone",
      label: "Before..."
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      alt: "Two people smiling and walking together",
      label: "...After"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            We all talk online. But sometimes, it still feels like no one’s really there.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-12">
            Companion helps you find people—nearby—who want the same simple things: a walk, a coffee, a chat, or just quiet company.
          </p>
        </div>

        <div 
            className={`relative group max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl h-[400px] transition-all duration-700 ease-out delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          {slides.map((slide, index) => (
            <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white text-2xl font-medium italic tracking-wide">{slide.label}</p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-purple-500' : 'w-2 bg-white/60 hover:bg-white'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCompanionSection;
