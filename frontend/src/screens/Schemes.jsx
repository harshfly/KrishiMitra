import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Schemes() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Govt. Schemes · योजनाएं</div><button className="ph-btn">🌐</button></div>
      <div className="inner animate-fade-up">
        <div className="ab ab-g mb16"><div className="ab-icon">✅</div><div><div className="ab-title">3 Schemes — You are eligible!</div><div className="ab-body">Ramesh Patel · Indore MP · 3.5 acres · Small & Marginal Farmer</div></div></div>
        
        <div className="col g12">
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--green-lt)'}}>🌾</div><div className="h4">PM-KISAN Samman Nidhi</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--green)', marginTop:'2px'}}>₹6,000 / year</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Every 4 months, ₹2,000 directly in bank account. For all small & marginal farmers.</div><div className="sc-enrolled" style={{fontSize:'12px', fontWeight:700, color:'var(--green)'}}>✅ Already Enrolled · Check Status</div></div>
          
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--blue-lt)'}}>🛡️</div><div className="h4">PMFBY Fasal Bima</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--blue)', marginTop:'2px'}}>Up to ₹2 Lakh Cover</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Crop loss due to natural disaster, pests or disease — covered at very low premium.</div><div style={{background:'var(--red-lt)', borderRadius:'9px', padding:'7px 12px', fontSize:'12px', fontWeight:700, color:'var(--red)', marginBottom:'12px'}}>⚠️ Deadline: November 30!</div><button className="btn btn-g btn-sm">📋 Apply Now</button></div>
          
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--gold-lt)'}}>💳</div><div className="h4">Kisan Credit Card (KCC)</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--gold-dk)', marginTop:'2px'}}>₹3 Lakh Loan @ 4% p.a.</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Revolving credit for crop production at near-zero interest. Timely repayment → interest waived.</div><button className="btn btn-g btn-sm">🏦 Apply at Bank</button></div>
          
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--green-lt)'}}>☀️</div><div className="h4">KUSUM Solar Pump</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--green)', marginTop:'2px'}}>90% Subsidy</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Get solar agricultural pump at 90% government subsidy. Zero electricity bill for 25 years.</div><button className="btn btn-g btn-sm">📝 Check Eligibility</button></div>
          
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--bg2)'}}>📦</div><div className="h4">NWR Pledge Loan</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--muted)', marginTop:'2px'}}>70% of Crop Value</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Store in govt. warehouse → get receipt → pledge for instant loan without selling.</div><button className="btn btn-ghost btn-sm">🏛️ Contact WDRA</button></div>
          
          <div className="sc-card"><div className="sc-icon" style={{background:'var(--blue-lt)'}}>🌐</div><div className="h4">e-NAM Trading</div><div style={{fontSize:'13px', fontWeight:800, color:'var(--blue)', marginTop:'2px'}}>Nationwide Mandi Access</div><div style={{fontSize:'12px', color:'var(--muted)', lineHeight:1.55, margin:'8px 0'}}>Sell produce on electronic National Agriculture Market platform across 23 states.</div><button className="btn btn-g btn-sm">🌐 Register on e-NAM</button></div>
        </div>
        
        {/* MSP table */}
        <div className="h3 mt20 mb12">MSP Reference — Rabi 2024–25</div>
        <div className="gcard mb16" style={{overflow:'hidden'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', padding:'10px 14px', background:'var(--bg2)'}}><div className="micro">Crop</div><div className="micro" style={{textAlign:'center'}}>MSP ₹/qtl</div><div className="micro" style={{textAlign:'right'}}>Market</div></div>
          <div className="msp-row"><div style={{fontSize:'13px', fontWeight:700}}>🌾 Wheat</div><div style={{textAlign:'center', fontSize:'13px', fontWeight:700}}>₹2,275</div><div style={{textAlign:'right', fontSize:'13px', fontWeight:800, color:'var(--red)'}}>₹2,150 ⚠️</div></div>
          <div className="msp-row"><div style={{fontSize:'13px', fontWeight:700}}>🫘 Chana</div><div style={{textAlign:'center', fontSize:'13px', fontWeight:700}}>₹5,440</div><div style={{textAlign:'right', fontSize:'13px', fontWeight:800, color:'var(--red)'}}>₹5,800 ⚠️</div></div>
          <div className="msp-row"><div style={{fontSize:'13px', fontWeight:700}}>🫘 Arhar Dal</div><div style={{textAlign:'center', fontSize:'13px', fontWeight:700}}>₹7,000</div><div style={{textAlign:'right', fontSize:'13px', fontWeight:800, color:'var(--green)'}}>₹9,500 ✅</div></div>
          <div className="msp-row"><div style={{fontSize:'13px', fontWeight:700}}>🫘 Moong Dal</div><div style={{textAlign:'center', fontSize:'13px', fontWeight:700}}>₹8,558</div><div style={{textAlign:'right', fontSize:'13px', fontWeight:800, color:'var(--gold-dk)'}}>₹8,200 ➡</div></div>
          <div className="msp-row" style={{border:0}}><div style={{fontSize:'13px', fontWeight:700}}>🥔 Potato</div><div style={{textAlign:'center', fontSize:'13px', fontWeight:700}}>₹1,500</div><div style={{textAlign:'right', fontSize:'13px', fontWeight:800, color:'var(--red)'}}>₹1,650 ⚠️</div></div>
        </div>
      </div>
    </>
  );
}
