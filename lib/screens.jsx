// Main Eats & Drinks screens — landing, cuisine-filter reveal (2 layouts),
// and filtered results list. Interaction: tap meal tab -> cuisine panel slides in.

const MEALS = [
  { key: 'BREAKFAST', icon: MealIcons.BREAKFAST },
  { key: 'LUNCH', icon: MealIcons.LUNCH },
  { key: 'DINNER', icon: MealIcons.DINNER },
  { key: 'DESSERT', icon: MealIcons.DESSERT },
];

// Grid order mirrors screenshot 2, 4-across
const CUISINES = [
  'TACOS', 'PIZZA', 'CHINESE', 'VEGETARIAN',
  'SUSHI', 'THAI', 'AMERICAN', 'SEAFOOD',
  'BURGERS', 'ITALIAN', 'COFFEE', 'SANDWICHES',
  'KOREAN', 'JAPANESE', 'VIETNAMESE', 'INDIAN',
  'MEXICAN',
];

// ── Landing view: hero + meal tabs + restaurant list (no cuisine yet) ─────
function LandingView({ meal, onMealTap }) {
  const featured = RESTAURANTS.find(r => r.sponsored);
  const rest = RESTAURANTS.filter(r => !r.sponsored).filter(r => r.meal.includes(meal));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ background: '#000' }}>
        <StatusBar />
        <WebHeader />
      </div>
      <EatsTitleBlock />
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        padding: '2px 8px 10px', background: '#000',
        borderBottom: '1px solid rgba(255,255,255,.05)',
      }}>
        {MEALS.map(m => (
          <MealTab key={m.key} label={m.key} icon={m.icon}
            active={meal === m.key} onClick={() => onMealTap(m.key)} />
        ))}
      </div>
      <div style={{
        flex: 1, overflow: 'auto', padding: '18px 0 80px', background: '#000',
      }}>
        {featured && <SponsoredCard r={featured} />}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
          padding: '18px 18px 0',
        }}>
          {rest.map(r => <GridCard key={r.id} r={r} />)}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

