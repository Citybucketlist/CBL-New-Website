/* ──────────────────────────────────────────────────────────────────
   Rider Dashboard variants — adds Directory + Blog buttons.
   Used by Rider Dashboard.html on a design canvas.

   Variants:
     '4plus2'   — original 4 untouched, Directory + Blog as a 2-up subrow
     '6up'      — single 6-up row (Travel · Eats · Directory · Stays · ToDo · Blog), mascot above
     '3x2'      — two rows of three, mascot peeks between
     'wrap'     — original 4 row + mascot, then Directory/Blog wrapped to a second row
   ────────────────────────────────────────────────────────────────── */

const RD_GOLD = '#C99742';
const RD_GOLD_DEEP = '#A07728';
const RD_DISP = '"Barlow Condensed", "Myriad Pro", system-ui';

/* ── White-outline service icons in the same visual vocabulary as the
   plane / fork-knife / bed / map-pin in the screenshot.
   24x24 viewBox, fill: none, stroke: white, stroke-width: 1.7
   ────────────────────────────────────────────────────────────────── */

function RDPlane({ size = 64 }) {
  // Airplane (top-down) — matches the live Rider Dashboard's Travel icon.
  // White outline, strokeWidth tuned to match the rest of the CBL set.
  // The bus/transportation glyph from uploads/CBL Transportation Icon.svg
  // is preserved as <RDBus/> below for cases where ground transport is
  // the right call.
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      {/* Fuselage + wings + tail, top-down silhouette */}
      <path d="M144,18
               c-7,0 -12,7 -12,18
               v44
               L36,128
               v18
               l96,-22
               v36
               L108,178
               v14
               l36,-8
               l36,8
               v-14
               l-24,-18
               v-36
               l96,22
               v-18
               L156,80
               V36
               c0,-11 -5,-18 -12,-18z" />
    </svg>
  );
}

function RDBus({ size = 64 }) {
  // CBL Transportation icon (bus) — verbatim from uploads, restroked white.
  // Kept as a separate component for any ground-transport use cases.
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <g>
        <path d="M65.43,90.76l-13.2,21.57c-2.58,4.17-3.66,8.95-3.11,13.68l5.26,45.23h89.57" />
        <path d="M65.43,90.76s-5.61-4.85-14.17-6.07c-8.56-1.23-14.41-.33-15.46,2.94-1.27,3.97-6.98,12.74,7.38,13.23" />
        <path d="M145.89,57.11s-49.54-.65-59.55,4.11c-8.76,4.17-18.6,24.53-20.91,29.54" />
        <path d="M110.99,134.64s-12.2-.65-28.8-1.3c-16.6-.65-13.42-11.26-13.42-11.26" />
        <path d="M110.99,152.62h69.8" />
        <path d="M64.93,91.59s3.11,4.94,14.34,4.94h66.01" />
        <path d="M77.35,171.24h5.29c7.19,0,13.02,5.83,13.02,13.02v4.3h-31.33v-4.3c0-7.19,5.83-13.02,13.02-13.02Z" transform="translate(160 359.81) rotate(180)" />
      </g>
      <g>
        <path d="M222.56,90.76l13.2,21.57c2.58,4.17,3.66,8.95,3.11,13.68l-5.26,45.23h-89.57" />
        <path d="M222.56,90.76s5.61-4.85,14.17-6.07c8.56-1.23,14.41-.33,15.46,2.94,1.27,3.97,6.98,12.74-7.38,13.23" />
        <path d="M142.11,57.11s49.54-.65,59.55,4.11c8.76,4.17,18.6,24.53,20.91,29.54" />
        <path d="M177,134.64s12.2-.65,28.8-1.3c16.6-.65,13.42-11.26,13.42-11.26" />
        <path d="M177,152.62h-69.8" />
        <path d="M223.07,91.59s-3.11,4.94-14.34,4.94h-66.01" />
        <path d="M192.33,171.24h31.33v4.3c0,7.19-5.83,13.02-13.02,13.02h-5.29c-7.19,0-13.02-5.83-13.02-13.02v-4.3h0Z" />
      </g>
    </svg>
  );
}
function RDForkKnife({ size = 64 }) {
  // CBL Eats icon — verbatim from uploads, restroked white
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <path d="M125.23,129.43l-13-13-5.03,5.02c-3.43,3.43-9.09,3.35-12.63-.2l-40.55-40.55c-14.56-14.56-14.92-37.8-.81-51.91h0s73.32,73.32,73.32,73.32l15.17,15.17" />
      <path d="M156.6,132.18l50.43,50.43c4.08,4.08,4.18,10.58.23,14.53-3.95,3.95-10.46,3.85-14.53-.23l-51.01-51.01" />
      <path d="M245.13,63.97l-50.59,50.59c-5.93,5.93-15.54,5.93-21.46,0l-88.44,88.44c-3.81,3.81-9.99,3.81-13.8,0h0c-3.81-3.81-3.81-9.99,0-13.8l88.44-88.44c-5.93-5.93-5.93-15.54,0-21.46l50.59-50.59" />
      <line x1="221.36" y1="40.21" x2="179.37" y2="82.2" />
      <line x1="233.2" y1="52.04" x2="191.21" y2="94.03" />
    </svg>
  );
}
function RDBed({ size = 64 }) {
  // CBL Stays icon — verbatim from uploads, restroked white
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <rect x="47.43" y="115.99" width="193.15" height="74.01" />
      <line x1="47.43" y1="169.51" x2="240.57" y2="169.51" />
      <path d="M58.39,112.96v-45.6c0-17.4,27.37-25.75,85.61-25.75" />
      <path d="M229.61,112.96s0-28.2,0-45.6c0-17.4-27.37-25.75-85.61-25.75" />
      <line x1="58.39" y1="190" x2="58.39" y2="204.05" />
      <line x1="229.61" y1="190" x2="229.61" y2="204.05" />
      <path d="M83.44,115.99v-29.64c0-3.94,3.23-7.17,7.17-7.17h44.11c3.94,0,7.17,3.23,7.17,7.17v29.64" />
      <path d="M142.27,115.99v-29.38c0-4.08,3.34-7.42,7.42-7.42h47.78c4.08,0,7.42,3.34,7.42,7.42v29.38" />
    </svg>
  );
}
function RDPinMap({ size = 64 }) {
  // CBL To Do icon — verbatim from uploads/CBL To Do Icon-5bdb8d83.svg
  // (route + dropped pins motif — replaced the previous bed-shaped icon)
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="175.91" cy="51.34" r="16.21" />
      <circle cx="110.58" cy="82.5" r="16.21" />
      <path d="M175.91,17.05s-36.14,2.29-36.14,37.66,36.14,59.27,36.14,59.27c0,0,35.1-22.04,35.1-61.58,0-35.48-35.1-35.35-35.1-35.35Z" />
      <path d="M55.97,135.76c-1.34-6.16-1.51-9.88-1.51-16.44,0-44.47,32.42-81.37,74.91-88.35" />
      <path d="M221.73,74.85c7.51,13.1,11.81,28.29,11.81,44.48,0,8.08-1.07,15.91-3.08,23.36" />
      <path d="M153.24,153.53s23.41-25.05,29.69-24.84c8.98.3,41.25,30.53,41.25,30.53-14.05,31.07-43.87,49.64-80.18,49.64-38.46,0-71.25-24.25-83.93-58.29,0,0,33.97-36.62,42.62-36.59,5.39.02,7.83.64,24.11,16.8,16.28,16.16,63.57,61.36,63.57,61.36" />
    </svg>
  );
}

