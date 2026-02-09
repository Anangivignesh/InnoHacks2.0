import React from 'react';

export const Logo = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 64" // Adjusted viewbox for balance
      fill="none"
      className={className}
      {...props}
    >
      {/* Left Bracket (<) */}
      <path
        d="M38 10L10 32L38 54"
        stroke="url(#left-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right Bracket (>) */}
      <path
        d="M62 10L90 32L62 54"
        stroke="url(#right-gradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        {/* Gradient for Left Bracket: Red (Top) to Blue (Bottom) */}
        <linearGradient id="left-gradient" x1="0" y1="10" x2="0" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="45%" stopColor="#EA4335" /> {/* Red */}
          <stop offset="55%" stopColor="#2563EB" /> {/* Blue */}
        </linearGradient>

        {/* Gradient for Right Bracket: Green (Top) to Yellow (Bottom) */}
        <linearGradient id="right-gradient" x1="0" y1="10" x2="0" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="45%" stopColor="#34A853" /> {/* Green */}
          <stop offset="55%" stopColor="#FBBC04" /> {/* Yellow */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
