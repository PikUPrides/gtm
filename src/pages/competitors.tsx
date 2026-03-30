
import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { id: 0, title: 'Sword', path: '/sword' },
    { id: 1, title: 'Slide' },
    { id: 2, title: 'Ubers Moat' },
    { id: 3, title: 'Counter' },
    { id: 4, title: 'How Lyft survived' },
    { id: 5, title: 'Empower NYC validation' },
    { id: 6, title: 'How empower handles...' },
  ]);
  const [isAddingTab, setIsAddingTab] = useState(false);
  const [newTabTitle, setNewTabTitle] = useState('');

  const addTab = () => {
    if (newTabTitle.trim()) {
      const newId = Math.max(...tabs.map(t => t.id)) + 1;
      setTabs([...tabs, { id: newId, title: newTabTitle.trim() }]);
      setNewTabTitle('');
      setIsAddingTab(false);
      setActiveTab(newId);
    }
  };

  const deleteTab = (e, id) => {
    e.stopPropagation();
    const tabToDelete = tabs.find(t => t.id === id);
    if (tabToDelete?.path) return; // Don't delete pages with paths
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id) {
      setActiveTab(newTabs[0]?.id || 0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTab();
    if (e.key === 'Escape') setIsAddingTab(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafe] flex" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');`}</style>
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
                <div className="flex items-center gap-4">
                  <svg className={`w-[18px] h-[18px] ${isActive ? 'text-blue-700' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[15px] font-medium truncate max-w-[160px]">
                    {tab.title}
                  </span>
                </div>
                
                {isActive ? (
                  <button className="p-1 hover:bg-blue-200 rounded-full">
                    <svg className="w-[18px] h-[18px] text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                ) : (
                  <button 
                    onClick={(e) => deleteTab(e, tab.id)}
                    className="p-1 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-full transition-all"
                  >
                    <svg className="w-[18px] h-[18px] text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
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
        {activeTab === 0 ? (
          <Link to="/sword" className="block">
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Sword</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Click to view the Sword analysis tool for competitive intelligence.
              </p>
            </div>
          </Link>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{tabs[activeTab].title}</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              This section is under development. Check back soon for content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
