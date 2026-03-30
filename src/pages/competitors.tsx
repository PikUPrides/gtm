import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header.jsx';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import serenities from '../api/sdk';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingTab, setIsAddingTab] = useState(false);
  const [newTabTitle, setNewTabTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [menuTabId, setMenuTabId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Dialogs
  const [deleteDialog, setDeleteDialog] = useState({ open: false, tabId: null, tabTitle: '' });
  const [renameDialog, setRenameDialog] = useState({ open: false, tabId: null, tabTitle: '' });
  const [renameInput, setRenameInput] = useState('');
  
  const saveTimeoutRef = useRef(null);
  const activeTabData = tabs.find(t => t.id === activeTab);

  // TipTap editor - reinitialize when activeTab changes
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Placeholder.configure({
        placeholder: 'Start typing your content...',
      }),
    ],
    content: activeTabData?.content || '',
    onUpdate: ({ editor }) => {
      if (activeTabData?.path) return;
      
      // Clear existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      // Debounce save by 1.5 seconds
      saveTimeoutRef.current = setTimeout(() => {
        saveContent(editor.getHTML());
      }, 1500);
    },
  });

  // Update editor content when active tab changes
  useEffect(() => {
    if (editor && activeTabData) {
      editor.commands.setContent(activeTabData.content || '');
    }
  }, [activeTab, tabs, editor]);

  // Load tabs from database
  useEffect(() => {
    async function loadTabs() {
      try {
        const rows = await serenities.entities['Document Tabs'].list('Order', 100);
        const loadedTabs = rows.map((row, idx) => ({
          id: idx,
          title: row.Title,
          path: row.Path || null,
          order: row.Order,
          rowId: row.id,
          content: row.Content || '',
        }));
        setTabs(loadedTabs);
        if (loadedTabs.length > 0) {
          setActiveTab(loadedTabs[0].id);
        }
      } catch (err) {
        console.error('Failed to load tabs:', err);
      }
      setLoading(false);
    }
    loadTabs();
  }, []);

  const addTab = async () => {
    if (newTabTitle.trim()) {
      try {
        const maxOrder = tabs.length > 0 ? Math.max(...tabs.map(t => t.order)) + 1 : 0;
        const newRow = await serenities.entities['Document Tabs'].create({
          Title: newTabTitle.trim(),
          Order: maxOrder,
        });
        const newTab = {
          id: Math.max(...tabs.map(t => t.id), 0) + 1,
          title: newTabTitle.trim(),
          path: null,
          order: maxOrder,
          rowId: newRow.id,
        };
        setTabs([...tabs, newTab]);
        setNewTabTitle('');
        setIsAddingTab(false);
        setActiveTab(newTab.id);
      } catch (err) {
        console.error('Failed to add tab:', err);
      }
    }
  };

  const deleteTab = async (tabId) => {
    const tabToDelete = tabs.find(t => t.id === tabId);
    if (!tabToDelete?.rowId || tabToDelete.path) return;
    
    try {
      await serenities.entities['Document Tabs'].delete(tabToDelete.rowId);
      const newTabs = tabs.filter(t => t.id !== tabToDelete.id);
      setTabs(newTabs);
      if (activeTab === tabToDelete.id) {
        setActiveTab(newTabs[0]?.id || 0);
      }
    } catch (err) {
      console.error('Failed to delete tab:', err);
    }
  };

  const renameTab = async (tabId, newName) => {
    const tabToRename = tabs.find(t => t.id === tabId);
    if (!tabToRename?.rowId || !newName.trim()) return;
    
    try {
      await serenities.entities['Document Tabs'].update(tabToRename.rowId, {
        Title: newName.trim(),
      });
      setTabs(tabs.map(t => 
        t.id === tabToRename.id ? { ...t, title: newName.trim() } : t
      ));
    } catch (err) {
      console.error('Failed to rename tab:', err);
    }
  };

  const saveContent = async (newContent) => {
    const tabData = tabs.find(t => t.id === activeTab);
    if (!tabData?.rowId || tabData.path) return;
    
    try {
      setIsSaving(true);
      await serenities.entities['Document Tabs'].update(tabData.rowId, {
        Content: newContent,
      });
      setTabs(tabs.map(t => 
        t.id === activeTab ? { ...t, content: newContent } : t
      ));
      setLastSaved(new Date());
    } catch (err) {
      console.error('Failed to save content:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTab();
    if (e.key === 'Escape') setIsAddingTab(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Google Sans', 'Roboto', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
        
        .sidebar {
          width: 240px;
          background: white;
          border-right: 1px solid #e5e7eb;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          overflow-y: auto;
        }

        .sidebar-header {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .sidebar-title {
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tab-list {
          padding: 8px 0;
        }

        .sidebar-tab {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          cursor: pointer;
          color: #374151;
          font-size: 14px;
          border-left: 3px solid transparent;
          min-height: 40px;
          box-sizing: border-box;
        }

        .sidebar-tab.active {
          background-color: #e0e7ff;
          color: #4f46e5;
          border-left-color: #4f46e5;
        }

        .sidebar-tab:hover:not(.active) {
          background-color: #f3f4f6;
        }

        .tab-icon {
          width: 18px;
          height: 18px;
          margin-right: 12px;
          color: inherit;
          flex-shrink: 0;
        }

        .tab-title {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .menu-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          cursor: pointer;
          opacity: 0;
          flex-shrink: 0;
          transition: opacity 0.15s, background-color 0.15s;
        }

        .sidebar-tab:hover .menu-btn {
          opacity: 1;
        }

        .menu-btn:hover {
          background-color: #e5e7eb;
        }

        .main-content {
          margin-left: 240px;
          min-height: 100vh;
          background: white;
        }

        .doc-container {
          max-width: 850px;
          margin: 0 auto;
          padding: 24px 16px;
        }

        .doc-header {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          background: white;
        }

        .doc-title {
          font-size: 28px;
          font-weight: 400;
          color: #202124;
          border: none;
          outline: none;
          width: 100%;
          padding: 8px 0;
        }

        .doc-title::placeholder {
          color: #9aa0a6;
        }

        .toolbar-wrapper {
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }

        .toolbar-inner {
          max-width: 850px;
          margin: 0 auto;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        /* Responsive toolbar */
        @media (max-width: 768px) {
          .sidebar {
            width: 200px;
          }
          .main-content {
            margin-left: 200px;
          }
          .toolbar-inner {
            gap: 6px;
          }
          .toolbar-btn {
            padding: 6px 8px;
          }
          .font-select {
            min-width: 70px;
            font-size: 12px;
          }
        }

        @media (max-width: 640px) {
          .sidebar {
            position: fixed;
            left: -200px;
            transition: left 0.3s;
            z-index: 50;
          }
          .sidebar.open {
            left: 0;
          }
          .main-content {
            margin-left: 0;
          }
          .doc-container {
            padding: 16px;
          }
          .doc-title {
            font-size: 22px;
          }
          .status-area {
            width: 100%;
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid #e5e7eb;
          }
        }

        /* TipTap Editor Styles */
        .tiptap {
          min-height: 600px;
          outline: none;
          font-size: 14px;
          line-height: 1.8;
          color: #202124;
          font-family: 'Google Sans', 'Roboto', sans-serif;
        }

        .tiptap p {
          margin-bottom: 12px;
        }

        .tiptap h1 {
          font-size: 26px;
          font-weight: 400;
          margin-top: 24px;
          margin-bottom: 8px;
          color: #202124;
        }

        .tiptap h2 {
          font-size: 20px;
          font-weight: 500;
          margin-top: 20px;
          margin-bottom: 8px;
          color: #202124;
        }

        .tiptap h3 {
          font-size: 16px;
          font-weight: 500;
          margin-top: 16px;
          margin-bottom: 8px;
          color: #202124;
        }

        .tiptap ul, .tiptap ol {
          padding-left: 24px;
          margin: 8px 0;
        }

        .tiptap ul {
          list-style-type: disc;
        }

        .tiptap ol {
          list-style-type: decimal;
        }

        .tiptap li {
          margin: 4px 0;
        }

        .tiptap blockquote {
          border-left: 3px solid #dadce0;
          padding-left: 16px;
          margin: 16px 0;
          color: #5f6368;
        }

        .tiptap a {
          color: #1a73e8;
          text-decoration: none;
        }

        .tiptap p.is-editor-empty:first-child::before {
          color: #9aa0a6;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }

        .toolbar-btn {
          padding: 8px 12px;
          border-radius: 4px;
          color: #5f6368;
          transition: all 0.15s;
          cursor: pointer;
          border: none;
          background: none;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .toolbar-btn:hover {
          background-color: #f1f3f4;
          color: #202124;
        }

        .toolbar-btn:active {
          background-color: #e8eaed;
        }

        .toolbar-btn.is-active {
          background-color: #e8f0fe;
          color: #1a73e8;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #34a853;
        }

        .font-select {
          padding: 6px 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          background: white;
          font-size: 13px;
          color: #5f6368;
          cursor: pointer;
          outline: none;
          min-width: 80px;
        }

        .font-select:hover {
          background-color: #f1f3f4;
        }
      `}</style>

      {/* Left Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">Documents</div>
        </div>
        
        <div className="tab-list">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => { setHoveredTab(null); setMenuTabId(null); }}
                className={`sidebar-tab ${isActive ? 'active' : ''}`}
              >
                <svg className="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="tab-title">{tab.title}</span>
                
                {/* Three dots menu */}
                {isHovered && !tab.path && (
                  <div className="relative">
                    <button
                      onClick={(e) => { e.stopPropagation(); setMenuTabId(menuTabId === tab.id ? null : tab.id); }}
                      className="menu-btn"
                    >
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="12" cy="18" r="2" />
                      </svg>
                    </button>
                    
                    {menuTabId === tab.id && (
                      <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
                        <button
                          onClick={(e) => { e.stopPropagation(); setMenuTabId(null); setRenameDialog({ open: true, tabId: tab.id, tabTitle: tab.title }); setRenameInput(tab.title); }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Rename
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setMenuTabId(null); setDeleteDialog({ open: true, tabId: tab.id, tabTitle: tab.title }); }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Add Tab Button */}
          {isAddingTab ? (
            <div className="flex items-center gap-2 px-4 py-2">
              <input
                type="text"
                value={newTabTitle}
                onChange={(e) => setNewTabTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tab name..."
                className="px-3 py-1 border border-gray-300 rounded text-sm outline-none focus:border-blue-500 flex-1"
                autoFocus
              />
              <button onClick={addTab} className="text-blue-500 hover:text-blue-700 p-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button onClick={() => { setIsAddingTab(false); setNewTabTitle(''); }} className="text-gray-500 hover:text-gray-700 p-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              onClick={() => setIsAddingTab(true)}
              className="sidebar-tab text-gray-500 hover:text-gray-700"
            >
              <svg className="w-4 h-4" style={{ marginRight: '12px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="tab-title">Add new tab</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Document Header with Title */}
        <div className="doc-header">
          <div className="doc-container">
            <input
              type="text"
              className="doc-title"
              placeholder="Untitled document"
              defaultValue={activeTabData?.title || ''}
              onBlur={(e) => renameTab(activeTab, e.target.value)}
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="toolbar-wrapper">
          <div className="toolbar-inner">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="toolbar-btn md:hidden"
              title="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Font Size Selector */}
            <select 
              className="font-select"
              onChange={(e) => {
                const size = e.target.value;
                if (size === '1') editor?.chain().focus().setParagraph().run();
                else if (size === '2') editor?.chain().focus().setHeading({ level: 3 }).run();
                else if (size === '3') editor?.chain().focus().setHeading({ level: 2 }).run();
                else if (size === '4') editor?.chain().focus().setHeading({ level: 1 }).run();
                e.target.value = '';
              }}
            >
              <option value="">Size</option>
              <option value="1">Paragraph</option>
              <option value="2">Heading 3</option>
              <option value="3">Heading 2</option>
              <option value="4">Heading 1</option>
            </select>
            
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            
            <button 
              onClick={() => editor?.chain().focus().toggleBold().run()} 
              className={`toolbar-btn font-bold ${editor?.isActive('bold') ? 'is-active' : ''}`}
              title="Bold (Ctrl+B)"
            >
              B
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleItalic().run()} 
              className={`toolbar-btn italic ${editor?.isActive('italic') ? 'is-active' : ''}`}
              title="Italic (Ctrl+I)"
            >
              I
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleUnderline().run()} 
              className={`toolbar-btn underline ${editor?.isActive('underline') ? 'is-active' : ''}`}
              title="Underline (Ctrl+U)"
            >
              U
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleStrike().run()} 
              className={`toolbar-btn line-through ${editor?.isActive('strike') ? 'is-active' : ''}`}
              title="Strikethrough"
            >
              S
            </button>
            
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            
            <button 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} 
              className={`toolbar-btn font-bold ${editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
              title="Heading 1"
            >
              H1
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} 
              className={`toolbar-btn font-bold ${editor?.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
              title="Heading 2"
            >
              H2
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} 
              className={`toolbar-btn font-bold ${editor?.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
              title="Heading 3"
            >
              H3
            </button>
            
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            
            <button 
              onClick={() => editor?.chain().focus().toggleBulletList().run()} 
              className={`toolbar-btn ${editor?.isActive('bulletList') ? 'is-active' : ''}`}
              title="Bullet list"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h.01M8 6h12M4 12h.01M8 12h12M4 18h.01M8 18h12" />
              </svg>
            </button>
            <button 
              onClick={() => editor?.chain().focus().toggleOrderedList().run()} 
              className={`toolbar-btn ${editor?.isActive('orderedList') ? 'is-active' : ''}`}
              title="Numbered list"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10M4 4h.01M4 8h.01M4 12h.01M4 16h.01" />
              </svg>
            </button>
            
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            
            <button 
              onClick={() => editor?.chain().focus().toggleBlockquote().run()} 
              className={`toolbar-btn ${editor?.isActive('blockquote') ? 'is-active' : ''}`}
              title="Quote"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M8 20h6a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </button>
            
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            
            <button 
              onClick={() => {
                const url = window.prompt('Enter URL:');
                if (url) editor?.chain().focus().setLink({ href: url }).run();
              }} 
              className={`toolbar-btn ${editor?.isActive('link') ? 'is-active' : ''}`}
              title="Add link"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
            
            <div className="w-px h-5 bg-gray-300 mx-2"></div>
            
            <button 
              onClick={() => editor?.chain().focus().setTextAlign('left').run()} 
              className="toolbar-btn"
              title="Align left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
              </svg>
            </button>
            <button 
              onClick={() => editor?.chain().focus().setTextAlign('center').run()} 
              className="toolbar-btn"
              title="Align center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M5 18h14" />
              </svg>
            </button>
            <button 
              onClick={() => editor?.chain().focus().setTextAlign('right').run()} 
              className="toolbar-btn"
              title="Align right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M10 12h10M6 18h14" />
              </svg>
            </button>
            
            {/* Save Status */}
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-500 status-area">
              {isSaving ? (
                <span className="text-blue-600">Saving...</span>
              ) : lastSaved ? (
                <div className="flex items-center gap-2">
                  <div className="status-dot"></div>
                  <span>Saved</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Document Editor Content */}
        <div className="doc-container">
          {/* TipTap Editor */}
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>

      {/* Rename Dialog */}
      {renameDialog.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Rename Tab</h3>
            <input
              type="text"
              value={renameInput}
              onChange={(e) => setRenameInput(e.target.value)}
              dir="ltr"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  renameTab(renameDialog.tabId, renameInput);
                  setRenameDialog({ open: false, tabId: null, tabTitle: '' });
                }
                if (e.key === 'Escape') {
                  setRenameDialog({ open: false, tabId: null, tabTitle: '' });
                }
              }}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setRenameDialog({ open: false, tabId: null, tabTitle: '' })}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  renameTab(renameDialog.tabId, renameInput);
                  setRenameDialog({ open: false, tabId: null, tabTitle: '' });
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Rename
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      {deleteDialog.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Delete Tab</h3>
                <p className="text-sm text-gray-500">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete <strong>"{deleteDialog.tabTitle}"</strong>? All content in this tab will be permanently removed.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteDialog({ open: false, tabId: null, tabTitle: '' })}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteTab(deleteDialog.tabId);
                  setDeleteDialog({ open: false, tabId: null, tabTitle: '' });
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}