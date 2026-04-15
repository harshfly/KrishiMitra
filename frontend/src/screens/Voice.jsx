import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Voice() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Voice AI · बोलिए</div><button className="ph-btn">🌐</button></div>
      <div style={{padding:'28px 18px 0', textAlign:'center'}} className="animate-fade-up">
        <div style={{fontSize:'13px', fontWeight:600, color:'var(--muted)', maxWidth:'260px', margin:'0 auto', lineHeight:1.7}}>Powered by Bhashini API · हिंदी, मराठी, ਪੰਜਾਬੀ and 19 more Indian languages</div>
        <div style={{margin:'24px 0'}}><div className="v-orb">🎙️</div></div>
        <div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--ink)'}}>Tap to Speak</div>
        <div style={{fontSize:'12px', color:'var(--muted)', marginTop:'4px'}}>हिंदी में बोलिए — बिना Internet भी काम करता है</div>
      </div>
      
      {/* Quick asks */}
      <div style={{display:'flex', flexWrap:'wrap', gap:'8px', padding:'20px 18px 0'}}>
        <button className="qa">आज प्याज का भाव?</button>
        <button className="qa">सबसे अच्छी मंडी?</button>
        <button className="qa">आलू बेचूं?</button>
        <button className="qa">7-दिन अनुमान</button>
        <button className="qa">सरकारी योजनाएं?</button>
        <button className="qa">देवास मंडी?</button>
      </div>
      <div className="col g12" id="chatList" style={{padding:'16px 18px 0'}}></div>
    </>
  );
}
