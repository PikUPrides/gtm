
import React, { useState, useEffect } from 'react';
import { User, useNavigate, useSearchParams } from '../api/sdk.js';

export default function Page() {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();
  const [sp] = useSearchParams();

  useEffect(() => {
    User.me().then(u => {
      if (u) navigate(sp.get('return_to') || '/', { replace: true });
      else setChecking(false);
    });
  }, []);

  const doLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await User.loginWithCredentials(email, password);
      navigate(sp.get('return_to') || '/');
    } catch (e) {
      setError(e.message || 'Invalid credentials');
    }
    setLoading(false);
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1D0652, #423DF9)' }}><div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>

      {/* Left - Brand Panel (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 70%, #08D9C4 100%)' }}>
        <div className="absolute inset-0 opacity-[0.07]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute border border-white/30 rounded-xl" style={{
              width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
              top: `${10 + i * 12}%`, left: `${5 + i * 15}%`,
              transform: `rotate(${i * 15}deg)`,
            }} />
          ))}
        </div>
        <div className="relative z-10">
          <img 
            src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F628b2f477ff8587e0103f91867aff48f9578fdf48d055b718c8d40734b7638d1..png?Expires=1773486238&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=ne8%2ByZHlWgYjS8xBOIrHeR3epeo%3D" 
            alt="AYRO" 
            className="h-16 w-auto mb-4 brightness-0 invert" 
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-white text-4xl font-extrabold tracking-tight mb-2">RIDE<br/>BETTER</h2>
          <p className="text-white/50 text-sm max-w-xs">Internal marketing hub for the AYRO team. Access strategy assets and market data.</p>
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#08D9C4]" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="flex-1 flex flex-col">
        {/* Mobile brand header */}
        <div className="lg:hidden h-32 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #1D0652 0%, #423DF9 100%)' }}>
          <img 
            src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F628b2f477ff8587e0103f91867aff48f9578fdf48d055b718c8d40734b7638d1..png?Expires=1773486238&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=ne8%2ByZHlWgYjS8xBOIrHeR3epeo%3D" 
            alt="AYRO" 
            className="h-14 w-auto brightness-0 invert" 
          />
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #423DF9, #08D9C4)' }} />
        </div>

        <div className="flex-1 flex items-center justify-center p-6 bg-white">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <h2 className="text-[#1D0652] text-2xl font-bold mb-1">Welcome back</h2>
              <p className="text-gray-400 text-sm">Sign in to access marketing assets</p>
            </div>
            <div className="space-y-4">
              {error && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">{error}</div>}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && doLogin()} placeholder="you@ayrorides.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 outline-none focus:border-[#423DF9] focus:ring-2 focus:ring-[#423DF9]/10 text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && doLogin()} placeholder="Enter your password" className="w-full px-4 py-3 pr-10 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 outline-none focus:border-[#423DF9] focus:ring-2 focus:ring-[#423DF9]/10 text-sm transition-all" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <button onClick={doLogin} disabled={loading} className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-all shadow-lg shadow-[#423DF9]/25" style={{ background: 'linear-gradient(135deg, #423DF9, #7742F1)' }}>{loading ? 'Signing in...' : 'Sign In'}</button>
            </div>
            <p className="mt-6 text-center text-gray-400 text-xs">Contact admin for access</p>
          </div>
        </div>
      </div>
    </div>
  );
}
