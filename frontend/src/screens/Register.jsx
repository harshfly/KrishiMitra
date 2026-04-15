import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

export default function Register({ onSwitchToLogin }) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    
    // In a real app, we'd use phone verification, but for now we'll create a dummy email
    const dummyEmail = `${phone}@krishimitra.com`;
    
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: dummyEmail,
      password: password,
      options: {
        data: {
          full_name: name,
          phone: phone
        }
      }
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      // Success! Supabase auto-logs in after signup usually, or requires email confirm
      // For this app, we'll assume they're logged in or redirected
      console.log("Registered:", data);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        {/* Desktop left-side branding */}
        <div className="auth-left">
          <div style={{width:'88px', height:'88px', background:'#fff', borderRadius:'28px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'var(--shadow-l)', margin:'0 auto 32px'}}>
            <div style={{width:'56px', height:'56px', background:'linear-gradient(145deg, var(--green), var(--green-dk))', borderRadius:'18px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', boxShadow:'var(--shadow-g)'}}>🌾</div>
          </div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'42px', fontWeight:700, color:'var(--green-dk)', letterSpacing:'-1.5px', marginBottom:'8px'}}>Krishi<span className="t-g">Mitra</span></div>
          <div className="label" style={{color:'var(--green-dk)', marginBottom:'16px'}}>Join Our Community</div>
          <div style={{fontSize:'16px', color:'var(--green-dk)', textAlign:'center', maxWidth:'320px', lineHeight:'1.6'}}>
            Create your account to start tracking Mandi prices and getting AI crop forecasts today.
          </div>
        </div>

        <div className="auth-right">
          <div className="animate-fade-up" style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'40px 28px', zIndex:10}}>
            <button 
              onClick={onSwitchToLogin} 
              style={{background:'var(--bg)', border:'none', width:'40px', height:'40px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', cursor:'pointer', color:'var(--muted)', marginBottom:'24px'}}
            >
              ←
            </button>
            <div className="h2 mb4">Create Account ✨</div>
            <div style={{fontSize:'14px', color:'var(--muted)', marginBottom:'32px'}}>Join thousands of smart Indian farmers</div>

            {error && <div style={{background:'var(--red-lt)', color:'var(--red)', padding:'12px', borderRadius:'12px', fontSize:'13px', fontWeight:600, marginBottom:'20px'}}>{error}</div>}

            <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column'}}>
              <div className="field-wrap">
                <label className="field-lbl">Full Name / आपका नाम</label>
                <input 
                  className="field" 
                  type="text" 
                  placeholder="Enter full name" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="field-wrap">
                <label className="field-lbl">Mobile Number / मोबाइल</label>
                <input 
                  className="field" 
                  type="tel" 
                  placeholder="10-digit mobile number" 
                  maxLength={10} 
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="field-wrap">
                <label className="field-lbl">Create Password / पासवर्ड</label>
                <input 
                  className="field" 
                  type="password" 
                  placeholder="Min 6 characters" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="field-wrap">
                <label className="field-lbl">Confirm Password / पासवर्ड पुष्टि करें</label>
                <input 
                  className="field" 
                  type="password" 
                  placeholder="Re-enter password" 
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-g btn-lg btn-full" disabled={loading}>
                {loading ? 'Creating Account...' : 'Register Now →'}
              </button>
              
              <div style={{textAlign:'center', margin:'20px 0', fontSize:'12px', color:'var(--muted-lt)'}}>— OR —</div>
              
              <button type="button" className="btn btn-full btn-lg" style={{background:'#fff', border:'1.5px solid var(--border)', color:'var(--ink)', boxShadow:'var(--shadow-s)'}} onClick={handleGoogleLogin}>
                <span style={{fontSize:'20px', marginRight:'8px'}}>🅶</span> Sign up with Google
              </button>
              
              <div style={{textAlign:'center', marginTop:'24px', fontSize:'13px', color:'var(--muted)'}}>
                Already have an account? <span onClick={onSwitchToLogin} style={{color:'var(--green)', fontWeight:700, cursor:'pointer'}}>Sign In</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
