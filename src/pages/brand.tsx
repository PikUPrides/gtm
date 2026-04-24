import React from 'react';
import Header from '../components/Header.jsx';

const BRAND_PDF_ID = '681f71adf34193712ba33895eb0c12f1';

const PRIMARY_LOGOS = [
  { id: 'd8bc34237b124193cb94f004cb644fd4', name: 'Ayro Primary - 1' },
  { id: 'e6f3dfeb477f81a8ee9e3221920f71bf', name: 'Ayro Primary - 2' },
  { id: 'ea61742ea2d694547c3099f750e99c3c', name: 'Ayro Primary - 3' },
];

const SECONDARY_LOGOS = [
  { id: '84a36a65bc35410b31cef019d6a3f496', name: 'Ayro Secondary - 1' },
  { id: 'de0e29de191f36343fbc0ead6b9da8ab', name: 'Ayro Secondary - 2' },
  { id: 'b8faaa28a56ba4c6c4bea16e684c915a', name: 'Ayro Secondary - 3' },
];

const BLACK_LOGOS = [
  { id: '1c17995e8a4a3e330b26508bfd31cdeb', name: 'Ayro Black - 1' },
  { id: 'a48879ef1e0aefc2e64cf2d95c50af41', name: 'Ayro Black - 2' },
  { id: '4aa48743ded05a9674024aaee5096472', name: 'Ayro Black - 3' },
];

const APP_ICONS = [
  { id: 'c0a617114c681cf3943e4aca3d858e0b', name: 'App Icon 1' },
  { id: '2053073bb6b241920eabef2544a93ae3', name: 'App Icon 1 v2' },
  { id: '2be05e02439407b21e6c5c08b070b4c4', name: 'App Icon 1 v3' },
  { id: '067b1f39c55554909e78f27ea7525a28', name: 'App Icon 2 v1' },
  { id: 'e7045359ba80ca68c89081b991369890', name: 'App Icon 2 v2' },
  { id: '45e0c61aaaed25d4a6b765d38fbb133f', name: 'App Icon 2 v3' },
  { id: 'b633ca39323c8eeeffaf1007b68eaa63', name: 'App Icon 3 v1' },
  { id: 'd0250f4bd3993e7c1204dee06c3275e4', name: 'App Icon 3 v2' },
  { id: 'e329d571587f40674dbdfdc55bc311e2', name: 'App Icon 3 v3' },
];

function fileUrl(id) {
  return `https://app.serenitiesai.com/api/files/public/${id}`;
}

function LogoCard({ logo, dark }) {
  const url = fileUrl(logo.id);
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col">
      <div className={`flex-1 flex items-center justify-center p-8 min-h-[180px] ${dark ? 'bg-[#1D0652]' : 'bg-gray-50'}`}>
        <img src={url} alt={logo.name} className="max-h-32 max-w-full object-contain" />
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="text-sm font-medium text-gray-700 truncate">{logo.name}</div>
        <a
          href={url}
          download
          className="ml-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#423DF9] hover:text-[#1D0652] px-2.5 py-1.5 rounded-md hover:bg-[#423DF9]/5 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}

function IconCard({ icon }) {
  const url = fileUrl(icon.id);
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 min-h-[160px] bg-gray-50">
        <img src={url} alt={icon.name} className="max-h-28 max-w-28 object-contain rounded-2xl shadow-sm" />
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="text-sm font-medium text-gray-700 truncate">{icon.name}</div>
        <a
          href={url}
          download
          className="ml-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#423DF9] hover:text-[#1D0652] px-2.5 py-1.5 rounded-md hover:bg-[#423DF9]/5 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#423DF9] mb-2">{eyebrow}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D0652] mb-2">{title}</h2>
      {description && <p className="text-gray-600 text-sm sm:text-base max-w-2xl">{description}</p>}
    </div>
  );
}

export default function BrandPage() {
  const pdfUrl = fileUrl(BRAND_PDF_ID);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 sm:pt-28 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page hero */}
          <div className="mb-14">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#423DF9] mb-3">Design · Brand</div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D0652] mb-4 tracking-tight">AYRO Brand Assets</h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              Official brand guidelines, logo files, and app icons. Download assets and follow the guideline PDF for correct usage across product, marketing, and partner materials.
            </p>
          </div>

          {/* Brand Guideline PDF */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="01 · Guidelines"
              title="Brand guideline PDF"
              description="The complete logo, color, typography, and usage guideline. Open inline or download for offline reference."
            />
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#423DF9]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">AYRO Brand Guideline</div>
                    <div className="text-xs text-gray-500">PDF · 2.3 MB</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#423DF9] px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open
                  </a>
                  <a
                    href={pdfUrl}
                    download="ayro-brand-guideline.pdf"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-[#423DF9] hover:bg-[#1D0652] px-3 py-1.5 rounded-md transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#423DF9]/5 to-[#1D0652]/10 px-6 py-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-md border border-[#423DF9]/20 flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-[#1D0652] mb-1">Open in a new tab to view</div>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-5">PDFs cannot be embedded directly on this domain. Use the buttons above to view or download the guideline.</p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#423DF9] hover:bg-[#1D0652] px-4 py-2.5 rounded-md transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open guideline PDF
                </a>
              </div>
            </div>
          </section>

          {/* Primary logos */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="02 · Logos"
              title="Primary logo"
              description="Use the primary logo on light backgrounds. Maintain clear space and minimum size as defined in the guideline."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRIMARY_LOGOS.map((l) => <LogoCard key={l.id} logo={l} />)}
            </div>
          </section>

          {/* Secondary logos */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="03 · Logos"
              title="Secondary logo"
              description="Use the secondary mark in supporting roles — favicon-style placements, badges, and tighter horizontal layouts."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SECONDARY_LOGOS.map((l) => <LogoCard key={l.id} logo={l} dark />)}
            </div>
          </section>

          {/* Black / mono logos */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="04 · Logos"
              title="Black / monochrome"
              description="Single-color version for print, watermark, embossing, or anywhere full color is not appropriate."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BLACK_LOGOS.map((l) => <LogoCard key={l.id} logo={l} />)}
            </div>
          </section>

          {/* App icons */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="05 · App icons"
              title="App icon variants"
              description="Mobile app icon explorations and final candidates. Square 1024×1024 source with rounded mask preview."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {APP_ICONS.map((i) => <IconCard key={i.id} icon={i} />)}
            </div>
          </section>

          {/* Banners placeholder */}
          <section className="mb-8">
            <SectionHeader
              eyebrow="06 · Banners"
              title="Marketing banners"
              description="Social, web, and partner banners will be uploaded here."
            />
            <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">Coming soon</div>
              <div className="text-xs text-gray-500">Banners will be added as they're produced.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
