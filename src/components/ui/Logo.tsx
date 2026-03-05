import React from "react";

const Logo = ({ className = "h-8 w-auto text-primary" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Sunrise Painting Co. Logo"
  >
    {/* Sun Icon */}
    <circle cx="30" cy="30" r="12" fill="#FF6B35" />
    <path d="M30 10V0M30 60V50M10 30H0M60 30H50M16.4 16.4L9.3 9.3M50.7 50.7L43.6 43.6M16.4 43.6L9.3 50.7M50.7 9.3L43.6 16.4" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round"/>
    
    {/* Text */}
    <text x="65" y="38" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#0F2B46">SUNRISE</text>
    <text x="65" y="52" fontFamily="Arial, sans-serif" fontSize="14" fill="#00A9CE" letterSpacing="2">PAINTING CO.</text>
  </svg>
);

export default Logo;