
import Header from '../components/Header.jsx';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafe]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
      <Header showBackLink />
      
      <div className="pt-6 px-4 sm:px-6 max-w-4xl mx-auto pb-12">
        {/* Page Header */}
        <div className="mb-4">
          <h1 className="text-lg font-bold text-[#1D0652]">Sword</h1>
        </div>

        /* Coming Soon Card */
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-base font-semibold text-gray-900 mb-1">Coming Soon</h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto">
            Analytics tools under development.
          </p>
        </div>
      </div>
    </div>
  );
}