/* ── Directory icon — VERBATIM from uploads/CBL Directory Icon on Black.svg
   Re-stroked white to match the existing Travel/Eats/Stays/ToDo icons.
   ────────────────────────────────────────────────────────────────── */
function RDDirectory({ size = 44 }) {
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <rect x="48.99" y="34.24" width="34.19" height="22.84" />
      <rect x="48.99" y="79.95" width="34.19" height="22.84" />
      <rect x="48.99" y="124.95" width="34.19" height="22.84" />
      <rect x="48.99" y="170.31" width="34.19" height="22.84" />
      <circle cx="171.9" cy="99.72" r="16.11" />
      <path d="M179.81,114.07s21.98,10.88,21.98,28.14c-13.26,0-20.88,0-20.88,0h-12.56s-14.3,0-27.56,0c0-17.26,21.98-28.14,21.98-28.14" />
      <path d="M66.08,195.01v21.86h162.23c10.7,0,10.7-10.7,10.7-10.7V22.43c0-10.7-12.09-11.16-12.09-11.16H66.08v20.47" />
      <line x1="103.18" y1="28.48" x2="103.18" y2="200.13" />
      <line x1="66.08" y1="57.09" x2="66.08" y2="79.95" />
      <line x1="66.08" y1="104.4" x2="66.08" y2="121.51" />
      <line x1="66.08" y1="152.5" x2="66.08" y2="169.61" />
    </svg>
  );
}

/* ── Blog icon — VERBATIM from uploads/CBL Blog Icon.svg
   Re-stroked white to match.
   ────────────────────────────────────────────────────────────────── */
