import React from 'react';

export default function SHAPBars({ features }) {
  return (
    <div className="space-y-3 mt-4">
      {features.map((f, i) => {
        const isPos = f.impact > 0;
        return (
          <div key={i} className="flex items-center text-sm font-medium">
            <span className="w-8">{f.emoji}</span>
            <span className="flex-1 truncate pr-2 text-ink2">{f.label}</span>
            <div className="w-1/3 h-1.5 bg-border rounded-full mx-2 relative">
              <div 
                className={`absolute top-0 h-full rounded-full ${isPos ? 'bg-green' : 'bg-red'}`} 
                style={{ 
                  width: `${f.barPct}%`,
                  left: isPos ? '0' : 'auto',
                  right: isPos ? 'auto' : '0' 
                }}
              ></div>
            </div>
            <span className={`w-12 text-right ${isPos ? 'text-green' : 'text-red'}`}>
              {isPos ? '+' : ''}{f.impact}
            </span>
          </div>
        );
      })}
    </div>
  );
}
