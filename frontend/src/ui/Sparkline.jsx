import React from 'react';

export default function Sparkline({ points, color = "#2E6B3E" }) {
  const gradientId = "gs_" + Math.random().toString(36).substr(2, 5);
  
  return (
    <svg viewBox="0 0 80 28" className="w-[80px] h-[28px] mt-2">
      <polyline 
        points={points} 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <polyline 
        points={points} 
        fill={`url(#${gradientId})`} 
        stroke="none"
      />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".2"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
