import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Profile({ user, onLogout }) {
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    if (onLogout) onLogout();
  };

  const fullName = profile?.full_name || user?.user_metadata?.full_name || 'Farmer';
  const initial = fullName[0] || 'F';
  const phone = profile?.phone || user?.user_metadata?.phone || '';
  const location = profile?.district ? `${profile.district}, ${profile.state}` : 'Location pending';

  return (
    <>
      <div className="ph">
        <button className="ph-back" onClick={() => navigate(-1)}>←</button>
        <div className="ph-title">Farmer Profile</div>
        <button className="ph-btn" onClick={() => navigate('/alerts')}>🔔</button>
      </div>
      <div className="inner animate-fade-up">
        {/* Profile card */}
        <div className="gcard card-p6 mb16" style={{textAlign:'center', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', top:0, right:0, width:'120px', height:'120px', background:'rgba(46,107,62,.05)', borderRadius:'50%', transform:'translate(40px,-40px)'}}></div>
          <div style={{width:'72px', height:'72px', borderRadius:'22px', background:'linear-gradient(145deg,var(--green),var(--green-dk))', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-disp)', fontSize:'28px', fontWeight:700, color:'#fff', margin:'0 auto 14px', border:'3px solid #fff', boxShadow:'var(--shadow-g)'}}>{initial}</div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'18px', fontWeight:700, color:'var(--ink)', marginBottom:'4px'}}>{fullName} ✅</div>
          <div style={{fontSize:'12px', color:'var(--muted)'}}>{location}</div>
          <div className="row g8 mt12" style={{justifyContent:'center', flexWrap:'wrap'}}>
            {crops.map((item, i) => (
              <div key={i} className="badge bg-g">{item.crops?.emoji} {item.crops?.name}</div>
            ))}
            {crops.length === 0 && <div className="badge bg-o">No crops added</div>}
          </div>
        </div>

        {/* Stats */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'16px'}}>
          <div className="gcard" style={{padding:'14px', textAlign:'center'}}><div style={{fontSize:'20px', marginBottom:'4px'}}>🔔</div><div className="micro mb4">Alerts</div><div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--green)'}}>3</div></div>
          <div className="gcard" style={{padding:'14px', textAlign:'center'}}><div style={{fontSize:'20px', marginBottom:'4px'}}>📍</div><div className="micro mb4">Saved Mandis</div><div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--green)'}}>3</div></div>
          <div className="gcard" style={{padding:'14px', textAlign:'center'}}><div style={{fontSize:'20px', marginBottom:'4px'}}>📷</div><div className="micro mb4">Crop Scans</div><div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--green)'}}>12</div></div>
          <div className="gcard" style={{padding:'14px', textAlign:'center'}}><div style={{fontSize:'20px', marginBottom:'4px'}}>📈</div><div className="micro mb4">Active Days</div><div style={{fontFamily:'var(--font-disp)', fontSize:'20px', fontWeight:700, color:'var(--green)'}}>47</div></div>
        </div>

        {/* Crop portfolio */}
        <div className="row-b mb12"><div className="h3">Crop Portfolio</div><button style={{background:'var(--green-lt)', border:'none', fontSize:'12px', fontWeight:700, color:'var(--green)', cursor:'pointer', padding:'5px 12px', borderRadius:'99px'}}>+ Add Crop</button></div>
        <div className="col g10 mb16">
          {crops.map((item, i) => (
            <div key={i} className="pr">
              <div style={{width:'40px', height:'40px', background:'var(--green-lt)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0}}>
                {item.crops?.emoji || '🌱'}
              </div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:'14px', fontWeight:700, color:'var(--ink)'}}>{item.crops?.name}</div>
                <div style={{fontSize:'11px', color:'var(--muted)'}}>
                  {item.area_acres} acres · {item.expected_vield} quintal expected
                </div>
              </div>
              <div className="badge bg-g">Active</div>
            </div>
          ))}
          {crops.length === 0 && (
            <div className="gcard card-p text-center py-8" style={{background:'var(--bg2)'}}>
              <div style={{fontSize:'24px', marginBottom:'8px'}}>🚜</div>
              <div style={{fontSize:'13px', color:'var(--muted)'}}>No crops in your portfolio yet.</div>
            </div>
          )}
        </div>

        {/* Language */}
        <div className="gcard card-p row-b mb12" style={{cursor:'pointer'}}>
          <div className="row g12"><div style={{width:'40px', height:'40px', background:'var(--green-lt)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px'}}>🌐</div><div><div style={{fontSize:'14px', fontWeight:700, color:'var(--ink)'}}>Language · भाषा</div><div style={{fontSize:'11px', color:'var(--muted)', fontWeight:600, marginTop:'2px'}}>हिंदी (Hindi)</div></div></div>
          <span style={{fontSize:'18px', color:'var(--muted)'}}>›</span>
        </div>

        {/* Settings */}
        <div className="micro mb12">Account Management</div>
        <div className="col g10 mb16">
          <button className="gcard row-b card-p" style={{border:'none', cursor:'pointer', textAlign:'left', fontFamily:'var(--font-body)'}} onClick={() => navigate('/community')}><div className="row g12"><div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-s)'}}>👥</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>Community Feed</div></div><span style={{color:'var(--muted)'}}>›</span></button>
          <button className="gcard row-b card-p" style={{border:'none', cursor:'pointer', textAlign:'left', fontFamily:'var(--font-body)'}} onClick={() => navigate('/holdsell')}><div className="row g12"><div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-s)'}}>⏳</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>Hold / Sell Advisor</div></div><span style={{color:'var(--muted)'}}>›</span></button>
          <button className="gcard row-b card-p" style={{border:'none', cursor:'pointer', textAlign:'left', fontFamily:'var(--font-body)'}} onClick={() => navigate('/schemes')}><div className="row g12"><div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-s)'}}>🏛️</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>Govt. Schemes</div></div><span style={{color:'var(--muted)'}}>›</span></button>
          <button className="gcard row-b card-p" style={{border:'none', cursor:'pointer', textAlign:'left', fontFamily:'var(--font-body)'}}><div className="row g12"><div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-s)'}}>🔔</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>Notification Settings</div></div><span style={{color:'var(--muted)'}}>›</span></button>
          <button className="gcard row-b card-p" style={{border:'none', cursor:'pointer', textAlign:'left', fontFamily:'var(--font-body)'}}><div className="row g12"><div style={{width:'38px', height:'38px', background:'#fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow:'var(--shadow-s)'}}>🔒</div><div style={{fontSize:'13px', fontWeight:700, color:'var(--ink)'}}>Privacy & Security</div></div><span style={{color:'var(--muted)'}}>›</span></button>
        </div>

        <button className="btn btn-full btn-lg mb16" style={{background:'transparent', border:'2px solid var(--red)', color:'var(--red)', fontFamily:'var(--font-body)'}} onClick={handleLogout}>Sign Out Securely</button>
        <div style={{textAlign:'center', paddingBottom:'20px', fontSize:'11px', fontWeight:600, color:'rgba(107,93,79,.3)'}}>KrishiMitra v4.0 · AGMARKNET · IMD · Bhashini · OLA Maps</div>
      </div>
    </>
  );
}
