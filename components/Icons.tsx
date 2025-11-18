
import React from 'react';

const iconProps = {
  className: "w-8 h-8 mb-4 text-emerald-600",
};

export const DateIcon: React.FC = () => (
  <svg {...iconProps} stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const FriendIcon: React.FC = () => (
  <svg {...iconProps} stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.53-1.825 2.68-2.313m-2.68 2.313a3 3 0 01-4.682 2.72 8.986 8.986 0 013.741.479m-9.3-9.155a3.75 3.75 0 107.5 0 3.75 3.75 0 00-7.5 0zM12 21a8.966 8.966 0 01-5.982-1.955 3.75 3.75 0 017.964 0A8.966 8.966 0 0112 21z" />
  </svg>
);

export const GroupIcon: React.FC = () => (
  <svg {...iconProps} stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

export const BusinessIcon: React.FC = () => (
  <svg {...iconProps} stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a6.032 6.032 0 01-1.5-.245 4.5 4.5 0 00-4.5 0 6.032 6.032 0 01-1.5.245 6.032 6.032 0 01-1.5-.245 4.5 4.5 0 00-4.5 0 6.032 6.032 0 01-1.5.245v-4.07a6.032 6.032 0 011.5-.245 4.5 4.5 0 004.5 0 6.032 6.032 0 011.5.245 6.032 6.032 0 011.5-.245 4.5 4.5 0 004.5 0 6.032 6.032 0 011.5.245zM12 13.5V13.5M12 9.75v.007" />
  </svg>
);
