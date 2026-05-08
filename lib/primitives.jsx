// Shared CBL primitives used across the Eats & Drinks flow.
// Keeps paths tuned for this project's layout.

const GOLD = '#C99742';
const GOLD_DEEP = '#CE8D19';
const BLACK = '#000';
const SURFACE = '#141414';
const SURFACE_HI = '#1A1A1A';
const BODY = 'Inter, system-ui, sans-serif';
const DISPLAY = '"Barlow Condensed", "Myriad Pro", system-ui';

function StatusBar() {
  return (
    <div style={{
      height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 22px 4px', color: '#fff',
      fontFamily: '-apple-system,"SF Pro",system-ui', fontSize: 15, fontWeight: 600,
    }}>
      <span>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12, opacity: .9 }}>
        <span>●●●</span><span>⌅</span><span>▮▮▮</span>
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <button style={{
      width: 44, height: 44, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', gap: 5, padding: 10, boxSizing: 'border-box',
      background: 'transparent', border: 0, cursor: 'pointer',
    }}>
      {[0, 1, 2].map(i => <span key={i} style={{ height: 3, background: '#fff', borderRadius: 2 }} />)}
    </button>
  );
}

function MapHeader({ children, height = 144 }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height, overflow: 'hidden',
      background: 'url(assets/imagery/cbl-map-backdrop.jpg) center/cover no-repeat',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.55))',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function WebHeader() {
  // CITYBUCKETLIST.COM wordmark — CITY, LIST and .COM in gold; BUCKET in white.
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 28px', background: '#000',
      borderBottom: '1px solid rgba(255,255,255,.05)',
    }}>
      <div style={{ width: 44 }} />
      <div style={{
        fontFamily: DISPLAY, fontWeight: 900, fontSize: 26,
        letterSpacing: '.02em', whiteSpace: 'nowrap',
      }}>
        <span style={{ color: GOLD }}>CITY</span>
        <span style={{ color: '#fff' }}>BUCKET</span>
        <span style={{ color: GOLD }}>LIST</span>
        <span style={{ color: GOLD }}>.COM</span>
      </div>
      <Hamburger />
    </div>
  );
}

// Large bold price / sponsor title — gold accent line
function EyebrowLabel({ children, size = 22, color = GOLD, weight = 900, style }) {
  return (
    <div style={{
      fontFamily: DISPLAY, fontWeight: weight, fontSize: size,
      color, textTransform: 'uppercase', letterSpacing: '.02em',
      ...style,
    }}>{children}</div>
  );
}

// The "bucket" rating glyph — stacked cups on a tray, 5 of them
function BucketRating({ value = 5, size = 16 }) {
  const cups = [];
  for (let i = 0; i < 5; i++) {
    const on = i < value;
    cups.push(
      <svg key={i} width={size} height={size} viewBox="0 0 20 20">
        <g fill="none" stroke={on ? GOLD : 'rgba(201,151,66,0.28)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 6h10l-1.2 10c-.1.8-.8 1.4-1.6 1.4H7.8c-.8 0-1.5-.6-1.6-1.4z" fill={on ? 'rgba(201,151,66,0.22)' : 'none'} />
          <path d="M5 6c0-1.5 2.2-2.5 5-2.5S15 4.5 15 6" />
        </g>
      </svg>
    );
  }
  return <div style={{ display: 'inline-flex', gap: 2, alignItems: 'center' }}>{cups}</div>;
}

// Cuisine-aware corner glyph on restaurant cards. Picks the right SVG from the
// food-icons set based on the restaurant's cuisine tags. Falls back to the
// generic coffee-cup if no match.
function CardCornerGlyph({ cuisine }) {
  // Priority order — first match wins. Map cuisine tag -> svg filename.
  const map = [
    ['MEXICAN',    'taco.svg'],
    ['TACOS',      'taco.svg'],
    ['PIZZA',      'pizza-slice.svg'],
    ['SUSHI',      'sushi-bars.svg'],
    ['JAPANESE',   'japanese.svg'],
    ['CHINESE',    'chinese.svg'],
    ['THAI',       'thai.svg'],
    ['KOREAN',     'korean.svg'],
    ['VIETNAMESE', 'vietnamese.svg'],
    ['INDIAN',     'pretzel.svg'],
    ['ITALIAN',    'italian.svg'],
    ['BURGERS',    'burgers.svg'],
    ['SANDWICHES', 'sandwiches.svg'],
    ['VEGETARIAN', 'vegetarian.svg'],
    ['SEAFOOD',    'seafood.svg'],
    ['AMERICAN',   'american.svg'],
    ['COFFEE',     'coffee-toast.svg'],
  ];
  const tags = (cuisine || []).map(c => c.toUpperCase());
  let file = null;
  for (const [tag, svg] of map) {
    if (tags.includes(tag)) { file = svg; break; }
  }
  if (!file) {
    // fallback: original hand-drawn coffee-cup
    return (
      <svg width="34" height="26" viewBox="0 0 34 26" style={{ flexShrink: 0, opacity: .75 }}>
        <g fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 10h16v8c0 3-2 5-5 5h-6c-3 0-5-2-5-5z" />
          <path d="M22 12h4c2 0 3 1 3 3s-1 3-3 3h-4" />
          <path d="M10 6c-1-2 1-3 0-5M14 6c-1-2 1-3 0-5M18 6c-1-2 1-3 0-5" />
        </g>
      </svg>
    );
  }
  return (
    <div style={{
      width: 28, height: 28, flexShrink: 0, opacity: .85,
      background: `url(assets/food-icons/${file}) center/contain no-repeat`,
    }} />
  );
}

// Meal tab cell in the Figma landing — circular icon, bottom gold bar on active.
function MealTab({ label, icon, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: 'transparent', border: 0, cursor: 'pointer',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      padding: '6px 4px 0', flex: 1, minWidth: 0,
    }}>
      <div style={{
        width: 76, height: 76, borderRadius: '50%',
        background: active ? 'radial-gradient(circle, rgba(201,151,66,.28) 0%, rgba(201,151,66,0) 70%)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .2s',
      }}>
        <div style={{ filter: active ? 'brightness(1.1)' : 'none' }}>{icon}</div>
      </div>
      <span style={{
        fontFamily: BODY, fontWeight: 700, fontSize: 13,
        letterSpacing: '.14em', textTransform: 'uppercase',
        color: active ? '#fff' : '#B8B8B8',
      }}>{label}</span>
      <div style={{
        width: 34, height: 3, borderRadius: 2,
        background: active ? GOLD : 'transparent',
      }} />
    </button>
  );
}