// ── Cuisine panel variant A: dropdown sheet that slides down under meal tabs
function CuisineDropdownView({ meal, cuisine, onMealTap, onCuisineTap, onClose }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#000' }}>
      <StatusBar />
      <WebHeader />
      <EatsTitleBlock />
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        padding: '2px 8px 10px', borderBottom: `2px solid ${GOLD}`,
      }}>
        {MEALS.map(m => (
          <MealTab key={m.key} label={m.key} icon={m.icon}
            active={meal === m.key} onClick={() => onMealTap(m.key)} />
        ))}
      </div>
      {/* Cuisine sheet */}
      <div style={{
        background: '#0A0A0A',
        boxShadow: 'inset 0 8px 12px -8px rgba(0,0,0,.9)',
        padding: '14px 12px 18px',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        animation: 'cblSlideDown .35s cubic-bezier(.2,.8,.2,1)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 6px 10px',
        }}>
          <div style={{
            fontFamily: DISPLAY, fontWeight: 900, fontSize: 20,
            color: '#fff', textTransform: 'uppercase', letterSpacing: '.02em',
          }}>Pick a cuisine
            <span style={{
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
              fontWeight: 600, color: GOLD, marginLeft: 6, textTransform: 'none',
              fontSize: 18,
            }}>for {meal.toLowerCase()}</span>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 0, color: '#888',
            fontSize: 22, cursor: 'pointer', padding: 4,
          }}>✕</button>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2,
        }}>
          {CUISINES.map(c => (
            <CuisineTile key={c} label={c === 'VIETNAMESE' ? 'VIETNAM' : c}
              icon={CuisineIcons[c]} active={cuisine === c}
              onClick={() => onCuisineTap(c)} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <BottomTab />
    </div>
  );
}

// ── Cuisine panel variant B: horizontal scrolling chip row + compact icon grid
function CuisineChipsView({ meal, cuisine, onMealTap, onCuisineTap, onClose }) {
  const scrollRef = React.useRef(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#000' }}>
      <StatusBar />
      <WebHeader />
      <EatsTitleBlock />
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        padding: '2px 8px 10px',
      }}>
        {MEALS.map(m => (
          <MealTab key={m.key} label={m.key} icon={m.icon}
            active={meal === m.key} onClick={() => onMealTap(m.key)} />
        ))}
      </div>
      <div ref={scrollRef} style={{
        display: 'flex', gap: 10, padding: '8px 18px 14px',
        overflowX: 'auto', scrollbarWidth: 'none',
        borderBottom: '1px solid rgba(255,255,255,.05)',
      }}>
        {CUISINES.map(c => {
          const active = cuisine === c;
          return (
            <button key={c} onClick={() => onCuisineTap(c)} style={{
              flexShrink: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 4, padding: '8px 12px',
              background: active ? 'rgba(201,151,66,.14)' : 'transparent',
              border: active ? `1px solid ${GOLD}` : '1px solid rgba(255,255,255,.1)',
              borderRadius: 14, cursor: 'pointer', minWidth: 76,
            }}>
              <div style={{ transform: 'scale(.65)', margin: -8 }}>{CuisineIcons[c]}</div>
              <span style={{
                fontFamily: DISPLAY, fontWeight: 800, fontSize: 11,
                letterSpacing: '.08em', textTransform: 'uppercase',
                color: active ? '#fff' : GOLD,
              }}>{c === 'VIETNAMESE' ? 'VIETNAM' : c}</span>
            </button>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      <BottomTab />
    </div>
  );
}

// ── Results view: meal + cuisine chosen, filtered list
function ResultsView({ meal, cuisine, onBack, onMealTap, onCuisineTap }) {
  const matches = RESTAURANTS.filter(r =>
    r.meal.includes(meal) && r.cuisine.includes(cuisine)
  );
  const featured = matches.find(r => r.sponsored) || RESTAURANTS.find(r => r.sponsored);
  const rest = matches.filter(r => !r.sponsored);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#000' }}>
      <StatusBar />
      <WebHeader />
      <EatsTitleBlock />
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        padding: '2px 8px 8px',
      }}>
        {MEALS.map(m => (
          <MealTab key={m.key} label={m.key} icon={m.icon}
            active={meal === m.key} onClick={() => onMealTap(m.key)} />
        ))}
      </div>
      {/* Active cuisine bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 18px 12px', borderBottom: '1px solid rgba(255,255,255,.06)',
        background: 'linear-gradient(180deg, rgba(201,151,66,.06), transparent)',
      }}>
        <div style={{ transform: 'scale(.5)', margin: -14 }}>{CuisineIcons[cuisine]}</div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 10, color: '#888', letterSpacing: '.12em',
            textTransform: 'uppercase',
          }}>Showing</div>
          <div style={{
            fontFamily: DISPLAY, fontWeight: 900, fontSize: 22, color: '#fff',
            textTransform: 'uppercase', letterSpacing: '.01em',
          }}>{cuisine} <span style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontWeight: 600, color: GOLD, textTransform: 'none', fontSize: 18,
          }}>for {meal.toLowerCase()}</span></div>
        </div>
        <button onClick={onBack} style={{
          background: 'transparent', border: `1px solid ${GOLD}`,
          color: GOLD, borderRadius: 999, padding: '5px 12px',
          fontFamily: DISPLAY, fontWeight: 800, fontSize: 11,
          letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer',
        }}>Change</button>
      </div>
      <div style={{
        flex: 1, overflow: 'auto', padding: '16px 0 20px',
      }}>
        {featured && <SponsoredCard r={featured} />}
        {rest.length > 0 ? (
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
            padding: '16px 18px 0',
          }}>
            {rest.map(r => <GridCard key={r.id} r={r} />)}
          </div>
        ) : (
          <div style={{
            padding: '30px 24px', textAlign: 'center',
            color: '#888', fontSize: 13, lineHeight: 1.6,
          }}>
            <div style={{
              fontFamily: DISPLAY, fontWeight: 900, fontSize: 20,
              color: '#fff', marginBottom: 6,
            }}>No {cuisine.toLowerCase()} spots for {meal.toLowerCase()} yet.</div>
            Our Pittsburgh team is curating picks.<br />
            Tap <span style={{ color: GOLD, fontWeight: 700 }}>Change</span> to browse other cuisines.
          </div>
        )}
      </div>
      <BottomTab />
    </div>
  );
}

Object.assign(window, {
  MEALS, CUISINES,
  LandingView, CuisineDropdownView, CuisineChipsView, ResultsView,
});
