import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Onboarding({ user, onComplete }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    crops: [],
    landSize: '',
    latitude: null,
    longitude: null
  });

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      try {
        // Simple reverse geocoding via Nominatim (Free, no key required for low volume)
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
        const data = await res.json();
        
        const address = data.address;
        const state = address.state || '';
        const district = address.state_district || address.city || address.town || '';

        setFormData(prev => ({
          ...prev,
          latitude: lat,
          longitude: lon,
          state: state.includes('Madhya Pradesh') ? 'MP' : state,
          district: district
        }));
      } catch (err) {
        console.error("Reverse geocoding failed", err);
        setFormData(prev => ({ ...prev, latitude: lat, longitude: lon }));
      } finally {
        setLoading(false);
      }
    }, (error) => {
      console.error(error);
      alert("Unable to retrieve location. Please select manually.");
      setLoading(false);
    });
  };

  const cropsList = [
    { id: 'onion', name: 'Onion', emoji: '🧅' },
    { id: 'garlic', name: 'Garlic', emoji: '🧄' },
    { id: 'potato', name: 'Potato', emoji: '🥔' },
    { id: 'tomato', name: 'Tomato', emoji: '🍅' },
    { id: 'wheat', name: 'Wheat', emoji: '🌾' },
    { id: 'soybean', name: 'Soybean', emoji: '🌱' }
  ];

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      try {
        // 1. Update Profile
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            state: formData.state,
            district: formData.district,
            land_size_acres: parseFloat(formData.landSize),
            latitude: formData.latitude,
            longitude: formData.longitude
          })
          .eq('id', user.id);

        if (profileError) throw profileError;

        // 2. Add Crops
        const cropInsertions = formData.crops.map(cropId => ({
          user_id: user.id,
          crop_id: cropId,
          area_acres: parseFloat(formData.landSize) / formData.crops.length // Rough estimate
        }));

        const { error: cropError } = await supabase
          .from('user_crops')
          .insert(cropInsertions);

        if (cropError) throw cropError;

        onComplete(formData);
      } catch (err) {
        console.error('Error saving onboarding data:', err);
        alert('Failed to save setup. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleCrop = (cropId) => {
    setFormData(prev => ({
      ...prev,
      crops: prev.crops.includes(cropId) 
        ? prev.crops.filter(id => id !== cropId)
        : [...prev.crops, cropId]
    }));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* Desktop left-side branding */}
        <div className="auth-left">
          <div style={{width:'88px', height:'88px', background:'#fff', borderRadius:'28px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'var(--shadow-l)', margin:'0 auto 32px'}}>
            <div style={{width:'56px', height:'56px', background:'linear-gradient(145deg, var(--green), var(--green-dk))', borderRadius:'18px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', boxShadow:'var(--shadow-g)'}}>🌾</div>
          </div>
          <div style={{fontFamily:'var(--font-disp)', fontSize:'42px', fontWeight:700, color:'var(--green-dk)', letterSpacing:'-1.5px', marginBottom:'8px'}}>Krishi<span className="t-g">Mitra</span></div>
          <div className="label" style={{color:'var(--green-dk)', marginBottom:'16px'}}>Farm Setup</div>
          <div style={{fontSize:'16px', color:'var(--green-dk)', textAlign:'center', maxWidth:'320px', lineHeight:'1.6'}}>
            Set up your farm profile to get personalized weather alerts, price forecasts, and crop-specific schemes.
          </div>
        </div>

        <div className="auth-right" style={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
          {/* Background blobs */}
          <div className="hide-on-desktop" style={{position:'absolute', top:'-80px', right:'-80px', width:'300px', height:'300px', background:'radial-gradient(circle, rgba(46,107,62,.06) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none'}}></div>
          <div className="hide-on-desktop" style={{position:'absolute', bottom:'-60px', left:'-60px', width:'250px', height:'250px', background:'radial-gradient(circle, rgba(200,168,75,.06) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none'}}></div>

        <div className="inner-t" style={{paddingTop:'40px', zIndex:10}}>
          {/* Progress Bar */}
          <div className="row g6 mb20">
            <div style={{flex:1, height:'4px', background: step >= 1 ? 'var(--green)' : 'var(--border)', borderRadius:'4px', transition:'all 0.3s'}}></div>
            <div style={{flex:1, height:'4px', background: step >= 2 ? 'var(--green)' : 'var(--border)', borderRadius:'4px', transition:'all 0.3s'}}></div>
            <div style={{flex:1, height:'4px', background: step >= 3 ? 'var(--green)' : 'var(--border)', borderRadius:'4px', transition:'all 0.3s'}}></div>
          </div>

          <div className="animate-fade-up" key={`step-${step}`}>
            {step === 1 && (
              <>
                <div className="row-b mb8">
                  <div className="h1">Where is your farm? 📍</div>
                  <button 
                    onClick={detectLocation}
                    disabled={loading}
                    style={{background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:'12px', padding:'8px 12px', fontSize:'12px', fontWeight:700, color:'var(--green)', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px'}}
                  >
                    🛰️ {loading ? 'Detecting...' : 'Auto-detect'}
                  </button>
                </div>
                <div style={{fontSize:'14px', color:'var(--muted)', marginBottom:'32px', lineHeight:'1.6'}}>We need this to provide accurate weather, mandi prices, and local schemes.</div>
                
                {formData.latitude && (
                  <div className="badge bg-g mb16" style={{width:'fit-content'}}>
                    📍 GPS: {formData.latitude.toFixed(4)}, {formData.longitude.toFixed(4)}
                  </div>
                )}
                <div className="field-wrap">
                  <label className="field-lbl">State / राज्य</label>
                  <select 
                    className="field" 
                    value={formData.state} 
                    onChange={e => setFormData({...formData, state: e.target.value})}
                    style={{paddingRight:'16px'}}
                  >
                    <option value="" disabled>Select State</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="GJ">Gujarat</option>
                    <option value="RJ">Rajasthan</option>
                  </select>
                </div>
                
                <div className="field-wrap">
                  <label className="field-lbl">District / ज़िला</label>
                  <select 
                    className="field" 
                    value={formData.district} 
                    onChange={e => setFormData({...formData, district: e.target.value})}
                    disabled={!formData.state}
                  >
                    <option value="" disabled>Select District</option>
                    {formData.state === 'MP' && (
                      <>
                        <option value="Indore">Indore</option>
                        <option value="Dewas">Dewas</option>
                        <option value="Rajgarh">Rajgarh</option>
                        <option value="Ujjain">Ujjain</option>
                      </>
                    )}
                    {formData.state !== 'MP' && <option value="other">Other District</option>}
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="h1 mb8">What do you grow? 🌱</div>
                <div style={{fontSize:'14px', color:'var(--muted)', marginBottom:'32px', lineHeight:'1.6'}}>Select the crops you actively farm to get custom AI price forecasts.</div>
                
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                  {cropsList.map(crop => {
                    const isSelected = formData.crops.includes(crop.id);
                    return (
                      <div 
                        key={crop.id}
                        onClick={() => toggleCrop(crop.id)}
                        style={{
                          background: isSelected ? 'var(--green-xs)' : 'var(--white)',
                          border: isSelected ? '2px solid var(--green)' : '1px solid var(--border)',
                          borderRadius:'var(--r-md)',
                          padding:'16px',
                          display:'flex',
                          flexDirection:'column',
                          alignItems:'center',
                          gap:'8px',
                          cursor:'pointer',
                          transition:'all 0.2s',
                          boxShadow: isSelected ? 'var(--shadow-g)' : 'var(--shadow-s)'
                        }}
                      >
                        <div style={{fontSize:'32px'}}>{crop.emoji}</div>
                        <div style={{fontFamily:'var(--font-disp)', fontSize:'15px', fontWeight:600, color: isSelected ? 'var(--green-dk)' : 'var(--ink)'}}>{crop.name}</div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="h1 mb8">Farm details 📏</div>
                <div style={{fontSize:'14px', color:'var(--muted)', marginBottom:'32px', lineHeight:'1.6'}}>Help us calculate your expected yield and suggest fertilizers accurately.</div>
                
                <div className="field-wrap">
                  <label className="field-lbl">Total Land Size (Acres) / कुल ज़मीन</label>
                  <input 
                    type="number"
                    className="field" 
                    placeholder="e.g. 5"
                    value={formData.landSize}
                    onChange={e => setFormData({...formData, landSize: e.target.value})}
                  />
                </div>
                
                <div className="ab ab-g mt24">
                  <div className="ab-icon">🔒</div>
                  <div>
                    <div className="ab-title">100% Private & Secure</div>
                    <div className="ab-body">Your farm data is strictly confidential and used only to power your personalized AI insights.</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom controls */}
        <div style={{marginTop:'auto', padding:'20px 18px 40px', background:'linear-gradient(to top, var(--bg) 80%, transparent)'}}>
          <div className="row g12">
            {step > 1 && (
              <button 
                className="btn btn-out" 
                style={{flex:0.3}} 
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            <button 
              className="btn btn-g" 
              style={{flex:1}} 
              onClick={handleNext}
              disabled={
                loading ||
                (step === 1 && (!formData.state || !formData.district)) ||
                (step === 2 && formData.crops.length === 0) ||
                (step === 3 && !formData.landSize)
              }
            >
              {loading ? 'Saving...' : (step === 3 ? 'Complete Setup 🎉' : 'Continue →')}
            </button>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
