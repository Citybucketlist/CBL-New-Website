// CBL Web/Marketing — components for marketing site
// Mirrors blog.html / about.html structure exactly.

function CBLNav({ active = 'BLOG' }) {
  const links = ['BLOG', 'OUR STORY', 'CONCIERGE', 'EATS', 'TRANSPORT', 'CONTACT'];
  return (
    <nav style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'20px 48px', borderBottom:'1px solid rgba(255,255,255,.08)',
      position:'sticky', top:0, zIndex:100,
      background:'rgba(10,10,10,.92)', backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
    }}>
      <a href="#" style={{ display:'flex', alignItems:'center' }}>
        <img src="assets/logos/cbl-wordmark.png" alt="CityBucketList" style={{ height:28 }}/>
      </a>
      <div style={{ display:'flex', gap:32, alignItems:'center' }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            fontSize:14, fontWeight:500, color: active===l ? '#fff' : '#B0B0B0',
            letterSpacing:.3, textDecoration:'none',
            borderBottom: active===l ? '2px solid #C99742' : '2px solid transparent',
            paddingBottom:2, transition:'color .2s',
          }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}

function CBLEyebrow({ children }) {
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:10,
      fontFamily:'"JetBrains Mono", "Courier New", monospace', fontSize:12,
      letterSpacing:'.06em', color:'#707070', textTransform:'lowercase', marginBottom:22,
    }}>
      <span style={{
        width:8, height:8, borderRadius:'50%', background:'#C99742',
        animation:'cbl-pulse 2.4s ease-in-out infinite',
      }}/>
      {children}
    </div>
  );
}

function CBLPill({ icon, children, active = false, onClick }) {
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', gap:8, padding:'10px 22px',
      border:'1px solid rgba(201,151,66,.3)', borderRadius:999,
      fontFamily:'Inter, system-ui', fontSize:13, fontWeight:600,
      letterSpacing:1, textTransform:'uppercase',
      color: active ? '#DDB15F' : '#C99742',
      background: active ? 'rgba(201,151,66,.15)' : 'transparent',
      cursor:'pointer', transition:'all .25s',
    }}>{icon}{children}</button>
  );
}

function CBLBlogCard({ image, category, title, excerpt, author, date, featured = false }) {
  return (
    <article style={{
      background:'#141414', border:'1px solid rgba(255,255,255,.08)',
      borderRadius:'18px 0 18px 0', overflow:'hidden',
      gridColumn: featured ? 'span 2' : undefined,
      display:'flex', flexDirection:'column',
      transition:'transform .3s, border-color .3s',
    }}>
      <div style={{
        aspectRatio: featured ? '16/8' : '16/10',
        background: image ? `linear-gradient(180deg, rgba(10,10,10,0) 30%, rgba(10,10,10,.55)), url(${image}) center/cover` : '#222',
        position:'relative',
      }}>
        <span style={{
          position:'absolute', top:14, left:14,
          fontFamily:'"JetBrains Mono",monospace', fontSize:10,
          letterSpacing:'.14em', textTransform:'uppercase',
          color:'#C99742', background:'rgba(0,0,0,.6)',
          padding:'5px 10px', border:'1px solid rgba(201,151,66,.4)',
          backdropFilter:'blur(6px)',
        }}>{category}</span>
      </div>
      <div style={{ padding:'24px 22px 22px', display:'flex', flexDirection:'column', gap:10 }}>
        <h3 style={{
          margin:0, fontFamily:'"Barlow Condensed","Myriad Pro",sans-serif',
          fontSize: featured ? 40 : 28, fontWeight:800, lineHeight:1.02,
          letterSpacing:'-.005em', textTransform:'uppercase', color:'#fff',
        }}>{title}</h3>
        <p style={{ margin:0, fontSize:14, lineHeight:1.6, color:'#B0B0B0' }}>{excerpt}</p>
        <div style={{
          marginTop:6, display:'flex', alignItems:'center', gap:10,
          fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'#707070',
        }}>
          <span>{author}</span>
          <span style={{ width:3, height:3, borderRadius:'50%', background:'#444' }}/>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}

function CBLHeroDisplay({ kicker, title, italicWord, subhead }) {
  return (
    <div>
      {kicker && <CBLEyebrow>{kicker}</CBLEyebrow>}
      <h1 style={{
        margin:'0 0 28px', fontFamily:'"Barlow Condensed","Myriad Pro",sans-serif',
        fontSize:'clamp(56px, 8.5vw, 108px)', fontWeight:800,
        lineHeight:.98, letterSpacing:'-.01em', textTransform:'uppercase', color:'#fff',
        display:'flex', flexDirection:'column', gap:'.18em',
      }}>
        <span>{title}</span>
        {italicWord && <em style={{
          fontFamily:'"Playfair Display", serif', fontWeight:400,
          fontSize:'.58em',
          color:'#C99742', fontStyle:'italic', textTransform:'none',
          letterSpacing:'0', lineHeight:1, paddingLeft:'.08em',
        }}>{italicWord}</em>}
      </h1>
      {subhead && <p style={{
        maxWidth:680, margin:0, fontSize:18, lineHeight:1.6, color:'#B8B8B8',
      }}>{subhead}</p>}
    </div>
  );
}

function CBLFooter() {
  return (
    <footer style={{
      borderTop:'1px solid rgba(255,255,255,.08)',
      padding:'48px 48px 36px', background:'#0A0A0A',
      display:'flex', justifyContent:'space-between', alignItems:'center',
      flexWrap:'wrap', gap:24,
    }}>
      <img src="assets/logos/cbl-wordmark.png" alt="CBL" style={{ height:24 }}/>
      <div style={{ fontSize:12, color:'#707070', letterSpacing:.4 }}>
        © 2026 CityBucketList.com · Pittsburgh, PA · Crafted with grit + gold
      </div>
    </footer>
  );
}

Object.assign(window, {
  CBLNav, CBLEyebrow, CBLPill, CBLBlogCard, CBLHeroDisplay, CBLFooter,
});
