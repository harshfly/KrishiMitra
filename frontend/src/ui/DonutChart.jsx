import React from 'react';

export default function DonutChart({ value = "₹4.8L", label = "Total Value" }) {
  // Hardcoded SVG parameters matching the prototype exactly
  return (
    <div style={{ flexShrink: 0 }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="38" fill="none" stroke="#F0EDE6" strokeWidth="14"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#2E6B3E" strokeWidth="14" strokeDasharray="95.5 143.2" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 50 50)"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#C8A84B" strokeWidth="14" strokeDasharray="59.7 178.9" strokeDashoffset="-97.5" strokeLinecap="round" transform="rotate(-90 50 50)"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#1565C0" strokeWidth="14" strokeDasharray="47.8 190.9" strokeDashoffset="-159.2" strokeLinecap="round" transform="rotate(-90 50 50)"/>
        <circle cx="50" cy="50" r="38" fill="none" stroke="#e67575" strokeWidth="14" strokeDasharray="35.8 202.8" strokeDashoffset="-209" strokeLinecap="round" transform="rotate(-90 50 50)"/>
        <text x="50" y="46" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700" fill="#1A1208">{value}</text>
        <text x="50" y="60" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#6B5D4F">{label}</text>
      </svg>
    </div>
  );
}
