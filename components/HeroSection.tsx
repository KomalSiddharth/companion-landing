
import React from 'react';
import { useInView } from '../hooks/useInView';

interface HeroSectionProps {
  onJoinClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.1 });

  const getTransitionClass = (delay: string) => `transition-all duration-700 ease-out ${delay} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-amber-50/50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-4xl max-h-4xl bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className={`${getTransitionClass('delay-200')} text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4`}>
          {/* Split text into spans for staggered animation if desired, or keep as block */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-stone-700 to-emerald-600 animated-gradient">
            Meet people who <br /> feel like home.
          </span>
        </h1>
        <p className={`${getTransitionClass('delay-300')} max-w-2xl text-lg md:text-xl text-stone-600 mb-8`}>
          Real connections. Real moments. No endless scrolling.
        </p>
        <button onClick={onJoinClick} className={`${getTransitionClass('delay-500')} text-lg inline-block bg-emerald-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-emerald-700 transition-transform transform hover:scale-105`}>
          💫 Join the waitlist
        </button>
      </div>
    </section>
  );
};

export default HeroSection;