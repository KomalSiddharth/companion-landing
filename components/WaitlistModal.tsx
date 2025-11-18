
import React, { useState, useEffect } from 'react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setShow(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  
  useEffect(() => {
    if (!isOpen) {
        setTimeout(() => {
            setName('');
            setEmail('');
            setReason('');
            setIsSubmitted(false);
            setError('');
        }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    console.log('Waitlist Submission:', { name, email, reason });
    setIsSubmitted(true);
  };

  if (!show) {
      return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors" aria-label="Close modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <h2 id="waitlist-modal-title" className="text-3xl font-bold text-emerald-600 mb-4">You're in! 💌</h2>
            <p className="text-stone-600">We'll reach out soon with early access. Thanks for joining the movement to build real connections.</p>
          </div>
        ) : (
          <>
            <h2 id="waitlist-modal-title" className="text-3xl font-bold text-center mb-2">Join the Movement</h2>
            <p className="text-stone-600 text-center mb-6">Be the first to know when Companion is live.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name (Optional)</label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email (Required)</label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="you@example.com"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-stone-700">Why are you excited? (Optional)</label>
                  <textarea 
                    id="reason"
                    rows={3}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="e.g., 'To find genuine connections...'"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-4 text-center" role="alert">{error}</p>}
              <button 
                type="submit"
                className="w-full mt-6 bg-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Join the Waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
