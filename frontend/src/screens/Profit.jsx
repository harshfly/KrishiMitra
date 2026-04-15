import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profit() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ph"><button className="ph-back" onClick={() => navigate(-1)}>←</button><div className="ph-title">Net Profit Calculator</div><button className="ph-btn">🌐</button></div>
      <div className="inner animate-fade-up">
        <div className="micro mb16">Know your actual earnings after ALL costs</div>

        <div className="gcard card-p6 mb12">
          <div style={{fontFamily:'var(--font-disp)', fontSize:'15px', fontWeight:700, color:'var(--ink)', marginBottom:'14px'}}>1. Crop Details</div>
          <div className="field-wrap"><label className="field-lbl">Select Commodity</label>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <button className="field" style={{background:'var(--green)', color:'#fff', border:'none', cursor:'pointer', fontWeight:700, fontFamily:'var(--font-body)', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', borderRadius:'var(--r-md)'}}>🧅 Onion</button>
              <button className="field" style={{cursor:'pointer', fontWeight:700, fontFamily:'var(--font-body)', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', borderRadius:'var(--r-md)'}}>🥔 Potato</button>
              <button className="field" style={{cursor:'pointer', fontWeight:700, fontFamily:'var(--font-body)', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', borderRadius:'var(--r-md)'}}>🍅 Tomato</button>
              <button className="field" style={{cursor:'pointer', fontWeight:700, fontFamily:'var(--font-body)', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', borderRadius:'var(--r-md)'}}>🧄 Garlic</button>
            </div>
          </div>
          <div className="field-wrap"><label className="field-lbl">Quantity (Quintals)</label><input className="field" type="number" defaultValue="100" placeholder="e.g. 100" /></div>
          <div className="field-wrap" style={{margin:0}}><label className="field-lbl">Vehicle Type</label>
            <div className="sel-wrap"><select className="field"><option value="3400">🚜 Tractor Trolley</option><option value="5200">🚛 Mini Truck (Chhota Hathi)</option><option value="8500">🏗️ Large Truck</option></select></div>
          </div>
        </div>

        <div className="gcard card-p6 mb12">
          <div className="row-b mb14"><div style={{fontFamily:'var(--font-disp)', fontSize:'15px', fontWeight:700, color:'var(--ink)'}}>2. Mandi Prices</div><div className="badge bg-o">Compare 3 Mandis</div></div>
          <div className="col g10">
            <div style={{background:'rgba(46,107,62,.04)', border:'2px solid rgba(46,107,62,.2)', borderRadius:'14px', padding:'14px'}}>
              <div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)', marginBottom:'10px'}}>Indore Krishi Mandi</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
                <div style={{background:'#fff', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', gap:'6px'}}><span style={{color:'var(--muted)', fontWeight:700}}>₹</span><input type="number" defaultValue="2880" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'100%', color:'var(--ink)'}} /></div>
                <div style={{background:'#fff', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between'}}><input type="number" defaultValue="6" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'50%', color:'var(--ink)'}} /><span style={{color:'var(--muted)', fontWeight:700}}>% comm.</span></div>
              </div>
            </div>
            <div style={{border:'1.5px solid var(--border)', borderRadius:'14px', padding:'14px'}}>
              <div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)', marginBottom:'10px'}}>Dewas Mandi</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
                <div style={{background:'var(--bg)', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', gap:'6px'}}><span style={{color:'var(--muted)', fontWeight:700}}>₹</span><input type="number" defaultValue="2810" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'100%', color:'var(--ink)'}} /></div>
                <div style={{background:'var(--bg)', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between'}}><input type="number" defaultValue="5" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'50%', color:'var(--ink)'}} /><span style={{color:'var(--muted)', fontWeight:700}}>% comm.</span></div>
              </div>
            </div>
            <div style={{border:'1.5px solid var(--border)', borderRadius:'14px', padding:'14px'}}>
              <div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)', marginBottom:'10px'}}>Ujjain APMC</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
                <div style={{background:'var(--bg)', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', gap:'6px'}}><span style={{color:'var(--muted)', fontWeight:700}}>₹</span><input type="number" defaultValue="2750" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'100%', color:'var(--ink)'}} /></div>
                <div style={{background:'var(--bg)', borderRadius:'10px', padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between'}}><input type="number" defaultValue="8" style={{background:'transparent', border:'none', outline:'none', fontFamily:'var(--font-disp)', fontWeight:700, fontSize:'15px', width:'50%', color:'var(--ink)'}} /><span style={{color:'var(--muted)', fontWeight:700}}>% comm.</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Live results */}
        <div>
          <div className="hero-card mb12">
            <div style={{position:'relative', zIndex:1}}>
              <div className="micro mb8" style={{color:'rgba(255,255,255,.45)'}}>✅ Best Choice</div>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, color:'#fff', marginBottom:'14px'}}>You earn <span style={{color:'var(--gold)'}}>₹2,340</span> more at Indore</div>
              <button onClick={() => navigate('/mandi')} className="btn btn-w btn-full" style={{height:'50px', fontFamily:'var(--font-disp)', fontWeight:700}}>Go to Indore Mandi →</button>
            </div>
          </div>

          <div className="gcard card-p6 mb12">
            <div style={{fontFamily:'var(--font-disp)', fontSize:'14px', fontWeight:700, marginBottom:'14px'}}>Cost Breakdown — Indore</div>
            <div style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.04)'}}><div style={{fontSize:'13px', color:'var(--muted)'}}>Gross Revenue</div><div style={{fontSize:'13px', fontWeight:700}}>₹2,88,000</div></div>
            <div style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.04)'}}><div style={{fontSize:'13px', color:'var(--muted)'}}>Mandi Commission (6%)</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--red)'}}>-₹17,280</div></div>
            <div style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.04)'}}><div style={{fontSize:'13px', color:'var(--muted)'}}>Transport</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--red)'}}>-₹3,400</div></div>
            <div style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.04)'}}><div style={{fontSize:'13px', color:'var(--muted)'}}>Labour & Loading</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--red)'}}>-₹1,500</div></div>
            <div style={{height:'1.5px', background:'rgba(0,0,0,.07)', margin:'8px 0'}}></div>
            <div style={{display:'flex', justifyContent:'space-between', border:'none', paddingTop:'12px'}}><div style={{fontSize:'15px', fontWeight:800}}>Net Profit 💚</div><div style={{fontSize:'16px', fontWeight:800, color:'var(--green)'}}>₹2,65,820</div></div>
          </div>

          <div className="gcard card-p6 mb16">
            <div style={{fontFamily:'var(--font-disp)', fontSize:'14px', fontWeight:700, marginBottom:'14px'}}>Mandi Comparison</div>
            <div className="col g12">
              <div><div className="row-b mb4"><span style={{fontSize:'13px', fontWeight:700}}>🏆 Indore</span><span style={{fontFamily:'var(--font-disp)', fontSize:'14px', fontWeight:700, color:'var(--green)'}}>₹2,65,820</span></div><div className="prog-t"><div className="prog-f pf-g" style={{width:'100%'}}></div></div></div>
              <div><div className="row-b mb4"><span style={{fontSize:'13px', fontWeight:700}}>2️⃣ Dewas</span><span style={{fontFamily:'var(--font-disp)', fontSize:'14px', fontWeight:700}}>₹2,63,480</span></div><div className="prog-t"><div className="prog-f pf-o" style={{width:'94%'}}></div></div></div>
              <div><div className="row-b mb4"><span style={{fontSize:'13px', fontWeight:700}}>3️⃣ Ujjain</span><span style={{fontFamily:'var(--font-disp)', fontSize:'14px', fontWeight:700}}>₹2,46,500</span></div><div className="prog-t"><div className="prog-f pf-b" style={{width:'89%'}}></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
