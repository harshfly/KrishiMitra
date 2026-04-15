import React from 'react';

export default function Splash() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50" style={{background: 'var(--bg)'}}>
      <style>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        .animate-loading {
          animation: loadingBar 2.2s ease-in-out forwards;
        }
      `}</style>
      <div className="w-[120px] h-[120px] bg-green-lt rounded-full flex items-center justify-center mb-6 animate-pulse-ring">
        <span className="text-[72px]">🌾</span>
      </div>
      <h1 className="h1 text-green-dk tracking-tight">KrishiMitra</h1>
      <p className="text-muted micro mt-2">AI Agri Intelligence</p>
      
      {/* Animated loading bar */}
      <div className="absolute bottom-16 w-48 h-1.5 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-green rounded-full w-full origin-left animate-loading"></div>
      </div>
    </div>
  );
}
