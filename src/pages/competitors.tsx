
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '../components/Header.jsx';
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

  // Create TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
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
    ],
    content: tabContent,
    onUpdate: ({ editor }) => {
      setTabContent(editor.getHTML());
    },
  });

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
    if (activeTabData && editor) {
      const newContent = activeTabData.content || '';
      if (editor.getHTML() !== newContent) {
        editor.commands.setContent(newContent);
      }
      setTabContent(newContent);
    }
  }, [activeTab, tabs, editor]);

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

  const saveContent = useCallback(async (content) => {
    const activeTabData = tabs.find(t => t.id === activeTab);
    if (!activeTabData?.rowId || activeTabData.path) return;
    
    try {
      setIsSaving(true);
      await serenities.entities['Document Tabs'].update(activeTabData.rowId, {
        Content: content,
      });
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
    if (activeTabData?.path) return;
    
    const timer = setTimeout(() => {
      saveContent(tabContent);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [tabContent, activeTab, saveContent]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTab();
    if (e.key === 'Escape') setIsAddingTab(false);
  };

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Google Sans', 'Roboto', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
        
        /* Google Docs-like styling */
        .doc-container {
          max-width: 850px;
          margin: 0 auto;
          padding: 40px 60px;
        }
        
        .doc-title {
          font-size: 28px;
          font-weight: 400;
          color: #202124;
          border: none;
          outline: none;
          width: 100%;
          margin-bottom: 24px;
        }
        
        .doc-title::placeholder {
          color: #9aa0a6;
        }
        
        .ProseMirror {
          min-height: 600px;
          outline: none;
          font-size: 14px;
          line-height: 1.8;
          color: #202124;
          font-family: 'Google Sans', 'Roboto', sans-serif;
        }
        
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9aa0a6;
          pointer-events: none;
          height: 0;
        }
        
        .ProseMirror h1 {
          font-size: 26px;
          font-weight: 400;
          margin-top: 24px;
          margin-bottom: 8px;
          color: #202124;
        }
        
        .ProseMirror h2 {
          font-size: 20px;
          font-weight: 500;
          margin-top: 20px;
          margin-bottom: 8px;
          color: #202124;
        }
        
        .ProseMirror h3 {
          font-size: 16px;
          font-weight: 500;
          margin-top: 16px;
          margin-bottom: 8px;
          color: #202124;
        }
        
        .ProseMirror p {
          margin-bottom: 12px;
        }
        
        .ProseMirror ul, .ProseMirror ol {
          padding-left: 24px;
          margin: 8px 0;
        }
        
        .ProseMirror li {
          margin: 4px 0;
        }
        
        .ProseMirror blockquote {
          border-left: 3px solid #dadce0;
          padding-left: 16px;
          margin: 16px 0;
          color: #5f6368;
        }
        
        .ProseMirror code {
          background-color: #f1f3f4;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Google Sans', 'Roboto', sans-serif;
          font-size: 13px;
        }
        
        .ProseMirror pre {
          background-color: #f1f3f4;
          padding: 16px;
          border-radius: 8px;
          overflow-x: auto;
          font-size: 13px;
        }
        
        .ProseMirror mark {
          background-color: #fef7e0;
          padding: 2px 0;
        }
        
        .ProseMirror a {
          color: #1a73e8;
          text-decoration: none;
        }
        
        .ProseMirror a:hover {
          text-decoration: underline;
        }
        
        .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 16px 0;
        }
        
        .ProseMirror th, .ProseMirror td {
          border: 1px solid #dadce0;
          padding: 12px;
          text-align: left;
        }
        
        .ProseMirror th {
          background-color: #f8f9fa;
          font-weight: 500;
        }
        
        .ProseMirror hr {
          border: none;
          border-top: 1px solid #dadce0;
          margin: 24px 0;
        }
        
        /* Tab bar styling */
        .tab-item {
          padding: 8px 16px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          color: #5f6368;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .tab-item:hover {
          color: #202124;
        }
        
        .tab-item.active {
          color: #1a73e8;
          border-bottom-color: #1a73e8;
        }
        
        /* Toolbar */
        .toolbar-btn {
          padding: 6px 12px;
          border-radius: 4px;
          color: #5f6368;
          transition: all 0.15s;
        }
        
        .toolbar-btn:hover {
          background-color: #f1f3f4;
          color: #202124;
        }
        
        .toolbar-btn.active {
          background-color: #e8f0fe;
          color: #1a73e8;
        }
        
        /* Status indicator */
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #34a853;
        }
      `}</style>

      {/* Top Tab Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="doc-container py-0 px-0 flex items-center justify-between">
          {/* Tab List */}
          <div className="flex items-center -mb-px">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-item flex items-center gap-2 ${isActive ? 'active' : ''}`}
                >
                  <span>{tab.title}</span>
                  {tabs.length > 1 && !tab.path && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete "${tab.title}"?`)) {
                          deleteTab(tab.id);
                        }
                      }}
                      className="ml-1 p-1 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
            
            {/* Add Tab Button */}
            {isAddingTab ? (
              <div className="flex items-center gap-2 ml-2">
                <input
                  type="text"
                  value={newTabTitle}
                  onChange={(e) => setNewTabTitle(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tab name..."
                  className="px-3 py-1 border border-gray-300 rounded text-sm outline-none focus:border-blue-500"
                  autoFocus
                />
                <button
                  onClick={addTab}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <button
                  onClick={() => { setIsAddingTab(false); setNewTabTitle(''); }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingTab(true)}
                className="ml-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                title="Add new tab"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Save Status */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
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
        
        {/* Toolbar */}
        <div className="doc-container py-2 px-0 flex items-center gap-1 border-b border-gray-100">
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`toolbar-btn ${editor?.isActive('bold') ? 'active' : ''}`}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`toolbar-btn ${editor?.isActive('italic') ? 'active' : ''}`}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={`toolbar-btn ${editor?.isActive('underline') ? 'active' : ''}`}
            title="Underline"
          >
            <u>U</u>
          </button>
          
          <div className="w-px h-5 bg-gray-300 mx-2"></div>
          
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`toolbar-btn ${editor?.isActive('heading', { level: 1 }) ? 'active' : ''}`}
            title="Heading 1"
          >
            H1
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`toolbar-btn ${editor?.isActive('heading', { level: 2 }) ? 'active' : ''}`}
            title="Heading 2"
          >
            H2
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`toolbar-btn ${editor?.isActive('heading', { level: 3 }) ? 'active' : ''}`}
            title="Heading 3"
          >
            H3
          </button>
          
          <div className="w-px h-5 bg-gray-300 mx-2"></div>
          
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={`toolbar-btn ${editor?.isActive('bulletList') ? 'active' : ''}`}
            title="Bullet list"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h.01M8 6h12M4 12h.01M8 12h12M4 18h.01M8 18h12" />
            </svg>
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={`toolbar-btn ${editor?.isActive('orderedList') ? 'active' : ''}`}
            title="Numbered list"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10M4 4h.01M4 8h.01M4 12h.01M4 16h.01" />
            </svg>
          </button>
          
          <div className="w-px h-5 bg-gray-300 mx-2"></div>
          
          <button
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            className={`toolbar-btn ${editor?.isActive('blockquote') ? 'active' : ''}`}
            title="Quote"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M8 20h6a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          </button>
          
          <div className="w-px h-5 bg-gray-300 mx-2"></div>
          
          <button
            onClick={() => editor?.chain().focus().toggleHighlight({ color: '#fef7e0' }).run()}
            className={`toolbar-btn ${editor?.isActive('highlight') ? 'active' : ''}`}
            title="Highlight"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const url = window.prompt('Enter URL:');
              if (url) editor?.chain().focus().setLink({ href: url }).run();
            }}
            className={`toolbar-btn ${editor?.isActive('link') ? 'active' : ''}`}
            title="Add link"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          
          <div className="w-px h-5 bg-gray-300 mx-2"></div>
          
          <button
            onClick={() => editor?.chain().focus().setTextAlign('left').run()}
            className={`toolbar-btn ${editor?.isActive({ textAlign: 'left' }) ? 'active' : ''}`}
            title="Align left"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
            </svg>
          </button>
          <button
            onClick={() => editor?.chain().focus().setTextAlign('center').run()}
            className={`toolbar-btn ${editor?.isActive({ textAlign: 'center' }) ? 'active' : ''}`}
            title="Align center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M5 18h14" />
            </svg>
          </button>
          <button
            onClick={() => editor?.chain().focus().setTextAlign('right').run()}
            className={`toolbar-btn ${editor?.isActive({ textAlign: 'right' }) ? 'active' : ''}`}
            title="Align right"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M10 12h10M6 18h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div className="doc-container">
        {/* Document Title */}
        <input
          type="text"
          className="doc-title"
          placeholder="Untitled document"
          defaultValue={activeTabData?.title || ''}
          onBlur={(e) => renameTab(activeTab, e.target.value)}
        />
        
        {/* Editor */}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
