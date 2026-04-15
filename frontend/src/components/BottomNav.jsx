import React from 'react';
import { Home, BarChart2, LayoutGrid, Map, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { t } = useLanguage();

  const tabs = [
    { to: '/',        icon: Home,       label: t('nav.home') },
    { to: '/prices',  icon: BarChart2,  label: t('nav.prices') },
    { to: '/features',icon: LayoutGrid, label: t('nav.hub') },
    { to: null,       scan: true,       label: t('nav.scan') },
    { to: '/mandi',   icon: Map,        label: t('nav.mandi') },
    { to: '/profile', icon: User,       label: t('nav.profile') },
  ];

  return (
    <div className="bottom-nav">
      <div className="bottom-nav-bar">
        {tabs.map((tab, i) => {
          if (tab.scan) {
            return (
              <button
                key={i}
                className="nav-scan"
                onClick={() => navigate('/scan')}
                aria-label={t('nav.scan')}
              >
                <span>📷</span>
              </button>
            );
          }

          const Icon = tab.icon;
          const isActive = path === tab.to;
          return (
            <button
              key={i}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => navigate(tab.to)}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="nav-tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
