import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Prices() {
  const navigate = useNavigate();

  const crops = [
    { emoji:'🧅', name:'Onion · प्याज', mandi:'Indore APMC · 14 min ago', price:'₹2,840', unit:'/quintal', chg:'+6.8%', dir:'u', sig:'HOLD', sigC:'sig-h', link:true },
    { emoji:'🥔', name:'Potato · आलू', mandi:'Ujjain APMC · 1h ago', price:'₹1,650', unit:'/quintal', chg:'-2.4%', dir:'d', sig:'SELL', sigC:'sig-s', link:true },
    { emoji:'🍅', name:'Tomato · टमाटर', mandi:'Nashik APMC · 32 min ago', price:'₹3,200', unit:'/quintal', chg:'+16.4%', dir:'u', sig:'SELL', sigC:'sig-s', link:true },
    { emoji:'🌾', name:'Wheat · गेहूं', mandi:'Sehore APMC · 5 min ago', price:'₹2,150', unit:'/quintal', chg:'+1.2%', dir:'u', sig:'WAIT', sigC:'sig-w' },
    { emoji:'🌱', name:'Soybean · सोयाबीन', mandi:'Ujjain APMC · 20 min ago', price:'₹4,600', unit:'/quintal', chg:'-2.5%', dir:'d', sig:'SELL', sigC:'sig-s' },
    { emoji:'🧄', name:'Garlic · लहसुन', mandi:'Mandsaur · 2 min ago', price:'₹12,500', unit:'/quintal', chg:'+6.8%', dir:'u', sig:'SELL', sigC:'sig-s' },
    { emoji:'🌼', name:'Mustard · सरसों', mandi:'Jaipur APMC · 45 min ago', price:'₹5,200', unit:'/quintal', chg:'+0.9%', dir:'u', sig:'HOLD', sigC:'sig-h' },
    { emoji:'🌽', name:'Maize · मक्का', mandi:'Chhindwara · 1h ago', price:'₹2,050', unit:'/quintal', chg:'-0.7%', dir:'d', sig:'WAIT', sigC:'sig-w' },
    { emoji:'🫘', name:'Gram · चना', mandi:'Vidisha APMC · 30 min ago', price:'₹5,800', unit:'/quintal', chg:'+2.6%', dir:'u', sig:'HOLD', sigC:'sig-h' },
    { emoji:'🫚', name:'Ginger · अदरक', mandi:'Kochi APMC · 12 min ago', price:'₹8,500', unit:'/quintal', chg:'+4.9%', dir:'u', sig:'HOLD', sigC:'sig-h' },
    { emoji:'🍚', name:'Rice · चावल', mandi:'Karnal APMC · 25 min ago', price:'₹3,100', unit:'/quintal', chg:'+1.3%', dir:'u', sig:'WAIT', sigC:'sig-w' },
    { emoji:'🥜', name:'Groundnut · मूंगफली', mandi:'Gondal APMC · 50 min ago', price:'₹6,200', unit:'/quintal', chg:'-0.8%', dir:'d', sig:'WAIT', sigC:'sig-w' },
    { emoji:'🎋', name:'Sugarcane · गन्ना', mandi:'Meerut APMC · 2h ago', price:'₹380', unit:'/quintal', chg:'0%', dir:'f', sig:'WAIT', sigC:'sig-w' },
    { emoji:'🫘', name:'Tur (Arhar) · अरहर', mandi:'Latur APMC · 15 min ago', price:'₹9,500', unit:'/quintal', chg:'+2.1%', dir:'u', sig:'HOLD', sigC:'sig-h' },
    { emoji:'☁️', name:'Cotton · कपास', mandi:'Rajkot APMC · 10 min ago', price:'₹7,100', unit:'/quintal', chg:'+4.4%', dir:'u', sig:'HOLD', sigC:'sig-h' },
  ];

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">Market Intel</div>
        <button className="ph-btn" style={{fontSize:'14px'}}>🔍</button>
      </div>
      <div className="inner animate-fade-up">
        {/* Search bar */}
        <div className="glass row g10 mb16" style={{padding:'12px 16px', borderRadius:'14px'}}>
          <span style={{color:'rgba(107,93,79,.4)', fontSize:'16px'}}>🔍</span>
          <input style={{background:'transparent', border:'none', outline:'none', fontSize:'14px', fontWeight:600, fontFamily:'var(--font-body)', color:'var(--ink)', width:'100%'}} placeholder="Search mandi or crop..." />
        </div>

        {/* Category chips */}
        <div className="chips mb16">
          <button className="chip chip-a">All</button>
          <button className="chip chip-i">My Crops</button>
          <button className="chip chip-i">Vegetables 🥦</button>
          <button className="chip chip-i">Cereals 🌾</button>
          <button className="chip chip-i">Pulses 🫘</button>
          <button className="chip chip-i">Spices 🧄</button>
        </div>

        <div className="micro mb12" style={{color:'var(--muted-lt)'}}>Real-time · AGMARKNET · {crops.length} Crops</div>

        <div className="col g10">
          {crops.map((c, i) => (
            <div key={i} className="pr" onClick={() => c.link && navigate('/forecast')}>
              <div className="pr-em">{c.emoji}</div>
              <div style={{flex:1, minWidth:0}}>
                <div className="pr-name" style={{fontSize:'13px'}}>{c.name}</div>
                <div className="pr-sub">📍 {c.mandi}</div>
              </div>
              <div style={{textAlign:'right', flexShrink:0}}>
                <div className="pr-price" style={{fontSize:'16px'}}>{c.price}</div>
                <div className="pr-unit">{c.unit}</div>
                <div className={`chg chg-${c.dir}`}>{c.dir === 'u' ? '↑' : c.dir === 'd' ? '↓' : '→'} {c.chg}</div>
              </div>
              <div className={`sig ${c.sigC}`} style={{fontSize:'10px'}}>{c.sig}</div>
            </div>
          ))}
        </div>

        <div style={{textAlign:'center', padding:'20px 0', fontSize:'11px', fontWeight:600, color:'rgba(107,93,79,.35)'}}>Source: AGMARKNET · Updated 14 min ago · 165+ Mandis</div>
      </div>
    </>
  );
}
