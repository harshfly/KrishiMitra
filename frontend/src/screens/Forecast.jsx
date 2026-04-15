import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { predictPrices, getAvailableCrops, calculateStorageAnalysis } from '../ai/predictionEngine';

export default function Forecast() {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const crops = useMemo(() => getAvailableCrops(), []);
  const prediction = useMemo(() => predictPrices(selectedCrop, 30), [selectedCrop]);
  const storageAnalysis = useMemo(() => calculateStorageAnalysis(selectedCrop, 100), [selectedCrop]);

  const handleCropChange = (cropId) => {
    setIsLoading(true);
    setSelectedCrop(cropId);
    setTimeout(() => setIsLoading(false), 400); // Simulate model inference
  };

  if (!selectedCrop) {
    return (
      <>
        <div className="ph">
          <button className="ph-back" onClick={() => navigate(-1)}>←</button>
          <div className="ph-title">AI Forecast · अनुमान</div>
          <button className="ph-btn" onClick={() => navigate('/features')} style={{fontSize:'12px', width:'auto', padding:'0 10px', background:'rgba(255,255,255,.15)', borderRadius:'8px', fontWeight:600}}>All Tools</button>
        </div>
        <div className="inner animate-fade-up">
          <div className="h3 mb16" style={{textAlign:'center', marginTop:'20px'}}>Select a crop for price forecast</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))', gap:'12px', paddingBottom:'24px'}}>
            {crops.map(c => (
              <button
                key={c.id}
                className="card ani"
                onClick={() => handleCropChange(c.id)}
                style={{
                  textAlign:'center',
                  padding:'20px 8px',
                  borderRadius:'16px',
                  background:'var(--bg2)',
                  border:'none',
                  cursor:'pointer',
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}
              >
                <div style={{fontSize:'36px', marginBottom:'12px'}}>{c.emoji}</div>
                <div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>{c.name}</div>
                <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'4px'}}>{c.nameHi}</div>
                <div style={{fontSize:'10px', fontWeight:600, color:'var(--green)', marginTop:'8px', padding:'4px 8px', background:'rgba(168,224,99,0.1)', borderRadius:'8px', display:'inline-block'}}>
                  ₹{c.price.toLocaleString('en-IN')}/qtl
                </div>
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!prediction) return null;

  const { crop, signal, predictions, horizons, factors, models, confidence, bestSellDay, bestSellPrice } = prediction;

  // Chart data (first 8 days for display)
  const chartDays = predictions.slice(0, 8);
  const maxPrice = Math.max(...chartDays.map(d => d.priceHigh));
  const minPrice = Math.min(...chartDays.map(d => d.priceLow));
  const priceRange = maxPrice - minPrice || 1;

  // Generate SVG path for the chart
  const chartW = 340, chartH = 140;
  const points = chartDays.map((d, i) => {
    const x = (i / (chartDays.length - 1)) * chartW;
    const y = chartH - ((d.price - minPrice) / priceRange) * (chartH - 20) - 10;
    return { x, y, ...d };
  });
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${chartW},${chartH} L0,${chartH} Z`;

  // Baseline dashed line (current price)
  const baselineY = chartH - ((crop.basePrice - minPrice) / priceRange) * (chartH - 20) - 10;

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">AI Forecast · अनुमान</div>
        <button className="ph-btn" onClick={() => navigate('/features')} style={{fontSize:'12px', width:'auto', padding:'0 10px', background:'rgba(255,255,255,.15)', borderRadius:'8px', fontWeight:600}}>All Tools</button>
      </div>

      <div className="inner animate-fade-up">
        {/* Crop Selector */}
        <div className="chips mb16" style={{margin:'0 -16px', padding:'0 16px 8px'}}>
          {crops.map(c => (
            <button
              key={c.id}
              className={`chip ${selectedCrop === c.id ? 'chip-a' : 'chip-i'}`}
              onClick={() => handleCropChange(c.id)}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div style={{textAlign:'center', padding:'40px 0'}}>
            <div style={{fontSize:'32px', marginBottom:'12px', animation:'vPulse 1s infinite'}}>🤖</div>
            <div className="h4" style={{color:'var(--green)'}}>AI Model Processing...</div>
            <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'4px'}}>LSTM+GRU Ensemble analyzing market data</div>
          </div>
        )}

        {!isLoading && (
          <>
            {/* AI Signal Hero */}
            <div className="hero-card mb16 ani">
              <div style={{position:'relative', zIndex:1}}>
                <div className="row g8 mb12">
                  <div className="badge bg-w">🤖 AI Recommendation</div>
                  <div className="badge bg-w">{confidence}% confidence</div>
                </div>
                <div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, color:'#fff', marginBottom:'8px'}}>
                  {signal.emoji} {bestSellDay === 0 ? 'Sell Now!' : `Hold ${bestSellDay} more days`}
                </div>
                <div style={{fontSize:'12px', color:'rgba(255,255,255,.7)', lineHeight:1.65, maxWidth:'92%'}}>
                  Today ₹{crop.basePrice.toLocaleString('en-IN')} → Day {bestSellDay} expected ₹{bestSellPrice.toLocaleString('en-IN')}.
                  {factors[0] && ` ${factors[0].label.split(' ').slice(1).join(' ')} is the primary driver.`}
                </div>
                <div style={{borderTop:'1px solid rgba(255,255,255,.15)', marginTop:'16px', paddingTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0, textAlign:'center'}}>
                  <div>
                    <div className="micro" style={{color:'rgba(255,255,255,.4)'}}>Today</div>
                    <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'#fff', marginTop:'4px'}}>₹{crop.basePrice.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="micro" style={{color:'rgba(255,255,255,.4)'}}>Target</div>
                    <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--gold)', marginTop:'4px'}}>₹{bestSellPrice.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="micro" style={{color:'rgba(255,255,255,.4)'}}>Gain</div>
                    <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:bestSellPrice >= crop.basePrice ? '#a8e063' : '#ef5350', marginTop:'4px'}}>
                      {bestSellPrice >= crop.basePrice ? '+' : ''}₹{(bestSellPrice - crop.basePrice).toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Chart */}
            <div className="gcard card-p6 mb16 ani">
              <div className="row-b mb14">
                <div className="h3">{crop.emoji} {crop.name} — 7 Day Forecast</div>
                <div className="row g4">
                  <div style={{display:'flex', alignItems:'center', gap:'4px', fontSize:'10px', color:'var(--muted)'}}><div style={{width:'8px', height:'8px', background:'var(--gold)', borderRadius:'2px'}}></div>Today</div>
                  <div style={{display:'flex', alignItems:'center', gap:'4px', fontSize:'10px', color:'var(--muted)'}}><div style={{width:'8px', height:'8px', background:'var(--green)', borderRadius:'2px'}}></div>AI</div>
                </div>
              </div>

              <div style={{width:'100%', height:'160px', marginBottom:'10px'}}>
                <svg width="100%" height="160" viewBox={`0 0 ${chartW} ${chartH + 20}`} preserveAspectRatio="none" style={{overflow:'visible'}}>
                  <defs>
                    <linearGradient id="aiGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--green)" stopOpacity=".18"/>
                      <stop offset="100%" stopColor="var(--green)" stopOpacity="0"/>
                    </linearGradient>
                  </defs>

                  {/* Grid */}
                  {[0.25, 0.5, 0.75].map(pct => (
                    <line key={pct} x1="0" y1={chartH * pct + 10} x2={chartW} y2={chartH * pct + 10} stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3"/>
                  ))}

                  {/* Baseline (today's price) */}
                  <line x1="0" y1={baselineY} x2={chartW} y2={baselineY} stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.6"/>

                  {/* Confidence band */}
                  {points.length > 1 && (
                    <path
                      d={`M${points.map(p => {
                        const hy = chartH - ((p.priceHigh - minPrice) / priceRange) * (chartH - 20) - 10;
                        return `${p.x.toFixed(1)},${hy.toFixed(1)}`;
                      }).join(' L')} L${[...points].reverse().map(p => {
                        const ly = chartH - ((p.priceLow - minPrice) / priceRange) * (chartH - 20) - 10;
                        return `${p.x.toFixed(1)},${ly.toFixed(1)}`;
                      }).join(' L')} Z`}
                      fill="var(--green)" fillOpacity="0.06"
                    />
                  )}

                  {/* Area + Line */}
                  <path d={areaPath} fill="url(#aiGrad2)"/>
                  <path d={linePath} fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Data nodes */}
                  {points.map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r={i === points.length - 1 ? 5 : 3.5} fill={i === points.length - 1 ? 'var(--green)' : '#fff'} stroke="var(--green)" strokeWidth="2"/>
                      {(i === 0 || i === points.length - 1) && (
                        <text x={p.x + (i === 0 ? 2 : -2)} y={p.y - 10} fontSize="10" fontWeight="bold" fill={i === 0 ? 'var(--muted)' : 'var(--green)'} textAnchor={i === 0 ? 'start' : 'end'}>
                          ₹{p.price.toLocaleString('en-IN')}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              <div className="row-b" style={{padding:'0 6px'}}>
                {chartDays.map((d, i) => (
                  <span key={i} className="fb-day" style={{fontSize:'8px'}}>{d.dateLabel.split(',')[0]}</span>
                ))}
              </div>
            </div>

            {/* Horizon Cards */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px', marginBottom:'18px'}} className="ani">
              {horizons.map((h, i) => (
                <div key={i} className="card" style={{
                  textAlign:'center',
                  background: h.highlighted ? 'var(--green)' : 'var(--bg2)',
                  color: h.highlighted ? '#fff' : 'var(--ink)',
                  borderRadius:'12px',
                  padding:'12px 8px',
                  boxShadow: h.highlighted ? '0 4px 12px rgba(46,107,62,0.3)' : 'none'
                }}>
                  <div style={{fontSize:'9px', fontWeight:700, opacity: h.highlighted ? 0.8 : 0.6, letterSpacing:'0.5px'}}>{h.label}{h.highlighted ? ' ⭐' : ''}</div>
                  <div style={{fontFamily:'var(--font-disp)', fontSize:'15px', fontWeight:800, margin:'4px 0'}}>₹{h.price.toLocaleString('en-IN')}</div>
                  <div style={{fontSize:'10px', fontWeight:700, color: h.changePct >= 0 ? (h.highlighted ? '#a8e063' : 'var(--green)') : 'var(--red)'}}>
                    {h.changePct >= 0 ? '+' : ''}{h.changePct}% {h.changePct >= 0 ? '↑' : '↓'}
                  </div>
                  <div style={{fontSize:'8px', opacity:0.5, marginTop:'3px'}}>{h.confidence}% conf.</div>
                </div>
              ))}
            </div>

            {/* SHAP Explainability */}
            <div className="row-b mb12 ani"><div className="h3">Why prices changing?</div><div className="badge bg-b">AI Explainability</div></div>
            <div className="gcard card-p mb16 ani">
              {factors.slice(0, 5).map((f, i) => (
                <div key={i} className="shap-row" style={{marginBottom: i === factors.length - 1 || i === 4 ? 0 : '10px'}}>
                  <div className="shap-lbl">{f.label}</div>
                  <div className="shap-t">
                    <div className={`shap-f ${f.direction === 'positive' ? 'shap-p' : 'shap-n'}`} style={{width:`${Math.min(f.pctImpact * 4, 100)}%`}}>
                      {f.direction === 'positive' ? '+' : ''}{Math.round(f.contribution * crop.basePrice)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Storage Analysis */}
            {storageAnalysis && storageAnalysis.worthHolding && (
              <div className="hero-card mb16 ani">
                <div style={{position:'relative', zIndex:1}}>
                  <div className="micro mb8" style={{color:'rgba(255,255,255,.4)'}}>📦 Storage vs Sell Analysis</div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'12px', alignItems:'center', marginBottom:'14px'}}>
                    <div style={{textAlign:'center'}}><div style={{fontSize:'10px', color:'rgba(255,255,255,.5)', fontWeight:600, marginBottom:'3px'}}>Sell Today</div><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'#fff'}}>₹{crop.basePrice.toLocaleString('en-IN')}</div><div style={{fontSize:'10px', color:'rgba(255,255,255,.4)'}}>/qtl</div></div>
                    <div style={{fontSize:'20px', color:'rgba(255,255,255,.4)'}}>→</div>
                    <div style={{textAlign:'center'}}><div style={{fontSize:'10px', color:'rgba(168,224,99,.9)', fontWeight:600, marginBottom:'3px'}}>After {storageAnalysis.daysToHold}d</div><div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'#a8e063'}}>₹{storageAnalysis.targetPrice.toLocaleString('en-IN')}</div><div style={{fontSize:'10px', color:'rgba(168,224,99,.6)'}}>/qtl (+₹{(storageAnalysis.targetPrice - crop.basePrice).toLocaleString('en-IN')})</div></div>
                  </div>
                  <div style={{background:'rgba(255,255,255,.12)', borderRadius:'12px', padding:'12px'}}>
                    <div style={{fontSize:'14px', fontWeight:800, color:'#a8e063'}}>100 qtl → Extra gain: +₹{storageAnalysis.netGain.toLocaleString('en-IN')}</div>
                    <div style={{fontSize:'11px', color:'rgba(255,255,255,.55)', marginTop:'3px'}}>After ₹{storageAnalysis.storageCost.toLocaleString('en-IN')} storage cost. Confidence: {storageAnalysis.confidence}%</div>
                  </div>
                </div>
              </div>
            )}

            {/* Model Performance */}
            <div className="h3 mb12 ani">Model Performance</div>
            <div className="gcard card-p mb16 ani">
              <div className="col g10">
                {Object.values(models).map((m, i) => (
                  <div key={i}>
                    <div className="row-b mb4">
                      <span style={{fontSize:'12px', fontWeight:600}}>{m.name}</span>
                      <span style={{fontSize:'12px', fontWeight:800, color:m.color}}>{m.accuracy}%</span>
                    </div>
                    <div className="prog-t"><div className={`prog-f ${m.accuracy > 80 ? 'pf-g' : m.accuracy > 70 ? 'pf-b' : 'pf-r'}`} style={{width:`${m.accuracy}%`}}></div></div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign:'center', padding:'8px 0 0', fontSize:'10px', fontWeight:600, color:'rgba(107,93,79,.3)'}}>
              Data: {prediction.dataSource} · Updated: {new Date().toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'})}
            </div>
          </>
        )}
      </div>
    </>
  );
}
