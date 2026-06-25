
import React, { useState } from 'react';
import { Neurotransmitter, ActionType, SignalType } from '../types';
import { DEFAULT_NEURO_IMAGE } from '../constants';
import { sampleNeurotransmitters } from '../data/sampleNeurotransmitters';

interface EditorViewProps {
  categories: string[];
  onSave: (neuro: Neurotransmitter) => void;
  onBulkSave: (neuros: Neurotransmitter[]) => void;
  onCancel: () => void;
  allPosts: Neurotransmitter[];
}

const EditorView: React.FC<EditorViewProps> = ({ categories, onSave, onBulkSave, onCancel, allPosts }) => {
  const [formData, setFormData] = useState<Partial<Neurotransmitter>>({
    id: `nt-${Date.now()}`,
    name: '',
    symbol: '',
    altNames: [],
    category: categories[0] || 'Uncategorized',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: '',
    chemicalStructureDescription: '',
    precursors: [],
    primaryReceptors: [],
    brainRegions: [],
    functions: [],
    disorders: [],
    naturalModulators: { foods: [], activities: [], lifestyle: [] },
    pharmaceuticals: { agonists: [], antagonists: [], reuptakeInhibitors: [] },
    relatedNeurotransmitters: [],
    clinicalNotes: '',
    researchNotes: '',
    image: DEFAULT_NEURO_IMAGE
  });

  const [activeTab, setActiveTab] = useState<'Identity' | 'Chemical' | 'Synthesis' | 'Clinical' | 'Modulators'>('Identity');

  const updateField = (field: keyof Neurotransmitter, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRepeaterAdd = (field: string, value: string) => {
    if (!value) return;
    const current = (formData as any)[field] || [];
    updateField(field as any, [...current, value]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return alert('Name is required');
    
    // Ensure image is not empty on final submission
    const finalData = {
      ...formData,
      image: formData.image?.trim() || DEFAULT_NEURO_IMAGE
    } as Neurotransmitter;

    onSave(finalData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Neuro-Studio Editor</h2>
            <p className="text-indigo-100 text-xs">Define a new chemical node for the system</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={() => {
                if (window.confirm('Populate database with 4 sample neurotransmitters (Histamine, Glycine, Adenosine, Anandamide)?')) {
                  onBulkSave(sampleNeurotransmitters);
                }
              }}
              className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold border border-white/20 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Populate Samples
            </button>
            <button onClick={onCancel} className="p-2 hover:bg-indigo-500 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        <div className="flex border-b border-slate-100 bg-slate-50 overflow-x-auto">
          {['Identity', 'Chemical', 'Synthesis', 'Clinical', 'Modulators'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600 bg-white' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {activeTab === 'Identity' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Primary Name</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => updateField('name', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500" 
                  placeholder="e.g. Dopamine"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Abbreviation / Symbol</label>
                <input 
                  type="text" 
                  value={formData.symbol} 
                  onChange={e => updateField('symbol', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg" 
                  placeholder="e.g. DA"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Class (Taxonomy)</label>
                <select 
                  value={formData.category} 
                  onChange={e => updateField('category', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Action Type</label>
                <select 
                  value={formData.action} 
                  onChange={e => updateField('action', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  {Object.values(ActionType).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
          )}

          {activeTab === 'Chemical' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Formula</label>
                  <input 
                    type="text" 
                    value={formData.chemicalFormula} 
                    onChange={e => updateField('chemicalFormula', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase">Image URL</label>
                  <input 
                    type="text" 
                    value={formData.image} 
                    onChange={e => updateField('image', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg"
                    placeholder="Provide image URL or leave empty for default"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Structural Description</label>
                <textarea 
                  value={formData.chemicalStructureDescription} 
                  onChange={e => updateField('chemicalStructureDescription', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg min-h-[100px]"
                />
              </div>
              {/* Preview image */}
              <div className="mt-4">
                <label className="text-xs font-bold text-slate-400 uppercase block mb-2">Image Preview</label>
                <div className="w-full h-40 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center relative">
                  <img 
                    src={formData.image?.trim() || DEFAULT_NEURO_IMAGE} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = DEFAULT_NEURO_IMAGE;
                    }}
                  />
                  {!formData.image?.trim() && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 pointer-events-none">
                      <span className="bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-200 uppercase">Using Default Placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Synthesis' && (
             <div className="space-y-6">
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4">Metabolism Repeater</h4>
                  <div className="flex gap-2 mb-4">
                    <input id="prec_in" type="text" className="flex-1 px-4 py-2 border rounded-lg" placeholder="Add precursor..." />
                    <button type="button" onClick={() => {
                      const el = document.getElementById('prec_in') as HTMLInputElement;
                      handleRepeaterAdd('precursors', el.value);
                      el.value = '';
                    }} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">+</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.precursors?.map(p => (
                      <span key={p} className="bg-white border px-2 py-1 rounded text-sm flex items-center gap-2">
                        {p}
                        <button type="button" onClick={() => updateField('precursors', formData.precursors?.filter(x => x !== p))} className="text-red-400 hover:text-red-600">×</button>
                      </span>
                    ))}
                  </div>
               </div>
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4">Location Tags</h4>
                  <div className="flex gap-2 mb-4">
                    <input id="region_in" type="text" className="flex-1 px-4 py-2 border rounded-lg" placeholder="Add region..." />
                    <button type="button" onClick={() => {
                      const el = document.getElementById('region_in') as HTMLInputElement;
                      handleRepeaterAdd('brainRegions', el.value);
                      el.value = '';
                    }} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">+</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.brainRegions?.map(r => (
                      <span key={r} className="bg-white border px-2 py-1 rounded text-sm flex items-center gap-2">
                        {r}
                        <button type="button" onClick={() => updateField('brainRegions', formData.brainRegions?.filter(x => x !== r))} className="text-red-400 hover:text-red-600">×</button>
                      </span>
                    ))}
                  </div>
               </div>
             </div>
          )}

          <div className="flex justify-end gap-3 pt-8 border-t border-slate-100">
            <button type="button" onClick={onCancel} className="px-6 py-2 text-slate-400 font-bold hover:text-slate-600">Discard</button>
            <button type="submit" className="px-8 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-500 transition-colors">Publish Record</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditorView;
