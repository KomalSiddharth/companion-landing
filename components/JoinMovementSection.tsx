
import React from 'react';
import { useInView } from '../hooks/useInView';

interface JoinMovementSectionProps {
  onJoinClick: () => void;
}

const JoinMovementSection: React.FC<JoinMovementSectionProps> = ({ onJoinClick }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true, threshold: 0.3 });

  const getTransitionClass = (delay: string) => `transition-all duration-1000 ease-in-out ${delay} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className={`${getTransitionClass('delay-100')} text-4xl md:text-6xl font-extrabold tracking-tighter max-w-3xl mx-auto`}>
          This isn’t another app. It’s a way to feel connected again.
        </h2>
        <p className={`${getTransitionClass('delay-300')} mt-6 text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto`}>
          Because everyone deserves a real companion.
        </p>
        <div className={`${getTransitionClass('delay-500')} mt-12`}>
          <button onClick={onJoinClick} className="text-xl inline-block bg-emerald-600 text-white font-bold py-4 px-12 rounded-full shadow-xl hover:bg-emerald-700 transition-transform transform hover:scale-105">
            🌿 Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;
