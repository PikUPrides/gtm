import React from 'react';
import { Link } from '../api/sdk.js';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col" style={{background:'#ffffff'}}>
      <header className="flex items-center gap-4 px-6 py-3 bg-white border-b border-gray-200">
        <Link to="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Back</Link>
      </header>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl rounded-xl overflow-hidden" style={{boxShadow:'0 30px 80px rgba(0,0,0,0.15)'}}>
          <div className="px-9 py-4 flex items-center justify-between" style={{background:'linear-gradient(135deg,#0b1a30 0%,#1a3a6a 100%)'}}>
            <div className="text-white text-xl font-extrabold">Go-to-<span style={{color:'#007aff'}}>Market Strategy</span></div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black" style={{background:'#007aff'}}>A</div>
              <div className="text-white text-sm font-bold opacity-85">AYRO Rides</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{background:'#f5f8ff'}}>
            {[
              {cls:'border-b',phase:'Launch',phaseStyle:{background:'#d1fae5',color:'#065f46'},icon:'\u{1F4E3}',iconBg:'#fff0e6',title:'Paid Digital Ads',sub:'Rider acquisition at scale',pills:['Google Ads','Facebook & Instagram','TikTok Ads','Snapchat Ads','YouTube Ads','Reddit Ads','LinkedIn Ads','Pinterest Ads','Spotify Ads','Referral Hero'],pillBg:'#fff0e6',pillColor:'#c2460a'},
              {cls:'border-b',phase:'Launch',phaseStyle:{background:'#d1fae5',color:'#065f46'},icon:'\u{1F4F1}',iconBg:'#e8f4ff',title:'Organic Social',sub:'Brand building & community',pills:['Instagram','TikTok','YouTube','Facebook','LinkedIn','X / Twitter','Threads','Reddit','Pinterest','Quora'],pillBg:'#e8f4ff',pillColor:'#1a4fa0'},
              {cls:'border-b',phase:'Launch',phaseStyle:{background:'#d1fae5',color:'#065f46'},icon:'\u{1F4CD}',iconBg:'#f0fff4',title:'Hyperlocal & Geofencing',sub:'Target riders near key zones',pills:['GroundTruth','GeoFence Pro','Nextdoor','Hotels & Airports','Google My Business','Vibe (Roku TV)','Audiogo Radio'],pillBg:'#e6faf2',pillColor:'#0e7a50'},
              {cls:'border-b',phase:'Growth',phaseStyle:{background:'#dbeafe',color:'#1e40af'},icon:'\u{1F91D}',iconBg:'#fdf4ff',title:'Community & Diaspora',sub:'Trusted word-of-mouth networks',pills:['Tamil FM','Telugu FM','Temples / Churches','WhatsApp Marketing','Influencers','Student Ambassadors','Discord','Facebook Groups'],pillBg:'#f5eeff',pillColor:'#6b21a8'},
              {cls:'border-b',phase:'Growth',phaseStyle:{background:'#dbeafe',color:'#1e40af'},icon:'\u{1F4AC}',iconBg:'#fffbea',title:'CRM, Email & Retention',sub:'Activate, retain & re-engage',pills:['Zoho Campaigns','SMS Marketing','ManyChat','Instantly','Medium Blog','Press & Media'],pillBg:'#fef9e7',pillColor:'#926a00'},
              {cls:'',phase:'Scale',phaseStyle:{background:'#fef3c7',color:'#92400e'},icon:'\u{1F3E2}',iconBg:'#fff0f0',title:'Strategic Partnerships',sub:'Bulk rider & B2B acquisition',pills:['Costco',"Sam's Club",'Cinemark','Car Dealerships','Airport Ads','Campus Radio','Hackathons','Magazines'],pillBg:'#fee8e8',pillColor:'#b91c1c'},
            ].map((c,i) => (
              <div key={i} className={'p-4 md:p-3.5 bg-white relative flex flex-col gap-2 '+c.cls} style={{borderColor:'#dde8f4'}}>
                <span className="absolute top-2.5 right-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg" style={c.phaseStyle}>{c.phase}</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-lg md:text-sm" style={{background:c.iconBg}}>{c.icon}</div>
                  <div>
                    <div className="text-base md:text-[13px] font-bold" style={{color:'#0b1a30'}}>{c.title}</div>
                    <div className="text-xs md:text-[10px] font-medium" style={{color:'#6b80a3'}}>{c.sub}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-1">
                  {c.pills.map((p,j) => (
                    <span key={j} className="text-xs md:text-[10px] font-semibold px-2.5 py-1 md:px-2 md:py-0.5 rounded-full" style={{background:c.pillBg,color:c.pillColor}}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-9 py-2.5 flex items-center justify-between" style={{background:'linear-gradient(90deg,#0b1a30 0%,#1a3a6a 100%)'}}>
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>55+</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Active Channels</div></div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>3</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Launch Phases</div></div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-[10.5px] italic text-center max-w-xs" style={{color:'rgba(255,255,255,0.65)'}}>"Community trust · Hyperlocal precision · Multi-channel reach"</div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>2-Sided</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Rider + Driver GTM</div></div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>Phased</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Launch → Scale</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}