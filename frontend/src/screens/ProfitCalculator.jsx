import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';

const CROPS = ['🧅 Onion', '🥔 Potato', '🍅 Tomato', '🌾 Wheat', '🧄 Garlic'];

export default function ProfitCalculator() {
  const navigate = useNavigate();
  const [activeCrop, setActiveCrop] = useState(CROPS[0]);
  const [qty, setQty] = useState(100);
  const [transportIdx, setTransportIdx] = useState(1);
  const transportOptions = [
    { label: 'Tractor (₹3,400)', cost: 3400 },
    { label: 'Mini Truck (₹5,200)', cost: 5200 },
    { label: 'Large Truck (₹7,800)', cost: 7800 },
    { label: 'Own Vehicle (₹1,200)', cost: 1200 },
  ];

  // Base mandi logic mockup
  const mandis = [
    { name: 'Indore', price: 2880, comm: 6, tcMult: 1 },
    { name: 'Dewas', price: 2810, comm: 5, tcMult: 1.7 },
    { name: 'Ujjain', price: 2750, comm: 8, tcMult: 2.2 },
  ];

  const labourCost = qty * 15;
  const transportCost = transportOptions[transportIdx].cost;

  // Calculate stats for each
  const computed = mandis.map(m => {
    const gross = qty * m.price;
    const commAmt = (gross * m.comm) / 100;
    const tc = transportCost * m.tcMult;
    const net = gross - commAmt - tc - labourCost;
    return { ...m, gross, commAmt, tc, net };
  }).sort((a,b) => b.net - a.net); // best first

  const best = computed[0];
  const extraGain = best.net - computed[1].net;

  return (
    <div className="animate-fade-up min-h-screen bg-bg">
      {/* Header */}
      <div className="px-5 pt-6 pb-2 sticky top-0 bg-bg/90 backdrop-blur-md z-30">
        <div className="flex items-center space-x-3 mb-4">
           <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-s border border-border">
            <ChevronLeft size={20} className="text-ink2" />
          </button>
          <h1 className="h2 text-ink">Net Profit Calculator</h1>
        </div>
      </div>

      <div className="px-5 space-y-5 pb-8">

        {/* Quick select buttons */}
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-1 -mx-5 px-5">
           {CROPS.map(c => (
              <button 
              key={c} onClick={() => setActiveCrop(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold border transition-all ${activeCrop === c ? 'bg-green-md text-white border-green-md shadow-s' : 'bg-white/50 text-muted border-border hover:bg-white'}`}
            >
              {c}
            </button>
           ))}
        </div>

        {/* Inputs */}
        <Card className="p-4 space-y-4">
          <div>
            <label className="label text-muted block mb-2">Quantity / आपकी मात्रा (क्विंटल)</label>
            <input 
              type="number" 
              value={qty} 
              onChange={e => setQty(Number(e.target.value))}
              className="w-full bg-white border border-border rounded-xl py-3 px-4 font-bold text-ink focus:outline-none focus:border-green-md"
            />
          </div>
          <div>
            <label className="label text-muted block mb-2">Vehicle Cost</label>
             <select 
                value={transportIdx}
                onChange={e => setTransportIdx(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-xl py-3 px-4 font-bold text-ink focus:outline-none focus:border-green-md appearance-none"
             >
                {transportOptions.map((opt, i) => (
                  <option key={i} value={i}>{opt.label}</option>
                ))}
             </select>
          </div>
        </Card>

        {/* 3 Col Comparison Grid Inputs */}
        <div className="grid grid-cols-3 gap-2">
           {mandis.map((m) => (
              <Card key={m.name} className="p-3 text-center">
                <span className="micro text-muted block mb-2">{m.name}</span>
                <input type="text" readOnly value={`₹${m.price}`} className="w-full bg-transparent text-center font-bold text-ink text-sm border-b border-border pb-1 mb-2 outline-none" />
                <span className="micro text-muted-lt block mb-1">COMM %</span>
                <input type="text" readOnly value={`${m.comm}%`} className="w-full bg-transparent text-center font-bold text-ink text-sm outline-none" />
              </Card>
           ))}
        </div>

        {/* Live Results Card */}
        <Card className="p-5 relative overflow-hidden bg-white/90">
           <div className="absolute top-0 right-0 p-4 opacity-10 text-[80px] leading-none pointer-events-none">🧮</div>
           <div className="space-y-3 relative z-10">
              <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Gross Revenue</span><span className="text-ink">₹{best.gross.toLocaleString()}</span></div>
              <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Commission Deducted</span><span className="text-red">-₹{best.commAmt.toLocaleString()}</span></div>
              <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Transport Cost</span><span className="text-red">-₹{best.tc.toLocaleString()}</span></div>
              <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Labour Charges</span><span className="text-red">-₹{labourCost.toLocaleString()}</span></div>
              
              <div className="border-t border-border pt-3 mt-2 flex justify-between items-end">
                <span className="font-bold text-ink">Net Profit</span>
                <div className="text-right">
                  <span className="block h1 text-green-md leading-none mb-1">₹{best.net.toLocaleString()}</span>
                  {extraGain > 0 && <span className="micro text-gold-dk bg-gold-lt px-2 py-0.5 rounded">Gain +₹{extraGain.toLocaleString()} vs next</span>}
                </div>
              </div>
           </div>
        </Card>

        {/* Comparison Bars */}
        <Card className="p-5">
           <h3 className="h4 mb-4">Mandi Comparison</h3>
           <div className="space-y-3">
             {computed.map((m, i) => {
               const pct = (m.net / best.net) * 100;
               return (
                 <div key={i} className="flex flex-col">
                   <div className="flex justify-between micro text-ink2 mb-1">
                     <span>{m.name}</span>
                     <span>₹{m.net.toLocaleString()}</span>
                   </div>
                   <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                     <div className={`h-full rounded-full ${i === 0 ? 'bg-gold' : 'bg-muted-lt'}`} style={{ width: `${pct}%` }}></div>
                   </div>
                 </div>
               )
             })}
           </div>
        </Card>

        {/* Alert Banner */}
        <div className="bg-green-lt border border-green/20 rounded-xl p-4 flex items-start space-x-3 text-green-dk">
           <span className="text-2xl block">🏆</span>
           <p className="text-sm font-bold pt-1">
             {best.name} is best! Transport ₹{best.tc.toLocaleString()} — you earn ₹{extraGain.toLocaleString()} more.
           </p>
        </div>

      </div>
    </div>
  );
}
