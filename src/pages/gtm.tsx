import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap';

const CSS = `
html { scroll-behavior: smooth; }
.gtm-root {
  --ink: #0B1020;
  --ink-2: #1A1F3A;
  --indigo: #4F46E5;
  --indigo-deep: #3C3489;
  --indigo-light: #7F77DD;
  --indigo-50: #EEF2FF;
  --indigo-100: #E0E7FF;
  --teal: #0F6E56;
  --teal-50: #E1F5EE;
  --blue: #185FA5;
  --blue-50: #E6F1FB;
  --amber: #854F0B;
  --amber-50: #FAEEDA;
  --pink: #993556;
  --pink-50: #FBEAF0;
  --green: #059669;
  --green-50: #D1FAE5;
  --red: #B91C1C;
  --red-50: #FEE2E2;
  --slate: #64748B;
  --slate-dark: #334155;
  --slate-100: #F1F5F9;
  --slate-200: #E2E8F0;
  --slate-300: #CBD5E1;
  --white: #FFFFFF;
  --radius: 14px;
  --radius-lg: 20px;
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--white);
  color: var(--ink);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.gtm-root *, .gtm-root *::before, .gtm-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

.gtm-root nav.toc {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255,255,255,0.92);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--slate-200);
}
.gtm-root .toc-inner { max-width: 1280px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 32px; overflow-x: auto; }
.gtm-root .toc-brand { font-weight: 700; font-size: 16px; color: var(--indigo); letter-spacing: 0.08em; flex-shrink: 0; }
.gtm-root .toc-links { display: flex; gap: 4px; list-style: none; flex-wrap: nowrap; overflow-x: auto; }
.gtm-root .toc-links a { color: var(--slate); text-decoration: none; font-size: 13px; font-weight: 500; padding: 6px 12px; border-radius: 6px; white-space: nowrap; transition: all 0.15s; }
.gtm-root .toc-links a:hover { color: var(--indigo); background: var(--indigo-50); }

.gtm-root .hero { position: relative; padding: 150px 24px 140px; background: linear-gradient(135deg, #1E1B4B 0%, #312E81 40%, #4F46E5 100%); overflow: hidden; color: var(--white); }
.gtm-root .hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%); }
.gtm-root .hero::after { content: ''; position: absolute; bottom: -300px; left: -200px; width: 800px; height: 800px; border-radius: 50%; background: radial-gradient(circle, rgba(20,184,166,0.12), transparent 70%); }
.gtm-root .hero-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
.gtm-root .eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #C7D2FE; margin-bottom: 36px; backdrop-filter: blur(10px); }
.gtm-root .eyebrow::before { content: ''; width: 6px; height: 6px; background: #A78BFA; border-radius: 50%; box-shadow: 0 0 10px #A78BFA; }
.gtm-root h1.hero-title { font-family: 'Instrument Serif', Georgia, serif; font-size: clamp(44px, 7vw, 88px); font-weight: 400; line-height: 1.02; letter-spacing: -0.02em; margin-bottom: 28px; max-width: 950px; }
.gtm-root h1.hero-title em { font-style: italic; color: #C4B5FD; }
.gtm-root .hero-sub { font-size: 19px; line-height: 1.55; color: rgba(255,255,255,0.82); max-width: 720px; font-weight: 300; margin-bottom: 40px; }
.gtm-root .hero-meta { display: flex; gap: 32px; flex-wrap: wrap; font-size: 12px; color: rgba(255,255,255,0.55); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; }
.gtm-root .hero-meta span::before { content: '·'; margin-right: 10px; color: #A78BFA; }
.gtm-root .hero-meta span:first-child::before { content: none; }

.gtm-root section.block { padding: 100px 24px; scroll-margin-top: 160px; }
.gtm-root section.block.alt { background: var(--slate-100); }
.gtm-root section.block.dark { background: linear-gradient(135deg, #0B1020 0%, #1E1B4B 100%); color: var(--white); }
.gtm-root .block-inner { max-width: 1200px; margin: 0 auto; }
.gtm-root .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--indigo); margin-bottom: 16px; }
.gtm-root .dark .section-label { color: #A78BFA; }
.gtm-root .section-title { font-family: 'Instrument Serif', serif; font-size: clamp(32px, 4.5vw, 54px); font-weight: 400; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px; color: inherit; }
.gtm-root .section-title em { font-style: italic; color: var(--indigo); }
.gtm-root .dark .section-title em { color: #C4B5FD; }
.gtm-root .section-intro { font-size: 18px; line-height: 1.55; color: var(--slate-dark); max-width: 760px; margin-bottom: 56px; }
.gtm-root .dark .section-intro { color: rgba(255,255,255,0.72); }

.gtm-root .thesis { background: var(--indigo-50); border-left: 4px solid var(--indigo); border-radius: 0 var(--radius) var(--radius) 0; padding: 36px 40px; margin-bottom: 48px; max-width: 900px; }
.gtm-root .thesis-label { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--indigo); margin-bottom: 12px; }
.gtm-root .thesis-body { font-family: 'Instrument Serif', serif; font-size: clamp(22px, 2.8vw, 30px); line-height: 1.4; font-weight: 400; color: var(--ink); }
.gtm-root .thesis-body em { font-style: italic; color: var(--indigo-deep); }

.gtm-root .three-pillars { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 48px; }
.gtm-root .pillar { padding: 28px 28px 24px; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); position: relative; transition: border-color 0.2s, transform 0.2s; }
.gtm-root .pillar:hover { border-color: var(--indigo); transform: translateY(-3px); }
.gtm-root .pillar-num { font-family: 'Instrument Serif', serif; font-size: 42px; color: var(--indigo); line-height: 1; font-style: italic; margin-bottom: 8px; }
.gtm-root .pillar-title { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
.gtm-root .pillar-body { font-size: 14px; color: var(--slate-dark); line-height: 1.55; }

.gtm-root .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
.gtm-root .stat { padding: 32px 28px; border-top: 1px solid var(--slate-300); }
.gtm-root .stat-k { font-family: 'Instrument Serif', serif; font-size: clamp(44px, 5vw, 60px); line-height: 1; color: var(--indigo); font-weight: 400; margin-bottom: 12px; letter-spacing: -0.02em; }
.gtm-root .stat-v { font-size: 13px; color: var(--slate); line-height: 1.5; }
.gtm-root .stat-v strong { color: var(--ink); font-weight: 600; display: block; margin-bottom: 4px; }

.gtm-root .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
@media (max-width: 720px) { .gtm-root .compare { grid-template-columns: 1fr; } }
.gtm-root .compare-col { padding: 36px 32px; border-radius: var(--radius); background: var(--ink-2); }
.gtm-root .compare-col.right { background: linear-gradient(135deg, #1E1B4B, #312E81); border: 1.5px solid var(--indigo); position: relative; }
.gtm-root .compare-col.right::after { content: 'THE BET'; position: absolute; top: -12px; right: 24px; background: var(--indigo); color: var(--white); font-size: 10px; font-weight: 700; letter-spacing: 0.2em; padding: 4px 12px; border-radius: 100px; }
.gtm-root .compare-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; margin-bottom: 8px; color: #F87171; }
.gtm-root .compare-col.right .compare-tag { color: #A78BFA; }
.gtm-root .compare-title { font-family: 'Instrument Serif', serif; font-size: 32px; color: var(--white); font-weight: 400; margin-bottom: 20px; letter-spacing: -0.01em; }
.gtm-root .compare-list { list-style: none; margin-bottom: 0; }
.gtm-root .compare-list li { padding: 10px 0 10px 24px; color: rgba(255,255,255,0.78); font-size: 14px; line-height: 1.5; position: relative; border-top: 1px solid rgba(255,255,255,0.08); }
.gtm-root .compare-list li:first-child { border-top: none; }
.gtm-root .compare-list li::before { content: ''; position: absolute; left: 0; top: 18px; width: 12px; height: 2px; background: rgba(255,255,255,0.35); }
.gtm-root .compare-list li strong { color: var(--white); font-weight: 600; }

.gtm-root .wheel { position: relative; max-width: 860px; margin: 0 auto 40px; aspect-ratio: 1.4 / 1; }
.gtm-root .node-card { position: absolute; width: 32%; padding: 22px 24px; border-radius: var(--radius); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s; }
.gtm-root .node-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px -10px rgba(15,23,42,0.18); }
.gtm-root .node-card.n1 { top: 4%;  left: 2%;  background: var(--teal-50);  border: 1.5px solid var(--teal); }
.gtm-root .node-card.n2 { top: 4%;  right: 2%; background: var(--blue-50);  border: 1.5px solid var(--blue); }
.gtm-root .node-card.n3 { bottom: 4%; right: 2%; background: var(--amber-50); border: 1.5px solid var(--amber); }
.gtm-root .node-card.n4 { bottom: 4%; left: 2%; background: var(--pink-50);  border: 1.5px solid var(--pink); }
.gtm-root .node-num { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; margin-bottom: 8px; }
.gtm-root .n1 .node-num { color: var(--teal); }
.gtm-root .n2 .node-num { color: var(--blue); }
.gtm-root .n3 .node-num { color: var(--amber); }
.gtm-root .n4 .node-num { color: var(--pink); }
.gtm-root .node-title { font-size: 19px; font-weight: 700; line-height: 1.2; margin-bottom: 6px; }
.gtm-root .n1 .node-title { color: #085041; }
.gtm-root .n2 .node-title { color: #0C447C; }
.gtm-root .n3 .node-title { color: #633806; }
.gtm-root .n4 .node-title { color: #72243E; }
.gtm-root .node-sub { font-size: 13px; line-height: 1.45; }
.gtm-root .n1 .node-sub { color: var(--teal); }
.gtm-root .n2 .node-sub { color: var(--blue); }
.gtm-root .n3 .node-sub { color: var(--amber); }
.gtm-root .n4 .node-sub { color: var(--pink); }
.gtm-root .wheel-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 160px; height: 160px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #EEF2FF, #C7D2FE); border: 1.5px solid var(--indigo-light); display: flex; align-items: center; justify-content: center; flex-direction: column; z-index: 3; box-shadow: 0 10px 30px -5px rgba(79,70,229,0.25); }
.gtm-root .wheel-center .c-brand { font-family: 'Instrument Serif', serif; font-size: 28px; color: var(--indigo-deep); font-weight: 400; }
.gtm-root .wheel-center .c-sub { font-size: 11px; color: var(--indigo); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600; margin-top: 2px; }
.gtm-root .arrow-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
@media (prefers-reduced-motion: no-preference) {
  .gtm-root .wheel-center::before { content: ''; position: absolute; inset: -8px; border-radius: 50%; border: 1.5px solid var(--indigo-light); opacity: 0.5; animation: gtmpulse 3s ease-out infinite; }
  @keyframes gtmpulse { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.3); opacity: 0; } }
  .gtm-root .arrow-path { stroke-dasharray: 4 6; animation: gtmflow 2.5s linear infinite; }
  @keyframes gtmflow { to { stroke-dashoffset: -30; } }
}
.gtm-root .flywheel-rule { max-width: 720px; margin: 40px auto 0; padding: 22px 28px; border-left: 3px solid var(--indigo); background: var(--indigo-50); border-radius: 0 10px 10px 0; font-style: italic; color: var(--indigo-deep); font-size: 16px; line-height: 1.5; }
.gtm-root .flywheel-rule strong { font-style: normal; font-weight: 700; }
@media (max-width: 820px) {
  .gtm-root .wheel { aspect-ratio: auto; display: grid; gap: 12px; }
  .gtm-root .node-card { position: static; width: 100%; margin-bottom: 0; }
  .gtm-root .arrow-layer, .gtm-root .wheel-center { display: none; }
}

.gtm-root .personas { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 760px) { .gtm-root .personas { grid-template-columns: 1fr; } }
.gtm-root .persona { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); overflow: hidden; }
.gtm-root .persona-head { padding: 28px 32px 20px; background: linear-gradient(135deg, #EEF2FF 0%, #FBEAF0 100%); border-bottom: 1px solid var(--slate-200); }
.gtm-root .persona:nth-child(2) .persona-head { background: linear-gradient(135deg, #E1F5EE 0%, #FAEEDA 100%); }
.gtm-root .persona-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: var(--indigo); margin-bottom: 8px; }
.gtm-root .persona:nth-child(2) .persona-tag { color: var(--teal); }
.gtm-root .persona-name { font-family: 'Instrument Serif', serif; font-size: 30px; font-weight: 400; color: var(--ink); letter-spacing: -0.01em; margin-bottom: 4px; }
.gtm-root .persona-sub { font-size: 13px; color: var(--slate); }
.gtm-root .persona-body { padding: 24px 32px 28px; }
.gtm-root .persona-body dt { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: var(--slate); text-transform: uppercase; margin-top: 16px; margin-bottom: 4px; }
.gtm-root .persona-body dt:first-child { margin-top: 0; }
.gtm-root .persona-body dd { font-size: 14px; color: var(--ink); line-height: 1.5; }

.gtm-root .phases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.gtm-root .phase { background: var(--white); border-radius: var(--radius); padding: 32px 28px; border-top: 4px solid var(--teal); box-shadow: 0 2px 10px rgba(15,23,42,0.04); display: flex; flex-direction: column; }
.gtm-root .phase:nth-child(2) { border-top-color: var(--indigo); }
.gtm-root .phase:nth-child(3) { border-top-color: var(--amber); }
.gtm-root .phase-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: var(--teal); margin-bottom: 6px; }
.gtm-root .phase:nth-child(2) .phase-tag { color: var(--indigo); }
.gtm-root .phase:nth-child(3) .phase-tag { color: var(--amber); }
.gtm-root .phase-title { font-family: 'Instrument Serif', serif; font-size: 30px; font-weight: 400; color: var(--ink); margin-bottom: 4px; letter-spacing: -0.01em; }
.gtm-root .phase-dur { font-size: 13px; color: var(--slate); margin-bottom: 24px; }
.gtm-root .phase-list { list-style: none; margin-bottom: 24px; flex: 1; }
.gtm-root .phase-list li { padding: 10px 0 10px 22px; border-bottom: 1px solid var(--slate-100); font-size: 13.5px; color: var(--ink); position: relative; line-height: 1.5; }
.gtm-root .phase-list li::before { content: ''; position: absolute; left: 0; top: 17px; width: 10px; height: 2px; background: var(--indigo); }
.gtm-root .phase:nth-child(1) .phase-list li::before { background: var(--teal); }
.gtm-root .phase:nth-child(3) .phase-list li::before { background: var(--amber); }
.gtm-root .phase-metrics { display: flex; gap: 20px; padding-top: 20px; border-top: 1px solid var(--slate-200); }
.gtm-root .phase-metric-k { font-family: 'Instrument Serif', serif; font-size: 26px; line-height: 1; margin-bottom: 4px; }
.gtm-root .phase:nth-child(1) .phase-metric-k { color: var(--teal); }
.gtm-root .phase:nth-child(2) .phase-metric-k { color: var(--indigo); }
.gtm-root .phase:nth-child(3) .phase-metric-k { color: var(--amber); }
.gtm-root .phase-metric-v { font-size: 11px; color: var(--slate); }
.gtm-root .gate-note { margin-top: 28px; padding: 20px 24px; background: #FEF3C7; border-left: 4px solid #D97706; border-radius: 0 8px 8px 0; font-size: 14px; color: #78350F; line-height: 1.5; }
.gtm-root .gate-note strong { color: #78350F; font-weight: 700; }

.gtm-root .influencer-banner { background: linear-gradient(135deg, #1E1B4B 0%, #4F46E5 100%); border-radius: var(--radius-lg); padding: 36px 40px; margin-bottom: 40px; color: var(--white); display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.gtm-root .influencer-banner-icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: 'Instrument Serif', serif; font-size: 28px; color: #C4B5FD; font-style: italic; }
.gtm-root .influencer-banner-text { flex: 1; min-width: 280px; }
.gtm-root .influencer-banner-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; color: #A78BFA; margin-bottom: 6px; }
.gtm-root .influencer-banner-title { font-family: 'Instrument Serif', serif; font-size: 24px; font-weight: 400; line-height: 1.3; }
.gtm-root .influencer-banner-title em { font-style: italic; color: #C4B5FD; }
.gtm-root .influencers-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 24px; margin-bottom: 40px; }
.gtm-root .influencer-card { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.gtm-root .influencer-card:hover { transform: translateY(-3px); box-shadow: 0 16px 32px -10px rgba(15,23,42,0.14); }
.gtm-root .influencer-head { display: flex; align-items: center; gap: 20px; padding: 28px 28px 24px; background: var(--slate-100); border-bottom: 1px solid var(--slate-200); }
.gtm-root .influencer-avatar { width: 88px; height: 88px; border-radius: 50%; background: linear-gradient(135deg, var(--indigo), var(--indigo-light)); color: var(--white); display: flex; align-items: center; justify-content: center; font-family: 'Instrument Serif', serif; font-size: 36px; font-style: italic; font-weight: 400; flex-shrink: 0; box-shadow: 0 4px 12px rgba(79,70,229,0.25); }
.gtm-root .influencer-intro { flex: 1; min-width: 0; }
.gtm-root .influencer-name { font-family: 'Instrument Serif', serif; font-size: 28px; font-weight: 400; color: var(--ink); letter-spacing: -0.01em; line-height: 1.1; margin-bottom: 4px; }
.gtm-root .influencer-role { font-size: 13px; color: var(--indigo); font-weight: 600; margin-bottom: 8px; }
.gtm-root .influencer-reach { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: var(--teal); background: var(--teal-50); padding: 4px 10px; border-radius: 100px; }
.gtm-root .influencer-body { padding: 24px 28px 28px; flex: 1; }
.gtm-root .influencer-body > p { font-size: 14px; color: var(--slate-dark); line-height: 1.6; margin-bottom: 18px; }
.gtm-root .influencer-credentials { list-style: none; padding: 16px 0; margin: 0 0 20px; border-top: 1px solid var(--slate-100); border-bottom: 1px solid var(--slate-100); }
.gtm-root .influencer-credentials li { font-size: 13px; color: var(--ink); padding: 6px 0 6px 22px; position: relative; line-height: 1.5; }
.gtm-root .influencer-credentials li::before { content: '\\2713'; position: absolute; left: 0; top: 6px; color: var(--teal); font-weight: 700; font-size: 13px; }
.gtm-root .influencer-role-heading { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: var(--indigo); text-transform: uppercase; margin-bottom: 10px; }
.gtm-root .influencer-role-body { font-size: 13px; color: var(--slate-dark); line-height: 1.55; }
.gtm-root .influencer-math { background: var(--indigo-50); border-left: 3px solid var(--indigo); padding: 24px 28px; border-radius: 0 10px 10px 0; }
.gtm-root .influencer-math-title { font-size: 12px; font-weight: 700; letter-spacing: 0.15em; color: var(--indigo); text-transform: uppercase; margin-bottom: 14px; }
.gtm-root .influencer-math p { font-size: 14.5px; color: var(--ink); line-height: 1.7; }
.gtm-root .influencer-math strong { color: var(--indigo-deep); font-weight: 700; }

.gtm-root .channels { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px; }
.gtm-root .channel { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); padding: 0; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
.gtm-root .channel:hover { transform: translateY(-2px); box-shadow: 0 10px 24px -8px rgba(15,23,42,0.12); }
.gtm-root .channel-top { padding: 20px 24px 16px; border-bottom: 1px solid var(--slate-100); display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.gtm-root .channel-title { font-size: 15px; font-weight: 700; color: var(--ink); }
.gtm-root .phase-pill { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 100px; white-space: nowrap; }
.gtm-root .phase-pill.p1 { background: var(--teal-50); color: var(--teal); }
.gtm-root .phase-pill.p2 { background: var(--indigo-50); color: var(--indigo); }
.gtm-root .phase-pill.p23 { background: var(--amber-50); color: var(--amber); }
.gtm-root .phase-pill.p3 { background: var(--pink-50); color: var(--pink); }
.gtm-root .channel-body { padding: 16px 24px 20px; }
.gtm-root .channel-items { list-style: none; font-size: 13px; color: var(--slate-dark); line-height: 1.5; }
.gtm-root .channel-items li { padding: 6px 0; padding-left: 16px; position: relative; }
.gtm-root .channel-items li::before { content: ''; position: absolute; left: 0; top: 15px; width: 6px; height: 1.5px; background: var(--slate-300); }

.gtm-root .budget-wrap { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); overflow: hidden; margin-bottom: 32px; }
.gtm-root table.budget { width: 100%; border-collapse: collapse; font-size: 14px; }
.gtm-root table.budget th { text-align: left; padding: 16px 20px; background: var(--slate-100); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--slate-dark); border-bottom: 1px solid var(--slate-200); }
.gtm-root table.budget th.num { text-align: right; }
.gtm-root table.budget td { padding: 14px 20px; border-bottom: 1px solid var(--slate-100); color: var(--ink); }
.gtm-root table.budget td.num { text-align: right; font-variant-numeric: tabular-nums; color: var(--slate-dark); }
.gtm-root table.budget tr:last-child td { border-bottom: none; }
.gtm-root table.budget tr.total { background: var(--indigo-50); font-weight: 700; }
.gtm-root table.budget tr.total td { color: var(--indigo-deep); }
.gtm-root table.budget tr.total td.num { color: var(--indigo); font-size: 16px; }

.gtm-root .econ-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 32px; }
@media (max-width: 860px) { .gtm-root .econ-grid { grid-template-columns: 1fr; } }
.gtm-root .econ-chart { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); padding: 32px; }
.gtm-root .chart-title { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.gtm-root .chart-sub { font-size: 12px; color: var(--slate); margin-bottom: 24px; }
.gtm-root .bars { display: grid; gap: 16px; }
.gtm-root .bar-row { display: grid; grid-template-columns: 70px 1fr 60px; gap: 12px; align-items: center; }
.gtm-root .bar-label { font-size: 12px; font-weight: 500; color: var(--slate-dark); }
.gtm-root .bar-track { height: 28px; background: var(--slate-100); border-radius: 6px; position: relative; overflow: hidden; }
.gtm-root .bar-fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 6px; display: flex; align-items: center; padding-right: 10px; justify-content: flex-end; font-size: 11px; font-weight: 700; color: var(--white); }
.gtm-root .bar-cac { background: var(--indigo); }
.gtm-root .bar-ltv { background: var(--green); }
.gtm-root .bar-value-side { font-size: 13px; font-weight: 700; color: var(--ink); text-align: right; }
.gtm-root .legend { display: flex; gap: 20px; font-size: 12px; color: var(--slate); margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--slate-100); }
.gtm-root .legend-item { display: flex; align-items: center; gap: 6px; }
.gtm-root .legend-dot { width: 12px; height: 12px; border-radius: 3px; }
.gtm-root .econ-aside { background: var(--ink); border-radius: var(--radius); padding: 32px 28px; color: var(--white); }
.gtm-root .econ-aside h4 { font-size: 11px; letter-spacing: 0.2em; color: #A78BFA; text-transform: uppercase; margin-bottom: 16px; }
.gtm-root .econ-aside p { font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 14px; }
.gtm-root .econ-aside p strong { color: var(--white); font-weight: 700; }
.gtm-root .econ-aside p .good { color: #34D399; font-weight: 700; }
.gtm-root .econ-aside p .bad { color: #F87171; font-weight: 700; }
.gtm-root .earn-grid { display: grid; gap: 14px; margin-top: 20px; }
.gtm-root .earn-row { display: grid; grid-template-columns: 80px 1fr 80px; gap: 12px; align-items: center; }
.gtm-root .earn-label { font-size: 12px; font-weight: 600; color: var(--slate-dark); }
.gtm-root .earn-track { height: 32px; background: var(--slate-100); border-radius: 6px; overflow: hidden; }
.gtm-root .earn-fill { height: 100%; border-radius: 6px; }
.gtm-root .earn-val { font-size: 13px; font-weight: 700; color: var(--ink); text-align: right; }

.gtm-root .moat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; }
.gtm-root .moat-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius); padding: 32px 30px; position: relative; transition: background 0.2s, border-color 0.2s; }
.gtm-root .moat-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(167,139,250,0.4); }
.gtm-root .moat-num { font-family: 'Instrument Serif', serif; font-size: 48px; color: #A78BFA; line-height: 1; font-style: italic; margin-bottom: 12px; }
.gtm-root .moat-title { font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.3; }
.gtm-root .moat-body { font-size: 14px; color: rgba(255,255,255,0.72); line-height: 1.6; }

.gtm-root .risks { display: grid; gap: 16px; }
.gtm-root .risk { background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius); padding: 24px 28px; display: grid; grid-template-columns: 80px 1fr 2fr; gap: 24px; align-items: start; }
@media (max-width: 720px) { .gtm-root .risk { grid-template-columns: 1fr; gap: 12px; } }
.gtm-root .risk-severity { font-size: 10px; font-weight: 700; letter-spacing: 0.15em; padding: 6px 10px; border-radius: 6px; text-align: center; width: fit-content; white-space: nowrap; }
.gtm-root .risk-severity.high { background: var(--red-50); color: var(--red); }
.gtm-root .risk-severity.med { background: var(--amber-50); color: var(--amber); }
.gtm-root .risk-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: var(--slate); text-transform: uppercase; margin-bottom: 6px; }
.gtm-root .risk-name { font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.4; }
.gtm-root .risk-mit { font-size: 13.5px; color: var(--slate-dark); line-height: 1.6; }

.gtm-root .close-big { font-family: 'Instrument Serif', serif; font-size: clamp(32px, 4.5vw, 56px); line-height: 1.15; font-weight: 400; color: var(--white); letter-spacing: -0.015em; max-width: 1100px; margin-bottom: 56px; }
.gtm-root .close-big em { font-style: italic; color: #C4B5FD; }
.gtm-root .close-big .accent-teal { color: #34D399; font-style: normal; }
.gtm-root .close-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; padding: 48px 0 0; border-top: 1px solid rgba(255,255,255,0.15); }
.gtm-root .close-stat-k { font-family: 'Instrument Serif', serif; font-size: clamp(44px, 5vw, 64px); line-height: 1; color: #E0E7FF; margin-bottom: 8px; letter-spacing: -0.02em; }
.gtm-root .close-stat-v { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.5; }
.gtm-root .close-stat-v strong { color: var(--white); display: block; margin-bottom: 2px; }
.gtm-root footer.foot { background: #06080F; color: rgba(255,255,255,0.4); text-align: center; padding: 32px 24px; font-size: 12px; letter-spacing: 0.04em; }
`;

