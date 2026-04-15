import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Alerts() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Alerts & Updates</div><button className="ph-btn">🌐</button></div>
      <div className="inner animate-fade-up">
        <div className="chips mb16">
          <button className="chip chip-a">All</button>
          <button className="chip chip-i">Price Alerts</button>
          <button className="chip chip-i">AI Updates</button>
          <button className="chip chip-i">Mandi News</button>
        </div>
        
        <div className="col g12">
          <div className="gcard card-p6">
            <div className="row g12 mb12">
              <div style={{width:'52px', height:'52px', background:'var(--green-lt)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', flexShrink:0}}>📈</div>
              <div style={{flex:1}}>
                <div className="row-b"><div className="h4">Onion price alert triggered!</div><div className="micro" style={{color:'var(--muted-lt)'}}>2 MIN</div></div>
                <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'4px', lineHeight:1.55}}>Price hit <strong style={{color:'var(--green)'}}>₹2,840</strong> at Indore. You set alert at ₹2,800.</div>
              </div>
            </div>
            <div className="row g10">
              <button className="btn btn-g btn-sm">View Price</button>
              <button style={{background:'transparent', border:'none', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>Dismiss</button>
            </div>
          </div>
          
          <div className="gcard card-p6">
            <div className="row g12 mb12">
              <div style={{width:'52px', height:'52px', background:'var(--gold-lt)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', flexShrink:0}}>⚡</div>
              <div style={{flex:1}}>
                <div className="row-b"><div className="h4">Best time to sell Garlic this week</div><div className="micro" style={{color:'var(--muted-lt)'}}>1 HR</div></div>
                <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'4px', lineHeight:1.55}}>AI predicts Thursday–Friday peak at <strong style={{color:'var(--ink)'}}>₹13,200/q</strong>. Act now.</div>
              </div>
            </div>
            <button className="btn btn-o btn-sm">See Prediction</button>
          </div>
          
          <div className="gcard card-p6">
            <div className="row g12 mb12">
              <div style={{width:'52px', height:'52px', background:'var(--blue-lt)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', flexShrink:0}}>📰</div>
              <div style={{flex:1}}>
                <div className="row-b"><div className="h4">Onion arrivals down 8% at Lasalgaon</div><div className="micro" style={{color:'var(--muted-lt)'}}>3 HR</div></div>
                <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'4px', lineHeight:1.55}}>Lower supply may push prices up this week. Major distributors holding stocks.</div>
              </div>
            </div>
            <button className="btn btn-ghost btn-sm">Read More</button>
          </div>
          
          <div className="gcard card-p6">
            <div className="row g12 mb12">
              <div style={{width:'52px', height:'52px', background:'var(--red-lt)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', flexShrink:0}}>⚠️</div>
              <div style={{flex:1}}>
                <div className="row-b"><div className="h4">Potato MSP Warning</div><div className="micro" style={{color:'var(--muted-lt)'}}>5 HR</div></div>
                <div style={{fontSize:'13px', color:'var(--muted)', marginTop:'4px', lineHeight:1.55}}>Current price ₹1,650 is approaching MSP ₹1,500. Sell before prices dip below.</div>
              </div>
            </div>
            <button className="btn btn-g btn-sm" onClick={() => navigate('/prices')}>Sell Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