function RDBlog({ size = 44 }) {
  return (
    <svg viewBox="0 0 288 227.01" width={size} height={size} fill="none" stroke="#fff"
      strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
      <path d="M146.81,169.65c15.66,8.83,41.52,11.54,58.01,3.58,21.73,8.83,47.18,20.37,47.18,20.37l-17.3-34.63s22.84-8.16,18.09-39.58c0,0-4.07-23.61-27.16-29.46" />
      <path d="M45.35,183.91l17.3-34.63s-29.88-24.77-25.13-56.19c4.75-31.42,42.78-59.26,91.68-59.26s96.43,27.16,96.43,63.84-38.71,84.21-133.1,65.87c-21.73,8.83-47.18,20.37-47.18,20.37Z" />
      <circle cx="95.83" cy="99.4" r="9.47" fill="#fff" stroke="none" />
      <circle cx="137.35" cy="99.4" r="9.47" fill="#fff" stroke="none" />
      <circle cx="178.87" cy="99.4" r="9.47" fill="#fff" stroke="none" />
    </svg>
  );
}

/* ── Pieces ───────────────────────────────────────────────────────── */

function ServiceIcon({ icon, label, size = 'lg' }) {
  // matches the "icon over label" spacing of Travel/Eats/Stays/ToDo
  const wrap = size === 'sm' ? 44 : 70;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      flex: '0 0 auto', minWidth: 70,
    }}>
      <div style={{
        width: wrap, height: wrap, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div style={{
        fontFamily: 'Inter, system-ui', fontSize: size === 'sm' ? 11 : 13,
        fontWeight: 500, color: '#fff', letterSpacing: '.01em',
      }}>{label}</div>
    </div>
  );
}

// Buckee mascot frame — placeholder for the actual mascot photo
function BuckeeMascot({ size = 78 }) {
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      background: `url(assets/mascot/buckee-concierge.png) center/contain no-repeat`,
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,.5))',
    }} />
  );
}

// Plain pill (used by older variants if needed)
function PlanWithBuckee() {
  return (
    <div style={{
      margin: '14px 18px 0',
      padding: '12px 14px',
      border: `1px dashed ${RD_GOLD}`,
      borderRadius: 14,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      color: '#fff', fontFamily: 'Inter, system-ui',
      fontSize: 14, fontWeight: 500,
    }}>
      <span style={{ color: RD_GOLD }}>✦</span>
      Plan your next trip with <span style={{ color: RD_GOLD, fontWeight: 600 }}>Buckee</span>
      <span style={{ color: RD_GOLD }}>✦</span>
    </div>
  );
}

// Buckee inline with the "Plan your next trip" pill — mascot pokes
// out of / sits beside the pill so the message reads as if Buckee is
// saying it. Text MUST stay on one line.
function PlanWithBuckee_Inline() {
  return (
    <div style={{
      margin: '10px 18px 0',
      display: 'flex', alignItems: 'center', gap: 4,
      position: 'relative',
    }}>
      <div style={{
        width: 60, height: 60, flexShrink: 0,
        background: `url(assets/mascot/buckee-concierge.png) center/contain no-repeat`,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,.5))',
        marginRight: -8, zIndex: 2,
      }} />
      <div style={{
        flex: 1, minWidth: 0,
        padding: '10px 12px 10px 16px',
        border: `1px dashed ${RD_GOLD}`,
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        color: '#fff', fontFamily: 'Inter, system-ui',
        fontSize: 12.5, fontWeight: 500,
        whiteSpace: 'nowrap',
      }}>
        <span style={{ color: RD_GOLD, fontSize: 11 }}>✦</span>
        Plan your next trip with <span style={{ color: RD_GOLD, fontWeight: 600 }}>Buckee</span>
        <span style={{ color: RD_GOLD, fontSize: 11 }}>✦</span>
      </div>
    </div>
  );
}

