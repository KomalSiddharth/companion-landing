
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; Companion 2025</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Community</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
