
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '../components/Header.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import LinkExtension from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import lowlight from 'lowlight';
import serenities from '../api/sdk';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingTab, setIsAddingTab] = useState(false);
  const [newTabTitle, setNewTabTitle] = useState('');
  const [tabContent, setTabContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [tabToDelete, setTabToDelete] = useState(null);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [tabToRename, setTabToRename] = useState(null);
  const [newTabName, setNewTabName] = useState('');

  // Create TipTap editor with all extensions
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // Disable default codeBlock to use Lowlight
      }),
      Placeholder.configure({
        placeholder: 'Start writing your document...',
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      LinkExtension.configure({
        openOnClick: false,
      }),
      Image.configure({
        inline: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: tabContent,
    onUpdate: ({ editor }) => {
      setTabContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
    },
  });

  // Update editor content when tab changes
  useEffect(() => {
    if (editor && tabContent !== editor.getHTML()) {
      editor.commands.setContent(tabContent || '');
    }
  }, [activeTab, editor]);

  // Load tabs from database on mount
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
          setTabContent(loadedTabs[0].content || '');
        }
      } catch (err) {
        console.error('Failed to load tabs:', err);
      }
      setLoading(false);
    }
    loadTabs();
  }, []);

  // Update content when active tab changes
  useEffect(() => {
    const activeTabData = tabs.find(t => t.id === activeTab);
    if (activeTabData) {
      setTabContent(activeTabData.content || '');
    }
  }, [activeTab]);

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

  const deleteTab = async (e, tabId) => {
    e.stopPropagation();
    const tabToDelete = tabs.find(t => t.id === tabId);
    if (tabToDelete?.path) return; // Don't delete pages with paths
    if (!tabToDelete?.rowId) return;
    
    // Show confirmation dialog instead of deleting directly
    setTabToDelete(tabToDelete);
    setShowDeleteDialog(true);
  };

  const confirmDeleteTab = async () => {
    if (!tabToDelete?.rowId) return;
    
    try {
      await serenities.entities['Document Tabs'].delete(tabToDelete.rowId);
      const newTabs = tabs.filter(t => t.id !== tabToDelete.id);
      setTabs(newTabs);
      if (activeTab === tabToDelete.id) {
        setActiveTab(newTabs[0]?.id || 0);
      }
    } catch (err) {
      console.error('Failed to delete tab:', err);
    } finally {
      setShowDeleteDialog(false);
      setTabToDelete(null);
    }
  };

  const openRenameDialog = (e, tab) => {
    e.stopPropagation();
    setTabToRename(tab);
    setNewTabName(tab.title);
    setShowRenameDialog(true);
  };

  const confirmRenameTab = async () => {
    if (!tabToRename?.rowId || !newTabName.trim()) return;
    
    try {
      await serenities.entities['Document Tabs'].update(tabToRename.rowId, {
        Title: newTabName.trim(),
      });
      setTabs(tabs.map(t => 
        t.id === tabToRename.id ? { ...t, title: newTabName.trim() } : t
      ));
    } catch (err) {
      console.error('Failed to rename tab:', err);
    } finally {
      setShowRenameDialog(false);
      setTabToRename(null);
      setNewTabName('');
    }
  };

  const saveContent = useCallback(async (content) => {
    const activeTabData = tabs.find(t => t.id === activeTab);
    if (!activeTabData?.rowId || activeTabData.path) return;
    
    try {
      setIsSaving(true);
      await serenities.entities['Document Tabs'].update(activeTabData.rowId, {
        Content: content,
      });
      // Update local state
      setTabs(tabs.map(t => 
        t.id === activeTab ? { ...t, content } : t
      ));
      setLastSaved(new Date());
    } catch (err) {
      console.error('Failed to save content:', err);
    } finally {
      setIsSaving(false);
    }
  }, [activeTab, tabs]);

  // Auto-save with debounce
  useEffect(() => {
    if (!tabContent || activeTab === 0) return;
    
    const activeTabData = tabs.find(t => t.id === activeTab);
    if (activeTabData?.path) return; // Don't save for built-in pages
    
    const timer = setTimeout(() => {
      saveContent(tabContent);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [tabContent, activeTab, saveContent]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTab();
    if (e.key === 'Escape') setIsAddingTab(false);
  };

  // Handle empty tabs case
  const activeTabData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="min-h-screen bg-[#fafafe] flex" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
        
        /* TipTap Editor Styles */
        .ProseMirror {
          min-height: 400px;
          outline: none;
          font-size: 16px;
          line-height: 1.7;
          color: #374151;
        }
        
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
        
        .ProseMirror h1 {
          font-size: 2em;
          font-weight: 700;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: #1D0652;
        }
        
        .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: #1D0652;
        }
        
        .ProseMirror h3 {
          font-size: 1.25em;
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: #1D0652;
        }
        
        .ProseMirror ul, .ProseMirror ol {
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        
        .ProseMirror li {
          margin: 0.25em 0;
        }
        
        .ProseMirror blockquote {
          border-left: 3px solid #3b82f6;
          padding-left: 1em;
          margin: 1em 0;
          color: #6b7280;
          font-style: italic;
        }
        
        .ProseMirror code {
          background-color: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }
        
        .ProseMirror pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1em;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }
        
        .ProseMirror pre code {
          background: none;
          padding: 0;
          color: inherit;
        }
        
        .ProseMirror mark {
          background-color: #ffc078;
          padding: 0.1em 0.2em;
          border-radius: 2px;
        }
        
        .ProseMirror a {
          color: #3b82f6;
          text-decoration: underline;
        }
        
        .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 1em 0;
        }
        
        .ProseMirror th, .ProseMirror td {
          border: 1px solid #e5e7eb;
          padding: 0.75em;
          text-align: left;
        }
        
        .ProseMirror th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        
        .ProseMirror hr {
          border: none;
          border-top: 2px solid #e5e7eb;
          margin: 2em 0;
        }
        
        .ProseMirror ul[data-type="taskList"] {
          list-style: none;
          padding-left: 0;
        }
        
        .ProseMirror ul[data-type="taskList"] li {
          display: flex;
          align-items: flex-start;
          gap: 0.5em;
        }
        
        .ProseMirror ul[data-type="taskList"] li > label {
          flex-shrink: 0;
          margin-top: 0.25em;
        }
        
        .ProseMirror ul[data-type="taskList"] li > div {
          flex: 1;
        }
        
        /* Editor toolbar button hover states */
        .ProseMirror::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .ProseMirror::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        
        .ProseMirror::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
        
        .ProseMirror::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
      <Header showBackLink />
      
      {/* Side Panel */}
      <div className="w-80 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 pt-16" style={{ left: 0 }}>
        {/* Header */}
        <div className="p-4 flex flex-col gap-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-medium text-gray-800">Document tabs</h2>
            <button 
              onClick={() => setIsAddingTab(true)}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          {/* Add New Tab Input */}
          {isAddingTab && (
            <div className="px-2">
              <div className="flex items-center gap-2 bg-white border border-blue-300 rounded-lg p-2 shadow-sm">
                <input
                  type="text"
                  value={newTabTitle}
                  onChange={(e) => setNewTabTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tab name..."
                  className="flex-1 text-sm outline-none bg-transparent"
                  autoFocus
                />
                <button
                  onClick={addTab}
                  className="p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button
                  onClick={() => { setIsAddingTab(false); setNewTabTitle(''); }}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tabs List */}
        <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-100 text-blue-800 rounded-full' 
                    : 'text-gray-700 hover:bg-gray-50 rounded-lg'}
                `}
              >
                <div className="flex items-center gap-4 flex-1">
                  <svg className={`w-[18px] h-[18px] ${isActive ? 'text-blue-700' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[15px] font-medium truncate max-w-[160px]">
                    {tab.title}
                  </span>
                </div>
                
                {/* Three dots menu on hover */}
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Close all other menus first
                      document.querySelectorAll('[id^="menu-"]').forEach(el => {
                        if (el.id !== `menu-${tab.id}`) el.classList.add('hidden');
                      });
                      const menu = document.getElementById(`menu-${tab.id}`);
                      if (menu) menu.classList.toggle('hidden');
                    }}
                    className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-200 rounded-full transition-all"
                  >
                    <svg className="w-[18px] h-[18px] text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div id={`menu-${tab.id}`} className="hidden absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50 min-w-[140px]">
                    <button
                      onClick={(e) => {
                        document.getElementById(`menu-${tab.id}`).classList.add('hidden');
                        openRenameDialog(e, tab);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Rename
                    </button>
                    {!tab.path && (
                      <button
                        onClick={(e) => {
                          document.getElementById(`menu-${tab.id}`).classList.add('hidden');
                          deleteTab(e, tab.id);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-20 px-4 sm:px-6 max-w-6xl mx-auto pb-12 ml-80">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1D0652] mb-2">Competitors</h1>
          <p className="text-gray-500">Analyze and track your competitive landscape</p>
        </div>

        {/* Content Based on Active Tab */}
        {activeTabData?.path ? (
          <Link to={activeTabData.path} className="block">
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{tabs[activeTab]?.title}</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Click to view this section.
              </p>
            </div>
          </Link>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Editor Toolbar */}
            <div className="border-b border-gray-200 p-3 flex flex-wrap items-center justify-between gap-2 bg-gray-50">
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('bold') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Bold"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('italic') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Italic"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 4h4M14 20H6M7 4l4 16" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleUnderline().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('underline') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Underline"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('strike') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Strikethrough"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4H9a3 3 0 00-3 3v.5M8 20h7a3 3 0 003-3v-.5M4 12h.01M20 12h.01" />
                  </svg>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('heading', { level: 1 }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Heading 1"
                >
                  <span className="text-xs font-bold">H1</span>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Heading 2"
                >
                  <span className="text-xs font-bold">H2</span>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Heading 3"
                >
                  <span className="text-xs font-bold">H3</span>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('bulletList') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Bullet List"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h.01M8 6h12M4 12h.01M8 12h12M4 18h.01M8 18h12" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('orderedList') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Ordered List"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10M4 4h.01M4 8h.01M4 12h.01M4 16h.01" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleTaskList().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('taskList') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Task List"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('blockquote') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Quote"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M8 20h6a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('codeBlock') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Code Block"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => editor?.chain().focus().setTextAlign('left').run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive({ textAlign: 'left' }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Align Left"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().setTextAlign('center').run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive({ textAlign: 'center' }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Align Center"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M5 18h14" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().setTextAlign('right').run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive({ textAlign: 'right' }) ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Align Right"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M10 12h10M6 18h14" />
                  </svg>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => editor?.chain().focus().toggleHighlight({ color: '#ffc078' }).run()}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('highlight') ? 'bg-yellow-200 text-yellow-800' : 'text-gray-700'}`}
                  title="Highlight"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                
                <button
                  onClick={() => {
                    const url = window.prompt('Enter URL:');
                    if (url) editor?.chain().focus().setLink({ href: url }).run();
                  }}
                  className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('link') ? 'bg-gray-200 text-blue-600' : 'text-gray-700'}`}
                  title="Add Link"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
                <button
                  onClick={() => editor?.chain().focus().unsetLink().run()}
                  disabled={!editor?.isActive('link')}
                  className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-700 disabled:opacity-30"
                  title="Remove Link"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {isSaving ? (
                  <span className="text-blue-500">Saving...</span>
                ) : lastSaved ? (
                  <span>Saved</span>
                ) : null}
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="p-4 min-h-[400px]">
              <EditorContent editor={editor} />
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Delete Tab?</h3>
            <p className="text-gray-500 text-center mb-6">
              Are you sure you want to delete "{tabToDelete?.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => { setShowDeleteDialog(false); setTabToDelete(null); }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteTab}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rename Dialog */}
      {showRenameDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">Rename Tab</h3>
            <input
              type="text"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') confirmRenameTab(); if (e.key === 'Escape') { setShowRenameDialog(false); setTabToRename(null); setNewTabName(''); } }}
              placeholder="Enter new name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => { setShowRenameDialog(false); setTabToRename(null); setNewTabName(''); }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRenameTab}
                disabled={!newTabName.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
