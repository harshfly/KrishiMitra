import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HoldSell() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Hold / Sell Advisor</div><button className="ph-btn">🌐</button></div>
      <div className="inner animate-fade-up">
        <div className="ab ab-o mb16"><div className="ab-icon">🤖</div><div><div className="ab-title">AI Advisor — आज के लिए</div><div className="ab-body">LSTM+GRU Ensemble · 87.3% accuracy · Updated every 4 hours from AGMARKNET</div></div></div>
        
        <div className="col g10 mb20">
          <div className="hs g12"><div style={{fontSize:'32px'}}>🧅</div><div style={{flex:1}}><div className="h4">Onion · प्याज</div><div style={{fontSize:'12px', color:'var(--muted)', marginTop:'2px'}}>Rising · Peak in 8 days</div><div className="prog-t mt8"><div className="prog-f pf-o" style={{width:'72%'}}></div></div><div style={{fontSize:'10px', color:'var(--muted)', fontWeight:600, marginTop:'3px'}}>Peak window 72% — Hold for max gain</div></div><div className="sig sig-h">⏳ HOLD</div></div>
          <div className="hs g12"><div style={{fontSize:'32px'}}>🥔</div><div style={{flex:1}}><div className="h4">Potato · आलू</div><div style={{fontSize:'12px', color:'var(--red)', fontWeight:600, marginTop:'2px'}}>Falling · MSP risk in 12 days</div><div className="prog-t mt8"><div className="prog-f pf-r" style={{width:'35%'}}></div></div><div style={{fontSize:'10px', color:'var(--red)', fontWeight:700, marginTop:'3px'}}>⚠️ MSP ₹1,500 approaching — sell now</div></div><div className="sig sig-s">🚀 SELL</div></div>
          <div className="hs g12"><div style={{fontSize:'32px'}}>🍅</div><div style={{flex:1}}><div className="h4">Tomato · टमाटर</div><div style={{fontSize:'12px', color:'var(--green)', fontWeight:700, marginTop:'2px'}}>At seasonal peak today!</div><div className="prog-t mt8"><div className="prog-f pf-g" style={{width:'96%'}}></div></div><div style={{fontSize:'10px', color:'var(--green)', fontWeight:700, marginTop:'3px'}}>Sell before weekend — price will drop</div></div><div className="sig sig-s">🔥 NOW</div></div>
          <div className="hs g12"><div style={{fontSize:'32px'}}>🌾</div><div style={{flex:1}}><div className="h4">Wheat · गेहूं</div><div style={{fontSize:'12px', color:'var(--muted)', marginTop:'2px'}}>Stable · Rabi uplift Nov–Dec</div><div className="prog-t mt8"><div className="prog-f pf-b" style={{width:'52%'}}></div></div><div style={{fontSize:'10px', color:'var(--blue)', fontWeight:700, marginTop:'3px'}}>Wait for post-Rabi season price lift</div></div><div className="sig sig-w">⏱ WAIT</div></div>
          <div className="hs g12"><div style={{fontSize:'32px'}}>🧄</div><div style={{flex:1}}><div className="h4">Garlic · लहसुन</div><div style={{fontSize:'12px', color:'var(--green)', fontWeight:700, marginTop:'2px'}}>₹12,500 — 52-week ALL-TIME HIGH!</div><div className="prog-t mt8"><div className="prog-f pf-g" style={{width:'100%'}}></div></div><div style={{fontSize:'10px', color:'var(--green)', fontWeight:700, marginTop:'3px'}}>⭐ Peak! Sell by tomorrow</div></div><div className="sig sig-s">💥 NOW</div></div>
          <div className="hs g12"><div style={{fontSize:'32px'}}>🌱</div><div style={{flex:1}}><div className="h4">Soybean · सोयाबीन</div><div style={{fontSize:'12px', color:'var(--red)', fontWeight:600, marginTop:'2px'}}>Declining · buffer stock high</div><div className="prog-t mt8"><div className="prog-f pf-r" style={{width:'42%'}}></div></div><div style={{fontSize:'10px', color:'var(--muted)', fontWeight:600, marginTop:'3px'}}>Sell now before further decline</div></div><div className="sig sig-s">SELL</div></div>
        </div>

        {/* Storage Advisor */}
        <div className="h3 mb12">Storage Advisor · भंडारण</div>
        <div className="hero-card mb12">
          <div style={{position:'relative', zIndex:1}}>
            <div className="micro mb8" style={{color:'rgba(255,255,255,.4)'}}>📦 Onion Storage Calculator</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'12px', alignItems:'center', marginBottom:'16px'}}>
              <div style={{textAlign:'center'}}><div style={{fontSize:'11px', color:'rgba(255,255,255,.5)', fontWeight:600, marginBottom:'4px'}}>Sell Today</div><div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, color:'#fff'}}>₹2,840</div><div style={{fontSize:'11px', color:'rgba(255,255,255,.4)'}}>/qtl</div></div>
              <div style={{fontSize:'24px', color:'rgba(255,255,255,.4)'}}>→</div>
              <div style={{textAlign:'center'}}><div style={{fontSize:'11px', color:'rgba(168,224,99,.9)', fontWeight:600, marginBottom:'4px'}}>After 8 Days</div><div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, color:'#a8e063'}}>₹3,120</div><div style={{fontSize:'11px', color:'rgba(168,224,99,.6)'}}>/qtl (+₹280)</div></div>
            </div>
            <div style={{background:'rgba(255,255,255,.12)', borderRadius:'14px', padding:'14px'}}>
              <div style={{fontSize:'15px', fontWeight:800, color:'#a8e063'}}>100 qtl → Extra gain: +₹24,000</div>
              <div style={{fontSize:'12px', color:'rgba(255,255,255,.55)', marginTop:'3px'}}>After ₹4,000 storage cost deducted. Confidence: 83%</div>
            </div>
          </div>
        </div>

        {/* Cold storage list */}
        <div className="h3 mb12">Cold Storage Facilities</div>
        <div className="col g10">
          <div className="gcard card-p row-b"><div><div className="h4">MP State Cold Storage, Indore</div><div style={{fontSize:'11px', color:'var(--muted)'}}>6 km · 500 ton cap. · ₹0.45/kg/day</div></div><div className="badge bg-g">Available</div></div>
          <div className="gcard card-p row-b"><div><div className="h4">Private Storage, Dewas</div><div style={{fontSize:'11px', color:'var(--muted)'}}>48 km · 200 ton cap. · ₹0.55/kg/day</div></div><div className="badge bg-g">Available</div></div>
          <div className="gcard card-p row-b"><div><div className="h4">NWR Govt. Warehouse</div><div style={{fontSize:'11px', color:'var(--muted)'}}>12 km · Unlimited · ₹0.30/kg/day</div></div><div className="badge bg-b">Book Online</div></div>
        </div>
      </div>
    </>
  );
}
