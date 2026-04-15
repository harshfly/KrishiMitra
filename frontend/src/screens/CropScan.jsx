import React, { useState, useEffect } from 'react';
import { ChevronLeft, Camera, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

export default function CropScan() {
  const navigate = useNavigate();
  const [scanState, setScanState] = useState('idle'); // idle, scanning, result

  const handleScan = () => {
     setScanState('scanning');
     setTimeout(() => setScanState('result'), 2500);
  };

  return (
    <div className="animate-fade-up min-h-screen bg-bg">
      <div className="px-5 pt-6 pb-4 sticky top-0 bg-bg/90 backdrop-blur-md z-30">
        <div className="flex items-center space-x-3 mb-2">
           <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-s border border-border">
            <ChevronLeft size={20} className="text-ink2" />
          </button>
          <h1 className="h2 text-ink">Crop Quality Scan</h1>
        </div>
      </div>

      <div className="px-5 pb-8 space-y-6">
        
        <div className="flex items-center space-x-3 bg-white/50 border border-border rounded-xl p-3">
           <span className="micro text-muted">SUPPORTED</span>
           <div className="flex space-x-2 text-2xl">
             <span>🧅</span><span>🥔</span><span>🍅</span><span>🧄</span><span>🫚</span>
           </div>
        </div>

        {/* Scan Zone */}
        <div 
           onClick={scanState === 'idle' ? handleScan : undefined}
           className={`relative rounded-[32px] overflow-hidden transition-all duration-500 cursor-pointer ${
             scanState === 'result' ? 'h-48 border-0 shadow-m' : 'min-h-[220px] bg-green-xs border-[3px] border-dashed border-green/30 flex flex-col items-center justify-center'
           }`}
        >
           {scanState === 'idle' && (
              <div className="text-center animate-fade-up">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-s mx-auto mb-4 text-3xl">📷</div>
                 <h3 className="h3 text-green-dk">Tap to scan crop</h3>
                 <p className="micro text-green-md opacity-70 mt-1">AI WILL DETECT QUALITY & GRADE</p>
              </div>
           )}

           {scanState === 'scanning' && (
              <div className="text-center animate-fade-up w-full px-8">
                 <div className="text-5xl mb-4 animate-spin origin-center inline-block">⚙</div>
                 <h3 className="h3 text-green-dk mb-3">Analyzing crop...</h3>
                 <ProgressBar progress={65} colorClass="bg-green-md" />
                 <p className="micro text-green-md opacity-70 mt-3">EfficientNet-B0 · On-device AI</p>
              </div>
           )}

           {scanState === 'result' && (
              <div className="absolute inset-0 w-full h-full">
                 <img src="https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=600" alt="Scanned Onion" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-green/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-green/30">
                    <span className="text-white text-sm">✅ Grade A</span>
                 </div>
              </div>
           )}
        </div>

        {scanState === 'result' && (
          <div className="animate-fade-up space-y-6">
             <Card className="p-5 border-t-4 border-t-gold-dk bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="flex items-center space-x-2 mb-4 text-gold-dk border-b border-border pb-3">
                  <ShieldCheck size={20} />
                  <h3 className="font-bold text-sm">Onion Quality Report</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Grade</span><span className="text-green-dk font-bold">A ⭐⭐⭐⭐⭐</span></div>
                  <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Size</span><span className="text-ink">65mm (Large)</span></div>
                  <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Color</span><span className="text-ink">Deep Red</span></div>
                  <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Moisture</span><span className="text-ink">14%</span></div>
                  <div className="flex justify-between items-center text-sm font-medium"><span className="text-muted">Defects</span><span className="text-ink">None detected</span></div>
                </div>

                <div className="mt-4 bg-green-lt text-green-dk font-bold text-sm p-4 rounded-xl shadow-inner border border-green/10 text-center">
                   Premium mandis (Indore ₹2,880). Grade A commands +12% price.
                </div>
             </Card>

             <Card className="p-5">
                <h3 className="h3 mb-3 text-ink">Storage Tips</h3>
                <ul className="text-sm font-medium text-ink2 space-y-2 list-disc pl-5">
                   <li>Moisture is optimal (14%). Safe to store for 2-3 months.</li>
                   <li>Keep in well-ventilated dry space.</li>
                   <li>Avoid direct sunlight to maintain deep red color.</li>
                </ul>
             </Card>

             <button onClick={() => setScanState('idle')} className="w-full py-4 text-center text-muted font-bold border border-muted/30 rounded-xl hover:bg-white transition-colors text-sm">
                Scan Another Crop
             </button>
          </div>
        )}

      </div>
    </div>
  );
}
