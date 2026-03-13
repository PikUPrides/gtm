import React from 'react';
import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

function AyroOrbitDiagram() {
  // Calculate equal spacing for 7 nodes around a circle
  const centerX = 300, centerY = 260, radius = 210;
  const nodeRadius = 45;
  const angleStep = (2 * Math.PI) / 7; // 360° / 7 nodes
  
  // Start from top ( -π/2 or 270°) and go counter-clockwise
  const nodes = [
    { icon: '🚶', label: 'MORE RIDERS', color: '#007aff', angle: -Math.PI/2 },
    { icon: '📈', label: 'MORE RIDES', color: '#ef4444', angle: -Math.PI/2 - angleStep },
    { icon: '💰', label: 'HIGHER EARNINGS', color: '#ec4899', angle: -Math.PI/2 - 2*angleStep },
    { icon: '😊', label: 'BETTER RIDER EXPERIENCE', color: '#8b5cf6', angle: -Math.PI/2 - 3*angleStep },
    { icon: '⚡', label: 'FASTER PICKUPS', color: '#d97706', angle: -Math.PI/2 - 4*angleStep },
    { icon: '📍', label: 'BETTER COVERAGE', color: '#8b5cf6', angle: -Math.PI/2 - 5*angleStep },
    { icon: '🚗', label: 'MORE DRIVERS', color: '#00c781', angle: -Math.PI/2 - 6*angleStep }
  ].map(n => ({
    ...n,
    cx: Math.round(centerX + radius * Math.cos(n.angle)),
    cy: Math.round(centerY + radius * Math.sin(n.angle))
  }));
  
  const svgHTML = `<style>
    @keyframes spinOrbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .orbit-dash{animation:spinOrbit 40s linear infinite;transform-origin:300px 260px}
    .orbit-dot{animation:spinOrbit 20s linear infinite;transform-origin:300px 260px}
  </style>
  <circle cx="300" cy="260" r="210" fill="none" stroke="rgba(66,61,249,0.06)" stroke-width="60"/>
  <circle cx="300" cy="260" r="210" fill="none" stroke="rgba(66,61,249,0.08)" stroke-width="1"/>
  <g class="orbit-dash"><circle cx="300" cy="260" r="155" fill="none" stroke="rgba(66,61,249,0.18)" stroke-width="2" stroke-dasharray="12 8"/></g>
  <circle cx="300" cy="260" r="75" fill="white" stroke="rgba(66,61,249,0.15)" stroke-width="1.5"/>
  <text x="300" y="248" text-anchor="middle" fill="#423DF9" font-family="sans-serif" font-size="24" font-weight="900">AYRO</text>
  <text x="300" y="270" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="2">ORBIT</text>
  <text x="300" y="286" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="2">ENGINE</text>
  ${nodes.map(n => `
  <circle cx="${n.cx}" cy="${n.cy}" r="45" fill="white" stroke="rgba(${parseInt(n.color.slice(1,3),16)},${parseInt(n.color.slice(3,5),16)},${parseInt(n.color.slice(5,7),16)},0.35)" stroke-width="2"/>
  <text x="${n.cx}" y="${n.cy-8}" text-anchor="middle" font-size="24">${n.icon}</text>
  <rect x="${n.cx-65}" y="${n.cy+5}" width="130" height="22" rx="4" fill="white" opacity="0.7"/>
  <text x="${n.cx}" y="${n.cy+18}" text-anchor="middle" fill="${n.color}" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1">${n.label}</text>`).join('')}
  <g class="orbit-dot"><circle cx="300" cy="105" r="6" fill="#423DF9" opacity="0.6"/></g>`;
  
  return (
    <div className="flex justify-center my-10">
      <div style={{width:'100%',maxWidth:700,background:'rgba(255,255,255,0.92)',borderRadius:20,padding:'40px 12px',border:'1px solid #e5e7eb',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
        <svg viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}} dangerouslySetInnerHTML={{__html:svgHTML}} />
      </div>
    </div>
  );
}

export default function Page() {
  const nodes = [
    {num:1,icon:'🚶',title:'MORE RIDERS',sub:'Growing rider demand',feeds:'More Drivers',desc:'More riders create demand density. Paid ads, organic social, hyperlocal geofencing, and diaspora outreach bring riders in. Every new rider increases demand, making it more profitable for drivers to join.',tools:['Google Ads','Facebook & IG','TikTok Ads','Snapchat Ads','YouTube Ads','Reddit Ads','GroundTruth','GeoFence Pro','Nextdoor','Referral Hero','Vibe (Roku TV)','Audiogo Radio'],target:'50K riders in 90 days',color:'#007aff'},
    {num:2,icon:'🚗',title:'MORE DRIVERS',sub:'Grow the driver network',feeds:'Better Coverage',desc:'More demand attracts drivers. Targeted driver-side campaigns via diaspora FM radio, WhatsApp groups, and campus ambassadors recruit drivers where they already gather.',tools:['Tamil FM','Telugu FM','WhatsApp Marketing','Temples / Churches','Student Ambassadors','Facebook Groups','LinkedIn Ads','Discord','Indeed / ZipRecruiter'],target:'2,000 active drivers',color:'#00c781'},
    {num:3,icon:'📍',title:'BETTER COVERAGE',sub:'Denser service areas',feeds:'Faster Pickups',desc:'More drivers means better geographic coverage. Drivers stationed near popular zones reduce empty miles and improve availability.',tools:['Zone Management','Driver Positioning','Demand Forecasting','Hotspot Alerts','Surge Pricing'],target:'80% coverage of metro area',color:'#8b5cf6'},
    {num:4,icon:'⚡',title:'FASTER PICKUPS',sub:'Shorter wait times',feeds:'Better Rider Experience',desc:'Driver density + better coverage = shorter ETAs. Combined with fair pricing, this makes AYRO the reliable daily choice.',tools:['Zoho Campaigns','ManyChat','SMS Marketing','Google My Business','Push Notifications','In-App Referrals'],target:'<5 min avg ETA',color:'#d97706'},
    {num:5,icon:'😊',title:'BETTER RIDER EXPERIENCE',sub:'Smoother rides, every time',feeds:'More Rides',desc:'Faster pickups + reliable service = rider delight. Great experiences drive repeat usage, positive reviews, and word-of-mouth referrals.',tools:['In-App Feedback','Push Notifications','Loyalty Program','Priority Support','Ride Credits','Surge Transparency'],target:'4.8+ app rating',color:'#8b5cf6'},
    {num:6,icon:'📈',title:'MORE RIDES',sub:'Growing transaction volume',feeds:'Higher Earnings',desc:'Great experience drives repeat usage and word-of-mouth. Strategic B2B partnerships inject bulk ride volume.',tools:['Referral Hero','Promo Codes','Spotify Ads','Pinterest Ads','Influencers','Threads / X'],target:'500K rides / month',color:'#ef4444'},
    {num:7,icon:'💰',title:'HIGHER EARNINGS',sub:'Driver prosperity reinvests',feeds:'More Drivers',desc:'More rides + efficient matching = higher driver earnings. Prosperous drivers stay longer, refer friends, and provide better service — restarting the cycle.',tools:['Referral Hero','Driver Bonuses','Peak Pay','Weekly Payouts','Driver Perks'],target:'$800+/week driver earnings',color:'#ec4899'}
  ];
  
  const loops = [
    {icon:'🔄',title:'Driver Prosperity Loop',flow:'More Drivers → Better Coverage → Faster Pickups → Better Rider Experience → More Rides → Higher Earnings → ↻ More Drivers',desc:'The core AYRO Orbit cycle. Driver prosperity is the foundation — when drivers earn more, they stay longer, refer friends, and deliver better service.'},
    {icon:'🗣️',title:'Word-of-Mouth Loop',flow:'Great Ride → Rider Tells Friends → Referral Bonus → New Rider Signs Up → ↻ Repeat',desc:'Diaspora community trust acts as a zero-CAC amplifier.'},
    {icon:'📉',title:'Coverage Expansion Loop',flow:'More Drivers → Better Zone Coverage → Faster Pickups in New Areas → New Riders Join → ↻ More Demand',desc:'Expanding geographic coverage opens new rider segments, driving further driver recruitment.'},
    {icon:'🏢',title:'B2B Bulk Injection Loop',flow:'Partner (Costco, Hotels) → Bulk Rides Injected → Driver Utilization ↑ → Driver Earnings ↑ → ↻ More Drivers Stay',desc:'Strategic partnerships inject guaranteed ride volume, stabilizing driver earnings.'}
  ];
  
  const vendorMap = [
    ['Google Ads','Rider Acq.','Rider','High-intent search capture for "rides near me"','Launch'],
    ['Facebook & Instagram Ads','Rider Acq.','Both','Lookalike audiences, retargeting, driver recruitment','Launch'],
    ['TikTok Ads','Rider Acq.','Rider','Viral short-form content for Gen Z riders','Launch'],
    ['Snapchat Ads','Rider Acq.','Rider','Campus and young-demo geo-targeted ads','Launch'],
    ['YouTube Ads','Rider Acq. / Data','Both','Brand awareness + retargeting qualified leads','Launch'],
    ['GroundTruth','Rider Acq.','Rider','Geofence airports, malls, events for hyperlocal push','Launch'],
    ['GeoFence Pro','Rider Acq.','Rider','Geo-trigger ads when riders enter key zones','Launch'],
    ['Nextdoor','Rider Acq. / Driver','Both','Neighborhood-level trust & both-side recruitment','Launch'],
    ['Referral Hero','Reinvest / Rider Acq.','Both','Referral program engine — zero-CAC rider loop','Launch'],
    ['Vibe (Roku TV)','Rider Acq.','Rider','CTV brand awareness in key metros','Launch'],
    ['Audiogo Radio','Rider Acq.','Rider','Audio ads for commuters, low-CPM awareness','Launch'],
    ['Tamil FM / Telugu FM','Driver','Driver','Diaspora driver recruitment via trusted radio','Growth'],
    ['Temples / Churches','Driver','Both','Community bulletin boards, event partnerships','Growth'],
    ['WhatsApp Marketing','Driver / Experience','Both','Direct engagement in diaspora group chats','Growth'],
    ['Student Ambassadors','Driver / Rider Acq.','Both','Campus reps drive both rider & driver signups','Growth'],
    ['Zoho Campaigns','Experience','Both','CRM email flows for onboarding, retention, win-back','Growth'],
    ['ManyChat','Experience','Rider','Chat-based engagement, promo delivery, support','Growth'],
    ['SMS Marketing','Experience','Both','Re-engagement nudges for dormant users','Growth'],
    ['Costco / Sam\'s Club','More Rides','Rider','B2B ride credits, in-store promotions, bulk injection','Scale'],
    ['Cinemark','More Rides','Rider','Movie + ride bundle promos, geofenced ads','Scale'],
    ['Car Dealerships','More Rides','Both','Service loaner replacement rides, driver recruitment','Scale'],
    ['Hotels & Airports','More Rides','Rider','Concierge integration, arrival pickup partnerships','Scale'],
    ['Medium Blog','Data','Both','Thought leadership, SEO long-tail traffic','Growth'],
    ['Press & Media','Data','Both','PR coverage drives credibility and organic search','Growth'],
    ['Influencers','Reinvest','Rider','Paid UGC reduces CAC via social proof at scale','Growth']
  ];
  
  const phases = [
    {phase:'Phase 1 — Ignite',period:'Months 1–3',sub:'Push the Orbit from Standstill',items:['Blitz paid ads across Google, Meta, TikTok, Snapchat — all pointed at rider acquisition (Node 1)','Activate hyperlocal geofencing via GroundTruth & GeoFence Pro around airports, universities, malls','Simultaneously recruit drivers via diaspora FM, WhatsApp, temples, and Nextdoor (Node 2)','Launch Referral Hero program — both riders and drivers get credits for referrals (Node 6 → Node 1)','Set up Zoho CRM + ManyChat for onboarding drip sequences'],stats:[{n:'50K',l:'App Downloads'},{n:'500',l:'Active Drivers'},{n:'$4',l:'Avg CAC'}],color:'#007aff'},
    {phase:'Phase 2 — Accelerate',period:'Months 4–8',sub:'Build Momentum via Loops',items:['Activate word-of-mouth loop — diaspora networks, student ambassadors, Discord communities','Launch B2B pilot partnerships: Costco, Sam\'s Club, Cinemark (Node 4 — bulk ride injection)','Scale CRM/email/SMS retention flows to reduce churn (Node 3 — experience)','Begin content Ayro Orbit: Medium blog, press outreach, Quora (Node 5 — authority)','Use ride data to optimize pricing, routing, and driver-rider matching algorithms'],stats:[{n:'250K',l:'App Downloads'},{n:'1.5K',l:'Active Drivers'},{n:'$2.50',l:'Avg CAC'}],color:'#00c781'},
    {phase:'Phase 3 — Self-Sustain',period:'Months 9–12',sub:'Ayro Orbit Spins on Its Own',items:['Organic + referral acquisition exceeds paid — Ayro Orbit generates its own momentum','Scale B2B partnerships to hotels, airports, car dealerships, campus radio','Reinvest margin savings into lower prices and bigger referral bonuses (Node 6 → Node 1)','Launch loyalty program (Uber One-style) to lock in repeat riders','Expand to adjacent markets using same Ayro Orbit playbook'],stats:[{n:'1M',l:'App Downloads'},{n:'3K+',l:'Active Drivers'},{n:'$1.50',l:'Avg CAC'}],color:'#a78bfa'}
  ];
  
  const phaseBg = {Launch:'#dbeafe',Growth:'#d1fae5',Scale:'#fef3c7'};
  const phaseText = {Launch:'#1e40af',Growth:'#065f46',Scale:'#92400e'};
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-5xl mx-auto px-6 py-16 pt-56">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-wider">AYRO ORBIT</h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            A self-reinforcing mobility ecosystem powered by driver prosperity and rider satisfaction. 
            AYRO grows by prioritizing driver prosperity. Strong driver supply improves rider experience, 
            which increases demand and reinforces the entire marketplace.
          </p>
        </div>
        <AyroOrbitDiagram />
        <div className="mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{background:'#007aff'}} />
          <h3 className="text-xl font-bold text-gray-900">1 · The AYRO Orbit — 7 Reinforcing Nodes</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {nodes.map(n => (
            <div key={n.num} className="rounded-xl p-5 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white" style={{background:n.color}}>
                  {n.num}
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base sm:text-lg">{n.icon} {n.title}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{n.sub}</div>
                </div>
              </div>
              <div className="text-xs sm:text-sm font-bold mb-2" style={{color:n.color}}>FEEDS → {n.feeds}</div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{n.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {n.tools.map((t,i) => (
                  <span key={i} className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 bg-gray-50">{t}</span>
                ))}
              </div>
              <div className="text-sm sm:text-base text-gray-400 pt-3 border-t border-gray-100">
                Target: <span className="text-gray-900 font-semibold">{n.target}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{background:'#00c781'}} />
          <h3 className="text-xl font-bold text-gray-900">2 · Self-Reinforcing Feedback Loops</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {loops.map((l,i) => (
            <div key={i} className="rounded-xl p-5 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
              <div className="text-gray-900 font-bold text-base mb-2">{l.icon} {l.title}</div>
              <div className="text-sm font-mono mb-3 px-3 py-2 rounded-lg bg-gray-50 text-gray-600 border border-gray-100">{l.flow}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{background:'#ffb800'}} />
          <h3 className="text-xl font-bold text-gray-900">3 · Complete Vendor → Node Mapping</h3>
        </div>
        <div className="rounded-xl border border-gray-200 overflow-hidden mb-14" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold text-sm border-b border-gray-200">Vendor / Channel</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold text-sm border-b border-gray-200">Ayro Orbit Node</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold text-sm border-b border-gray-200">Side</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold text-sm border-b border-gray-200">Role in Orbit</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold text-sm border-b border-gray-200">Phase</th>
                </tr>
              </thead>
              <tbody>
                {vendorMap.map((r,i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-2.5 px-4 text-gray-900 font-medium text-sm">{r[0]}</td>
                    <td className="py-2.5 px-4 text-gray-600 text-sm">{r[1]}</td>
                    <td className="py-2.5 px-4 text-gray-600 text-sm">{r[2]}</td>
                    <td className="py-2.5 px-4 text-gray-500 text-sm">{r[3]}</td>
                    <td className="py-2.5 px-4">
                      <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-md" style={{background:phaseBg[r[4]],color:phaseText[r[4]]}}>{r[4]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{background:'#a78bfa'}} />
          <h3 className="text-xl font-bold text-gray-900">4 · Phased Orbit Rollout</h3>
        </div>
        <div className="space-y-5 mb-8">
          {phases.map((p,i) => (
            <div key={i} className="rounded-xl p-6 bg-white border border-gray-200" style={{boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{background:p.color}}>P{i+1}</div>
                <div className="flex-1">
                  <div className="text-gray-900 font-bold text-lg">{p.phase}</div>
                  <div className="text-gray-400 text-sm">{p.period} — {p.sub}</div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {p.items.map((item,j) => (
                  <div key={j} className="flex gap-2 text-base text-gray-600">
                    <span className="text-gray-300 mt-0.5">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 pt-4 border-t border-gray-100">
                {p.stats.map((s,j) => (
                  <div key={j}>
                    <div className="text-xl font-extrabold" style={{color:p.color}}>{s.n}</div>
                    <div className="text-gray-400 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-400 text-sm italic mt-8">
          "Every improvement in experience accelerates the next spin." — Adapted from the Bezos napkin sketch, 2001
        </div>
      </div>
    </div>
  );
}