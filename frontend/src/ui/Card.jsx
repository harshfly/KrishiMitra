import React from 'react';

export default function Card({ children, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/72 backdrop-blur-xl border border-white/45 rounded-[20px] shadow-s overflow-hidden ${className}`}
      style={{ WebkitBackdropFilter: 'blur(20px) saturate(180%)' }}
    >
      {children}
    </div>
  );
}
