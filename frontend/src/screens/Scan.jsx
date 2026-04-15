import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Scan() {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">Crop Scanner</div>
        <div className="row g6">
          <button className="ph-btn" style={{fontSize:'14px'}}>🌐</button>
          <button className="ph-btn" style={{fontSize:'14px'}}>🕑</button>
        </div>
      </div>
      <div className="inner animate-fade-up">
        <div className="ab ab-b mb16"><div className="ab-icon">⚡</div><div><div className="ab-title">Works Offline! बिना Internet भी</div><div className="ab-body">EfficientNet-B0 runs on your device. No internet needed — works on 2G too.</div></div></div>

        <div className="col g12">
          {/* Camera viewfinder */}
          <div
            style={{background:'#1A1208', borderRadius:'var(--r-2xl)', overflow:'hidden', height:'240px', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', cursor: 'pointer'}}
            onClick={() => setShowResult(true)}
          >
            <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(46,107,62,.08),transparent)'}}></div>
            <div style={{position:'absolute', top:'24px', left:'24px', width:'30px', height:'30px', borderTop:'3px solid var(--gold)', borderLeft:'3px solid var(--gold)', borderRadius:'6px 0 0 0'}}></div>
            <div style={{position:'absolute', top:'24px', right:'24px', width:'30px', height:'30px', borderTop:'3px solid var(--gold)', borderRight:'3px solid var(--gold)', borderRadius:'0 6px 0 0'}}></div>
            <div style={{position:'absolute', bottom:'72px', left:'24px', width:'30px', height:'30px', borderBottom:'3px solid var(--gold)', borderLeft:'3px solid var(--gold)', borderRadius:'0 0 0 6px'}}></div>
            <div style={{position:'absolute', bottom:'72px', right:'24px', width:'30px', height:'30px', borderBottom:'3px solid var(--gold)', borderRight:'3px solid var(--gold)', borderRadius:'0 0 6px 0'}}></div>

            <div style={{textAlign:'center'}}>
              <div style={{fontSize:'48px', opacity:'.22'}}>📷</div>
              <div style={{fontSize:'13px', color:'rgba(255,255,255,.5)', fontWeight:600, marginTop:'8px'}}>Tap to scan crop</div>
              <div style={{fontSize:'11px', color:'rgba(255,255,255,.28)', marginTop:'4px'}}>🧅 🥔 🍅 🧄 🫚</div>
            </div>

            <div style={{position:'absolute', bottom:'14px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'14px', alignItems:'center'}}>
              <div style={{width:'34px', height:'34px', background:'rgba(255,255,255,.12)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px'}}>🔍</div>
              <div style={{width:'56px', height:'56px', background:'#fff', borderRadius:'50%', padding:'3px', boxShadow:'0 4px 20px rgba(0,0,0,.35)'}}>
                <div style={{width:'100%', height:'100%', border:'3px solid var(--green)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><div style={{width:'26px', height:'26px', background:'var(--green)', borderRadius:'50%'}}></div></div>
              </div>
              <div style={{width:'34px', height:'34px', background:'rgba(255,255,255,.12)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px'}}>🕑</div>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
            <button className="btn btn-out btn-full" style={{height:'46px', fontSize:'13px'}}>📂 Gallery</button>
            <div className="glass row g10" style={{padding:'10px 14px', borderRadius:'var(--r-md)'}}>
              <span style={{fontSize:'20px'}}>🧅</span>
              <div><div className="micro mb2">Target</div><div style={{fontFamily:'var(--font-disp)', fontSize:'12px', fontWeight:700}}>Onion</div></div>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}>
            <div style={{textAlign:'center', padding:'12px 8px', background:'var(--green-lt)', borderRadius:'12px', border:'2px solid rgba(46,107,62,.25)'}}>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--green)'}}>A</div>
              <div style={{fontSize:'10px', fontWeight:800, color:'var(--green)'}}>+5% Price</div>
              <div style={{fontSize:'9px', color:'var(--muted)', marginTop:'2px'}}>Premium</div>
            </div>
            <div style={{textAlign:'center', padding:'12px 8px', background:'var(--gold-lt)', borderRadius:'12px', border:'2px solid rgba(200,168,75,.35)'}}>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--gold)'}}>B</div>
              <div style={{fontSize:'10px', fontWeight:800, color:'var(--gold)'}}>Base</div>
              <div style={{fontSize:'9px', color:'var(--muted)', marginTop:'2px'}}>Standard</div>
            </div>
            <div style={{textAlign:'center', padding:'12px 8px', background:'var(--red-lt)', borderRadius:'12px', border:'2px solid rgba(198,40,40,.25)'}}>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--red)'}}>C</div>
              <div style={{fontSize:'10px', fontWeight:800, color:'var(--red)'}}>-20%</div>
              <div style={{fontSize:'9px', color:'var(--muted)', marginTop:'2px'}}>Reject</div>
            </div>
          </div>

          <div className="h3">AI Price — By Grade</div>
          <div className="gcard card-p">
            <div className="micro mb12">For Onion at Indore APMC · Today</div>
            <div className="col g10">
              <div className="row-b" style={{background:'var(--green-lt)', borderRadius:'12px', padding:'11px 14px'}}><div className="row g10"><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--green)'}}>A</div><div><div style={{fontSize:'12px', fontWeight:700, color:'var(--ink)'}}>Premium Grade</div><div style={{fontSize:'10px', color:'var(--muted)'}}>Uniform, no damage</div></div></div><div style={{textAlign:'right'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--green)'}}>₹2,982</div><div style={{fontSize:'9px', color:'var(--green)', fontWeight:700}}>+₹142</div></div></div>
              <div className="row-b" style={{background:'var(--gold-lt)', borderRadius:'12px', padding:'11px 14px'}}><div className="row g10"><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--gold)'}}>B</div><div><div style={{fontSize:'12px', fontWeight:700, color:'var(--ink)'}}>Standard Grade</div><div style={{fontSize:'10px', color:'var(--muted)'}}>Minor blemishes OK</div></div></div><div style={{textAlign:'right'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--gold-dk)'}}>₹2,840</div><div style={{fontSize:'9px', color:'var(--muted)', fontWeight:700}}>Base price</div></div></div>
              <div className="row-b" style={{background:'var(--red-lt)', borderRadius:'12px', padding:'11px 14px'}}><div className="row g10"><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--red)'}}>C</div><div><div style={{fontSize:'12px', fontWeight:700, color:'var(--ink)'}}>Low Grade</div><div style={{fontSize:'10px', color:'var(--muted)'}}>Damaged / rotting</div></div></div><div style={{textAlign:'right'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--red)'}}>₹2,272</div><div style={{fontSize:'9px', color:'var(--red)', fontWeight:700}}>-₹568</div></div></div>
            </div>
          </div>
        </div>

        {showResult && (
          <div style={{marginTop:'16px'}} className="animate-fade-up">
            <div style={{background:'linear-gradient(145deg,var(--green),var(--green-dk))', borderRadius:'var(--r-xl)', padding:'20px', color:'#fff', textAlign:'center', marginBottom:'14px'}}>
              <div style={{fontSize:'48px', marginBottom:'8px'}}>🧅</div>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, marginBottom:'4px'}}>GRADE A — PREMIUM</div>
              <div style={{fontSize:'11px', opacity:'.7'}}>Confidence: 96% · EfficientNet-B0 · On-device</div>
              <div style={{marginTop:'16px', background:'rgba(255,255,255,.15)', borderRadius:'14px', padding:'14px'}}>
                <div style={{fontSize:'12px', color:'rgba(255,255,255,.7)', marginBottom:'4px'}}>Estimated Value at Indore APMC</div>
                <div style={{fontFamily:'var(--font-disp)', fontSize:'32px', fontWeight:700, color:'var(--gold)'}}>₹2,982<span style={{fontSize:'13px', color:'rgba(255,255,255,.5)'}}>/q</span></div>
              </div>
            </div>
            <div className="ab ab-g mb16"><div className="ab-icon">✅</div><div><div className="ab-title">No disease detected</div><div className="ab-body">Your crop looks healthy. No visible rot, discoloration, or pest damage found.</div></div></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
              <button className="btn btn-g btn-full" onClick={() => navigate('/mandi')}>🗺️ Find Mandi</button>
              <button className="btn btn-out btn-full" onClick={() => setShowResult(false)}>📷 Scan Again</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
