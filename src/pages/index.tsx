import { Link } from '../api/sdk.js';
import Header from '../components/Header.jsx';

const items = [
  { title: 'Go-to-Market Strategy', desc: '55+ channels across paid, organic, hyperlocal, community, CRM, and partnerships.', path: '/gtm', tag: 'Strategy', color: '#423DF9' },
  { title: 'The AYRO Orbit', desc: 'A self-reinforcing mobility ecosystem where drivers, riders, and platform growth continuously strengthen each other.', path: '/ayro-orbit', tag: 'Strategy', color: '#7742F1' },
  { title: '1 Million Downloads in 90 Days', desc: '3-month phased playbook from soft launch to viral Orbit.', path: '/downloads', tag: 'Growth', color: '#08D9C4' },
  { title: 'Ed Kang Pitch Deck Template', desc: 'Ultimate guide for early-stage founders on crafting seed-stage pitch decks. 10-slide format, black & white outline, proven framework.', path: '/ed-kang-pitch-deck', tag: 'Fundraising', color: '#7c3aed' },
  { title: 'Angel Pitch Deck Guide', desc: 'Research-backed playbook for crafting seed-stage pitch decks.', path: '/pitch-deck', tag: 'Fundraising', color: '#3a0ca3' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <h2 className="text-gray-900 text-xl sm:text-2xl font-bold mb-1">Marketing Assets</h2>
        <p className="text-gray-500 text-sm mb-8">Browse strategy decks and marketing materials.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(item => (
            <Link key={item.path} to={item.path} className="block rounded-xl p-5 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all">
              <span className="text-xs font-bold uppercase tracking-wider" style={{color:item.color}}>{item.tag}</span>
              <h3 className="text-gray-900 text-lg font-bold mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}