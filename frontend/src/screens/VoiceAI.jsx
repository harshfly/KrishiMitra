import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CHIPS = ['आज प्याज का भाव?', 'सबसे अच्छी मंडी?', 'आलू बेचूं?', '7 दिन अनुमान', 'सरकारी योजनाएं?', 'देवास मंडी?'];

export default function VoiceAI() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'नमस्ते! मैं कृषि-मित्र हूँ। आज मैं आपकी क्या मदद कर सकता हूँ?', meta: 'KrishiMitra AI · Bhashini' },
    { sender: 'user', text: 'आज प्याज का भाव क्या है?' },
    { sender: 'bot', text: 'आज इंदौर मंडी में प्याज ₹2,840 प्रति क्विंटल है। कल से 6.8% ज्यादा है। AI के अनुसार 8 दिन में ₹3,120 हो सकता है — अभी मत बेचिए।', meta: 'KrishiMitra AI · Bhashini' }
  ]);

  const toggleListening = () => setIsListening(!isListening);

  const handleChip = (q) => {
     setMessages([...messages, { sender: 'user', text: q }]);
     setTimeout(() => {
        setMessages(m => [...m, { sender: 'bot', text: 'जानकारी ढूँढ रहा हूँ...', meta: 'KrishiMitra AI' }]);
     }, 600);
  };

  return (
    <div className="animate-fade-up min-h-screen bg-bg flex flex-col pt-6">
      {/* Header */}
      <div className="px-5 pb-4 sticky top-0 z-30">
        <div className="flex items-center space-x-3 mb-1">
           <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-s border border-border">
            <ChevronLeft size={20} className="text-ink2" />
          </button>
          <h1 className="h2 text-ink">Voice AI · बोलिए</h1>
        </div>
        <p className="micro text-muted-lt tracking-wide pl-12">Powered by Bhashini API · हिंदी, मराठी, ਪੰਜਾਬੀ</p>
      </div>

      {/* Chat Thread */}
      <div className="flex-1 overflow-y-auto px-5 pb-8 space-y-4">
        {messages.map((m, i) => (
           <div key={i} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 text-sm font-medium leading-relaxed ${
                 m.sender === 'user' 
                 ? 'bg-green-md text-white rounded-[20px_20px_6px_20px] shadow-s' 
                 : 'bg-white border border-border text-ink2 rounded-[20px_20px_20px_6px] shadow-s'
              }`}>
                 {m.text}
              </div>
              {m.meta && <span className="micro text-muted opacity-60 mt-1 pl-2">{m.meta}</span>}
           </div>
        ))}
      </div>

      {/* Voice Core & Controls */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-border px-5 pt-4 pb-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
         {/* Chips */}
         <div className="flex flex-wrap gap-2 mb-6">
            {CHIPS.map((c, i) => (
              <button 
                key={i} 
                onClick={() => handleChip(c)}
                className="micro px-3 py-1.5 bg-green-lt text-green-dk border border-green/20 rounded-full hover:bg-green-md hover:text-white transition-colors"
                style={{ textTransform: 'none', letterSpacing: 'normal' }}
              >
                {c}
              </button>
            ))}
         </div>

         <div className="flex flex-col items-center justify-center">
            <button 
              onClick={toggleListening}
              className={`relative w-24 h-24 rounded-full flex items-center justify-center border-4 border-bg shadow-g transition-all duration-300 ${isListening ? 'bg-red hero-gradient border-red-lt' : 'bg-green hero-gradient animate-pulse-ring'}`}
            >
              <span className="text-4xl">{isListening ? '🔴' : '🎙'}</span>
            </button>
            <span className="text-sm font-bold text-ink2 mt-4">{isListening ? 'सुन रहा हूँ...' : 'Tap to Speak'}</span>
         </div>
      </div>
    </div>
  );
}
