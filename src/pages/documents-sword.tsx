import Header from '../components/Header.jsx';

export default function Sword() {
  const advantages = [
    {
      icon: "💰",
      title: "Half the price",
      description: "Our competitive pricing model ensures customers pay significantly less than traditional alternatives."
    },
    {
      icon: "📊",
      title: "No surge pricing",
      description: "Consistent, predictable pricing with no unexpected spikes during high-demand periods."
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "Clear, upfront pricing with no hidden fees or surprise charges ever."
    },
    {
      icon: "📦",
      title: "Low margin, high volume",
      description: "Efficient operations allow us to maintain low margins while serving more customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-16 pt-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Competitive Advantage
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sword</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            AYRO's four pillars of competitive advantage that set us apart in the market
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.2)] transition-all duration-300 border border-slate-100 hover:border-blue-100"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-slate-400 text-sm">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></span>
            <span>Four pillars. One mission.</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}