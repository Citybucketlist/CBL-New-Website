// Restaurant card that matches the Figma Eats & Drinks screen exactly.
// Two variants: the big "CBL SPONSORED" feature card and the compact grid card.

function SponsoredCard({ r }) {
  return (
    <div style={{ padding: '0 18px' }}>
      <div style={{
        fontFamily: DISPLAY, fontWeight: 900, fontSize: 28,
        color: GOLD, textTransform: 'uppercase', letterSpacing: '.01em',
        marginBottom: 12,
      }}>CBL Sponsored</div>
      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{
          width: 120, height: 150, borderRadius: 10, flexShrink: 0,
          background: `url(${r.image}) center/cover no-repeat`,
          border: '1px solid rgba(255,255,255,.08)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 8,
        }}>
          <button style={{
            background: GOLD, color: '#fff', border: 0, borderRadius: 999,
            padding: '6px 12px', fontFamily: DISPLAY, fontWeight: 800,
            fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase',
            cursor: 'pointer', alignSelf: 'flex-start',
            boxShadow: '0 2px 4px rgba(0,0,0,.4)',
          }}>More Info</button>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <div style={{
              fontFamily: DISPLAY, fontWeight: 900, fontSize: 22,
              color: '#fff', textTransform: 'none', letterSpacing: '-.01em',
            }}>{r.name}</div>
            <CardCornerGlyph cuisine={r.cuisine} />
            <BucketRating value={5} size={14} />
          </div>
          <div style={{
            color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: '.04em',
            textTransform: 'uppercase', marginBottom: 6,
          }}>{r.address}</div>
          <p style={{
            margin: 0, color: '#D4D4D4', fontSize: 12, lineHeight: 1.55,
          }}>{r.description}</p>
        </div>
      </div>
    </div>
  );
}

function GridCard({ r }) {
  return (
    <div style={{
      background: SURFACE, borderRadius: 10, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,.06)',
      display: 'flex', flexDirection: 'column', minWidth: 0,
    }}>
      <div style={{
        height: 110,
        background: `url(${r.image}) center/cover no-repeat`,
      }} />
      <div style={{ padding: '10px 10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
          <div style={{
            fontFamily: DISPLAY, fontWeight: 800, fontSize: 15,
            color: '#fff', letterSpacing: '-.01em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{r.name}</div>
          <CardCornerGlyph cuisine={r.cuisine} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10 }}>
          <BucketRating value={Math.round(r.rating)} size={10} />
          <span style={{ color: '#fff', fontWeight: 600 }}>{r.rating.toFixed(1)}</span>
          <span style={{ color: '#888' }}>({r.reviews.toLocaleString()})</span>
        </div>
        <div style={{
          fontSize: 10, color: '#888', letterSpacing: '.02em',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{r.address}</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 2 }}>
          <span style={{
            fontSize: 9, fontWeight: 700, color: '#8CC084',
            border: '1px solid rgba(140,192,132,.35)',
            padding: '2px 6px', borderRadius: 4, letterSpacing: '.06em',
            textTransform: 'uppercase',
          }}>Open Now</span>
          <span style={{ color: '#888', fontSize: 11, fontWeight: 700 }}>{r.price}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
          <button style={{
            flex: 1, background: GOLD, color: '#fff', border: 0, borderRadius: 999,
            padding: '6px 0', fontFamily: DISPLAY, fontWeight: 800,
            fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase',
            cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,.4)',
          }}>More Info</button>
          <button style={{
            flex: 1, background: '#2A2A2A', color: '#fff', border: 0, borderRadius: 999,
            padding: '6px 0', fontFamily: BODY, fontWeight: 600,
            fontSize: 11, cursor: 'pointer',
          }}>View on Map</button>
        </div>
      </div>
    </div>
  );
}

// Header block — Buckee + EATS & DRINKS + RESTAURANTS, set on map backdrop.
// Layout uses concrete pixel sizes on <img> tags so they can be direct-manipulated
// (dragged to resize, edited inline) — easier to tweak than bg-image divs.
function EatsTitleBlock() {
  return (
    <div style={{
      position: 'relative', padding: '12px 14px',
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'url(assets/imagery/cbl-map-backdrop.jpg) center/cover no-repeat',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,.4), rgba(0,0,0,.85))',
      }} />
      <img
        src="assets/mascot/buckee-with-burger.png"
        alt="Buckee"
        width="160" height="180"
        style={{ position: 'relative', objectFit: 'contain', flexShrink: 0, display: 'block' }}
      />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <div style={{
          fontFamily: DISPLAY, fontWeight: 900, fontSize: 50,
          lineHeight: .85, color: '#fff',
          textTransform: 'uppercase', letterSpacing: '-.02em',
          whiteSpace: 'nowrap',
        }}>EATS &amp;<br />DRINKS</div>
        <div style={{
          fontFamily: DISPLAY, fontWeight: 900, fontSize: 32,
          lineHeight: 1, color: GOLD, textTransform: 'uppercase',
          letterSpacing: '-.01em',
          whiteSpace: 'nowrap',
        }}>RESTAURANTS</div>
      </div>
      <img
        src="assets/food-icons/eats-drinks-knife-fork.svg"
        alt="Fork and knife"
        width="100" height="120"
        style={{ position: 'relative', objectFit: 'contain', flexShrink: 0, display: 'block', marginLeft: 4 }}
      />
    </div>
  );
}

Object.assign(window, { SponsoredCard, GridCard, EatsTitleBlock });