// Cuisine icon tile — 4-up grid cell
function CuisineTile({ label, icon, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: active ? 'rgba(201,151,66,.08)' : 'transparent',
      border: active ? '1px solid rgba(201,151,66,.35)' : '1px solid transparent',
      borderRadius: 14, cursor: 'pointer',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 6, padding: '12px 4px 10px', minWidth: 0,
      transition: 'all .15s',
    }}>
      <div style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <span style={{
        fontFamily: DISPLAY, fontWeight: 800, fontSize: 14,
        letterSpacing: '.08em', textTransform: 'uppercase',
        color: active ? '#fff' : GOLD,
      }}>{label}</span>
    </button>
  );
}

function PillButton({ label, onClick, small = false, variant = 'gold' }) {
  const isGold = variant === 'gold';
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: small ? '8px 18px' : '12px 28px',
      borderRadius: 999,
      background: isGold ? GOLD : '#000',
      border: isGold ? 'none' : `2px solid ${GOLD}`,
      color: isGold ? '#fff' : '#fff',
      fontFamily: DISPLAY, fontWeight: 800,
      fontSize: small ? 13 : 15, letterSpacing: '.08em',
      textTransform: 'uppercase', cursor: 'pointer',
      boxShadow: '0 4px 4px rgba(0,0,0,.25)',
      whiteSpace: 'nowrap',
    }}>{label}</button>
  );
}

// Bottom nav — gold bar with 4 circular glyphs (matches app style)
function BottomTab() {
  return (
    <div style={{
      height: 64, background: GOLD, display: 'flex', alignItems: 'center',
      justifyContent: 'space-around', padding: '0 28px',
      boxShadow: '0 -4px 4px rgba(0,0,0,.25)',
    }}>
      {[
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11L11 3l9 8v8a1 1 0 01-1 1h-5v-6h-6v6H3a1 1 0 01-1-1z" stroke="#000" strokeWidth="1.6"/></svg>,
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#000" strokeWidth="1.6"/><path d="M7 11l3 3 5-6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 6h14v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" stroke="#000" strokeWidth="1.6"/><path d="M8 6V4h6v2" stroke="#000" strokeWidth="1.6"/></svg>,
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#000" strokeWidth="1.6"/><path d="M3 19c1.5-4 5-6 8-6s6.5 2 8 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/></svg>,
      ].map((glyph, i) => (
        <div key={i} style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(0,0,0,.12)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>{glyph}</div>
      ))}
    </div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: 420, height: 900,
      borderRadius: 46, overflow: 'hidden', position: 'relative',
      background: BLACK, boxShadow: '0 30px 70px rgba(0,0,0,.6), 0 0 0 10px #1A1A1A',
      fontFamily: BODY, flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
        width: 118, height: 34, borderRadius: 22, background: '#000', zIndex: 50,
      }} />
      {children}
    </div>
  );
}

Object.assign(window, {
  GOLD, GOLD_DEEP, BLACK, SURFACE, SURFACE_HI, BODY, DISPLAY,
  StatusBar, Hamburger, MapHeader, WebHeader, EyebrowLabel, BucketRating,
  CardCornerGlyph, MealTab, CuisineTile, PillButton, BottomTab, PhoneFrame,
});