function HeaderBlock() {
  return (
    <div style={{
      position: 'relative',
      background: `url(assets/imagery/cbl-map-backdrop.jpg) center/cover no-repeat`,
      padding: '14px 18px 6px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.85) 100%)',
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
            <span style={{ width: 22, height: 1.6, background: '#fff' }} />
            <span style={{ width: 22, height: 1.6, background: '#fff' }} />
            <span style={{ width: 22, height: 1.6, background: '#fff' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', fontFamily: RD_DISP, lineHeight: .96 }}>
          <div style={{
            fontWeight: 800, fontSize: 22, letterSpacing: '.01em',
            textTransform: 'uppercase',
          }}>
            <span style={{ color: RD_GOLD }}>CITY</span>
            <span style={{ color: '#fff' }}>BUCKET</span>
            <span style={{ color: RD_GOLD }}>LIST.COM</span>
          </div>
          <div style={{
            marginTop: 4, fontWeight: 900, fontSize: 36,
            letterSpacing: '-.01em', color: '#fff', textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            Rider Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Service-row variants ─────────────────────────────────────────── */

// Variant A: original 4-up row with mascot inline (the current live design)
// then Directory + Blog as a wider 2-up subrow below
function ServiceRow_4Plus2() {
  return (
    <div style={{ padding: '14px 0 0' }}>
      {/* original 4-up row, mascot sandwiched between Eats and Stays */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly',
        padding: '0 14px',
      }}>
        <ServiceIcon icon={<RDPlane />} label="Travel" />
        <ServiceIcon icon={<RDForkKnife />} label="Eats" />
        <BuckeeMascot size={78} />
        <ServiceIcon icon={<RDBed />} label="Stays" />
        <ServiceIcon icon={<RDPinMap />} label="To Do" />
      </div>
      {/* hairline separator */}
      <div style={{
        margin: '14px 24px 12px',
        height: 1, background: 'rgba(201,151,66,.25)',
      }} />
      {/* new 2-up row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
        padding: '0 14px',
      }}>
        <ServiceIcon icon={<RDDirectory />} label="Directory" />
        <ServiceIcon icon={<RDBlog />} label="Blog" />
      </div>
    </div>
  );
}

// Variant B: mascot moves above a 6-up row.
// Travel · Eats · Directory · Stays · To Do · Blog all on one line.
function ServiceRow_6Up() {
  return (
    <div style={{ padding: '6px 0 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <BuckeeMascot size={70} />
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 4, padding: '0 8px',
      }}>
        <ServiceIcon icon={<RDPlane />} label="Travel" size="sm" />
        <ServiceIcon icon={<RDForkKnife />} label="Eats" size="sm" />
        <ServiceIcon icon={<RDDirectory />} label="Directory" size="sm" />
        <ServiceIcon icon={<RDBed />} label="Stays" size="sm" />
        <ServiceIcon icon={<RDPinMap />} label="To Do" size="sm" />
        <ServiceIcon icon={<RDBlog />} label="Blog" size="sm" />
      </div>
    </div>
  );
}

// Variant C: 3 + 3 grid with mascot floating to the side
function ServiceRow_3x2() {
  return (
    <div style={{
      padding: '14px 18px 0',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', gap: 8,
    }}>
      {/* left col — 3 stacked icons */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
      }}>
        <ServiceIcon icon={<RDPlane />} label="Travel" />
        <ServiceIcon icon={<RDForkKnife />} label="Eats" />
        <ServiceIcon icon={<RDDirectory />} label="Directory" />
      </div>
      {/* mascot center? — actually full row underneath */}
      <div />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
      }}>
        <ServiceIcon icon={<RDBed />} label="Stays" />
        <ServiceIcon icon={<RDPinMap />} label="To Do" />
        <ServiceIcon icon={<RDBlog />} label="Blog" />
      </div>
      {/* mascot below as a band */}
      <div style={{
        gridColumn: '1 / 4', display: 'flex', justifyContent: 'center',
        marginTop: 6,
      }}>
        <BuckeeMascot size={74} />
      </div>
    </div>
  );
}

// Variant E: Same as featured, but Buckee mascot sits BETWEEN the
// two featured NEW tiles (Directory | Buckee | Blog), which frees the
// pill below to be typography-led at a larger size.
function ServiceRow_FeaturedBuckeeMid() {
  return (
    <div style={{ padding: '0' }}>
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly',
        padding: '0 14px',
      }}>
        <ServiceIcon icon={<RDPlane />} label="Travel" />
        <ServiceIcon icon={<RDForkKnife />} label="Eats" />
        <ServiceIcon icon={<RDBed />} label="Stays" />
        <ServiceIcon icon={<RDPinMap />} label="To Do" />
      </div>

      <div style={{
        margin: '14px 14px 0',
        display: 'grid',
        gridTemplateColumns: '1fr 96px 1fr',
        alignItems: 'center',
        gap: 0,
      }}>
        <FeaturedTile icon={<RDDirectory size={36} />} label="Directory" sub="Local Listings" badge="NEW" />
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: -6,
        }}>
          <BuckeeMascot size={100} />
        </div>
        <FeaturedTile icon={<RDBlog size={36} />} label="Blog" sub="Stories & News" badge="NEW" />
      </div>
    </div>
  );
}

// Big, typography-led version of the Plan-with-Buckee pill. Used when
// the mascot already lives between the Directory and Blog tiles, so
// the pill doesn't need to repeat it. Single line, BUCKEE in gold.
function PlanWithBuckee_Big() {
  return (
    <div style={{
      margin: '6px 18px 0',
      padding: '10px 12px',
      border: `1px dashed ${RD_GOLD}`,
      borderRadius: 14,
      textAlign: 'center',
      fontFamily: RD_DISP,
      color: '#fff',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }}>
      <div style={{
        fontWeight: 800, fontSize: 19, letterSpacing: '.01em',
        textTransform: 'uppercase',
      }}>
        <span style={{ color: RD_GOLD }}>✦</span>{' '}
        Plan your next trip with{' '}
        <span style={{ color: RD_GOLD }}>Buckee</span>{' '}
        <span style={{ color: RD_GOLD }}>✦</span>
      </div>
    </div>
  );
}

