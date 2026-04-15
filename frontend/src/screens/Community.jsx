import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Community() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Community Feed</div><button className="ph-btn">🌐</button></div>
      <div className="inner animate-fade-up">
        {/* Post input */}
        <div className="gcard card-p mb16">
          <div className="row g10 mb10">
            <div style={{width:'36px', height:'36px', borderRadius:'50%', background:'linear-gradient(135deg,var(--green),var(--green-dk))', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, color:'#fff', flexShrink:0}}>R</div>
            <input className="field" style={{height:'42px', flex:1}} placeholder="📝 Share a price report or ask a question..." />
          </div>
          <div className="row g8">
            <button className="btn btn-g btn-sm">📤 Post</button>
            <button className="btn btn-ghost btn-sm">📷 Photo</button>
          </div>
        </div>
        
        <div className="col g12">
          {/* Post 1 */}
          <div className="post">
            <div className="row g10 mb10">
              <div className="post-av" style={{background:'linear-gradient(135deg,var(--green),var(--green-dk))'}}>R</div>
              <div>
                <div className="row g6"><div style={{fontSize:'14px', fontWeight:700, color:'var(--ink)'}}>Ramesh Sharma</div><div className="badge bg-g" style={{fontSize:'8px'}}>✓ Verified</div></div>
                <div style={{fontSize:'11px', color:'var(--muted)', fontWeight:600}}>Dewas · 2h · 🧅 Onion</div>
              </div>
            </div>
            <div style={{fontSize:'13px', color:'var(--ink2)', lineHeight:1.6, fontWeight:500}}>आज देवास मंडी में प्याज ₹2,480/qtl मिला। Grade A था तो ज़्यादा मिला! KrishiMitra ने 3 दिन पहले बताया था 🙏</div>
            <div style={{display:'inline-flex', alignItems:'center', gap:'5px', background:'var(--green-lt)', color:'var(--green)', padding:'5px 12px', borderRadius:'99px', fontSize:'11px', fontWeight:800, marginTop:'10px'}}>₹2,480 · Dewas · Today</div>
            <div style={{display:'flex', borderTop:'1px solid var(--border)', paddingTop:'10px', marginTop:'12px'}}>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>👍 24</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>✅ Verify</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>💬 Reply</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>📢 Share</div>
            </div>
          </div>
          
          {/* Post 2 */}
          <div className="post">
            <div className="row g10 mb10">
              <div className="post-av" style={{background:'linear-gradient(135deg,#c8952a,#9a6800)'}}>S</div>
              <div>
                <div style={{fontSize:'14px', fontWeight:700, color:'var(--ink)'}}>Suresh Patidar</div>
                <div style={{fontSize:'11px', color:'var(--muted)', fontWeight:600}}>Ujjain · 5h · 🥔 Potato</div>
              </div>
            </div>
            <div style={{fontSize:'13px', color:'var(--ink2)', lineHeight:1.6, fontWeight:500}}>उज्जैन में आलू का भाव गिर रहा है — ₹940–980 चल रहा है। जो रोक के बैठे हैं, जल्दी बेचो भाई। MSP के पास आ रहा है। ⚠️</div>
            <div style={{display:'inline-flex', alignItems:'center', gap:'5px', background:'var(--red-lt)', color:'var(--red)', padding:'5px 12px', borderRadius:'99px', fontSize:'11px', fontWeight:800, marginTop:'10px'}}>₹960 · Ujjain · MSP Alert</div>
            <div style={{display:'flex', borderTop:'1px solid var(--border)', paddingTop:'10px', marginTop:'12px'}}>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>👍 41</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>✅ Verify</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>💬 6</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>📢</div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="post">
            <div className="row g10 mb10">
              <div className="post-av" style={{background:'linear-gradient(135deg,#1565c0,#0d47a1)'}}>M</div>
              <div>
                <div className="row g6"><div style={{fontSize:'14px', fontWeight:700, color:'var(--ink)'}}>Mukesh Yadav</div><div className="badge bg-g" style={{fontSize:'8px'}}>✓ Verified</div></div>
                <div style={{fontSize:'11px', color:'var(--muted)', fontWeight:600}}>Indore · Yesterday · 🍅 Tomato</div>
              </div>
            </div>
            <div style={{fontSize:'13px', color:'var(--ink2)', lineHeight:1.6, fontWeight:500}}>टमाटर ₹1,650 → ₹3,200 हो गया! मैंने तुरंत 80 qtl बेच दिया। KrishiMitra ने 3 दिन पहले ही alert दे दिया था! 🙏🌾</div>
            <div style={{display:'inline-flex', alignItems:'center', gap:'5px', background:'var(--green-lt)', color:'var(--green)', padding:'5px 12px', borderRadius:'99px', fontSize:'11px', fontWeight:800, marginTop:'10px'}}>₹3,200 · Indore · Peak!</div>
            <div style={{display:'flex', borderTop:'1px solid var(--border)', paddingTop:'10px', marginTop:'12px'}}>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>👍 87</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>✅ 12</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>💬 Reply</div>
              <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'4px', fontSize:'12px', fontWeight:700, color:'var(--muted)', cursor:'pointer'}}>📢</div>
            </div>
          </div>
        </div>
        
        {/* Community stats */}
        <div className="h3 mt20 mb12">Community Stats</div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
          <div className="gcard card-p" style={{textAlign:'center'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'24px', fontWeight:700, color:'var(--green)'}}>12,400+</div><div className="micro mt4">Verified Farmers</div></div>
          <div className="gcard card-p" style={{textAlign:'center'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'24px', fontWeight:700, color:'var(--gold-dk)'}}>4,800+</div><div className="micro mt4">Price Reports Today</div></div>
          <div className="gcard card-p" style={{textAlign:'center'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'24px', fontWeight:700, color:'var(--blue)'}}>165</div><div className="micro mt4">Mandis Covered</div></div>
          <div className="gcard card-p" style={{textAlign:'center'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'24px', fontWeight:700, color:'var(--ink)'}}>98%</div><div className="micro mt4">Report Accuracy</div></div>
        </div>
      </div>
    </>
  );
}