export default function GTM() {
  useEffect(() => {
    document.title = 'AYRO · Complete Go-to-Market Strategy';
    let added = false;
    let link = document.querySelector('link[data-gtm-fonts="1"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONT_HREF;
      link.setAttribute('data-gtm-fonts', '1');
      document.head.appendChild(link);
      added = true;
    }
    return () => { if (added && link && link.parentNode) link.parentNode.removeChild(link); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <style>{CSS}</style>
      <div className="gtm-root">
        <nav className="toc">
          <div className="toc-inner">
            <div className="toc-brand">GTM</div>
            <ul className="toc-links">
              <li><a href="#strategy">Strategy</a></li>
              <li><a href="#market">Market</a></li>
              <li><a href="#insight">Insight</a></li>
              <li><a href="#flywheel">Flywheel</a></li>
              <li><a href="#personas">Personas</a></li>
              <li><a href="#plan">90-Day Plan</a></li>
              <li><a href="#influencers">Influencers</a></li>
              <li><a href="#channels">Channels</a></li>
              <li><a href="#budget">Budget</a></li>
              <li><a href="#econ">Unit Economics</a></li>
              <li><a href="#moat">Moat</a></li>
              <li><a href="#risks">Risks</a></li>
            </ul>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-inner">
            <div className="eyebrow">Go-to-Market Strategy · v1.0 · Confidential</div>
            <h1 className="hero-title">
              Winning rideshare<br />
              by winning the<br />
              <em>drivers first.</em>
            </h1>
            <p className="hero-sub">
              AYRO is a rideshare platform that wins by putting drivers first. We prove this model in a single high-density, underserved market — the South Asian diaspora in Dallas–Fort Worth — then replicate the playbook into adjacent Indian-diaspora metros across North America.
            </p>
            <div className="hero-meta">
              <span>One wedge</span>
              <span>One city</span>
              <span>One compounding loop</span>
              <span>90 days to PMF</span>
            </div>
          </div>
        </section>

        <section className="block" id="strategy">
          <div className="block-inner">
            <div className="section-label">01 · The strategy</div>
            <h2 className="section-title">One wedge. <em>One compounding loop.</em></h2>
            <p className="section-intro">This document makes three commitments. Breadth comes later, after the core loop is proven.</p>

            <div className="thesis">
              <div className="thesis-label">The one-line strategy</div>
              <p className="thesis-body">Prove a <em>driver-prosperity flywheel</em> in the South Asian diaspora in DFW, then replicate into Houston, Austin, San Antonio, and eventually every major Indian-diaspora metro in North America.</p>
            </div>

            <div className="three-pillars">
              <div className="pillar">
                <div className="pillar-num">01</div>
                <div className="pillar-title">Driver-supply first, always</div>
                <p className="pillar-body">We do not run a single paid rider-acquisition dollar until we have 500 pre-verified drivers live in DFW. Marketplaces die from empty supply, not empty demand.</p>
              </div>
              <div className="pillar">
                <div className="pillar-num">02</div>
                <div className="pillar-title">Diaspora before mainstream</div>
                <p className="pillar-body">Our first 50,000 riders and 2,000 drivers come from the South Asian community in DFW — the most under-served, highest-frequency, most referral-rich rideshare demographic in the market.</p>
              </div>
              <div className="pillar">
                <div className="pillar-num">03</div>
                <div className="pillar-title">Compounding before paid blitz</div>
                <p className="pillar-body">Referral, community, and earned media must be load-bearing before paid ads scale. We pay for acceleration, not for growth itself.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="block alt" id="market">
          <div className="block-inner">
            <div className="section-label">02 · The market</div>
            <h2 className="section-title">The most <em>under-served</em> rideshare demographic in Texas.</h2>
            <p className="section-intro">450K+ South Asians live in DFW, concentrated in Plano, Frisco, Irving, and Richardson. They over-index on rideshare frequency, under-index on service quality, and sit entirely outside Uber's paid channel mix.</p>

            <div className="stat-grid">
              <div className="stat">
                <div className="stat-k">450K+</div>
                <div className="stat-v"><strong>Population in DFW</strong>Indian, Pakistani, Bangladeshi, Sri Lankan combined</div>
              </div>
              <div className="stat">
                <div className="stat-k">2.3×</div>
                <div className="stat-v"><strong>Rideshare frequency</strong>vs DFW metro average — dual-income, airport-heavy</div>
              </div>
              <div className="stat">
                <div className="stat-k">$118K</div>
                <div className="stat-v"><strong>Median household income</strong>vs $76K metro median</div>
              </div>
              <div className="stat">
                <div className="stat-k">20K+</div>
                <div className="stat-v"><strong>Eligible drivers</strong>Active Uber/Lyft drivers from this demographic alone</div>
              </div>
              <div className="stat">
                <div className="stat-k">$1.5B</div>
                <div className="stat-v"><strong>DFW rideshare market</strong>annual gross bookings</div>
              </div>
              <div className="stat">
                <div className="stat-k">98%</div>
                <div className="stat-v"><strong>Smartphone penetration</strong>App-install campaigns are efficient</div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dark" id="insight">
          <div className="block-inner">
            <div className="section-label">03 · The core insight</div>
            <h2 className="section-title">Marketplaces die from <em>empty supply</em> — not empty demand.</h2>
            <p className="section-intro">Uber's structural vulnerability is well-documented: 40%+ effective take rates, deeply negative driver NPS, 600,000+ members in r/uberdrivers whose shared culture is frustration. This is the pool AYRO fishes from.</p>

            <div className="compare">
              <div className="compare-col">
                <div className="compare-tag">THE UBER APPROACH</div>
                <div className="compare-title">Demand-first.</div>
                <ul className="compare-list">
                  <li>Acquire riders with paid ads</li>
                  <li>Use demand to pressure drivers into lower rates</li>
                  <li>Take rate creeps up (20% → 40%+)</li>
                  <li>Driver NPS collapses, but rider flywheel is locked in</li>
                  <li><strong>Works at IPO scale; fails at startup scale</strong></li>
                </ul>
              </div>
              <div className="compare-col right">
                <div className="compare-tag">THE AYRO APPROACH</div>
                <div className="compare-title">Supply-first.</div>
                <ul className="compare-list">
                  <li>Acquire drivers with better economics — <strong>85% take</strong></li>
                  <li>Dense supply creates lower ETAs and better coverage</li>
                  <li>Better service drives retention and referrals</li>
                  <li>Diaspora word-of-mouth delivers near-zero-CAC demand</li>
                  <li><strong>Compounds fastest in hyperlocal dense communities</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="flywheel">
          <div className="block-inner">
            <div className="section-label">04 · The flywheel</div>
            <h2 className="section-title">Four nodes. <em>One compounding loop.</em></h2>
            <p className="section-intro">Every marketing, product, and operations decision at AYRO serves this loop. Each node strengthens the next, and the cycle accelerates inside communities where trust is highest.</p>

            <div className="wheel">
              <svg className="arrow-layer" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <marker id="ah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#4F46E5" />
                  </marker>
                </defs>
                <path className="arrow-path" d="M 300 90 Q 400 60 500 90" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#ah)" />
                <path className="arrow-path" d="M 680 160 Q 740 300 680 440" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#ah)" />
                <path className="arrow-path" d="M 500 510 Q 400 540 300 510" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#ah)" />
                <path className="arrow-path" d="M 120 440 Q 60 300 120 160" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#ah)" />
              </svg>

              <article className="node-card n1">
                <div className="node-num">NODE 1</div>
                <div className="node-title">Drivers earn more</div>
                <div className="node-sub">85% take rate, daily payouts, bulk-ride corporate contracts, referral bonuses.</div>
              </article>
              <article className="node-card n2">
                <div className="node-num">NODE 2</div>
                <div className="node-title">Better coverage</div>
                <div className="node-sub">Higher earnings attract more drivers. Denser supply, lower ETAs, reliable airport pickup.</div>
              </article>
              <article className="node-card n3">
                <div className="node-num">NODE 3</div>
                <div className="node-title">Better rider experience</div>
                <div className="node-sub">Lower ETAs plus fair pricing plus community familiarity drive NPS, repeat, and referral.</div>
              </article>
              <article className="node-card n4">
                <div className="node-num">NODE 4</div>
                <div className="node-title">More rides</div>
                <div className="node-sub">More rides mean higher per-hour earnings for drivers — which loops back to Node 1.</div>
              </article>

              <div className="wheel-center" aria-hidden="true">
                <div className="c-brand">AYRO</div>
                <div className="c-sub">Orbit engine</div>
              </div>
            </div>

            <div className="flywheel-rule">
              <strong>The rule:</strong> If a proposed tactic does not move at least one node of this loop, we do not fund it. Channel spend, product features, partnerships — all measured by which node they touch.
            </div>
          </div>
        </section>

        <section className="block alt" id="personas">
          <div className="block-inner">
            <div className="section-label">05 · The people</div>
            <h2 className="section-title">Two personas. <em>One community.</em></h2>
            <p className="section-intro">Every persona-level tactic — copy, creative, channel selection, onboarding — is designed specifically for these two people. Mainstream comes later.</p>

            <div className="personas">
              <div className="persona">
                <div className="persona-head">
                  <div className="persona-tag">PERSONA A · RIDER</div>
                  <div className="persona-name">Priya, 34, Frisco</div>
                  <div className="persona-sub">Software engineer · 2 kids · Tamil-speaking household</div>
                </div>
                <div className="persona-body">
                  <dl>
                    <dt>Behavior</dt>
                    <dd>Commutes to downtown Dallas 2–3 days per week. Uses Uber 6–8 times weekly. Spends $300–$500/month on rideshare.</dd>
                    <dt>Context</dt>
                    <dd>Listens to Tamil FM during commutes. Active in 3 Frisco-area WhatsApp groups. Attends temple events monthly.</dd>
                    <dt>Acquisition path</dt>
                    <dd>Referral Hero (friend invite) → Tamil FM reinforcement → temple event activation.</dd>
                    <dt>Conversion trigger</dt>
                    <dd>$5 first ride + trusted friend endorsement + fair pricing visible vs Uber's surge pricing.</dd>
                  </dl>
                </div>
              </div>

              <div className="persona">
                <div className="persona-head">
                  <div className="persona-tag">PERSONA B · DRIVER</div>
                  <div className="persona-name">Raj, 42, Plano</div>
                  <div className="persona-sub">Full-time Uber/Lyft driver · 3+ years on platform</div>
                </div>
                <div className="persona-body">
                  <dl>
                    <dt>Behavior</dt>
                    <dd>Drives 40–50 hours per week. Takes home $1,100–$1,400/week after fuel and Uber's take rate.</dd>
                    <dt>Context</dt>
                    <dd>Member of r/uberdrivers, 2 driver-focused WhatsApp groups, 1 Facebook group (2,800 DFW drivers).</dd>
                    <dt>Acquisition path</dt>
                    <dd>WhatsApp group seed post → in-person ambassador conversation at gas station → 3-month fee waiver offer.</dd>
                    <dt>Conversion trigger</dt>
                    <dd>Real earnings comparison ($1,800/week AYRO vs $1,200 Uber for same hours) backed by verified driver testimonials.</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="plan">
          <div className="block-inner">
            <div className="section-label">06 · The 90-day plan</div>
            <h2 className="section-title">Three phases. <em>One gate</em> between each.</h2>
            <p className="section-intro">Each phase has a single strategic objective, a focused channel stack, and a pre-committed quantitative gate to advance to the next phase.</p>

            <div className="phases-grid">
              <div className="phase">
                <div className="phase-tag">PHASE 1 · IGNITE</div>
                <h3 className="phase-title">Soft Launch</h3>
                <div className="phase-dur">Days 1–30 · Build driver supply. Zero paid rider ads.</div>
                <ul className="phase-list">
                  <li>Launch with Sergio Avedian (The Rideshare Guy) and Torsten Kunert (Rideshare Professor) endorsements — 250K+ combined driver audience</li>
                  <li>Blitz driver recruiting across Indeed, ZipRecruiter, gas-station ambassadors</li>
                  <li>Activate diaspora channels: Tamil FM, Telugu FM, temples, WhatsApp groups</li>
                  <li>Launch Campus Ambassador program at UTD, SMU, TCU, UNT</li>
                  <li>Infiltrate 12 known DFW-area driver Facebook and WhatsApp groups</li>
                  <li>3-month platform fee waiver for first 500 drivers</li>
                </ul>
                <div className="phase-metrics">
                  <div><div className="phase-metric-k">500</div><div className="phase-metric-v">Active drivers</div></div>
                  <div><div className="phase-metric-k">10K</div><div className="phase-metric-v">Weekly riders</div></div>
                  <div><div className="phase-metric-k">{'<$3'}</div><div className="phase-metric-v">Blended CAC</div></div>
                </div>
              </div>

              <div className="phase">
                <div className="phase-tag">PHASE 2 · ACCELERATE</div>
                <h3 className="phase-title">Ignite</h3>
                <div className="phase-dur">Days 31–60 · Turn on paid rider acquisition.</div>
                <ul className="phase-list">
                  <li>Google UAC and Apple Search Ads targeting "Uber alternative" keywords</li>
                  <li>Meta (FB + IG) app-install campaigns to diaspora lookalikes</li>
                  <li>Launch Referral Hero (rider + driver) — target 30% of installs from referral</li>
                  <li>Hyperlocal geofencing at DFW airport, stadiums, concert venues</li>
                  <li>Micro-influencer network (10–20 creators, 10K–100K followers)</li>
                  <li>Zoho email + SMS lifecycle flows to reduce churn</li>
                </ul>
                <div className="phase-metrics">
                  <div><div className="phase-metric-k">2K</div><div className="phase-metric-v">Active drivers</div></div>
                  <div><div className="phase-metric-k">100K</div><div className="phase-metric-v">Weekly riders</div></div>
                  <div><div className="phase-metric-k">{'<5 min'}</div><div className="phase-metric-v">Average ETA</div></div>
                </div>
              </div>

              <div className="phase">
                <div className="phase-tag">PHASE 3 · SELF-SUSTAIN</div>
                <h3 className="phase-title">Orbit</h3>
                <div className="phase-dur">Days 61–90 · Replicate and expand.</div>
                <ul className="phase-list">
                  <li>Open Houston as City 2 — exact DFW playbook, diaspora-first motion</li>
                  <li>Land first B2B bulk pilot with 500+ employee DFW employer</li>
                  <li>"Quit Uber" TikTok challenge featuring real driver earnings comparisons</li>
                  <li>"1,000th AYRO Driver" milestone PR campaign — press and local TV</li>
                  <li>Launch AYRO Gold loyalty program for rider lock-in</li>
                </ul>
                <div className="phase-metrics">
                  <div><div className="phase-metric-k">3K+</div><div className="phase-metric-v">Drivers total</div></div>
                  <div><div className="phase-metric-k">115K</div><div className="phase-metric-v">Combined WAU</div></div>
                  <div><div className="phase-metric-k">{'>60%'}</div><div className="phase-metric-v">D30 retention</div></div>
                </div>
              </div>
            </div>

            <div className="gate-note">
              <strong>Phase 1 kill criterion.</strong> If we do not hit 300 active drivers by Day 21, we pause rider acquisition entirely and reallocate the full Phase 2 paid budget to driver supply. No exceptions. Launching rider demand against insufficient supply is the single fastest way to kill a marketplace.
            </div>
          </div>
        </section>

        <section className="block alt" id="influencers">
          <div className="block-inner">
            <div className="section-label">07 · Influencer partnerships</div>
            <h2 className="section-title">Two voices the <em>driver community already trusts.</em></h2>
            <p className="section-intro">We have signed two of the most influential driver-advocacy creators in US rideshare as official AYRO partners. Their endorsement gives us credibility inside communities that are deeply skeptical of new platforms — a cold-start problem money alone cannot solve.</p>

            <div className="influencer-banner">
              <div className="influencer-banner-icon">★</div>
              <div className="influencer-banner-text">
                <div className="influencer-banner-tag">WHY THIS MATTERS</div>
                <div className="influencer-banner-title">Drivers don't trust platforms. They trust <em>other drivers.</em> These two creators have spent nearly a decade earning that trust — and they're now aligned with AYRO.</div>
              </div>
            </div>

            <div className="influencers-grid">
              <div className="influencer-card">
                <div className="influencer-head">
                  <div className="influencer-avatar">SA</div>
                  <div className="influencer-intro">
                    <div className="influencer-name">Sergio Avedian</div>
                    <div className="influencer-role">Senior Contributor · The Rideshare Guy</div>
                    <span className="influencer-reach">★ 200K+ COMBINED REACH</span>
                  </div>
                </div>
                <div className="influencer-body">
                  <p>Sergio is the senior voice of The Rideshare Guy — the largest rideshare driver community on YouTube. Former Wall Street trader turned full-time gig economist, with 10,000+ rides personally driven and hundreds of media citations in Business Insider, Jalopnik, Motley Fool, and beyond.</p>

                  <ul className="influencer-credentials">
                    <li>Host of "Show Me The Money Club" — weekly live show on The Rideshare Guy</li>
                    <li>Interviewed Lyft CEO David Risher on camera in 2024</li>
                    <li>Speaker at Zócalo Public Square panels on gig economy policy</li>
                    <li>Quoted as the default driver expert in national press</li>
                    <li>Personal brand: sergioavedian.com</li>
                  </ul>

                  <div className="influencer-role-heading">AYRO role</div>
                  <p className="influencer-role-body">Sergio hosts a dedicated AYRO launch series on "Show Me The Money Club" — real driver earnings comparisons (Uber vs AYRO), live driver onboarding walkthroughs, and an exclusive founder interview. Also produces 3–5 short-form UGC videos explaining why he switched.</p>
                </div>
              </div>

              <div className="influencer-card">
                <div className="influencer-head">
                  <div className="influencer-avatar">TK</div>
                  <div className="influencer-intro">
                    <div className="influencer-name">Torsten Kunert</div>
                    <div className="influencer-role">The Rideshare Professor · CEO, GigRocket.com</div>
                    <span className="influencer-reach">★ 50K+ YOUTUBE · 1M+ HELPED</span>
                  </div>
                </div>
                <div className="influencer-body">
                  <p>Torsten has been the Rideshare Professor since 2016 — one of the longest-running, most respected driver-education channels on YouTube. Runs the Rideshare Driving School, organized multiple nationwide driver movements, and by his own count has helped over a million drivers get started, stay safe, and earn more.</p>

                  <ul className="influencer-credentials">
                    <li>YouTube channel since April 2016 — original driver-education brand</li>
                    <li>Operates Rideshare Driving School (3-course curriculum, $69 bundle)</li>
                    <li>CEO of GigRocket.com — driver tools and community platform</li>
                    <li>Organized the March 2022 national driver action on gas and safety</li>
                    <li>5.0 Lyft driver rating · 4.96 Uber driver rating · still active</li>
                  </ul>

                  <div className="influencer-role-heading">AYRO role</div>
                  <p className="influencer-role-body">Torsten produces a dedicated "AYRO for Drivers" training module inside the Rideshare Driving School curriculum — the first and only onboarding content new rideshare drivers will see. Also drives top-of-funnel via his YouTube channel and GigRocket community.</p>
                </div>
              </div>
            </div>

            <div className="influencer-math">
              <div className="influencer-math-title">What this unlocks</div>
              <p>Two things money cannot buy: <strong>zero-CAC credibility</strong> inside the exact audience we need to recruit from, and a <strong>defensible information asymmetry</strong> against Uber and Lyft's recruiting. A driver watching Sergio compare earnings on camera, or taking Torsten's onboarding course, is a driver we acquired for a fraction of what a paid ad campaign would cost — and one who arrives pre-educated, pre-convinced, and far more likely to stay active beyond week 4. Conservatively, we estimate these two partnerships alone contribute <strong>25–35% of Phase 1 driver signups</strong> and cut our blended driver CAC by <strong>30–40%</strong>.</p>
            </div>
          </div>
        </section>

        <section className="block" id="channels">
          <div className="block-inner">
            <div className="section-label">08 · The channel stack</div>
            <h2 className="section-title">12 channels doing <em>90% of the work.</em></h2>
            <p className="section-intro">Community and driver channels carry Phase 1. Paid scales in Phase 2. Earned and B2B drive Phase 3. Every channel has an owner, a budget, a KPI, and a documented kill criterion.</p>

            <div className="channels">
              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">Driver acquisition</div>
                  <span className="phase-pill p1">P1 LEAD</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>Indeed / ZipRecruiter / iHire Transportation</li>
                    <li>In-person gas-station ambassadors</li>
                    <li>WhatsApp + Facebook driver groups</li>
                    <li>Driver-refer-a-driver bonus ($50 after 10th ride)</li>
                  </ul>
                </div>
              </div>

              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">Community &amp; diaspora</div>
                  <span className="phase-pill p1">P1 LEAD</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>Tamil FM + Telugu FM radio sponsorships</li>
                    <li>Temples, mosques, community centers</li>
                    <li>Campus ambassadors (UTD, SMU, TCU, UNT)</li>
                    <li>WhatsApp broadcast group seeding</li>
                  </ul>
                </div>
              </div>

              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">Paid digital</div>
                  <span className="phase-pill p2">P2 LEAD</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>Google UAC + Apple Search Ads</li>
                    <li>Meta (Facebook + Instagram) app installs</li>
                    <li>TikTok hybrid — organic + paid amplification</li>
                    <li>Hyperlocal geofencing (GroundTruth, GeoFence Pro)</li>
                  </ul>
                </div>
              </div>

              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">Referral, CRM &amp; earned</div>
                  <span className="phase-pill p23">P2–P3</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>Referral Hero (rider + driver bonuses)</li>
                    <li>Zoho email + SMS lifecycle flows</li>
                    <li>Sergio Avedian (The Rideshare Guy) — 200K+ driver audience, signed</li>
                    <li>Torsten Kunert (Rideshare Professor) — 50K+ subs, signed</li>
                    <li>Reddit AMA + press strategy (TechCrunch, The Information)</li>
                  </ul>
                </div>
              </div>

              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">B2B partnerships</div>
                  <span className="phase-pill p3">P3 LEAD</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>AYRO for Business (corporate bulk credits)</li>
                    <li>Hotels, airports, hospitality</li>
                    <li>Car dealerships (service loaners)</li>
                    <li>Event partnerships (Stars, Mavericks, venues)</li>
                  </ul>
                </div>
              </div>

              <div className="channel">
                <div className="channel-top">
                  <div className="channel-title">Content &amp; PR</div>
                  <span className="phase-pill p23">P2–P3</span>
                </div>
                <div className="channel-body">
                  <ul className="channel-items">
                    <li>Founder LinkedIn + X thought leadership</li>
                    <li>Medium long-form (1x/month feature-quality)</li>
                    <li>Tier-1 press: TechCrunch, The Information, BI</li>
                    <li>Local: Dallas Morning News, Fort Worth Star-Telegram</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block alt" id="budget">
          <div className="block-inner">
            <div className="section-label">09 · The budget</div>
            <h2 className="section-title">$1.12M over 90 days. <em>Driver-first dollars.</em></h2>
            <p className="section-intro">21% of spend goes to driver supply before a single paid rider ad runs. The heaviest spend category is community and paid digital, scaling only after supply is proven.</p>

            <div className="budget-wrap">
              <table className="budget">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th className="num">Phase 1</th>
                    <th className="num">Phase 2</th>
                    <th className="num">Phase 3</th>
                    <th className="num">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Driver acquisition</td><td className="num">$90K</td><td className="num">$75K</td><td className="num">$70K</td><td className="num">$235K</td></tr>
                  <tr><td>Paid digital (rider)</td><td className="num">$0</td><td className="num">$115K</td><td className="num">$140K</td><td className="num">$255K</td></tr>
                  <tr><td>Community &amp; diaspora</td><td className="num">$43K</td><td className="num">$43K</td><td className="num">$50K</td><td className="num">$136K</td></tr>
                  <tr><td>Referral program (incentives)</td><td className="num">$15K</td><td className="num">$80K</td><td className="num">$60K</td><td className="num">$155K</td></tr>
                  <tr><td>Influencer &amp; content</td><td className="num">$10K</td><td className="num">$50K</td><td className="num">$40K</td><td className="num">$100K</td></tr>
                  <tr><td>PR &amp; earned media</td><td className="num">$5K</td><td className="num">$10K</td><td className="num">$15K</td><td className="num">$30K</td></tr>
                  <tr><td>City 2 (Houston) launch</td><td className="num">$0</td><td className="num">$0</td><td className="num">$80K</td><td className="num">$80K</td></tr>
                  <tr><td>Tooling, CRM, analytics</td><td className="num">$9K</td><td className="num">$9K</td><td className="num">$9K</td><td className="num">$27K</td></tr>
                  <tr><td>Contingency (10%)</td><td className="num">$17K</td><td className="num">$38K</td><td className="num">$47K</td><td className="num">$102K</td></tr>
                  <tr className="total"><td>Phase total</td><td className="num">$189K</td><td className="num">$420K</td><td className="num">$511K</td><td className="num">$1.12M</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="block" id="econ">
          <div className="block-inner">
            <div className="section-label">10 · Unit economics</div>
            <h2 className="section-title">The flywheel — <em>in numbers.</em></h2>
            <p className="section-intro">Rider LTV:CAC of 16–24× is exceptional because diaspora referral effectively subsidizes paid acquisition. Driver earnings are 40–60% higher than Uber even after AYRO keeps only 15% of fare. Both sides win simultaneously.</p>

            <div className="econ-grid">
              <div className="econ-chart">
                <div className="chart-title">Rider LTV vs CAC — blended, 12-month</div>
                <div className="chart-sub">CAC stays disciplined because organic and referral carry the load.</div>

                <div className="bars">
                  <div className="bar-row">
                    <div className="bar-label">Phase 1</div>
                    <div className="bar-track">
                      <div className="bar-fill bar-cac" style={{ width: '2.5%' }}>$3</div>
                      <div className="bar-fill bar-ltv" style={{ width: '60%', top: '50%', height: 'auto', bottom: 0 }}>$72</div>
                    </div>
                    <div className="bar-value-side">24×</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar-label">Phase 2</div>
                    <div className="bar-track">
                      <div className="bar-fill bar-cac" style={{ width: '5%' }}>$6</div>
                      <div className="bar-fill bar-ltv" style={{ width: '80%', top: '50%', height: 'auto', bottom: 0 }}>$96</div>
                    </div>
                    <div className="bar-value-side">16×</div>
                  </div>
                  <div className="bar-row">
                    <div className="bar-label">Phase 3</div>
                    <div className="bar-track">
                      <div className="bar-fill bar-cac" style={{ width: '5.8%' }}>$7</div>
                      <div className="bar-fill bar-ltv" style={{ width: '100%', top: '50%', height: 'auto', bottom: 0 }}>$120</div>
                    </div>
                    <div className="bar-value-side">17×</div>
                  </div>
                </div>

                <div className="legend">
                  <div className="legend-item"><span className="legend-dot bar-cac"></span>CAC per rider</div>
                  <div className="legend-item"><span className="legend-dot bar-ltv"></span>12-month LTV</div>
                </div>

                <div className="chart-title" style={{ marginTop: 40 }}>Driver weekly earnings — AYRO vs Uber</div>
                <div className="chart-sub">Drivers take home meaningfully more per hour, every phase.</div>
                <div className="earn-grid">
                  <div className="earn-row">
                    <div className="earn-label">Uber</div>
                    <div className="earn-track"><div className="earn-fill" style={{ width: '55%', background: '#94A3B8' }}></div></div>
                    <div className="earn-val">$1,200</div>
                  </div>
                  <div className="earn-row">
                    <div className="earn-label">AYRO P1</div>
                    <div className="earn-track"><div className="earn-fill" style={{ width: '75%', background: '#A78BFA' }}></div></div>
                    <div className="earn-val">$1,650</div>
                  </div>
                  <div className="earn-row">
                    <div className="earn-label">AYRO P3</div>
                    <div className="earn-track"><div className="earn-fill" style={{ width: '89%', background: '#4F46E5' }}></div></div>
                    <div className="earn-val">$1,950</div>
                  </div>
                </div>
              </div>

              <aside className="econ-aside">
                <h4>Why this works</h4>
                <p><span className="good">15%</span> AYRO take rate vs <span className="bad">40%+</span> Uber effective take rate.</p>
                <p>Drivers earn <strong>40–60% more per hour</strong>. Platform still hits <strong>$1.60–$2.10 gross margin per ride</strong> at density.</p>
                <p>CAC payback period: <strong>under 1.5 months</strong>. Diaspora referral cuts paid CAC by an estimated <strong>40%</strong>.</p>
                <p style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.15)', fontStyle: 'italic', color: '#A78BFA' }}>Both sides of the marketplace win simultaneously. That is the flywheel in numbers.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="block dark" id="moat">
          <div className="block-inner">
            <div className="section-label">11 · Competitive moat</div>
            <h2 className="section-title">Why Uber <em>can't copy this.</em></h2>
            <p className="section-intro">Four structural advantages — none of which scale from a New York headquarters. AYRO's moat is not feature parity. It is relationship density in a geography Uber has no native channel into.</p>

            <div className="moat-grid">
              <div className="moat-card">
                <div className="moat-num">01</div>
                <h3 className="moat-title">Driver economics Uber can't match</h3>
                <p className="moat-body">Uber cannot profitably drop its take rate to 15%. Public shareholder commitments require the opposite trajectory. Our cost structure was designed for this rate; theirs is locked above it.</p>
              </div>
              <div className="moat-card">
                <div className="moat-num">02</div>
                <h3 className="moat-title">Community trust is non-purchasable</h3>
                <p className="moat-body">Tamil FM sponsorships, temple partnerships, and WhatsApp group credibility are earned over months of ground-level presence — not bought with a TV campaign. A national brand cannot fake local.</p>
              </div>
              <div className="moat-card">
                <div className="moat-num">03</div>
                <h3 className="moat-title">Hyperlocal density beats national reach</h3>
                <p className="moat-body">We need to win 5 zip codes, not 500 cities. Our $1.12M beats a $100M national counter-campaign inside those 5 zip codes because we are buying relationships, not impressions.</p>
              </div>
              <div className="moat-card">
                <div className="moat-num">04</div>
                <h3 className="moat-title">Retention is our marketing</h3>
                <p className="moat-body">Once a driver earns $600/week more on AYRO, they do not go back. Once a rider's Tamil-speaking driver arrives in 4 minutes, they do not open Uber. Retention IS the moat.</p>
              </div>
              <div className="moat-card">
                <div className="moat-num">05</div>
                <h3 className="moat-title">The community's trusted voices are with us</h3>
                <p className="moat-body">Sergio Avedian and Torsten Kunert have spent a decade building credibility with US rideshare drivers. They don't endorse platforms lightly. Uber cannot buy this — and Uber certainly cannot buy it back.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="block alt" id="risks">
          <div className="block-inner">
            <div className="section-label">12 · Risks &amp; mitigation</div>
            <h2 className="section-title">What can <em>go wrong.</em></h2>
            <p className="section-intro">We've stress-tested this plan. Every risk has a pre-committed mitigation, a tripwire, and an owner.</p>

            <div className="risks">
              <div className="risk">
                <span className="risk-severity high">HIGH</span>
                <div>
                  <div className="risk-label">Risk</div>
                  <div className="risk-name">Uber subsidizes DFW drivers to block us</div>
                </div>
                <div>
                  <div className="risk-label">Mitigation</div>
                  <p className="risk-mit">Their 40%+ take rate makes a sustained subsidy war structurally uneconomic for Uber. We publish driver-earnings transparency weekly. We are the lower-cost operator and can outlast a temporary campaign.</p>
                </div>
              </div>

              <div className="risk">
                <span className="risk-severity high">HIGH</span>
                <div>
                  <div className="risk-label">Risk</div>
                  <div className="risk-name">Driver supply can't keep up with rider demand</div>
                </div>
                <div>
                  <div className="risk-label">Mitigation</div>
                  <p className="risk-mit">Hard-coded Phase 1 kill criterion: if we miss 300 drivers by Day 21, all Phase 2 paid rider budget redirects to supply. No exceptions. No founder override.</p>
                </div>
              </div>

              <div className="risk">
                <span className="risk-severity med">MED</span>
                <div>
                  <div className="risk-label">Risk</div>
                  <div className="risk-name">Paid CPIs inflate and break unit economics</div>
                </div>
                <div>
                  <div className="risk-label">Mitigation</div>
                  <p className="risk-mit">Per-channel kill thresholds are pre-committed. Organic and referral are load-bearing by design — we survive a paid-channel collapse because they were never the primary loop.</p>
                </div>
              </div>

              <div className="risk">
                <span className="risk-severity med">MED</span>
                <div>
                  <div className="risk-label">Risk</div>
                  <div className="risk-name">Community goodwill misfires — cultural misstep</div>
                </div>
                <div>
                  <div className="risk-label">Mitigation</div>
                  <p className="risk-mit">All diaspora marketing reviewed by a paid 5-member community advisory board before launch. Native-language copy verified by two independent reviewers.</p>
                </div>
              </div>

              <div className="risk">
                <span className="risk-severity med">MED</span>
                <div>
                  <div className="risk-label">Risk</div>
                  <div className="risk-name">Regulatory action (TX rideshare law changes)</div>
                </div>
                <div>
                  <div className="risk-label">Mitigation</div>
                  <p className="risk-mit">Legal counsel retained. Standard TNC compliance. We operate inside the established regulatory frame and monitor Austin quarterly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block dark">
          <div className="block-inner">
            <div className="section-label">13 · The bottom line</div>
            <p className="close-big">
              In 90 days we will have <em>100K weekly active riders</em>, <em>3,000 active drivers</em> earning <span className="accent-teal">50%+ more than Uber</span>, and a replicable playbook across two cities.
            </p>

            <div className="close-stats">
              <div>
                <div className="close-stat-k">$1.12M</div>
                <div className="close-stat-v"><strong>90-day marketing budget</strong>across 12 focused channels</div>
              </div>
              <div>
                <div className="close-stat-k">16–24×</div>
                <div className="close-stat-v"><strong>Rider LTV : CAC</strong>blended, 12-month basis</div>
              </div>
              <div>
                <div className="close-stat-k">1.5 mo</div>
                <div className="close-stat-v"><strong>CAC payback period</strong>enables rapid capital efficiency</div>
              </div>
              <div>
                <div className="close-stat-k">2</div>
                <div className="close-stat-v"><strong>Cities launched</strong>DFW + Houston, validated playbook</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="foot">
          AYRO Rides · Driver-First Rideshare · Dallas–Fort Worth · Complete GTM Strategy v1.0
        </footer>
      </div>
    </div>
  );
}
