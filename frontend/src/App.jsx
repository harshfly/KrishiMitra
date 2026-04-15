import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Shell from './components/Shell';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import Onboarding from './screens/Onboarding';
import { LanguageProvider } from './context/LanguageContext';
import { supabase } from './lib/supabase';

import Home from './screens/Home';
import Prices from './screens/Prices';
import Forecast from './screens/Forecast';
import HoldSell from './screens/HoldSell';
import Mandi from './screens/Mandi';
import Profit from './screens/Profit';
import Schemes from './screens/Schemes';
import Alerts from './screens/Alerts';
import Voice from './screens/Voice';
import Scan from './screens/Scan';
import Community from './screens/Community';
import Profile from './screens/Profile';
import Features from './screens/Features';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [authView, setAuthView] = useState('login'); // 'login' or 'register'

  const checkOnboarding = async (currUser) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('state, district')
      .eq('id', currUser.id)
      .single();
    
    // If state/district is missing, show onboarding
    if (!data || !data.state || !data.district) {
      setShowOnboarding(true);
    } else {
      setShowOnboarding(false);
    }
    setShowSplash(false);
  };

  useEffect(() => {
    // 1. Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkOnboarding(session.user);
      } else {
        setShowSplash(false);
      }
    });

    // 2. Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkOnboarding(session.user);
      } else {
        setShowOnboarding(false);
        setShowSplash(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  if (showSplash) {
    return <Splash />;
  }

  // If the user hasn't finished onboarding, show the onboarding screen
  if (showOnboarding) {
    return <Onboarding user={user} onComplete={handleOnboardingComplete} />;
  }

  // If no user is authenticated, render the Login or Register screen
  if (!user) {
    return authView === 'login' 
      ? <Login onSwitchToRegister={() => setAuthView('register')} />
      : <Register onSwitchToLogin={() => setAuthView('login')} />;
  }

  return (
    <Router>
      <Shell>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/holdsell" element={<HoldSell />} />
          <Route path="/mandi" element={<Mandi />} />
          <Route path="/profit" element={<Profit />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile user={user} onLogout={() => setUser(null)} />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Shell>
    </Router>
  );
}

export default App;
