import React from 'react';

const signalConfig = {
  HOLD: { bg: 'bg-gold', text: 'text-white', label: '⏳ HOLD' },
  SELL: { bg: 'bg-green-md', text: 'text-white', label: '🚀 SELL' },
  NOW:  { bg: 'bg-green-md', text: 'text-white', label: '🔥 NOW' },
  WAIT: { bg: 'bg-blue', text: 'text-white', label: '⏱ WAIT' },
  RISK: { bg: 'bg-red', text: 'text-white', label: '⚠ RISK' },
};

export default function Badge({ signal, className = '' }) {
  const config = signalConfig[signal] || signalConfig.WAIT;
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full micro ${config.bg} ${config.text} ${className}`}>
      {config.label}
    </span>
  );
}
