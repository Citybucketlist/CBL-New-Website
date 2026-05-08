// CBL mobile UI kit — app-specific components (Myriad/Barlow Cond + gold)
// Exports: CBLPillBtn, CBLStatusBar, CBLMapHeader, CBLSectionTitle,
//   CBLMealTab, CBLRestaurantCard, CBLBottomTab

function CBLStatusBar() {
  return (
    <div style={{ height: 44, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 22px', color:'#fff', fontFamily:'-apple-system,"SF Pro",system-ui',
      fontSize: 15, fontWeight: 600 }}>
      <span>9:41</span>
      <div style={{ display:'flex', gap:6, alignItems:'center', fontSize:12, opacity:.9 }}>
        <span>●●●</span><span>⌅</span><span>▮▮▮</span>
      </div>
    </div>
  );
}

function CBLHamburger({ size = 44 }) {
  return (
    <div style={{ width:size, height:size, display:'flex', flexDirection:'column',
      justifyContent:'center', gap:5, padding:10, boxSizing:'border-box' }}>
      {[0,1,2].map(i => <span key={i} style={{ height:3, background:'#fff', borderRadius:2 }} />)}
    </div>
  );
}

function CBLMapHeader({ children, height = 144 }) {
  return (
    <div style={{ position:'relative', width:'100%', height, overflow:'hidden',
      background:'url(../../assets/imagery/cbl-map-backdrop.jpg) center/cover no-repeat' }}>
      <div style={{ position:'absolute', inset:0, background:
        'linear-gradient(180deg, rgba(0,0,0,.25), rgba(0,0,0,.75))' }} />
      <div style={{ position:'relative', zIndex:1, width:'100%', height:'100%' }}>
        {children}
      </div>
    </div>
  );
}

function CBLPillBtn({ label, variant = 'outline', onClick, style = {} }) {
  const bg = variant === 'gold' ? '#C99742' : '#000';
  const fg = variant === 'gold' ? '#000' : '#fff';
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      padding:'14px 28px', borderRadius: 40, background: bg,
      border: '4px solid #C99742', cursor:'pointer',
      boxShadow: '0 4px 4px rgba(0,0,0,.25), 0 4px 4px rgba(0,0,0,.25)',
      fontFamily:'"Barlow Condensed", "Myriad Pro", system-ui', fontWeight: 900,
      fontSize: 26, letterSpacing:'.01em', textTransform:'uppercase', color: fg,
      width: '100%', ...style,
    }}>{label}</button>
  );
}

function CBLBigTitle({ top, bottom, goldBottom = true }) {
  return (
    <div>
      <div style={{ fontFamily:'"Barlow Condensed","Myriad Pro",system-ui',
        fontWeight:900, fontSize:72, lineHeight:.9, color:'#fff',
        textTransform:'uppercase', letterSpacing:'-.02em' }}>{top}</div>
      {bottom && <div style={{ fontFamily:'"Barlow Condensed","Myriad Pro",system-ui',
        fontWeight:900, fontSize:40, lineHeight:1, marginTop:4,
        color: goldBottom ? '#C99742' : '#fff',
        textTransform:'uppercase' }}>{bottom}</div>}
    </div>
  );
}

function CBLAvatarRing({ src, size = 60 }) {
  return (
    <div style={{ width:size, height:size, borderRadius:'50%', border:'4px solid #C99742',
      background:'#222', overflow:'hidden', flexShrink:0,
      backgroundImage: src ? `url(${src})` : undefined, backgroundSize:'cover', backgroundPosition:'center' }} />
  );
}

function CBLMealTab({ label, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{
      background:'transparent', border:0, cursor:'pointer',
      display:'flex', flexDirection:'column', alignItems:'center', gap:8, padding:0,
    }}>
      <div style={{
        width:72, height:72, borderRadius:'50%',
        background: active ? 'rgba(201,151,66,.15)' : 'transparent',
        display:'flex', alignItems:'center', justifyContent:'center',
        border: active ? '1px solid rgba(201,151,66,.4)' : '1px solid rgba(255,255,255,.08)',
      }}>
        <span style={{ fontSize:28, color: active ? '#C99742' : '#888' }}>◉</span>
      </div>
      <span style={{
        fontFamily:'"Barlow Condensed", system-ui', fontWeight:700, fontSize:13,
        letterSpacing:'.1em', textTransform:'uppercase',
        color: active ? '#C99742' : '#888',
      }}>{label}</span>
      {active && <div style={{ width:44, height:3, background:'#C99742', borderRadius:2 }} />}
    </button>
  );
}

function CBLRestaurantCard({ image, name, badge, address, description }) {
  return (
    <div style={{ background:'#0F0F0F', border:'1px solid rgba(255,255,255,.08)',
      borderRadius:12, overflow:'hidden' }}>
      <div style={{ display:'flex', gap:12, padding:12 }}>
        <div style={{ width:100, height:100, borderRadius:8, flexShrink:0,
          background: image ? `url(${image}) center/cover no-repeat` : '#222' }} />
        <div style={{ flex:1, minWidth:0 }}>
          {badge && <span style={{
            display:'inline-block', fontSize:10, fontWeight:700, color:'#fff',
            background:'#C99742', padding:'3px 10px', borderRadius:4, letterSpacing:'.06em',
            textTransform:'uppercase', marginBottom:6 }}>{badge}</span>}
          <h3 style={{ margin:'2px 0 6px', fontFamily:'"Barlow Condensed",system-ui',
            fontWeight:800, fontSize:22, textTransform:'uppercase', color:'#fff' }}>{name}</h3>
          <div style={{ fontSize:10, color:'#888', letterSpacing:'.04em',
            textTransform:'uppercase', marginBottom:4 }}>{address}</div>
          <div style={{ color:'#C99742', fontSize:11, letterSpacing:'.1em' }}>★ ★ ★ ★ ★</div>
        </div>
      </div>
      {description && <p style={{ margin:0, padding:'0 12px 14px', fontSize:12,
        color:'#B8B8B8', lineHeight:1.55 }}>{description}</p>}
    </div>
  );
}

function CBLBottomTab() {
  return (
    <div style={{ height:60, background:'#C99742', display:'flex', alignItems:'center',
      justifyContent:'space-around', padding:'0 20px',
      boxShadow:'0 -4px 4px rgba(0,0,0,.25)' }}>
      {['◉','◉','◉','◉'].map((g,i) => (
        <div key={i} style={{ width:32, height:32, borderRadius:'50%',
          background:'rgba(0,0,0,.22)', display:'flex', alignItems:'center',
          justifyContent:'center', color:'#000', fontSize:14 }}>{g}</div>
      ))}
    </div>
  );
}

function CBLFrame({ children, width = 390, height = 844 }) {
  return (
    <div style={{
      width, height, borderRadius: 44, overflow:'hidden', position:'relative',
      background:'#000', boxShadow:'0 30px 70px rgba(0,0,0,.5), 0 0 0 10px #1A1A1A',
      fontFamily:'Inter, system-ui',
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { CBLStatusBar, CBLHamburger, CBLMapHeader, CBLPillBtn,
  CBLBigTitle, CBLAvatarRing, CBLMealTab, CBLRestaurantCard, CBLBottomTab, CBLFrame });
