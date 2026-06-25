
import React, { useState, useMemo, useEffect } from 'react';
import { neurotransmitters as defaultData } from './data/neurotransmitters';
import { ActionType, SignalType, EduMode, Neurotransmitter } from './types';
import Layout from './components/Layout';
import NeuroDetail from './components/NeuroDetail';
import CompareView from './components/CompareView';
import EditorView from './components/EditorView';
import TaxonomyManager from './components/TaxonomyManager';
import WBANView from './components/WBANView';
import { DEFAULT_NEURO_IMAGE } from './constants';

type ViewState = 'list' | 'detail' | 'compare' | 'create' | 'taxonomy' | 'wban';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('list');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string | 'All'>('All');
  const [isMobileView, setIsMobileView] = useState(false);
  const [eduMode, setEduMode] = useState<EduMode>(EduMode.BEGINNER);

  // Dynamic Data States
  const [allNeuro, setAllNeuro] = useState<Neurotransmitter[]>([]);
  const [customCategories, setCustomCategories] = useState<string[]>([]);

  // Load from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('neuro_db_posts');
    const savedCats = localStorage.getItem('neuro_db_categories');
    
    if (savedData) {
      setAllNeuro(JSON.parse(savedData));
    } else {
      // Map existing data to new schema for default entries
      const mapped = (defaultData as any[]).map(d => ({
        ...d,
        altNames: d.altNames || [],
        signalType: d.signalType || SignalType.NEUROTRANSMITTER,
        distribution: d.distribution || 'Both',
        pathways: d.pathways || [],
        enzymes: d.enzymes || [],
        transporters: d.transporters || [],
        image: d.image || DEFAULT_NEURO_IMAGE
      }));
      setAllNeuro(mapped);
    }

    if (savedCats) {
      setCustomCategories(JSON.parse(savedCats));
    } else {
      setCustomCategories(['Amino Acid', 'Monoamine', 'Neuropeptide', 'Purine', 'Endocannabinoid', 'Gasotransmitter', 'Cholinergic']);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (allNeuro.length > 0) {
      localStorage.setItem('neuro_db_posts', JSON.stringify(allNeuro));
    }
  }, [allNeuro]);

  useEffect(() => {
    if (customCategories.length > 0) {
      localStorage.setItem('neuro_db_categories', JSON.stringify(customCategories));
    }
  }, [customCategories]);

  const filteredItems = useMemo(() => {
    return allNeuro.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.symbol && item.symbol.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.disorders.some(d => d.condition.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, filterCategory, allNeuro]);

  const currentNeuro = allNeuro.find(n => n.id === selectedId);

  const handleSaveNeuro = (newNeuro: Neurotransmitter) => {
    setAllNeuro(prev => {
      const exists = prev.find(n => n.id === newNeuro.id);
      if (exists) {
        return prev.map(n => n.id === newNeuro.id ? newNeuro : n);
      }
      return [newNeuro, ...prev];
    });
    setView('list');
  };

  const handleBulkSaveNeuro = (newNeuros: Neurotransmitter[]) => {
    setAllNeuro(prev => {
      const existingIds = new Set(prev.map(n => n.id));
      const filteredNew = newNeuros.filter(n => !existingIds.has(n.id));
      return [...filteredNew, ...prev];
    });
    setView('list');
  };

  const handleNavigate = (id: string) => {
    setSelectedId(id);
    setView('detail');
  };

  const renderContent = () => {
    if (view === 'compare') {
      return <CompareView data={allNeuro} mode={eduMode} />;
    }

    if (view === 'create') {
      return (
        <EditorView 
          categories={customCategories} 
          onSave={handleSaveNeuro} 
          onBulkSave={handleBulkSaveNeuro}
          onCancel={() => setView('list')} 
          allPosts={allNeuro}
        />
      );
    }

    if (view === 'taxonomy') {
      return (
        <TaxonomyManager 
          categories={customCategories} 
          onUpdate={setCustomCategories} 
          onClose={() => setView('list')} 
        />
      );
    }

    if (view === 'wban') {
      return <WBANView neuroData={allNeuro} />;
    }

    if (view === 'detail' && currentNeuro) {
      return <NeuroDetail item={currentNeuro} mode={eduMode} onNavigate={handleNavigate} />;
    }

    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
        {/* Dashboard Header */}
        <section className="bg-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-extrabold mb-1">A.N.G.E.L.A. Neuro-Explorer Hub</h2>
            <p className="text-xs font-semibold tracking-wider text-indigo-200 uppercase mb-3">
              Advanced Neuro-Gnostic Engine for Learning & Administration
            </p>
            <p className="text-indigo-100 mb-6 text-sm">Explore the human brain's chemical landscape with high-fidelity structured reference data.</p>
            
            <div className="flex flex-wrap gap-4">
               {/* Mode Toggle */}
              <div className="inline-flex bg-indigo-800/50 p-1 rounded-xl backdrop-blur-sm border border-white/10">
                {Object.values(EduMode).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setEduMode(mode)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                      eduMode === mode 
                      ? 'bg-white text-indigo-600 shadow-lg' 
                      : 'text-indigo-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => setView('create')}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold shadow-lg transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add Neurotransmitter
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
             <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
               <path d="M13 7H7v6h6V7z" />
               <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5v10h10V5H5z" clipRule="evenodd" />
             </svg>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-full md:flex-1 relative">
            <input 
              type="text"
              placeholder="Search by name, symbol, disorder, or chemical..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
            <svg className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select 
              value={filterCategory} 
              onChange={e => setFilterCategory(e.target.value)}
              className="flex-1 md:flex-none px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="All">All Categories</option>
              {customCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <button 
              onClick={() => setView('taxonomy')}
              className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors"
              title="Manage Categories"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={item.image || DEFAULT_NEURO_IMAGE} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={item.name} 
                  onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_NEURO_IMAGE; }}
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-full border border-white/20 backdrop-blur-md text-white shadow-sm ${
                    item.action === ActionType.EXCITATORY ? 'bg-red-500/80' : 
                    item.action === ActionType.INHIBITORY ? 'bg-blue-500/80' : 'bg-green-500/80'
                  }`}>
                    {item.action}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                  <span className="text-xs font-mono text-slate-400">{item.symbol}</span>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                  {item.chemicalStructureDescription}
                </p>
                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.functions.slice(0, 3).map(f => (
                      <span key={f} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 font-bold text-sm rounded-xl transition-colors border border-slate-100 group-hover:border-indigo-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <div className="text-slate-400 text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-600">No neurotransmitters found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search query or filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setFilterCategory('All'); }}
              className="mt-6 text-indigo-600 font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout 
      title="A.N.G.E.L.A. Neuro Database (ANDB)" 
      onHomeClick={() => setView('list')} 
      onCompareClick={() => setView('compare')}
      isMobileView={isMobileView}
      toggleView={() => setIsMobileView(!isMobileView)}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
