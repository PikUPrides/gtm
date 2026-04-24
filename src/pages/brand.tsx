
import React, { useEffect, useState, useRef } from 'react';
import serenities from '../api/sdk';
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

function LogoCard({ logo, dark }) {
  const viewUrl = serenities.files.url(logo.id);
  const downloadUrl = serenities.files.downloadUrl(logo.id);
  const filename = `${logo.name.replace(/\s+/g, '_')}.png`;
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col">
      <div className={`flex-1 flex items-center justify-center p-8 min-h-[180px] ${dark ? 'bg-[#1D0652]' : 'bg-gray-50'}`}>
        <img src={viewUrl} alt={logo.name} className="max-h-32 max-w-full object-contain" />
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="text-sm font-medium text-gray-700 truncate">{logo.name}</div>
        <a
          href={downloadUrl}
          download={filename}
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
  const viewUrl = serenities.files.url(icon.id);
  const downloadUrl = serenities.files.downloadUrl(icon.id);
  const filename = `${icon.name.replace(/\s+/g, '_')}.png`;
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 min-h-[160px] bg-gray-50">
        <img src={viewUrl} alt={icon.name} className="max-h-28 max-w-28 object-contain rounded-2xl shadow-sm" />
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
        <div className="text-sm font-medium text-gray-700 truncate">{icon.name}</div>
        <a
          href={downloadUrl}
          download={filename}
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

// ─── Banner Card ──────────────────────────────────────────────────────────────

function BannerCard({ banner, onDelete, onRename }) {
  const viewUrl = serenities.files.url(banner.FileId);
  const downloadUrl = serenities.files.downloadUrl(banner.FileId);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(banner.Name);
  const [saving, setSaving] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try { await serenities.files.delete(banner.FileId); } catch (e) {}
    try { await serenities.entities.Banners.delete(banner.id); } catch (e) {}
    onDelete(banner.id);
  };

  const handleSaveEdit = async () => {
    if (!editName.trim()) return;
    setSaving(true);
    try {
      await serenities.entities.Banners.update(banner.id, { Name: editName.trim() });
      onRename(banner.id, editName.trim());
      setEditing(false);
    } catch (e) {}
    setSaving(false);
  };

  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white flex flex-col hover:shadow-md transition-shadow">
      <div className="flex-1 bg-gray-50 flex items-center justify-center min-h-[180px] overflow-hidden relative">
        <img
          src={viewUrl}
          alt={banner.Name}
          className="max-h-48 max-w-full object-contain p-4"
        />
        <span className="absolute top-2 right-2 text-xs font-semibold bg-white/90 border border-gray-200 text-gray-500 rounded-full px-2.5 py-0.5 shadow-sm">
          {banner.Category || 'General'}
        </span>
      </div>
      <div className="px-4 py-3 border-t border-gray-100">
        {editing ? (
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={editName}
              onChange={e => setEditName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSaveEdit(); if (e.key === 'Escape') setEditing(false); }}
              className="flex-1 px-2.5 py-1.5 rounded-lg border border-[#423DF9] text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#423DF9]/10"
              autoFocus
            />
            <button
              onClick={handleSaveEdit}
              disabled={saving}
              className="px-2.5 py-1.5 rounded-md text-xs font-bold text-white bg-[#423DF9] hover:bg-[#1D0652] disabled:opacity-50 transition-colors"
            >
              {saving ? '…' : 'Save'}
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-2 py-1.5 rounded-md text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="text-sm font-semibold text-gray-800 truncate">{banner.Name}</div>
            <button
              onClick={() => { setEditName(banner.Name); setEditing(true); }}
              className="flex-shrink-0 text-gray-300 hover:text-[#423DF9] transition-colors"
              title="Rename"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <a
            href={downloadUrl}
            download={banner.Name}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#423DF9] hover:text-[#1D0652] px-2.5 py-1.5 rounded-md hover:bg-[#423DF9]/5 border border-[#423DF9]/20 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="inline-flex items-center justify-center px-2.5 py-1.5 rounded-md text-xs font-semibold text-red-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-bold text-white bg-red-500 hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {deleting ? '…' : 'Confirm'}
            </button>
          )}
          {confirmDelete && !deleting && (
            <button
              onClick={() => setConfirmDelete(false)}
              className="text-xs text-gray-400 hover:text-gray-600 px-1"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const CATEGORIES = ['Social', 'Web', 'Email', 'Print', 'Partner', 'General'];

// ─── Banners Section ──────────────────────────────────────────────────────────

function BannersSection() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadName, setUploadName] = useState('');
  const [uploadCategory, setUploadCategory] = useState('General');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [filterCat, setFilterCat] = useState('All');
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => { loadBanners(); }, []);

  const loadBanners = async () => {
    setLoading(true);
    try {
      const rows = await serenities.entities.Banners.list('-createdAt');
      setBanners(rows || []);
    } catch (e) {
      setBanners([]);
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Please select an image file.'); return; }
    setSelectedFile(file);
    const nameWithoutExt = file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
    setUploadName(nameWithoutExt);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);
    setError('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setError('Please drop an image file.'); return; }
    const dt = new DataTransfer();
    dt.items.add(file);
    fileInputRef.current.files = dt.files;
    handleFileChange({ target: { files: [file] } });
  };

  const handleUpload = async () => {
    if (!selectedFile) { setError('Please select a file first.'); return; }
    if (!uploadName.trim()) { setError('Please enter a banner name.'); return; }
    setUploading(true);
    setError('');
    try {
      const result = await serenities.files.upload(selectedFile);
      if (!result?.file?.id) throw new Error('Upload failed — no file ID returned');

      await serenities.entities.Banners.create({
        Name: uploadName.trim(),
        FileId: result.file.id,
        Category: uploadCategory,
        FileName: selectedFile.name,
        MimeType: selectedFile.type,
      });

      setSuccess(`"${uploadName.trim()}" uploaded successfully!`);
      setSelectedFile(null);
      setPreview(null);
      setUploadName('');
      setUploadCategory('General');
      if (fileInputRef.current) fileInputRef.current.value = '';
      await loadBanners();
      setTimeout(() => setSuccess(''), 4000);
    } catch (e) {
      setError('Upload failed. ' + (e?.message || 'Please try again.'));
    }
    setUploading(false);
  };

  const handleDelete = (id) => setBanners(prev => prev.filter(b => b.id !== id));
  const handleRename = (id, newName) => setBanners(prev => prev.map(b => b.id === id ? { ...b, Name: newName } : b));

  const filtered = filterCat === 'All' ? banners : banners.filter(b => (b.Category || 'General') === filterCat);

  return (
    <section className="mb-8">
      <SectionHeader
        eyebrow="06 · Banners"
        title="Marketing banners"
        description="Upload, preview, and download social, web, email, print, and partner banners."
      />

      {/* Upload card */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-8 shadow-sm">
        <div className="px-5 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#423DF9]/10 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-800">Upload new banner</span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Drop zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative cursor-pointer rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center min-h-[180px] gap-3
                ${dragOver ? 'border-[#423DF9] bg-[#423DF9]/5 scale-[1.01]' : preview ? 'border-[#423DF9]/40 bg-white' : 'border-gray-200 bg-gray-50 hover:border-[#423DF9]/50 hover:bg-[#423DF9]/2'}`}
            >
              {preview ? (
                <div className="relative w-full h-full flex items-center justify-center p-3">
                  <img src={preview} alt="Preview" className="max-h-40 max-w-full object-contain rounded-lg" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setPreview(null); setSelectedFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm text-xs font-bold"
                  >✕</button>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700">{dragOver ? 'Drop to upload' : 'Drop image here or click to browse'}</div>
                    <div className="text-xs text-gray-400 mt-1">PNG, JPG, SVG, WebP · any size</div>
                  </div>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Banner name</label>
                <input
                  type="text"
                  value={uploadName}
                  onChange={(e) => setUploadName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUpload()}
                  placeholder="e.g. Instagram Story — Launch"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#423DF9] focus:ring-2 focus:ring-[#423DF9]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Category</label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setUploadCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${uploadCategory === cat ? 'bg-[#423DF9] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-xs text-red-600 font-medium bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {error}
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {success}
                </div>
              )}
              <button
                onClick={handleUpload}
                disabled={uploading || !selectedFile}
                className="mt-auto w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #423DF9, #7742F1)' }}
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                    Uploading…
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                    </svg>
                    Upload Banner
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      {banners.length > 0 && (
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Filter:</span>
          {['All', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${filterCat === cat ? 'bg-[#1D0652] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
              {cat === 'All'
                ? ` (${banners.length})`
                : banners.filter(b => (b.Category || 'General') === cat).length > 0
                  ? ` (${banners.filter(b => (b.Category || 'General') === cat).length})`
                  : ''}
            </button>
          ))}
        </div>
      )}

      {/* Banners grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-2 border-[#423DF9] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white border border-gray-200 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#423DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-700 mb-1">
            {filterCat === 'All' ? 'No banners uploaded yet' : `No ${filterCat} banners yet`}
          </div>
          <div className="text-xs text-gray-400">Use the upload area above to add your first banner.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(b => (
            <BannerCard key={b.id} banner={b} onDelete={handleDelete} onRename={handleRename} />
          ))}
        </div>
      )}
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BrandPage() {
  const pdfViewUrl = serenities.files.url(BRAND_PDF_ID);
  const pdfDownloadUrl = serenities.files.downloadUrl(BRAND_PDF_ID);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [pdfState, setPdfState] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    let blobUrl = null;
    setPdfState('loading');
    fetch(pdfViewUrl, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('pdf fetch failed');
        return res.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        blobUrl = URL.createObjectURL(blob);
        setPdfBlobUrl(blobUrl);
        setPdfState('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setPdfState('error');
      });
    return () => {
      cancelled = true;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [pdfViewUrl]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 sm:pt-28 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#423DF9] mb-3">Design · Brand</div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D0652] mb-4 tracking-tight">AYRO Brand Assets</h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              Official brand guidelines, logo files, app icons, and marketing banners. Download assets and follow the guideline PDF for correct usage across product, marketing, and partner materials.
            </p>
          </div>

          <section className="mb-20">
            <SectionHeader
              eyebrow="01 · Guidelines"
              title="Brand guideline PDF"
              description="The complete logo, color, typography, and usage guideline. Preview inline or download for offline reference."
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
                    href={pdfViewUrl}
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
                    href={pdfDownloadUrl}
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
              <div className="bg-gray-100" style={{ height: 'min(80vh, 760px)' }}>
                {pdfState === 'ready' && pdfBlobUrl ? (
                  <iframe
                    src={pdfBlobUrl}
                    title="AYRO Brand Guideline"
                    className="w-full h-full border-0"
                  />
                ) : pdfState === 'error' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 gap-2">
                    <div className="text-sm font-semibold text-gray-700">Couldn't load preview</div>
                    <div className="text-xs text-gray-500 max-w-sm">Use the Open or Download buttons above.</div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-300 border-t-[#423DF9] animate-spin" />
                  </div>
                )}
              </div>
            </div>
          </section>

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
        </div>
      </div>
    </div>
  );
}