// Variant D (chosen): Original 4 service icons in a tighter row
// (no mascot inline — mascot moves down to the Plan-with-Buckee pill),
// then Directory + Blog as featured "NEW" tiles below.
function ServiceRow_FeaturedNew() {
  return (
    <div style={{ padding: '0' }}>
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly',
        padding: '0 14px',
      }}>
        <ServiceIcon icon={<RDPlane />} label="Travel" />
        <ServiceIcon icon={<RDForkKnife />} label="Eats" />
        <ServiceIcon icon={<RDBed />} label="Stays" />
        <ServiceIcon icon={<RDPinMap />} label="To Do" />
      </div>

      <div style={{
        margin: '12px 18px 0',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
      }}>
        <FeaturedTile icon={<RDDirectory size={40} />} label="Directory" sub="Local Listings" badge="NEW" />
        <FeaturedTile icon={<RDBlog size={40} />} label="Blog" sub="Stories & News" badge="NEW" />
      </div>
    </div>
  );
}

function FeaturedTile({ icon, label, sub, badge }) {
  return (
    <div style={{
      position: 'relative',
      padding: '12px 12px 12px 14px',
      background: 'linear-gradient(135deg, rgba(201,151,66,.16), rgba(201,151,66,.04))',
      border: `1px solid ${RD_GOLD}`,
      borderRadius: 12,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
          background: RD_GOLD, color: '#000',
          fontFamily: RD_DISP, fontWeight: 900, fontSize: 9,
          letterSpacing: '.16em', textTransform: 'uppercase',
          padding: '2px 8px', borderRadius: 999,
        }}>{badge}</div>
      )}
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'Inter, system-ui', fontSize: 14, fontWeight: 600, color: '#fff',
          letterSpacing: '.01em',
        }}>{label}</div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          color: RD_GOLD, letterSpacing: '.12em', textTransform: 'uppercase',
          marginTop: 2,
        }}>{sub}</div>
      </div>
    </div>
  );
}

/* ── Below-the-services parts (verbatim from the live screen) ────── */

function ActionTrio({ solidGold = false }) {
  const circleStyle = solidGold ? {
    width: 72, height: 72, borderRadius: '50%',
    background: RD_GOLD, border: `2px solid ${RD_GOLD}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  } : {
    width: 72, height: 72, borderRadius: '50%',
    border: `2px solid ${RD_GOLD}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
  const stroke = solidGold ? '#000' : '#fff';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 18, padding: '14px 0 0',
    }}>
      {/* Schedule Ride */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <div style={circleStyle}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="5" width="16" height="15" rx="2" />
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="9" y1="3" x2="9" y2="6" />
            <line x1="15" y1="3" x2="15" y2="6" />
          </svg>
        </div>
        <div style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: 10, color: RD_GOLD,
          letterSpacing: '.04em', textAlign: 'center', lineHeight: 1.15,
        }}>SCHEDULE<br />RIDE</div>
      </div>
      {/* Center portrait */}
      <div style={{
        width: 100, height: 100, borderRadius: '50%',
        border: `2.5px solid ${RD_GOLD}`, padding: 3,
        background: '#000',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%',
          background: `url(assets/people/rider-keith.jpg) center/cover no-repeat, repeating-linear-gradient(135deg, #2a2a2a 0 8px, #1d1d1d 8px 16px)`,
        }} />
      </div>
      {/* Message Driver */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
        <div style={circleStyle}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-7l-4 3v-3H6c-1.1 0-2-.9-2-2V6z" />
          </svg>
        </div>
        <div style={{
          fontFamily: 'Inter', fontWeight: 600, fontSize: 10, color: RD_GOLD,
          letterSpacing: '.04em', textAlign: 'center', lineHeight: 1.15,
        }}>MESSAGE<br />DRIVER</div>
      </div>
    </div>
  );
}

