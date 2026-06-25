
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onHomeClick: () => void;
  onCompareClick: () => void;
  isMobileView: boolean;
  toggleView: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onHomeClick, onCompareClick, isMobileView, toggleView }) => {
  return (
    <div className={`min-h-screen flex flex-col ${isMobileView ? 'max-w-md mx-auto bg-white shadow-2xl' : 'bg-slate-50'}`}>
      <header className="sticky top-0 z-50 bg-indigo-900 text-white shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={onHomeClick}>
          <div className="bg-indigo-500 p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight animate-fade-in" title="Advanced Neuro-Gnostic Engine for Learning & Administration">A.N.G.E.L.A Neuro DB</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={onCompareClick}
            className="text-xs md:text-sm bg-indigo-700 hover:bg-indigo-600 px-3 py-1.5 rounded-full font-medium transition-colors"
          >
            Compare
          </button>
          <button 
            onClick={toggleView}
            className="p-1.5 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors"
            title={isMobileView ? "Desktop View" : "Phone View"}
          >
            {isMobileView ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 p-4 text-center text-slate-500 text-xs">
        <p>© 2026 A.N.G.E.L.A. (Advanced Neuro-Gnostic Engine for Learning & Administration) • Comprehensive Neurotransmitter Reference</p>
      </footer>
    </div>
  );
};

export default Layout;
