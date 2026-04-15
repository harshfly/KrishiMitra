import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mandi() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">Mandi Finder</div>
        <button className="ph-btn">🔍</button>
      </div>
      <div className="inner animate-fade-up">
        <div className="chips mb16">
          <div className="badge bg-g row g6" style={{padding:'8px 14px', fontSize:'11px'}}>🧅 Onion ✕</div>
          <button className="chip chip-i">By Distance</button>
          <button className="chip chip-i">Best Price</button>
          <button className="chip chip-i">Open Now</button>
        </div>

        {/* Map */}
        <div style={{background:'linear-gradient(145deg,#d4edda,#c8e6d0)', borderRadius:'var(--r-xl)', height:'220px', position:'relative', overflow:'hidden', marginBottom:'18px', border:'1px solid rgba(255,255,255,.6)'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px)', backgroundSize:'38px 38px'}}></div>
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 60%,rgba(212,237,218,.8))'}}></div>
          <svg style={{position:'absolute', inset:0, width:'100%', height:'100%'}} viewBox="0 0 430 220"><path d="M0,110 Q107,80 215,110 Q323,140 430,110" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"/><path d="M215,0 Q215,110 215,220" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/></svg>

          {/* Pins */}
          <div style={{position:'absolute', top:'36%', left:'38%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="glass" style={{padding:'5px 10px', borderRadius:'10px', marginBottom:'6px', whiteSpace:'nowrap', boxShadow:'var(--shadow-m)'}}>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'11px', fontWeight:700, color:'var(--green)'}}>₹2,880</div>
              <div style={{fontSize:'10px', fontWeight:600, color:'var(--ink)'}}>Indore Mandi</div>
            </div>
            <div style={{width:'14px', height:'14px', background:'var(--green)', borderRadius:'50%', border:'3px solid #fff', boxShadow:'var(--shadow-g)', position:'relative'}}>
              <div style={{position:'absolute', inset:'-4px', borderRadius:'50%', border:'2px solid rgba(46,107,62,.3)'}} className="animate-pulse-ring"></div>
            </div>
          </div>
          <div style={{position:'absolute', top:'24%', left:'18%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{width:'11px', height:'11px', background:'var(--gold)', borderRadius:'50%', border:'2px solid #fff'}}></div>
            <div style={{fontSize:'9px', fontWeight:700, color:'var(--ink)', marginTop:'3px'}}>Dewas</div>
          </div>
          <div style={{position:'absolute', top:'55%', left:'65%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{width:'11px', height:'11px', background:'var(--muted)', borderRadius:'50%', border:'2px solid #fff'}}></div>
            <div style={{fontSize:'9px', fontWeight:700, color:'var(--ink)', marginTop:'3px'}}>Ujjain</div>
          </div>
          <div style={{position:'absolute', top:'50%', left:'44%', width:'10px', height:'10px', background:'var(--blue)', borderRadius:'50%', border:'2px solid #fff', boxShadow:'0 0 0 4px rgba(21,101,192,.2)'}}></div>

          <div style={{position:'absolute', top:'12px', right:'12px', display:'flex', flexDirection:'column', gap:'6px'}}>
            <div className="glass" style={{width:'34px', height:'34px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>+</div>
            <div className="glass" style={{width:'34px', height:'34px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>−</div>
          </div>
          <div style={{position:'absolute', bottom:'10px', left:'10px'}} className="glass"><div style={{padding:'5px 10px', fontSize:'10px', fontWeight:700, color:'var(--muted)'}}>📍 Indore, MP</div></div>
        </div>

        <div className="row-b mb12">
          <div className="h3">Optimal Destinations</div>
          <div className="glass row" style={{padding:'3px', borderRadius:'10px'}}>
            <button style={{background:'#fff', border:'none', padding:'6px 14px', borderRadius:'8px', fontSize:'11px', fontWeight:700, color:'var(--green)', cursor:'pointer', boxShadow:'var(--shadow-s)'}}>Nearest</button>
            <button style={{background:'transparent', border:'none', padding:'6px 14px', fontSize:'11px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>Best Price</button>
          </div>
        </div>

        <div className="col g10">
          <div className="mc" style={{border:'2px solid rgba(46,107,62,.25)', background:'rgba(46,107,62,.02)'}}>
            <div className="mc-rank mr1">1</div>
            <div style={{flex:1, minWidth:0}}>
              <div className="row g8 mb4"><div className="h4">Indore Krishi Mandi</div><div className="badge bg-g" style={{fontSize:'8px'}}>Best Profit</div></div>
              <div style={{fontSize:'11px', color:'var(--muted)', fontWeight:600}}>📍 4.2 km · <span style={{color:'var(--green-md)'}}>Open Now</span> · 5AM–8PM</div>
              <div className="row g6 mt8" style={{flexWrap:'wrap'}}><div className="badge bg-m">🚛 ₹3,400</div><div className="badge bg-m">⏱ 12 min</div><div className="badge bg-g">APMC ✓</div></div>
            </div>
            <div style={{textAlign:'right', flexShrink:0}}><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--green)'}}>₹2,880</div><div style={{fontSize:'10px', color:'var(--gold)', fontWeight:700, marginTop:'2px'}}>Net ₹2,710</div></div>
          </div>
          <div className="mc">
            <div className="mc-rank mr2">2</div>
            <div style={{flex:1, minWidth:0}}>
              <div className="h4 mb4">Dewas Mandi</div>
              <div style={{fontSize:'11px', color:'var(--muted)'}}>📍 32.5 km · <span style={{color:'var(--red)'}}>Closed · Opens 7AM</span></div>
              <div className="row g6 mt8"><div className="badge bg-m">🚛 ₹6,200</div><div className="badge bg-m">⏱ 45 min</div></div>
            </div>
            <div style={{textAlign:'right', flexShrink:0}}><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--green)'}}>₹2,810</div><div style={{fontSize:'10px', color:'var(--gold)', fontWeight:700, marginTop:'2px'}}>Net ₹2,620</div></div>
          </div>
          <div className="mc">
            <div className="mc-rank mr3">3</div>
            <div style={{flex:1, minWidth:0}}>
              <div className="h4 mb4">Ujjain APMC</div>
              <div style={{fontSize:'11px', color:'var(--muted)'}}>📍 54.0 km · <span style={{color:'var(--green-md)'}}>Open Now</span> · 7AM–5PM</div>
              <div className="row g6 mt8"><div className="badge bg-m">🚛 ₹8,100</div><div className="badge bg-m">⏱ 1h 10m</div></div>
            </div>
            <div style={{textAlign:'right', flexShrink:0}}><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--green)'}}>₹2,750</div><div style={{fontSize:'10px', color:'var(--gold)', fontWeight:700, marginTop:'2px'}}>Net ₹2,450</div></div>
          </div>
        </div>

        <button className="btn btn-g btn-full mt20" onClick={() => navigate('/profit')}>🧮 Compare Net Profit →</button>
      </div>
    </>
  );
}
