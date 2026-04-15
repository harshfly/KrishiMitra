import React from 'react';

export default function ProgressBar({ progress, colorClass = 'bg-green' }) {
  return (
    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
      <div className={`h-full rounded-full transition-all ${colorClass}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
}
