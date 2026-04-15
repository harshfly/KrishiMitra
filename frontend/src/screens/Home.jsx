import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sparkline from '../ui/Sparkline';
import DonutChart from '../ui/DonutChart';
import { useLanguage } from '../context/LanguageContext';

export default function Home({ user }) {
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();
  const [profile, setProfile] = React.useState(null);
  const [crops, setCrops] = React.useState([]);

  React.useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    // Fetch profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    
    if (profileData) setProfile(profileData);

    // Fetch user crops
    const { data: cropData } = await supabase
      .from('user_crops')
      .select('*, crops(*)')
      .eq('user_id', user.id);
    
    if (cropData) setCrops(cropData);
  };

  const userName = profile?.full_name?.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || 'Farmer';
  const userInitial = userName[0] || 'F';
  const location = profile?.district ? `${profile.district}, ${profile.state}` : 'Location pending';

  return (
    <div className="inner pb-24">
      {/* Top bar (improved layout) */}
      <div className="row-b mb12 ani">
        <div className="col">
          <div className="row g8 mb4">
            <div className="micro">KrishiMitra AI · v4.0</div>
            <select 
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:'6px', fontSize:'9px', padding:'2px 6px', color:'var(--ink)', outline:'none', fontWeight:700, cursor:'pointer'}}
            >
              <option value="en">🇺🇸 EN</option>
              <option value="hi">🇮🇳 HI</option>
              <option value="hinglish">🇮🇳 HINGLISH</option>
            </select>
          </div>
          <div className="h1" style={{fontSize:'22px', whiteSpace:'nowrap'}}>{t("dash.greeting")} <span className="t-g">{userName}</span> 🙏</div>
          <div style={{fontSize:'11px', color:'var(--muted)', marginTop:'2px'}}>📍 {location} · <span className="t-g" style={{fontWeight:700}}>●</span> Live</div>
        </div>
        <div className="row g8">
          <button className="btn btn-icon glass notif-dot" onClick={() => navigate('/alerts')} style={{fontSize:'18px'}}>🔔</button>
          <div onClick={() => navigate('/profile')} style={{width:'40px', height:'40px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'#fff', boxShadow:'var(--shadow-g)', cursor:'pointer', background:'linear-gradient(145deg, var(--green), var(--green-dk))'}}>{userInitial}</div>
        </div>
      </div>

      {/* AI Hero card (condensed) */}
      <div className="hero-card mb10 ani" onClick={() => navigate('/forecast')} style={{padding:'16px'}}>
        <div style={{position:'relative', zIndex:1}}>
          <div className="row g8 mb10">
            <div className="badge bg-w"><span style={{width:'6px', height:'6px', background:'#a8e063', borderRadius:'50%', display:'inline-block'}} className="blink"></span> {t("dash.ai_intelligence")}</div>
          </div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'#fff', lineHeight:1.3, marginBottom:'6px'}}>{t("dash.hold_onion")}<br/>{t("dash.for_days")} 📈</div>
          <div style={{fontSize:'12px', color:'rgba(255,255,255,.7)', lineHeight:1.5, maxWidth:'90%'}} dangerouslySetInnerHTML={{__html: t("dash.ai_surge")}}></div>
          <div style={{borderTop:'1px solid rgba(255,255,255,.15)', marginTop:'14px', paddingTop:'12px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>
              <div className="micro" style={{color:'rgba(255,255,255,.5)'}}>{t("dash.target_price")}</div>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'22px', fontWeight:700, color:'var(--gold)', marginTop:'3px'}}>₹3,120 <span style={{fontSize:'11px', fontWeight:400, color:'rgba(255,255,255,.4)'}}>{t("dash.per_q")}</span></div>
            </div>
            <div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-m)', color:'black'}}>↗</div>
          </div>
        </div>
      </div>

      {/* Quick Alert */}
      <div className="ab ab-r mb12 ani" style={{padding:'12px 14px'}}><div className="ab-icon text-lg">⚠️</div><div><div className="ab-title">{t("dash.alert_sell_potato")}</div><div className="ab-body">{t("dash.alert_potato_desc")}</div></div></div>

      {/* Super-App Dense Grid (NEW) */}
      <div className="row-b mb10 ani"><div className="h3">{t("dash.quick_actions")}</div></div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'8px', marginBottom:'16px'}} className="ani">
        <div className="q-act" onClick={() => navigate('/scan')}>
          <div className="q-icon" style={{background:'var(--green-lt)'}}>📷</div>
          <div className="q-lbl text-[10px]">{t("qa.scan")}</div>
        </div>
        <div className="q-act" onClick={() => navigate('/prices')}>
          <div className="q-icon" style={{background:'var(--blue-lt)'}}>📈</div>
          <div className="q-lbl text-[10px]">{t("qa.live")}</div>
        </div>
        <div className="q-act" onClick={() => navigate('/forecast')}>
          <div className="q-icon" style={{background:'var(--gold-lt)'}}>🎯</div>
          <div className="q-lbl text-[10px]">{t("qa.ai")}</div>
        </div>
        <div className="q-act" onClick={() => navigate('/mandi')}>
          <div className="q-icon" style={{background:'var(--bg2)'}}>🏆</div>
          <div className="q-lbl text-[10px]">{t("qa.map")}</div>
        </div>
        <div className="q-act" onClick={() => navigate('/profit')}>
          <div className="q-icon" style={{background:'var(--bg)'}}>🧮</div>
          <div className="q-lbl text-[10px]">{t("qa.calc")}</div>
        </div>
        <div className="q-act" onClick={() => navigate('/schemes')}>
          <div className="q-icon" style={{background:'var(--red-lt)'}}>🏛️</div>
          <div className="q-lbl text-[10px]">{t("qa.schemes")}</div>
        </div>
      </div>

      {/* Compact Weather */}
      <div className="weather-card mb12 ani" style={{padding:'14px 16px'}}>
        <div style={{position:'relative', zIndex:1}}>
          <div className="row-b mb8">
            <div>
              <div className="micro" style={{color:'rgba(255,255,255,.6)'}}>📍 Indore, MP</div>
              <div style={{fontFamily:'var(--font-disp)', fontSize:'32px', fontWeight:600, color:'#fff', lineHeight:1, marginTop:'6px'}}>24°</div>
              <div style={{fontSize:'12px', fontWeight:700, color:'rgba(255,255,255,.9)', marginTop:'4px'}}>⛅ Partly Cloudy</div>
            </div>
            <div style={{fontSize:'48px', opacity:'.9'}}>⛅</div>
          </div>
          <div style={{borderTop:'1px solid rgba(255,255,255,.15)', paddingTop:'10px', display:'grid', gridTemplateColumns:'repeat(4,1fr)', textAlign:'center'}}>
            <div><div style={{fontSize:'12px', fontWeight:800}}>72%</div><div className="micro" style={{color:'rgba(255,255,255,.5)'}}>Humidity</div></div>
            <div><div style={{fontSize:'12px', fontWeight:800}}>8mm</div><div className="micro" style={{color:'rgba(255,255,255,.5)'}}>Rainfall</div></div>
            <div><div style={{fontSize:'12px', fontWeight:800}}>1012</div><div className="micro" style={{color:'rgba(255,255,255,.5)'}}>hPa</div></div>
            <div><div style={{fontSize:'12px', fontWeight:800}}>14km</div><div className="micro" style={{color:'rgba(255,255,255,.5)'}}>Wind</div></div>
          </div>
        </div>
      </div>

      {/* Live market ticker */}
      <div className="row-b mb10 ani">
        <div className="h3">Live Market</div>
        <span style={{fontSize:'12px', fontWeight:700, color:'var(--gold)', cursor:'pointer'}} onClick={() => navigate('/prices')}>View All →</span>
      </div>
      <div style={{display:'flex', gap:'8px', overflowX:'auto', paddingBottom:'8px', margin:'0 -18px', padding:'0 18px 10px'}} className="no-scrollbar ani">
        <div className="tick" onClick={() => navigate('/prices')} style={{padding:'12px', minWidth:'125px'}}>
          <div className="row-b mb10"><div style={{fontSize:'16px'}}>🧅</div><div style={{background:'var(--green-lt)', color:'var(--green-md)', padding:'2px 6px', borderRadius:'6px', fontSize:'9px', fontWeight:700}}>+6.8%</div></div>
          <div className="micro mb2">Onion</div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>₹2,840</div>
          <Sparkline points="0,18 14,14 28,16 42,10 56,8 70,4 80,2" color="#2E6B3E" />
        </div>
        <div className="tick" onClick={() => navigate('/prices')} style={{padding:'12px', minWidth:'125px'}}>
          <div className="row-b mb10"><div style={{fontSize:'16px'}}>🍅</div><div style={{background:'var(--green-lt)', color:'var(--green-md)', padding:'2px 6px', borderRadius:'6px', fontSize:'9px', fontWeight:700}}>+16.4%</div></div>
          <div className="micro mb2">Tomato</div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>₹3,200</div>
          <Sparkline points="0,20 14,16 28,12 42,8 56,6 70,3 80,1" color="#2E7D32" />
        </div>
        <div className="tick" onClick={() => navigate('/prices')} style={{padding:'12px', minWidth:'125px'}}>
          <div className="row-b mb10"><div style={{fontSize:'16px'}}>🥔</div><div style={{background:'var(--red-lt)', color:'var(--red)', padding:'2px 6px', borderRadius:'6px', fontSize:'9px', fontWeight:700}}>-2.4%</div></div>
          <div className="micro mb2">Potato</div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>₹1,650</div>
          <Sparkline points="0,4 14,8 28,10 42,14 56,18 70,22 80,24" color="#C62828" />
        </div>
      </div>

      {/* Hold / Sell Quick Section (condensed cards) */}
      <div className="row-b mt16 mb10 ani">
        <div className="h3">Hold or Sell?</div>
        <span style={{fontSize:'12px', fontWeight:700, color:'var(--gold)', cursor:'pointer'}} onClick={() => navigate('/holdsell')}>Advisor →</span>
      </div>
      <div className="col g8 ani">
        <div className="hs g10" style={{padding:'12px'}}><div style={{fontSize:'24px'}}>🧅</div><div style={{flex:1}}><div className="h4" style={{fontSize:'13px'}}>Onion · प्याज</div><div style={{fontSize:'11px', color:'var(--muted)'}}>₹2,840 · Rising · Peak 8d</div></div><div className="sig sig-h" style={{fontSize:'10px'}}>⏳ HOLD</div></div>
        <div className="hs g10" style={{padding:'12px'}}><div style={{fontSize:'24px'}}>🥔</div><div style={{flex:1}}><div className="h4" style={{fontSize:'13px'}}>Potato · आलू</div><div style={{fontSize:'11px', color:'var(--red)'}}>₹1,650 · Falling · MSP risk</div></div><div className="sig sig-s" style={{fontSize:'10px'}}>🚀 SELL</div></div>
      </div>
      
      {/* Reduced Best Mandi list (removed massive gold card) */}
      <div className="row-b mt16 mb10 ani">
        <div className="h3">Top Mandis</div>
        <span style={{fontSize:'12px', fontWeight:700, color:'var(--gold)', cursor:'pointer'}} onClick={() => navigate('/mandi')}>See Map →</span>
      </div>
      <div className="col g8 ani">
        <div className="mc" onClick={() => navigate('/mandi')} style={{padding:'12px'}}><div className="mc-rank mr1" style={{width:36, height:36, fontSize:15}}>1</div><div style={{flex:1}}><div className="h4" style={{fontSize:'13px'}}>Indore Krishi Mandi</div><div style={{fontSize:'11px', color:'var(--muted)', marginTop:'2px'}}>📍 4.2 km · <span style={{color:'var(--green)'}}>Open Now</span></div></div><div style={{textAlign:'right'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>₹2,880</div><div style={{fontSize:'10px', color:'var(--green)'}}>Net ₹2,710</div></div></div>
        <div className="mc" onClick={() => navigate('/mandi')} style={{padding:'12px'}}><div className="mc-rank mr2" style={{width:36, height:36, fontSize:15}}>2</div><div style={{flex:1}}><div className="h4" style={{fontSize:'13px'}}>Dewas Mandi</div><div style={{fontSize:'11px', color:'var(--muted)', marginTop:'2px'}}>📍 32.5 km · <span style={{color:'var(--red)'}}>Closed</span></div></div><div style={{textAlign:'right'}}><div style={{fontFamily:'var(--font-disp)', fontSize:'16px', fontWeight:700, color:'var(--ink)'}}>₹2,810</div><div style={{fontSize:'10px', color:'var(--gold)'}}>Net ₹2,620</div></div></div>
      </div>

      {/* Portfolio & Performance Grid */}
      <div className="row-b mt16 mb10 ani">
        <div className="h3">Portfolio</div>
        <span style={{fontSize:'12px', fontWeight:700, color:'var(--gold)', cursor:'pointer'}} onClick={() => navigate('/profile')}>Manage →</span>
      </div>
      <div className="gcard mb12 ani" style={{padding:'12px'}}>
        {crops.length > 0 ? (
          <div className="col g12 sm:flex-row sm:items-center">
            <DonutChart data={crops} />
            <div className="col g6" style={{flex:1}}>
              {crops.slice(0, 3).map((item, i) => (
                <div key={i} className="row-b">
                  <div className="row g6">
                    <div style={{width:'8px', height:'8px', background: i === 0 ? 'var(--green)' : i === 1 ? 'var(--gold)' : 'var(--blue)', borderRadius:'2px'}}></div>
                    <div style={{fontSize:'11px', fontWeight:600}}>{item.crops?.name}</div>
                  </div>
                  <div style={{fontFamily:'var(--font-disp)', fontSize:'12px', fontWeight:700}}>{item.area_acres} ac</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-8 text-center" style={{background:'var(--bg2)', borderRadius:'12px'}}>
            <div style={{fontSize:'20px', marginBottom:'4px'}}>📊</div>
            <div style={{fontSize:'12px', color:'var(--muted)'}}>No crop data available</div>
          </div>
        )}
      </div>

    </div>
  );
}
