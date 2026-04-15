import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Features() {
  const navigate = useNavigate();

  const features = [
    { id: 'scan', icon: '📷', title: 'Crop Scanner', desc: 'AI disease & quality grading', color: 'var(--green-lt)' },
    { id: 'prices', icon: '📈', title: 'Live APMC Rates', desc: 'Real-time mandi prices', color: 'var(--blue-lt)' },
    { id: 'forecast', icon: '🎯', title: 'AI Predictor', desc: '30-day price forecasting', color: 'var(--gold-lt)' },
    { id: 'mandi', icon: '🏆', title: 'Mandi Finder', desc: 'Nearest high-profit markets', color: 'var(--bg2)' },
    { id: 'profit', icon: '🧮', title: 'Profit Calculator', desc: 'Net profit after all costs', color: 'var(--bg)' },
    { id: 'schemes', icon: '🏛️', title: 'Govt Schemes', desc: 'PM-KISAN, KCC, subsidies', color: 'var(--red-lt)' },
    { id: 'holdsell', icon: '⚖️', title: 'Hold/Sell Advisor', desc: 'AI holding recommendations', color: 'var(--green-lt)' },
    { id: 'community', icon: '👥', title: 'Community', desc: 'Farmer discussion feed', color: 'var(--blue-lt)' },
    { id: 'alerts', icon: '🔔', title: 'Price Alerts', desc: 'SMS/WhatsApp alerts', color: 'var(--gold-lt)' },
    { id: 'voice', icon: '🎙️', title: 'Voice AI', desc: 'Bhashini voice guidance', color: 'var(--bg2)' }
  ];

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">All Features Hub</div>
      </div>
      <div className="inner animate-fade-up">
        <div className="hero-card mb16 ani">
          <div style={{position:'relative', zIndex:1}}>
            <div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'#fff', marginBottom:'6px'}}>KrishiMitra Super App</div>
            <div style={{fontSize:'12px', color:'rgba(255,255,255,.7)', lineHeight:1.5}}>Explore all 10+ AI agritech tools designed to boost your daily profit!</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="ani">
          {features.map(f => (
            <div
              key={f.id}
              className="gcard"
              onClick={() => navigate(`/${f.id}`)}
              style={{cursor:'pointer', padding:'16px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:'8px'}}
            >
              <div style={{width:'52px', height:'52px', borderRadius:'14px', background:f.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'26px', boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                {f.icon}
              </div>
              <div>
                <div className="h4" style={{fontSize:'13px', marginBottom:'3px'}}>{f.title}</div>
                <div style={{fontSize:'10px', color:'var(--muted)', lineHeight:1.35}}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
