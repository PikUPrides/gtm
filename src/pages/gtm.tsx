import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';

// ═══════════════════════════════════════════════════════════════════════════
//  AYRO — Go-to-Market Strategy
//  Driver-first rideshare · DFW launch · August 2026
// ═══════════════════════════════════════════════════════════════════════════

export default function GTMStrategyPage() {
  useEffect(() => {
    const pre1 = document.createElement('link');
    pre1.rel = 'preconnect';
    pre1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(pre1);
    const pre2 = document.createElement('link');
    pre2.rel = 'preconnect';
    pre2.href = 'https://fonts.gstatic.com';
    pre2.crossOrigin = 'anonymous';
    document.head.appendChild(pre2);
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);
    return () => {
      document.head.removeChild(pre1);
      document.head.removeChild(pre2);
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
          padding: '160px 24px 120px',
          background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 40%, #423DF9 100%)',
        }}
      >
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
          <SectionTOC />

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
              marginTop: '24px',
              marginBottom: '32px',
            }}
          >
            AYRO · Go-to-Market Strategy · DFW launch
          </span>

          <h1
            style={{
              ...serif,
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Winning rideshare<br />by winning{' '}
            <em style={{ fontStyle: 'italic', color: '#A5B4FC' }}>the drivers first.</em>
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px, 1.6vw, 22px)',
              color: '#C7D2FE',
              maxWidth: '780px',
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            AYRO is a rideshare platform that wins by putting drivers first. No take rate. Flat pricing. No surge.
            We prove the model in Dallas–Fort Worth, then replicate the playbook city by city.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              '$0 take rate, ever',
              'Flat pricing, no surge',
              'Drivers keep 100% of time pay',
              'Launching DFW · August 2026',
            ].map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#E0E7FF',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 01 · STRATEGY ═══════════ */}
      <Block id="strategy" eyebrow="01 · The strategy" title="One city. " emTitle="One compounding loop." intro="AYRO is a rideshare platform built on a structurally different business model: subscription + platform fee, not a take rate. We prove this model in DFW — a large, car-dependent, driver-rich metro that Uber has taken for granted — then replicate it.">
        <div
          style={{
            padding: '40px',
            background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%)',
            border: '1px solid #423DF9',
            borderRadius: '20px',
            marginBottom: '48px',
          }}
        >
          <p style={{ ...serif, fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 400, lineHeight: 1.3, color: '#0B1020' }}>
            Launch AYRO as the <em style={{ fontStyle: 'italic', color: '#423DF9' }}>flat-priced, no-surge</em> alternative to Uber in DFW.
            Build driver supply first through creator + community channels. Scale paid only after unit economics prove.
            Replicate <em style={{ fontStyle: 'italic', color: '#423DF9' }}>DFW → Houston → San Antonio → Atlanta.</em>
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            { n: 1, t: 'Driver-supply first', b: 'No paid rider-acquisition dollars until we have 500 pre-verified drivers live in DFW. Marketplaces die from empty supply, not empty demand.' },
            { n: 2, t: 'Creator + community before paid', b: 'Sergio Avedian and Torsten Kunert (signed equity advisors) carry launch-week narrative. Paid channels scale only after creators prove it. We pay for acceleration, not for existence.' },
            { n: 3, t: 'Honest positioning', b: 'AYRO is not always cheaper than Uber. Off-peak AYRO costs $1–3 more. Peak AYRO saves $15–30. The pitch is predictability, not cheapness.' },
          ].map((p) => (
            <div
              key={p.n}
              style={{
                padding: '32px',
                background: '#F8FAFC',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  ...serif,
                  fontSize: '48px',
                  fontWeight: 400,
                  color: '#423DF9',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {p.n}
              </div>
              <h3 style={{ ...serif, fontSize: '24px', fontWeight: 400, color: '#0B1020', marginBottom: '12px', lineHeight: 1.2 }}>
                {p.t}
              </h3>
              <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* ═══════════ 02 · INSIGHT (dark) ═══════════ */}
      <Block id="insight" dark eyebrow="02 · The core insight" title="Marketplaces die from " emTitle="empty supply — not empty demand." intro="Uber's structural vulnerability is well-documented. Effective take rate has climbed from ~20% in 2015 to ~28-30% in 2025. Driver NPS is in the negative double digits in every independent survey. The pool of disaffected, experienced drivers is the largest it has ever been. That's the opportunity.">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <CompareCol
            label="The Uber approach"
            heading="Demand-first"
            bullets={[
              <><strong>Acquire riders</strong> with paid ads at scale</>,
              <>Use demand to <strong>pressure driver rates</strong></>,
              <>Take rate <strong>creeps up (20% → 28-30%)</strong></>,
              <>Driver NPS collapses, but rider flywheel locks in</>,
              <>Works at IPO scale; fails at startup scale</>,
              <><strong>Cannot reverse</strong> without destroying shareholder value</>,
            ]}
          />
          <CompareCol
            ours
            label="The AYRO approach"
            heading="Supply-first"
            bullets={[
              <><strong>Acquire drivers</strong> via creator + community channels</>,
              <>No take rate — drivers keep <strong>100% of time pay</strong></>,
              <>Dense supply → <strong>lower ETAs</strong> → better service</>,
              <>Flat pricing → high rider NPS, high referral rate</>,
              <>Compounds fastest in <strong>single-metro density</strong></>,
              <><strong>Zero variable cost per ride</strong> — 100% contribution margin</>,
            ]}
          />
        </div>
      </Block>

      {/* ═══════════ 03 · FLYWHEEL ═══════════ */}
      <Block id="flywheel" eyebrow="03 · The flywheel" title="Four nodes. " emTitle="One compounding loop." intro="Every marketing decision must move at least one node. If it doesn't, it doesn't get funded. This is how we keep the flywheel honest — and how it compounds faster than Uber's paid-demand engine.">
        <FlywheelVisual />
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="/flywheel"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: '#423DF9',
              color: '#FFFFFF',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            See the full flywheel page
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </Block>

      {/* ═══════════ 04 · 90-DAY PLAN ═══════════ */}
      <Block id="plan" alt eyebrow="04 · The 90-day plan" title="Three phases. " emTitle="One gate between each." intro="No skipping. No rescue. If we miss a gate, we stay in phase until we pass it. The gates are the plan.">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[
            {
              num: 'PHASE 1', days: 'DAYS 1–30', name: 'Soft launch',
              obj: 'Build driver supply. Zero paid rider ads.',
              targets: ['500 active drivers', '10K weekly active riders', '<8 min avg ETA', 'Blended CAC <$5'],
              gate: 'Gate: 500 drivers + 10K WAU via organic only',
            },
            {
              num: 'PHASE 2', days: 'DAYS 31–60', name: 'Ignite',
              obj: 'Turn on paid rider acquisition. Scale referral.',
              targets: ['2,000 active drivers', '100K weekly active riders', '<5 min avg ETA', 'Referral = 30% of installs'],
              gate: 'Gate: 100K WAU + driver coverage held',
            },
            {
              num: 'PHASE 3', days: 'DAYS 61–90', name: 'Accelerate',
              obj: 'Open Houston. Land first B2B pilot. PR moment.',
              targets: ['3,000 drivers (DFW+HOU)', '112K combined WAU', 'M+1 retention >55%', '≥1 signed B2B pilot'],
              gate: 'Gate: Validated, replicable playbook',
            },
          ].map((phase, i) => (
            <div
              key={i}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '24px', background: 'linear-gradient(135deg, #423DF9 0%, #7742F1 100%)', color: '#FFFFFF' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#C7D2FE', marginBottom: '4px' }}>
                  {phase.num} · {phase.days}
                </div>
                <div style={{ ...serif, fontSize: '28px', fontWeight: 400, lineHeight: 1.1 }}>{phase.name}</div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ ...serif, fontSize: '18px', fontWeight: 400, color: '#0B1020', marginBottom: '20px', lineHeight: 1.35 }}>
                  {phase.obj}
                </p>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#423DF9', marginBottom: '8px' }}>
                  TARGETS
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                  {phase.targets.map((t, ti) => (
                    <li
                      key={ti}
                      style={{
                        padding: '8px 0',
                        fontSize: '14px',
                        color: '#334155',
                        borderBottom: ti === phase.targets.length - 1 ? 'none' : '1px solid #F1F5F9',
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: '12px 16px',
                    background: '#EEF2FF',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#423DF9',
                  }}
                >
                  {phase.gate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* ═══════════ 05 · CHANNELS ═══════════ */}
      <Block id="channels" eyebrow="05 · The focused stack" title="Four channel groups. " emTitle="Each with an owner, a budget, a kill criterion." intro="Phase 1 leans community + driver. Phase 2 scales paid. Phase 3 adds earned + B2B. Real team assignments: JP Narayan (growth), Deepanshi Chauhan (organic/SEO), Len Woods (creative), Ankit Roy (mgmt), Rohit at Rahul Ads (paid), Mani (WhatsApp/X/LinkedIn), Julian (referrals).">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            {
              badge: 'P1 LEAD',
              title: 'Driver acquisition',
              items: [
                'Job boards — Indeed, ZipRecruiter, iHire Transportation',
                'Creator channel — Sergio + Torsten',
                'Facebook driver group infiltration (12 target DFW groups)',
                'Driver-refer-a-driver program ($50 after 10th ride)',
                'In-person recruiting at gas stations, airports',
              ],
            },
            {
              badge: 'P1 LEAD',
              title: 'Community & organic DFW',
              items: [
                'Nextdoor neighborhood posts',
                'Reddit (r/Dallas, r/uberdrivers, r/rideshare)',
                'Campus ambassadors — UT Dallas, SMU, TCU, UTA, UNT',
                'Local event + restaurant partnerships',
                'Owned content (Medium long-form, founder social)',
              ],
            },
            {
              badge: 'P2 LEAD',
              title: 'Paid digital',
              items: [
                'Google UAC + Apple Search (Rohit + Deepanshi)',
                'Meta (FB+IG) app installs — lookalike of first 5K',
                'TikTok — organic + paid hybrid',
                'GeoFence Pro — AAC, AT&T Stadium, Globe Life',
              ],
            },
            {
              badge: 'P2–P3',
              title: 'Earned, referral, CRM',
              items: [
                'Referral Hero (Julian) — rider + driver referral',
                'Zoho + Mail Monitor (Chris) lifecycle',
                'PR pipeline — TechCrunch, DMN, D Magazine, Dallas Observer',
                'Founder AMAs on r/uberdrivers + r/Dallas',
              ],
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                padding: '28px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  background: '#0B1020',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  borderRadius: '4px',
                  marginBottom: '14px',
                }}
              >
                {c.badge}
              </span>
              <h3 style={{ ...serif, fontSize: '24px', fontWeight: 400, color: '#0B1020', marginBottom: '16px', lineHeight: 1.2 }}>
                {c.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {c.items.map((item, ii) => (
                  <li
                    key={ii}
                    style={{
                      padding: '10px 0',
                      fontSize: '14px',
                      color: '#475569',
                      borderBottom: ii === c.items.length - 1 ? 'none' : '1px solid #F1F5F9',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      {/* ═══════════ 06 · BUDGET ═══════════ */}
      <Block id="budget" alt eyebrow="06 · Budget" title="$873K over 90 days. " emTitle="Driver-first dollars." intro="23% of spend goes to driver supply before a single paid rider ad runs. That ordering is intentional — and it's the whole bet.">
        <div style={{ overflowX: 'auto', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {['Category', 'Phase 1', 'Phase 2', 'Phase 3', 'Total'].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: '18px 20px',
                      textAlign: i === 0 ? 'left' : 'right',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#64748B',
                      borderBottom: '2px solid #E2E8F0',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Driver acquisition', '$78K', '$65K', '$55K', '$198K'],
                ['Paid digital (rider)', '$0', '$100K', '$115K', '$215K'],
                ['Community & organic', '$28K', '$30K', '$35K', '$93K'],
                ['Creator retainers (Sergio + Torsten)', '$18K', '$18K', '$18K', '$54K'],
                ['Referral program incentives', '$12K', '$55K', '$45K', '$112K'],
                ['PR & earned media', '$5K', '$8K', '$15K', '$28K'],
                ['Houston launch', '$0', '$0', '$70K', '$70K'],
                ['Tooling + analytics', '$8K', '$8K', '$8K', '$24K'],
                ['Contingency (10%)', '$15K', '$28K', '$36K', '$79K'],
              ].map((row, ri) => (
                <tr key={ri} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '14px 20px',
                        fontSize: '14px',
                        textAlign: ci === 0 ? 'left' : 'right',
                        color: ci === 0 ? '#0B1020' : '#475569',
                        fontWeight: ci === 0 ? 500 : 400,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr style={{ background: 'linear-gradient(135deg, #423DF9 0%, #7742F1 100%)' }}>
                {['TOTAL', '$164K', '$312K', '$397K', '$873K'].map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      padding: '18px 20px',
                      textAlign: ci === 0 ? 'left' : 'right',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: ci === 0 ? '14px' : '16px',
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing: ci === 0 ? '0.08em' : 'normal',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Block>

      {/* ═══════════ 07 · UNIT ECONOMICS ═══════════ */}
      <Block id="econ" eyebrow="07 · Unit economics" title="The flywheel — " emTitle="in numbers." intro="Per-ride economics, per-driver monthly, fleet rollup. These are the numbers the flywheel converts into revenue. Zero variable cost per ride; 100% contribution margin.">
        <div className="grid gap-10 items-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
          <div
            className="text-white"
            style={{ background: '#0B1020', borderRadius: '20px', padding: '36px' }}
          >
            <h3 style={{ ...serif, fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>
              Per ride (7.5-mi, 23-min active)
            </h3>
            <div style={{ fontSize: '13px', color: '#CBD5E1', marginBottom: '24px' }}>
              Breakdown of a standard AYRO ride
            </div>
            {[
              { label: 'Driver time pay', val: '$11.50' },
              { label: 'Insurance (pass-through)', val: '$3.60' },
              { label: 'Stripe (pass-through)', val: '$0.81' },
              { label: 'AYRO platform fee', val: '$1.00' },
              { label: 'Tolls + tips (to driver)', val: '$1.43' },
            ].map((row, i) => (
              <div
                key={i}
                className="flex justify-between items-center"
                style={{
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '15px',
                }}
              >
                <span style={{ color: '#CBD5E1' }}>{row.label}</span>
                <span style={{ fontWeight: 600, color: '#FFFFFF', fontVariantNumeric: 'tabular-nums' }}>{row.val}</span>
              </div>
            ))}
            <div
              className="flex justify-between items-center"
              style={{ paddingTop: '24px', fontSize: '15px' }}
            >
              <span style={{ color: '#CBD5E1' }}>Passenger pays</span>
              <span style={{ ...serif, color: '#86EFAC', fontSize: '24px', fontVariantNumeric: 'tabular-nums' }}>$18.33</span>
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { k: '$12.93', v: 'Driver take-home per ride, including tolls and tips. 100% to driver. No percentage ever goes to AYRO.' },
              { k: '$1.95', v: 'AYRO revenue per ride (platform fee + subscription allocation). Zero variable cost. 100% contribution margin.' },
              { k: '$1,897 / mo', v: 'Typical AYRO driver net monthly earnings. Roughly at parity with DFW Uber driver, but stable over time.' },
              { k: '$3.8M ARR', v: 'Platform revenue at 1,000 active drivers. Every additional driver is positive contribution, no variable cost.' },
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
                    fontSize: '26px',
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
      </Block>

      {/* ═══════════ 08 · MOAT (dark) ═══════════ */}
      <Block id="moat" dark eyebrow="08 · Why Uber can't copy this" title="Four structural advantages. " emTitle="None of which scale from New York." intro="The moats aren't features we built — they're constraints Uber built around themselves. Their own business model is what blocks them from matching ours.">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {[
            {
              n: '01', t: 'Uber cannot drop take rate',
              b: 'Their $170B valuation assumes continued take-rate expansion. Any retreat = 30%+ stock drop. They literally cannot match our pricing without destroying shareholder value.',
            },
            {
              n: '02', t: 'Creator trust is non-purchasable',
              b: 'Sergio Avedian and Torsten Kunert are signed equity advisors. Their audiences of professional drivers trust them. Uber cannot buy that — their reputation with drivers is the opposite of what we need.',
            },
            {
              n: '03', t: 'Single-metro density beats national reach',
              b: "We win 1 metro (DFW), then replicate. Our $873K spend inside DFW outperforms a $100M Uber national counter-campaign because we're buying density, not breadth.",
            },
            {
              n: '04', t: 'Retention is our marketing',
              b: 'Once a driver pays a $150 subscription and builds a routine, switching back to Uber is real work. Once a rider has had a no-surge Saturday, the Uber surge becomes intolerable. Retention compounds.',
            },
          ].map((m) => (
            <div
              key={m.n}
              style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  ...serif,
                  fontSize: '48px',
                  fontWeight: 400,
                  color: '#A5B4FC',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {m.n}
              </div>
              <h3 style={{ ...serif, fontSize: '24px', fontWeight: 400, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.2 }}>
                {m.t}
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '15px', lineHeight: 1.6 }}>{m.b}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* ═══════════ 09 · RISKS ═══════════ */}
      <Block id="risks" alt eyebrow="09 · What can go wrong" title="Five risks we " emTitle="stress-test every week." intro="Every risk here has a codified mitigation — not aspirational. Kill criteria are pre-committed; we don't negotiate with ourselves in the moment.">
        <div className="space-y-4">
          {[
            {
              level: 'HIGH',
              title: 'Uber subsidizes DFW drivers to block us',
              mit: 'Their 28-30% take rate makes a sustained subsidy war uneconomic. We publish driver-earnings transparency weekly. Uber retreating becomes a bigger story than the subsidy itself.',
            },
            {
              level: 'HIGH',
              title: "Driver supply can't keep up with rider demand",
              mit: 'Phase 1 kill criterion: miss 300 drivers by Day 21 → all Phase 2 paid rider budget redirects to driver supply. No overrides. We are structurally driver-first.',
            },
            {
              level: 'MED',
              title: 'Paid CPIs inflate beyond our unit economics',
              mit: "Per-channel kill thresholds pre-committed in the Paid Channel Performance tracker. Organic and referral are load-bearing — we survive any single paid channel's collapse without disruption.",
            },
            {
              level: 'MED',
              title: 'Creator relationships go sideways',
              mit: 'Multi-year advisor agreements signed. Both creators have permission to critique AYRO on-air (this builds audience trust, not undermines it). Clear exit terms documented.',
            },
            {
              level: 'MED',
              title: "'Flat-priced' confuses at off-peak",
              mit: 'At off-peak times, AYRO costs $1–3 more than Uber. Creator + press materials emphasize surge-avoidance + predictability, not absolute cheapness. Rider FAQ explains the math.',
            },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '20px',
                padding: '24px',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  padding: '6px 12px',
                  background: r.level === 'HIGH' ? '#FEE2E2' : '#FEF3C7',
                  color: r.level === 'HIGH' ? '#991B1B' : '#92400E',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'start',
                }}
              >
                {r.level}
              </div>
              <div>
                <div style={{ ...serif, fontSize: '22px', fontWeight: 400, color: '#0B1020', marginBottom: '10px', lineHeight: 1.3 }}>
                  {r.title}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: '#423DF9',
                    marginBottom: '6px',
                  }}
                >
                  MITIGATION
                </div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>{r.mit}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

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
        <p style={{ fontSize: '17px', color: '#CBD5E1', maxWidth: '660px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          These are different scaling curves. Ours doesn't compound at the driver's expense — which is why drivers stay,
          why the flywheel doesn't break, and why the model compounds.
        </p>
      </section>

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
        <p style={{ marginTop: '8px' }}>Confidential. Not for external distribution. Version 2.0 · Corrected unit economics.</p>
      </footer>
    </div>
  );
}

// ─── Section TOC (pill links at top of hero) ───────────────────────────────

function SectionTOC() {
  const items = [
    { id: 'strategy', label: 'Strategy' },
    { id: 'insight', label: 'Insight' },
    { id: 'flywheel', label: 'Flywheel' },
    { id: 'plan', label: 'Plan' },
    { id: 'channels', label: 'Channels' },
    { id: 'budget', label: 'Budget' },
    { id: 'econ', label: 'Economics' },
    { id: 'moat', label: 'Moat' },
    { id: 'risks', label: 'Risks' },
  ];

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
        <button
          key={it.id}
          onClick={() => jump(it.id)}
          style={{
            padding: '6px 12px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: '#E0E7FF',
            cursor: 'pointer',
          }}
        >
          {String(i + 1).padStart(2, '0')} · {it.label}
        </button>
      ))}
    </div>
  );
}

// ─── Generic Block wrapper ──────────────────────────────────────────────────

function Block({ id, eyebrow, title, emTitle, intro, dark, alt, children }) {
  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };

  const bg = dark
    ? '#0B1020'
    : alt
    ? 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)'
    : '#FFFFFF';
  const titleColor = dark ? '#FFFFFF' : '#0B1020';
  const eyebrowColor = dark ? '#A5B4FC' : '#423DF9';
  const emColor = dark ? '#A5B4FC' : '#423DF9';
  const introColor = dark ? '#CBD5E1' : '#64748B';

  return (
    <section
      id={id}
      style={{
        padding: '96px 24px',
        background: bg,
        scrollMarginTop: '80px',
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
            color: eyebrowColor,
            marginBottom: '16px',
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            ...serif,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: titleColor,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
          <em style={{ fontStyle: 'italic', color: emColor }}>{emTitle}</em>
        </h2>
        {intro && (
          <p
            style={{
              fontSize: '18px',
              color: introColor,
              maxWidth: '820px',
              marginBottom: '48px',
              lineHeight: 1.6,
            }}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

// ─── Compare column (Uber vs AYRO) ──────────────────────────────────────────

function CompareCol({ label, heading, bullets, ours }) {
  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };
  return (
    <div
      style={{
        padding: '32px',
        background: ours ? 'linear-gradient(135deg, #312E81 0%, #423DF9 100%)' : 'rgba(255,255,255,0.04)',
        border: ours ? '1px solid #7F77DD' : '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          padding: '4px 10px',
          background: ours ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
          color: ours ? '#FFFFFF' : '#A5B4FC',
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
      <h3 style={{ ...serif, fontSize: '36px', fontWeight: 400, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.1 }}>
        {heading}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              padding: '14px 0',
              borderBottom: i === bullets.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
              fontSize: '15px',
              color: ours ? '#E0E7FF' : '#CBD5E1',
              lineHeight: 1.5,
            }}
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Flywheel Visual (reused from /flywheel page) ───────────────────────────

function FlywheelVisual() {
  const serif = { fontFamily: "'Instrument Serif', Georgia, serif" };
  const nodeBase = {
    position: 'absolute',
    width: '42%',
    maxWidth: '340px',
    padding: '20px 24px',
    background: '#FFFFFF',
    borderRadius: '18px',
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
      sub: 'No take rate. Flat $150/mo subscription + $0.50–$1.50 per-ride platform fee. Tolls and tips 100% to drivers.',
    },
    {
      key: 'n2',
      pos: { top: '50%', right: 0, transform: 'translateY(-50%)' },
      titleColor: '#0C447C',
      subColor: '#185FA5',
      num: 'NODE 2',
      title: 'Better coverage',
      sub: 'Predictable earnings attract more drivers. Denser supply = lower ETAs = better reliability across every zone.',
    },
    {
      key: 'n3',
      pos: { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
      titleColor: '#633806',
      subColor: '#854F0B',
      num: 'NODE 3',
      title: 'Flat, transparent rides',
      sub: 'No surge, ever. Riders save $15–30 on peak rides vs Uber. Receipt itemizes every line.',
    },
    {
      key: 'n4',
      pos: { top: '50%', left: 0, transform: 'translateY(-50%)' },
      titleColor: '#72243E',
      subColor: '#993556',
      num: 'NODE 4',
      title: 'More rides',
      sub: 'Higher NPS + referrals = more ride volume. More rides → more revenue → more drivers → Node 1.',
    },
  ];

  return (
    <>
      <div
        className="hidden md:block relative mx-auto"
        style={{ width: '100%', maxWidth: '820px', aspectRatio: '1 / 1', margin: '24px auto' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 800 800" preserveAspectRatio="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
            <path d="M 600 200 Q 720 400 600 600" fill="none" stroke="#423DF9" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
            <path d="M 600 600 Q 400 720 200 600" fill="none" stroke="#423DF9" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
            <path d="M 200 600 Q 80 400 200 200" fill="none" stroke="#423DF9" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
            <path d="M 200 200 Q 400 80 600 200" fill="none" stroke="#423DF9" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
          </svg>
        </div>

        {nodes.map((n) => (
          <div key={n.key} style={{ ...nodeBase, ...n.pos }}>
            <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: '#423DF9', marginBottom: '8px' }}>
              {n.num}
            </div>
            <div style={{ ...serif, fontSize: '22px', fontWeight: 400, lineHeight: 1.15, marginBottom: '8px', color: n.titleColor }}>
              {n.title}
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: n.subColor }}>{n.sub}</div>
          </div>
        ))}

        <div
          className="absolute rounded-full flex flex-col items-center justify-center text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #423DF9 0%, #7F77DD 100%)',
            padding: '16px',
            boxShadow: '0 12px 32px rgba(66,61,249,0.25)',
          }}
        >
          <div style={{ ...serif, fontSize: '32px', fontWeight: 400, lineHeight: 1, marginBottom: '4px' }}>100%</div>
          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: 1.3, color: '#E0E7FF' }}>
            CONTRIBUTION<br />MARGIN
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {nodes.map((n) => (
          <div
            key={n.key}
            style={{
              padding: '20px 24px',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
            }}
          >
            <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: '#423DF9', marginBottom: '8px' }}>
              {n.num}
            </div>
            <div style={{ ...serif, fontSize: '22px', fontWeight: 400, lineHeight: 1.15, marginBottom: '8px', color: n.titleColor }}>
              {n.title}
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: n.subColor }}>{n.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}
