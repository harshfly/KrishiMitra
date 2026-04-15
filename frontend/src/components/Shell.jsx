import React from 'react';
import BottomNav from './BottomNav';

export default function Shell({ children }) {
  return (
    <div className="shell">
      <div className="sw">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
