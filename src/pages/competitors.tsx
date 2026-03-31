import React, { useState, useEffect } from 'react';
import { Link } from '../api/sdk.js';
import { entities } from '../api/sdk.js';
import Header from '../components/Header.jsx';

export default function Page() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDocs() {
      try {
        const docs = await entities['Document Tabs'].list();
        setDocuments(docs.sort((a, b) => (a.Order || 0) - (b.Order || 0)));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadDocs();
  }, []);

  const docLinks = [
    { title: 'Sword', path: '/documents/sword', color: '#ef4444', desc: 'Strategic advantages' },
    { title: "Uber's Moat", path: '/documents/ubers-moat', color: '#f97316', desc: 'Why Uber can\'t drop to 5%' },
    { title: 'Slide', path: '/documents/slide', color: '#eab308', desc: 'Pitch deck template' },
    { title: 'Counter-Strategy', path: '/documents/counter-strategy', color: '#22c55e', desc: 'How we counter Uber/Lyft' },
    { title: 'How Lyft Survived', path: '/documents/how-lyft-survived', color: '#14b8a6', desc: 'Lessons from the only survivor' },
    { title: 'Empower NYC Validation', path: '/documents/empower-nyc-validation', color: '#06b6d4', desc: 'Real-world validation' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background:'#f8fafc'}}>
        <div className="text-lg font-semibold" style={{color:'#1e293b'}}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{background:'#ffffff'}}>
      <Header />
      <div className="flex-1 flex items-start justify-start px-3 pb-3 sm:px-6 sm:pb-6 lg:pl-20 pt-32">
        <div className="w-full max-w-5xl rounded-xl overflow-hidden" style={{boxShadow:'0 30px 80px rgba(0,0,0,0.15)'}}>
          <div className="px-4 sm:px-9 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0" style={{background:'linear-gradient(135deg,#0b1a30 0%,#1a3a6a 100%)'}}>
            <div className="text-white text-lg sm:text-xl font-extrabold text-center sm:text-left">Strategic <span style={{color:'#007aff'}}>Documents</span></div>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black" style={{background:'#007aff'}}>A</div>
              <div className="text-white text-sm font-bold opacity-85">AYRO Rides</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{background:'#f5f8ff'}}>
            {docLinks.map((doc, i) => (
              <Link 
                key={i} 
                to={doc.path} 
                className="group p-4 md:p-3.5 bg-white relative flex flex-col gap-2 hover:bg-gray-50 transition-colors"
                style={{borderColor:'#dde8f4', borderBottom: '1px solid #dde8f4'}}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{background: doc.color + '20', color: doc.color}}>
                    {doc.title.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-base md:text-[13px] font-bold group-hover:text-blue-600 transition-colors" style={{color:'#0b1a30'}}>{doc.title}</div>
                    <div className="text-xs md:text-[10px] font-medium" style={{color:'#6b80a3'}}>{doc.desc}</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{color: doc.color}}>
                  View Document
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="px-9 py-2.5 flex items-center justify-between" style={{background:'linear-gradient(90deg,#0b1a30 0%,#1a3a6a 100%)'}}>
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>6</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Documents</div></div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>Competitive</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Analysis</div></div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-[10.5px] italic text-center max-w-xs" style={{color:'rgba(255,255,255,0.65)'}}>"Strategic insights for competitive advantage"</div>
            <div className="w-px h-6" style={{background:'rgba(255,255,255,0.15)'}} />
            <div className="text-center"><div className="text-base font-extrabold" style={{color:'#007aff'}}>Pitch</div><div className="text-[9px] font-semibold uppercase tracking-wide" style={{color:'rgba(255,255,255,0.55)'}}>Ready</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}