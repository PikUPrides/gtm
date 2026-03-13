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

  if (checking) return <div className="min-h-screen flex items-center justify-center bg-white"><p className="text-gray-400">Loading...</p></div>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img 
            src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-13%2FMiniMax-M2.5%2F1928270917536846329%2F628b2f477ff8587e0103f91867aff48f9578fdf48d055b718c8d40734b7638d1..png?Expires=1773486238&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=ne8%2ByZHlWgYjS8xBOIrHeR3epeo%3D" 
            alt="AYRO" 
            className="h-20 w-auto mx-auto mb-4" 
          />
          <p className="text-gray-500 text-sm">Sign in to access assets</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          {error && <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">{error}</div>}
          <div className="space-y-3">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && doLogin()} placeholder="Email" className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-200 outline-none focus:border-indigo-500 text-sm" />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && doLogin()} placeholder="Password" className="w-full px-4 py-2.5 pr-10 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-200 outline-none focus:border-indigo-500 text-sm" />
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
            <button onClick={doLogin} disabled={loading} className="w-full py-2.5 rounded-lg text-white font-semibold text-sm hover:opacity-90 disabled:opacity-50" style={{background:'#423DF9'}}>{loading ? 'Signing in...' : 'Sign In'}</button>
          </div>
          <p className="mt-4 text-center text-gray-400 text-xs">Contact admin for access</p>
        </div>
      </div>
    </div>
  );
}