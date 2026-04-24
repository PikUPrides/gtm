import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';

// ═══════════════════════════════════════════════════════════════════════════
//  AYRO — The Flywheel
//  Driver-first rideshare · DFW launch
// ═══════════════════════════════════════════════════════════════════════════

export default function FlywheelPage() {
  // Inject Instrument Serif + Inter from Google Fonts
  useEffect(() => {
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect2);

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);

    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(font);
    };
  }, []);

  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };
  const sans = { fontFamily: "'Inter', -apple-system, sans-serif" };

  return (
    <div style={{ ...sans, background: '#FFFFFF', color: '#0B1020', lineHeight: 1.6 }} className="overflow-x-hidden">
      <Header />

      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          padding: '160px 24px 140px',
          background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 40%, #423DF9 100%)',
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-200px', right: '-200px', width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: '-300px', left: '-200px', width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(20,184,166,0.12), transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <span
            className="inline-flex items-center gap-2 backdrop-blur-md"
            style={{
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C7D2FE',
              marginBottom: '32px',
            }}
          >
            AYRO · Driver-first rideshare · DFW launch
          </span>

          <h1
            style={{
              ...serif,
              fontSize: 'clamp(42px, 7vw, 92px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            The AYRO flywheel.{' '}
            <em style={{ fontStyle: 'italic', color: '#A5B4FC' }}>One compounding loop.</em>
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 1.6vw, 22px)',
              color: '#C7D2FE',
              maxWidth: '700px',
              marginBottom: '48px',
              lineHeight: 1.5,
            }}
          >
            Drivers keep 100% of their time pay. Riders get flat, transparent, surge-free prices. Every ride compounds
            the network. This is the growth engine — and why Uber structurally can't match it.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: '$0', v: 'Take rate\never' },
              { k: '$0', v: 'Surge pricing\non any ride' },
              { k: '100%', v: 'Of time pay\nstays with driver' },
              { k: '<5 min', v: 'Target average\nETA in zone' },
            ].map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    ...serif,
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.k}
                </div>
                <div style={{ fontSize: '13px', color: '#C7D2FE', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE FLYWHEEL ═══════════ */}
      <section
        className="px-6"
        style={{
          padding: '96px 24px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <span
            className="inline-block"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#423DF9',
              marginBottom: '16px',
            }}
          >
            The loop
          </span>
          <h2
            style={{
              ...serif,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0B1020',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            Four nodes. One <em style={{ fontStyle: 'italic', color: '#423DF9' }}>compounding</em> loop.
          </h2>
          <p style={{ fontSize: '19px', color: '#64748B', maxWidth: '760px', marginBottom: '48px', lineHeight: 1.55 }}>
            Every marketing decision must move at least one node. If it doesn't, it doesn't get funded. This is how we
            keep the flywheel honest — and how it compounds faster than Uber's paid-demand engine.
          </p>

          <FlywheelVisual />
        </div>
      </section>

      {/* ═══════════ SUPPORTING LOOPS ═══════════ */}
      <section style={{ background: '#FFFFFF', padding: '96px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <span
            className="inline-block"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#423DF9',
              marginBottom: '16px',
            }}
          >
            Supporting loops
          </span>
          <h2
            style={{
              ...serif,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0B1020',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            Four secondary loops <em style={{ fontStyle: 'italic', color: '#423DF9' }}>reinforce</em> the core.
          </h2>
          <p style={{ fontSize: '19px', color: '#64748B', maxWidth: '760px', marginBottom: '48px', lineHeight: 1.55 }}>
            The primary flywheel is the growth engine. These four loops compound on top of it — each one increasing the
            slope of the curve.
          </p>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <LoopCard
              label="Primary"
              title="The referral loop"
              primary
              body="Rider refers friend → friend gets first ride free → friend signs up → refers their friend. Same motion for drivers: $50 bonus after referred driver's 10th ride. Referred drivers retain roughly 2× better than paid-channel drivers. Managed through Referral Hero."
            />
            <LoopCard
              label="Creator"
              title="The creator loop"
              body="Sergio Avedian (The Rideshare Guy, ~200K YouTube) and Torsten Kunert (Rideshare Professor, ~50K) publish honest AYRO content. Their audiences of professional drivers sign up → real earnings testimonials → more drivers see proof → more sign up. Equity advisors, 22-week activation."
            />
            <LoopCard
              label="B2B"
              title="The B2B bulk loop"
              body="Corporate partner buys bulk ride credits → guaranteed baseline ride volume → driver earnings stabilize → driver retention improves → rider satisfaction improves → more B2B deals close. Phase 3 activation: first pilot target is one 500+ employee DFW employer."
            />
            <LoopCard
              label="Transparency"
              title="The transparency loop"
              body="Passenger sees every line item on receipt. That unusual experience generates word-of-mouth (&quot;you can actually see what you're paying for&quot;). Builds differentiated brand. Compounds especially well in a post-surge-outrage consumer environment."
            />
          </div>
        </div>
      </section>

      {/* ═══════════ UNIT ECONOMICS ═══════════ */}
      <section
        style={{
          background: 'linear-gradient(180deg, #F1F5F9 0%, #FFFFFF 100%)',
          padding: '96px 24px',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <span
            className="inline-block"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#423DF9',
              marginBottom: '16px',
            }}
          >
            The math
          </span>
          <h2
            style={{
              ...serif,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#0B1020',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            The flywheel <em style={{ fontStyle: 'italic', color: '#423DF9' }}>in numbers.</em>
          </h2>
          <p style={{ fontSize: '19px', color: '#64748B', maxWidth: '760px', marginBottom: '48px', lineHeight: 1.55 }}>
            Per-ride, per-driver, per-month. These are the numbers the flywheel turns into revenue. Zero variable cost
            per ride; 100% contribution margin; scale compounds linearly with driver count.
          </p>

          <div className="grid gap-12 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
            {/* Dark visual card */}
            <div
              className="text-white"
              style={{
                background: '#0B1020',
                borderRadius: '20px',
                padding: '40px',
              }}
            >
              <h3 style={{ ...serif, fontSize: '28px', fontWeight: 400, marginBottom: '8px' }}>
                Per ride (7.5-mi, 23-min active)
              </h3>
              <div style={{ fontSize: '13px', color: '#CBD5E1', marginBottom: '24px' }}>
                The economics of a single standard AYRO ride
              </div>
              {[
                { label: 'Driver time pay', val: '$11.50' },
                { label: 'Insurance (pass-through)', val: '$3.60' },
                { label: 'Stripe fee (pass-through)', val: '$0.81' },
                { label: 'AYRO platform fee', val: '$1.00' },
                { label: 'Tolls + tips (to driver)', val: '$1.43' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center"
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '15px',
                  }}
                >
                  <span style={{ color: '#CBD5E1' }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: '#FFFFFF' }}>{row.val}</span>
                </div>
              ))}
              <div
                className="flex justify-between items-center"
                style={{ paddingTop: '24px', fontSize: '15px' }}
              >
                <span style={{ color: '#CBD5E1' }}>Passenger pays</span>
                <span style={{ ...serif, color: '#86EFAC', fontSize: '22px' }}>$18.33</span>
              </div>
            </div>

            {/* Key figures */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                {
                  k: '$12.93',
                  v: 'Driver take-home per ride, including tolls and tips. Driver keeps 100% of this. No percentage ever goes back to AYRO.',
                },
                {
                  k: '$1.95',
                  v: 'AYRO revenue per ride (platform fee + subscription allocation). Zero variable cost. 100% contribution margin.',
                },
                {
                  k: '$308 / mo',
                  v: 'AYRO revenue per active driver per month. At 158 rides/month + $150 subscription. Grows linearly with driver count.',
                },
                {
                  k: '$3.8M ARR',
                  v: 'At 1,000 active drivers. Break-even in the first thousand drivers, then every additional driver is positive contribution.',
                },
              ].map((item, i, arr) => (
                <li
                  key={i}
                  style={{
                    padding: '20px 0',
                    borderBottom: i === arr.length - 1 ? 'none' : '1px solid #E2E8F0',
                    fontSize: '16px',
                    lineHeight: 1.6,
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      ...serif,
                      fontSize: '24px',
                      color: '#423DF9',
                      marginBottom: '6px',
                      fontWeight: 400,
                    }}
                  >
                    {item.k}
                  </strong>
                  <span style={{ color: '#334155' }}>{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section
        className="text-center text-white"
        style={{ background: '#0B1020', padding: '96px 24px' }}
      >
        <h2
          style={{
            ...serif,
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Uber grows revenue by <em style={{ color: '#A5B4FC', fontStyle: 'italic' }}>raising take rate.</em>
          <br />
          AYRO grows revenue by <em style={{ color: '#A5B4FC', fontStyle: 'italic' }}>adding drivers.</em>
        </h2>
        <p style={{ fontSize: '17px', color: '#CBD5E1', maxWidth: '620px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          These are different scaling curves. Ours doesn't compound at the driver's expense — which is why drivers stay,
          and why the flywheel doesn't break as it scales.
        </p>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer
        style={{
          padding: '48px 24px',
          background: '#F8FAFC',
          textAlign: 'center',
          fontSize: '13px',
          color: '#64748B',
        }}
      >
        <p>
          <strong style={{ color: '#0B1020' }}>AYRO</strong> · Driver-first rideshare · DFW launch August 2026
        </p>
        <p style={{ marginTop: '8px' }}>
          Confidential. Not for external distribution. Version 2.0 · Corrected unit economics.
        </p>
      </footer>
    </div>
  );
}

// ─── The 4-node flywheel visual ─────────────────────────────────────────────

function FlywheelVisual() {
  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };

  const nodeBase = {
    position: 'absolute',
    width: '42%',
    maxWidth: '380px',
    padding: '24px 28px',
    background: '#FFFFFF',
    borderRadius: '20px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
  };

  const nodes = [
    {
      key: 'n1',
      pos: { top: 0, left: '50%', transform: 'translateX(-50%)' },
      titleColor: '#085041',
      subColor: '#0F6E56',
      num: 'NODE 1',
      title: 'Drivers keep 100%',
      sub: 'No take rate. Flat $150/month subscription + $0.50–$1.50 per-ride platform fee. Tolls and tips go 100% to drivers.',
    },
    {
      key: 'n2',
      pos: { top: '50%', right: 0, transform: 'translateY(-50%)' },
      titleColor: '#0C447C',
      subColor: '#185FA5',
      num: 'NODE 2',
      title: 'Better coverage',
      sub: 'Predictable earnings attract more drivers. Denser supply = lower ETAs = better reliability across every DFW zone.',
    },
    {
      key: 'n3',
      pos: { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
      titleColor: '#633806',
      subColor: '#854F0B',
      num: 'NODE 3',
      title: 'Flat, transparent rides',
      sub: 'No surge, ever. Riders save $15–30 on peak-hour rides vs Uber. Receipt itemizes every line — base fare, insurance, platform fee.',
    },
    {
      key: 'n4',
      pos: { top: '50%', left: 0, transform: 'translateY(-50%)' },
      titleColor: '#72243E',
      subColor: '#993556',
      num: 'NODE 4',
      title: 'More rides',
      sub: 'Higher rider NPS + referral velocity = more ride volume. More rides means more revenue → more drivers join → Node 1.',
    },
  ];

  return (
    <>
      {/* Desktop: absolute-positioned flywheel */}
      <div
        className="hidden md:block relative mx-auto"
        style={{
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '1 / 1',
          margin: '48px auto',
        }}
      >
        {/* Dashed arrow curves */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 800 800" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
            <path
              d="M 600 200 Q 720 400 600 600"
              fill="none"
              stroke="#423DF9"
              strokeWidth="2"
              strokeDasharray="4 6"
              opacity="0.5"
            />
            <path
              d="M 600 600 Q 400 720 200 600"
              fill="none"
              stroke="#423DF9"
              strokeWidth="2"
              strokeDasharray="4 6"
              opacity="0.5"
            />
            <path
              d="M 200 600 Q 80 400 200 200"
              fill="none"
              stroke="#423DF9"
              strokeWidth="2"
              strokeDasharray="4 6"
              opacity="0.5"
            />
            <path
              d="M 200 200 Q 400 80 600 200"
              fill="none"
              stroke="#423DF9"
              strokeWidth="2"
              strokeDasharray="4 6"
              opacity="0.5"
            />
          </svg>
        </div>

        {nodes.map((n) => (
          <div key={n.key} style={{ ...nodeBase, ...n.pos }}>
            <div
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#423DF9',
                marginBottom: '10px',
              }}
            >
              {n.num}
            </div>
            <div style={{ ...serif, fontSize: '26px', fontWeight: 400, lineHeight: 1.15, marginBottom: '10px', color: n.titleColor }}>
              {n.title}
            </div>
            <div style={{ fontSize: '14px', lineHeight: 1.5, color: n.subColor }}>{n.sub}</div>
          </div>
        ))}

        {/* Center medallion */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '160px',
            height: '160px',
            background: 'linear-gradient(135deg, #423DF9 0%, #7F77DD 100%)',
            padding: '16px',
            boxShadow: '0 12px 32px rgba(66,61,249,0.25)',
          }}
        >
          <div style={{ ...serif, fontSize: '36px', fontWeight: 400, lineHeight: 1, marginBottom: '6px' }}>100%</div>
          <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em', lineHeight: 1.4, color: '#E0E7FF' }}>
            Contribution
            <br />
            margin per ride
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4 mt-8">
        {nodes.map((n) => (
          <div
            key={n.key}
            style={{
              padding: '24px 28px',
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#423DF9',
                marginBottom: '10px',
              }}
            >
              {n.num}
            </div>
            <div style={{ ...serif, fontSize: '24px', fontWeight: 400, lineHeight: 1.15, marginBottom: '10px', color: n.titleColor }}>
              {n.title}
            </div>
            <div style={{ fontSize: '14px', lineHeight: 1.5, color: n.subColor }}>{n.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Supporting loop card ───────────────────────────────────────────────────

function LoopCard({ label, title, body, primary }) {
  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };

  return (
    <div
      style={{
        padding: '32px',
        background: primary ? 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%)' : '#F1F5F9',
        borderRadius: '20px',
        border: primary ? '1px solid #423DF9' : '1px solid #E2E8F0',
      }}
    >
      <span
        className="inline-block"
        style={{
          padding: '4px 10px',
          background: '#423DF9',
          color: '#FFFFFF',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          borderRadius: '4px',
          marginBottom: '16px',
        }}
      >
        {label}
      </span>
      <h3
        style={{
          ...serif,
          fontSize: '28px',
          fontWeight: 400,
          color: '#0B1020',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}
