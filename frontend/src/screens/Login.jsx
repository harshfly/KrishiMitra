import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

export default function Login({ onSwitchToRegister }) {
  const { lang, setLang, t } = useLanguage();
  const [step, setStep] = useState('splash'); // 'splash' or 'login'
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (phone.length >= 10 && password.length >= 4) {
      setLoading(true);
      
      // MOCK: In production, you would probably use signInWithOtp
      // We'll use password signIn for the sake of the fake form
      const dummyEmail = `${phone}@krishimitra.local`; 
      const { error } = await supabase.auth.signInWithPassword({
        email: dummyEmail,
        password: password,
      });

      if (error) {
        alert("Login failed: " + error.message);
      }
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      alert("Google login failed: " + error.message);
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
          <div className="label" style={{color:'var(--green-dk)', marginBottom:'16px'}}>AI-Powered Agri Intelligence</div>
          <div style={{fontSize:'16px', color:'var(--green-dk)', textAlign:'center', maxWidth:'320px', lineHeight:'1.6'}}>
            Smart features for the modern Indian farmer. Market forecasts, expert community, and real-time mandi prices.
          </div>
        </div>

        <div className="auth-right">
          {/* Background decorative blobs */}
          <div className="hide-on-desktop" style={{position:'absolute', top:'-80px', right:'-80px', width:'300px', height:'300px', background:'radial-gradient(circle, rgba(46,107,62,.08) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none'}}></div>
          <div className="hide-on-desktop" style={{position:'absolute', bottom:'-60px', left:'-60px', width:'250px', height:'250px', background:'radial-gradient(circle, rgba(200,168,75,.08) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none'}}></div>

          {step === 'splash' ? (
            <div className="animate-fade-up" style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px 28px', zIndex:10}}>
              {/* Mobile branding */}
              <div className="hide-on-desktop" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style={{width:'88px', height:'88px', background:'#fff', borderRadius:'28px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'var(--shadow-l)', marginBottom:'32px', border:'1px solid rgba(0,0,0,.04)'}}>
                  <div style={{width:'56px', height:'56px', background:'linear-gradient(145deg, var(--green), var(--green-dk))', borderRadius:'18px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', boxShadow:'var(--shadow-g)'}}>🌾</div>
                </div>
                <div style={{fontFamily:'var(--font-disp)', fontSize:'42px', fontWeight:700, color:'var(--ink)', letterSpacing:'-1.5px', marginBottom:'8px'}}>Krishi<span className="t-g">Mitra</span></div>
                <div className="label" style={{marginBottom:'6px'}}>{t("splash.subtitle")}</div>
                <div style={{fontSize:'14px', color:'var(--muted)', textAlign:'center', maxWidth:'280px', lineHeight:'1.7', marginBottom:'48px'}}>
                  {t("splash.desc")}
                </div>
              </div>

              <div className="row g8 mb20" style={{flexWrap:'wrap', justifyContent:'center'}}>
                <span onClick={() => setLang('hi')} style={{fontSize:'12px', fontWeight:700, color: lang==='hi'?'var(--green)':'var(--muted)', cursor:'pointer'}}>हिंदी</span>
                <span style={{color:'var(--border)'}}>·</span>
                <span onClick={() => setLang('en')} style={{fontSize:'12px', fontWeight:700, color: lang==='en'?'var(--green)':'var(--muted)', cursor:'pointer'}}>English</span>
                <span style={{color:'var(--border)'}}>·</span>
                <span onClick={() => setLang('hinglish')} style={{fontSize:'12px', fontWeight:700, color: lang==='hinglish'?'var(--green)':'var(--muted)', cursor:'pointer'}}>Hinglish</span>
              </div>

              <div className="col g12 w100">
                <button className="btn btn-g btn-lg btn-full" onClick={() => setStep('login')}>{t("splash.get_started")}</button>
                <button className="btn btn-out btn-lg btn-full" onClick={() => setStep('login')}>{t("splash.sign_in")}</button>
              </div>
              <div style={{marginTop:'24px', fontSize:'11px', color:'rgba(107,93,79,.4)', textAlign:'center'}}>
                {t("splash.terms")}
              </div>
            </div>
          ) : (
            <div className="animate-fade-up" style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 28px', zIndex:10}}>
              <button 
                onClick={() => setStep('splash')} 
                style={{background:'var(--bg)', border:'none', width:'40px', height:'40px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', cursor:'pointer', color:'var(--muted)', marginBottom:'24px'}}
              >
                ←
              </button>
              <div className="h2 mb4">{t("login.welcome")}</div>
              <div style={{fontSize:'14px', color:'var(--muted)', marginBottom:'32px'}}>{t("login.subtitle")}</div>

              <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column'}}>
                <div className="field-wrap">
                  <label className="field-lbl">{t("login.phone")}</label>
                  <input 
                    className="field" 
                    type="tel" 
                    placeholder={t("login.phone_ph")} 
                    maxLength={10} 
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="field-wrap">
                  <label className="field-lbl">{t("login.pass")}</label>
                  <input 
                    className="field" 
                    type="password" 
                    placeholder={t("login.pass_ph")} 
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div className="row-b mb20" style={{marginTop:'-8px'}}>
                  <div className="row g6">
                    <input type="checkbox" id="remMe" style={{accentColor:'var(--green)'}} />
                    <label htmlFor="remMe" style={{fontSize:'12px', fontWeight:600, color:'var(--muted)'}}>{t("login.remember")}</label>
                  </div>
                  <span style={{fontSize:'12px', fontWeight:700, color:'var(--green)', cursor:'pointer'}}>{t("login.forgot")}</span>
                </div>

                <button type="submit" className="btn btn-g btn-lg btn-full" id="loginBtn" disabled={loading}>
                  {loading ? '...' : t("login.signin_btn")}
                </button>
                
                <div style={{textAlign:'center', margin:'20px 0', fontSize:'12px', color:'var(--muted-lt)'}}>— OR —</div>
                
                <button type="button" className="btn btn-full btn-lg" style={{background:'#fff', border:'1.5px solid var(--border)', color:'var(--ink)', boxShadow:'var(--shadow-s)'}} onClick={handleGoogleLogin}>
                  <span style={{fontSize:'20px', marginRight:'8px'}}>🅶</span> {t("login.google")}
                </button>
                
                <div style={{textAlign:'center', marginTop:'24px', flexShrink:0, fontSize:'13px', color:'var(--muted)'}}>
                  {t("login.register_prompt")} <span onClick={onSwitchToRegister} style={{color:'var(--green)', fontWeight:700, cursor:'pointer'}}>{t("login.register_btn")}</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