function WelcomeAndDriver() {
  return (
    <div style={{ padding: '14px 18px 0' }}>
      <div style={{
        textAlign: 'center', fontFamily: 'Inter', fontWeight: 700,
        fontSize: 15, letterSpacing: '.04em', color: '#fff', padding: '0 0 12px',
      }}>
        WELCOME <span style={{ color: RD_GOLD }}>KEITH SCHMIEDLIN</span>
      </div>
      <div style={{
        border: `1px solid ${RD_GOLD}`, borderRadius: 10,
        padding: '10px 12px',
        display: 'grid', gridTemplateColumns: '24px 1fr 24px',
        alignItems: 'center', gap: 12,
        position: 'relative',
      }}>
        {/* left spacer to balance the caret on the right */}
        <div />
        {/* centered avatar + text */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
            background: `url(assets/people/driver-brian.jpg) center/cover no-repeat, repeating-linear-gradient(135deg, #2a2a2a 0 6px, #1d1d1d 6px 12px)`,
          }} />
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0,
          }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 9, color: '#9A9A9A',
              letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: 500,
            }}>PREFERRED DRIVER</div>
            <div style={{
              fontFamily: 'Inter', fontWeight: 700, fontSize: 14, color: '#fff',
            }}>Brian Uhler</div>
            <div style={{
              fontFamily: 'Inter', fontSize: 11, color: '#9A9A9A',
            }}>(724) 216-2672</div>
          </div>
        </div>
        {/* caret column on the right */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ justifySelf: 'end' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

/* Realistic QR-code mock — 25×25 grid with the three corner finder
   squares + a deterministic data pattern. Not a real scannable code,
   but reads as a QR at a glance instead of a checkerboard. */
function QRMock({ size = 220 }) {
  const N = 25;
  // deterministic pseudo-random fill so it looks "QR-y"
  const data = [];
  let seed = 17;
  for (let r = 0; r < N; r++) {
    const row = [];
    for (let c = 0; c < N; c++) {
      seed = (seed * 9301 + 49297) % 233280;
      row.push((seed / 233280) > 0.52 ? 1 : 0);
    }
    data.push(row);
  }
  // clear corner-finder zones and place the 7×7 finders
  const clearBox = (r0, c0) => {
    for (let r = r0; r < r0 + 8; r++)
      for (let c = c0; c < c0 + 8; c++)
        if (r >= 0 && r < N && c >= 0 && c < N) data[r][c] = 0;
  };
  clearBox(0, 0); clearBox(0, N - 8); clearBox(N - 8, 0);

  const Finder = ({ x, y }) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="7" height="7" fill="#000" />
      <rect x="1" y="1" width="5" height="5" fill="#fff" />
      <rect x="2" y="2" width="3" height="3" fill="#000" />
    </g>
  );

  return (
    <svg width={size} height={size} viewBox={`0 0 ${N} ${N}`} shapeRendering="crispEdges">
      <rect width={N} height={N} fill="#fff" />
      {data.flatMap((row, r) =>
        row.map((v, c) => v ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#000" /> : null)
      )}
      <Finder x={0} y={0} />
      <Finder x={N - 7} y={0} />
      <Finder x={0} y={N - 7} />
      {/* small CBL gold dot in the center as a brand mark */}
      <rect x={N/2 - 1.5} y={N/2 - 1.5} width="3" height="3" fill="#fff" />
      <rect x={N/2 - 1} y={N/2 - 1} width="2" height="2" fill={RD_GOLD} />
    </svg>
  );
}

function BottomTabBar() {
  const tab = (icon, label, active) => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      flex: 1, color: active ? RD_GOLD : '#888',
    }}>
      {icon}
      <div style={{
        fontFamily: 'Inter', fontSize: 10, fontWeight: active ? 600 : 500,
        letterSpacing: '.02em',
      }}>{label}</div>
    </div>
  );
  const stroke = (active) => active ? RD_GOLD : '#888';
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: '#000', borderTop: '1px solid rgba(255,255,255,.06)',
      padding: '10px 8px 18px', display: 'flex',
    }}>
      {tab(
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke(true)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 13l2-5h12l2 5v5h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3v-5z" />
          <circle cx="7" cy="18" r="1.2" /><circle cx="17" cy="18" r="1.2" />
        </svg>, 'Rides', true)}
      {tab(
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke(false)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8l8-4 8 4-8 4-8-4z" /><path d="M4 8v8l8 4 8-4V8" />
        </svg>, 'Delivery')}
      {tab(
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'transparent', border: `1.5px solid ${RD_GOLD}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: RD_GOLD, fontSize: 16,
        }}>✦</div>, 'Member')}
      {tab(
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke(false)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="2.2" /><circle cx="18" cy="6" r="2.2" /><circle cx="18" cy="18" r="2.2" />
          <line x1="8" y1="11" x2="16" y2="7" /><line x1="8" y1="13" x2="16" y2="17" />
        </svg>, 'Referrals')}
      {tab(
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke(false)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>, 'Settings')}
    </div>
  );
}

function DashboardScreen({ variant, label }) {
  const Row = (
    variant === '6up'      ? ServiceRow_6Up      :
    variant === '3x2'      ? ServiceRow_3x2      :
    variant === 'featured' ? ServiceRow_FeaturedNew :
    variant === 'featured-buckee-mid' ? ServiceRow_FeaturedBuckeeMid :
    variant === 'featured-buckee-mid-gold' ? ServiceRow_FeaturedBuckeeMid :
                              ServiceRow_4Plus2
  );
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#000',
      overflow: 'hidden auto',
    }}>
      {/* iOS status bar slim */}
      <div style={{
        height: 44, padding: '12px 24px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'relative', zIndex: 5,
      }}>
        <div style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 600, fontSize: 14 }}>8:14</div>
        <div style={{ display: 'flex', gap: 5, color: '#fff' }}>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="6" width="2" height="5" rx="1"/><rect x="4" y="4" width="2" height="7" rx="1"/><rect x="8" y="2" width="2" height="9" rx="1"/><rect x="12" y="0" width="2" height="11" rx="1"/></svg>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.5a8 8 0 0 1 5.66 2.34l-1.06 1.06A6.5 6.5 0 0 0 8 4 6.5 6.5 0 0 0 3.4 5.9L2.34 4.84A8 8 0 0 1 8 2.5z M8 6a4 4 0 0 1 2.83 1.17l-1.06 1.06A2.5 2.5 0 0 0 8 7.5a2.5 2.5 0 0 0-1.77.73L5.17 7.17A4 4 0 0 1 8 6zM8 9a1.5 1.5 0 0 1 1.06.44L8 10.5 6.94 9.44A1.5 1.5 0 0 1 8 9z"/></svg>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1"><rect x=".5" y=".5" width="18" height="10" rx="2"/><rect x="2" y="2" width="13" height="7" rx="1" fill="currentColor"/><rect x="20" y="3.5" width="1.5" height="4" rx=".5" fill="currentColor"/></svg>
        </div>
      </div>

      <HeaderBlock />
      <Row />
      {
        variant === 'featured' ? <PlanWithBuckee_Inline /> :
        (variant === 'featured-buckee-mid' || variant === 'featured-buckee-mid-gold') ? <PlanWithBuckee_Big /> :
        <PlanWithBuckee />
      }
      <ActionTrio solidGold={variant === 'featured-buckee-mid-gold'} />
      <WelcomeAndDriver />
      <div style={{ padding: '16px 18px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{
          fontFamily: 'Inter', fontSize: 10, color: '#9A9A9A',
          letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500,
        }}>Refer a Friend — <span style={{ color: RD_GOLD }}>Scan to Share</span></div>
        {/* QR "peek": rendered larger but clipped so only the top ~60% shows,
           fading into the tab area. Tapping would open a full-screen scan sheet. */}
        <div style={{
          width: 200, height: 88, overflow: 'hidden', position: 'relative',
          borderRadius: '8px 8px 4px 4px',
          maskImage: 'linear-gradient(180deg, #000 0%, #000 70%, rgba(0,0,0,.35) 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 70%, rgba(0,0,0,.35) 100%)',
        }}>
          <div style={{
            padding: 6, background: '#fff', borderRadius: 8,
            width: 'fit-content',
          }}>
            <QRMock size={188} />
          </div>
        </div>
      </div>
      {/* spacer for tab bar */}
      <div style={{ height: 8 }} />

      <BottomTabBar />

      {label && (
        <div style={{
          position: 'absolute', top: 56, right: 14,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          letterSpacing: '.14em', textTransform: 'uppercase',
          color: RD_GOLD, padding: '4px 8px',
          border: `1px solid ${RD_GOLD}`, borderRadius: 999,
          background: 'rgba(0,0,0,.4)', backdropFilter: 'blur(4px)',
        }}>{label}</div>
      )}
    </div>
  );
}

/* ── Blog target screen ──────────────────────────────────────────── */

function TargetScreenChrome({ title, children }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#000',
      overflow: 'hidden auto',
    }}>
      <div style={{
        height: 44, padding: '12px 24px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 600, fontSize: 14 }}>8:14</div>
        <div style={{ display: 'flex', gap: 5, color: '#fff' }}>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="6" width="2" height="5" rx="1"/><rect x="4" y="4" width="2" height="7" rx="1"/><rect x="8" y="2" width="2" height="9" rx="1"/><rect x="12" y="0" width="2" height="11" rx="1"/></svg>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1"><rect x=".5" y=".5" width="18" height="10" rx="2"/><rect x="2" y="2" width="13" height="7" rx="1" fill="currentColor"/><rect x="20" y="3.5" width="1.5" height="4" rx=".5" fill="currentColor"/></svg>
        </div>
      </div>
      <div style={{
        position: 'relative',
        background: `url(assets/imagery/cbl-map-backdrop.jpg) center/cover no-repeat`,
        padding: '10px 18px 16px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.92) 100%)',
        }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <div style={{
            fontFamily: RD_DISP, fontWeight: 900, fontSize: 22,
            letterSpacing: '.01em', textTransform: 'uppercase',
          }}>
            <span style={{ color: RD_GOLD }}>CITY</span>
            <span style={{ color: '#fff' }}>BUCKET</span>
            <span style={{ color: RD_GOLD }}>LIST.COM</span>
          </div>
        </div>
        <div style={{
          position: 'relative', marginTop: 8, textAlign: 'center',
          fontFamily: RD_DISP, fontWeight: 900, fontSize: 32,
          color: '#fff', textTransform: 'uppercase', letterSpacing: '-.01em',
          lineHeight: 1,
        }}>
          {title}
        </div>
      </div>
      {children}
      <div style={{ height: 90 }} />
      <BottomTabBar />
    </div>
  );
}

function BlogTargetScreen() {
  const posts = [
    { tag: 'Travel', title: 'Weekend in Savannah: A CBL Itinerary', meta: 'Apr 22 · 8 min read' },
    { tag: 'Eats & Drinks', title: 'Sushi Bars Locals Won\u2019t Stop Talking About', meta: 'Apr 18 · 4 min read' },
    { tag: 'Drivers', title: 'Meet Brian — 1,200 Rides and Counting', meta: 'Apr 12 · 3 min read' },
  ];
  return (
    <TargetScreenChrome title={<><span style={{color:'#fff'}}>CBL </span><span style={{color:RD_GOLD}}>Blog</span></>}>
      <div style={{ padding: '14px 18px 0' }}>
        <div style={{
          display: 'flex', gap: 6, overflowX: 'auto', marginBottom: 14,
        }}>
          {['All','Travel','Eats & Drinks','Stays','Drivers','City Guides'].map((t, i) => (
            <div key={t} style={{
              flex: '0 0 auto', padding: '6px 12px', borderRadius: 999,
              border: i === 0 ? `1px solid ${RD_GOLD}` : '1px solid rgba(255,255,255,.18)',
              background: i === 0 ? RD_GOLD : 'transparent',
              color: i === 0 ? '#000' : '#D8D8D8',
              fontFamily: RD_DISP, fontWeight: 800, fontSize: 11,
              letterSpacing: '.06em', textTransform: 'uppercase',
            }}>{t}</div>
          ))}
        </div>

        <div style={{
          borderRadius: 14, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,.06)',
        }}>
          <div style={{
            height: 160,
            background: 'repeating-linear-gradient(135deg, #1f1a12 0 12px, #2a2218 12px 24px)',
            position: 'relative',
            display: 'flex', alignItems: 'flex-end', padding: 14,
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono', fontSize: 9, color: RD_GOLD,
              letterSpacing: '.16em', textTransform: 'uppercase',
              background: 'rgba(0,0,0,.6)', padding: '4px 8px', borderRadius: 4,
            }}>Featured · Atlanta</div>
          </div>
          <div style={{ padding: '12px 14px 16px', background: '#141414' }}>
            <div style={{
              fontFamily: RD_DISP, fontWeight: 900, fontSize: 22,
              color: '#fff', textTransform: 'uppercase', letterSpacing: '-.01em',
              lineHeight: 1.05,
            }}>12 Patios Worth the Drive This Spring</div>
            <div style={{ color: '#9A9A9A', fontSize: 11, marginTop: 6 }}>
              Apr 28 · 6 min read
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {posts.map(p => (
            <div key={p.title} style={{
              display: 'flex', gap: 12, paddingBottom: 12,
              borderBottom: '1px solid rgba(255,255,255,.06)',
            }}>
              <div style={{
                width: 80, height: 80, flexShrink: 0, borderRadius: 8,
                background: 'repeating-linear-gradient(135deg, #1d1d1d 0 8px, #141414 8px 16px)',
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: 'JetBrains Mono', fontSize: 9, color: RD_GOLD,
                  letterSpacing: '.14em', textTransform: 'uppercase',
                }}>{p.tag}</div>
                <div style={{
                  fontFamily: RD_DISP, fontWeight: 900, fontSize: 16,
                  color: '#fff', textTransform: 'uppercase', letterSpacing: '-.01em',
                  lineHeight: 1.1, marginTop: 4,
                }}>{p.title}</div>
                <div style={{ color: '#888', fontSize: 11, marginTop: 4 }}>{p.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TargetScreenChrome>
  );
}

Object.assign(window, {
  RD_GOLD, RD_DISP,
  RDPlane, RDBus, RDForkKnife, RDBed, RDPinMap, RDDirectory, RDBlog,
  ServiceIcon, BuckeeMascot, HeaderBlock, QRMock,
  ServiceRow_4Plus2, ServiceRow_6Up, ServiceRow_3x2, ServiceRow_FeaturedNew, ServiceRow_FeaturedBuckeeMid,
  PlanWithBuckee_Big,
  DashboardScreen, BlogTargetScreen,
});
