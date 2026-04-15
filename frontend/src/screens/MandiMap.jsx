import React, { useState } from 'react';
import { ChevronLeft, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leafet marker icon issue in react
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const FILTER_CHIPS = ['Onion 🧅', 'Potato 🥔', 'Tomato 🍅', 'Wheat 🌾', 'All'];

const MANDIS = [
  { rank: 1, name: 'Indore Krishi Mandi', dist: '4.2 km', time: '12 min', status: 'Open (5AM-8PM)', transport: 3400, price: 2880, net: 2710, apmc: true, loc: [22.7196, 75.8577] },
  { rank: 2, name: 'Dewas Mandi', dist: '32.5 km', time: '45 min', status: 'Closed (7AM)', transport: 6200, price: 2810, net: 2620, apmc: false, loc: [22.9676, 76.0534] },
  { rank: 3, name: 'Ujjain APMC', dist: '54.0 km', time: '1h 10m', status: 'Open (7AM-5PM)', transport: 8100, price: 2750, net: 2450, apmc: true, loc: [23.1765, 75.7885] },
];

export default function MandiMap() {
  const navigate = useNavigate();
  const [activeCrop, setActiveCrop] = useState('Onion 🧅');

  return (
    <div className="animate-fade-up min-h-screen bg-bg">
      {/* Header */}
      <div className="px-5 pt-6 pb-2 sticky top-0 bg-bg/90 backdrop-blur-md z-30">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
             <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-s border border-border">
              <ChevronLeft size={20} className="text-ink2" />
            </button>
            <h1 className="h1 text-ink">Mandi Finder</h1>
          </div>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-s border border-border">
            <Filter size={20} className="text-ink2" />
          </button>
        </div>

        {/* Chips */}
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
          {FILTER_CHIPS.map((chip, i) => (
             <button 
             key={i} 
             onClick={() => setActiveCrop(chip)}
             className={`flex-shrink-0 px-4 py-2 rounded-full border text-sm font-bold transition-all ${activeCrop === chip ? 'bg-green-md text-white border-green-md shadow-g' : 'bg-white/50 text-muted border-border hover:bg-white'}`}
           >
             {chip}
           </button>
          ))}
        </div>
      </div>

      {/* Map Area */}
      <div className="px-5 mb-6 relative z-10">
        <div className="rounded-[24px] overflow-hidden shadow-m h-[280px] border border-border bg-[#e5e3df] relative">
          <MapContainer center={[22.7196, 75.8577]} zoom={9} zoomControl={false} className="w-full h-full">
             <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution="&copy; OpenStreetMap"
              />
              {MANDIS.map((m, i) => (
                <Marker key={i} position={m.loc}>
                  <Popup>{m.name} - ₹{m.price}/qtl</Popup>
                </Marker>
              ))}
          </MapContainer>

          {/* Overlays */}
          <div className="absolute bottom-4 left-4 right-4 z-[999] flex justify-between items-end pointer-events-none">
            <span className="glass-card px-3 py-2 rounded-xl micro text-ink2 pointer-events-auto">📍 Your location: Indore, MP</span>
            <div className="glass-card rounded-lg flex flex-col pointer-events-auto overflow-hidden">
               <button className="w-8 h-8 flex items-center justify-center text-xl font-bold border-b border-border text-ink bg-white/50 hover:bg-white">+</button>
               <button className="w-8 h-8 flex items-center justify-center text-xl font-bold text-ink bg-white/50 hover:bg-white">-</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 flex justify-between items-center mb-4">
        <h2 className="h3 text-ink">Sorted by Best Net Profit</h2>
        <span className="micro px-3 py-1 bg-white border border-border shadow-s rounded-full text-muted cursor-pointer hover:bg-bg flex items-center">
          Sort <span className="ml-1 opacity-50">▼</span>
        </span>
      </div>

      {/* Mandi List */}
      <div className="px-5 pb-8 space-y-3">
        {MANDIS.map((m, i) => (
          <Card key={i} className={`p-4 ${m.rank === 1 ? 'border-2 border-green/30' : ''} ${m.status.includes('Closed') ? 'opacity-60' : ''}`}>
             <div className="flex justify-between items-start mb-2">
               <div className="flex items-center space-x-2">
                 <span className={`w-6 h-6 flex justify-center items-center rounded-full micro text-white ${m.rank === 1 ? 'bg-gold-dk' : 'bg-muted-lt'}`}>{m.rank}</span>
                 <h3 className="h3 text-ink">{m.name}</h3>
               </div>
               {m.rank === 1 && <span className="micro bg-gold/10 text-gold-dk px-2 py-1 rounded">🏆 Best Profit</span>}
             </div>
             
             <div className="flex items-center space-x-2 text-sm text-muted font-medium mb-3">
               <span>📍 {m.dist}</span>
               <span>· {m.status}</span>
               {m.apmc && <span className="text-blue">· APMC ✓</span>}
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                  <div className="text-muted micro mb-1">TRANSPORT + TIME</div>
                  <div className="text-sm font-bold text-ink2">🚛 ₹{m.transport} <span className="text-muted font-normal ml-1">· ⏱ {m.time}</span></div>
               </div>
               <div>
                  <div className="text-muted micro mb-1">PRICE</div>
                  <div className="text-sm font-bold text-ink2">₹{m.price}/qtl</div>
               </div>
             </div>

             <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
                <span className="font-bold text-green-md">Net Profit</span>
                <span className="h2 text-green-md">₹{m.net}</span>
             </div>
          </Card>
        ))}

        <button onClick={() => navigate('/profit')} className="w-full mt-4 bg-muted/10 border border-muted/20 text-ink2 font-bold py-4 rounded-xl flex justify-center items-center">
          🧮 Compare Net Profit <ChevronLeft size={20} className="transform rotate-180 ml-2" />
        </button>
      </div>
    </div>
  );
}
