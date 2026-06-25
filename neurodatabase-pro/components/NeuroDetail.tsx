
import React, { useState } from 'react';
import { Neurotransmitter, EduMode, ActionType } from '../types';
import Accordion from './Accordion';
import { DEFAULT_NEURO_IMAGE } from '../constants';
import { glossary } from '../data/glossary';

interface NeuroDetailProps {
  item: Neurotransmitter;
  mode: EduMode;
  onNavigate: (id: string) => void;
}

const NeuroDetail: React.FC<NeuroDetailProps> = ({ item, mode, onNavigate }) => {
  const [activeTerm, setActiveTerm] = useState<{term: string, type: string} | null>(null);

  const showFor = (modes: EduMode[]) => modes.includes(mode);

  const getEvidenceColor = (level?: string) => {
    switch(level) {
      case 'Strong': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Moderate': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Emerging': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Mixed': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-50 text-slate-500 border-slate-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-fadeIn relative">
      {/* Term Definition Modal */}
      {activeTerm && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn" 
          onClick={() => setActiveTerm(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-4 transform transition-all scale-100" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                 <span className="text-[10px] font-bold tracking-widest text-indigo-500 uppercase border border-indigo-100 bg-indigo-50 px-2 py-0.5 rounded-full">
                   {activeTerm.type}
                 </span>
                 <h3 className="text-2xl font-bold text-slate-800 mt-2 leading-tight">{activeTerm.term}</h3>
              </div>
              <button 
                onClick={() => setActiveTerm(null)} 
                className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-full transition-colors"
              >
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="space-y-4">
               <div>
                 <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Definition</h4>
                 <p className="text-slate-800 font-medium text-lg leading-snug">
                    {glossary[activeTerm.term]?.definition || "No definition available for this term in the current database."}
                 </p>
               </div>
               
               {glossary[activeTerm.term]?.details && (
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Functional Context</h4>
                   <p className="text-sm text-slate-600 leading-relaxed">
                     {glossary[activeTerm.term].details}
                   </p>
                 </div>
               )}
            </div>
            
            <button 
              onClick={() => setActiveTerm(null)}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-lg transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mode Indicator Overlay */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
           {item.altNames?.map(name => (
             <span key={name} className="px-2 py-1 bg-slate-100 text-slate-400 text-[10px] font-bold rounded-md">{name}</span>
           ))}
        </div>
        <span className="px-3 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-slate-300">
          Viewing: {mode} Mode
        </span>
      </div>

      {/* Header Info */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 shrink-0 space-y-4">
          <div className="relative group">
            <img 
              src={item.image || DEFAULT_NEURO_IMAGE} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-xl shadow-inner border border-slate-100"
              onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_NEURO_IMAGE; }}
            />
          </div>

          {/* Molecular Structure Preview */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center min-h-[160px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Molecular Structure</span>
            {item.structureSvg ? (
               <div 
                 className="w-full max-h-32 flex items-center justify-center p-2"
                 dangerouslySetInnerHTML={{ __html: item.structureSvg }}
               />
            ) : (
               <div className="flex flex-col items-center gap-2 opacity-30 py-4">
                 <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                 <span className="text-[10px] font-medium italic">SVG Placeholder</span>
               </div>
            )}
            <div className="mt-3 text-center">
               <code className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{item.chemicalFormula}</code>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase">
              {item.category}
            </span>
            <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
              item.action === ActionType.EXCITATORY ? 'bg-red-100 text-red-700' : 
              item.action === ActionType.INHIBITORY ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {item.action}
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <h2 className="text-4xl font-extrabold text-slate-900">{item.name}</h2>
            {item.symbol && <span className="text-xl font-mono text-slate-400">({item.symbol})</span>}
          </div>
          
          <p className="mt-4 text-slate-600 text-lg">
            {mode === EduMode.BEGINNER 
              ? `A key ${item.signalType.toLowerCase()} that primarily regulates ${item.functions[0].toLowerCase()} and ${item.functions[1]?.toLowerCase() || 'other cognitive systems'}.`
              : item.chemicalStructureDescription}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
             <div className="flex items-center gap-2">
               <span className="text-slate-400 font-medium text-xs">Distribution:</span>
               <span className="text-slate-600 text-xs font-bold uppercase">{item.distribution}</span>
             </div>
             {item.molarMass && (
               <div className="flex items-center gap-2">
                 <span className="text-slate-400 font-medium text-xs">Molar Mass:</span>
                 <span className="text-slate-600 text-xs font-bold">{item.molarMass}</span>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100">
        <Accordion title="1. Identity & Localization" defaultOpen>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                  Primary Regions
                  <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 rounded font-normal normal-case">Interactive</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.brainRegions.map(region => (
                    <button 
                      key={region}
                      onClick={() => setActiveTerm({ term: region, type: 'Brain Region' })}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all text-left w-full sm:w-auto"
                    >
                      <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors"></span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-900">{region}</span>
                    </button>
                  ))}
                </div>
              </div>
              {item.pathways && item.pathways.length > 0 && (
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2 text-sm uppercase tracking-wider">Major Pathways</h4>
                  <ul className="space-y-2 text-sm">
                    {item.pathways.map(p => <li key={p.name}><span className="font-bold">{p.name}:</span> {p.description}</li>)}
                  </ul>
                </div>
              )}
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                Functional Domains
                <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 rounded font-normal normal-case">Interactive</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.functions.map(f => (
                  <button 
                    key={f} 
                    onClick={() => setActiveTerm({ term: f, type: 'Functional Domain' })}
                    className="bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 shadow-sm hover:shadow-md hover:text-indigo-600 hover:border-indigo-200 transition-all"
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Accordion>

        {showFor([EduMode.CLINICAL, EduMode.RESEARCH]) && (
          <Accordion title="2. Metabolism & Enzymatic Activity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-500 text-xs uppercase mb-3">Biosynthesis Precursors</h4>
                <div className="flex flex-wrap gap-2">
                  {item.precursors.map(p => <span key={p} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-100 text-sm font-bold">{p}</span>)}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-500 text-xs uppercase mb-3">Breakdown Enzymes & Transporters</h4>
                <div className="space-y-3">
                  {item.enzymes?.map(e => (
                    <div key={e.name} className="text-sm">
                      <span className="font-bold text-indigo-600">{e.name}:</span> <span className="text-slate-500 italic">{e.note}</span>
                    </div>
                  ))}
                  {item.transporters?.map(t => (
                    <div key={t} className="text-sm">
                      <span className="font-bold text-red-600">Transport:</span> <span className="text-slate-500">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        )}

        <Accordion title="3. Receptors & Molecular Targets">
          <div className="mb-6 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
            <p className="text-sm text-slate-600 leading-relaxed italic">
              Neurotransmitters exert their effects by binding to specific receptor proteins on the surface of target cells. These molecular targets determine whether the signal will be excitatory, inhibitory, or modulatory, and dictate the duration and nature of the physiological response.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {item.primaryReceptors.map(r => (
              <div key={r.name} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">{r.name}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    r.type === 'Ionotropic' ? 'bg-orange-100 text-orange-700' : 
                    r.type === 'Metabotropic' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                  }`}>{r.type}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {r.subtypes.map(s => <span key={s} className="text-[10px] bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="4. Clinical Profile">
          <div className="space-y-6">
            {item.disorders.map(d => (
              <div key={d.condition} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-900">{d.condition}</h4>
                      {d.evidenceLevel && (
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getEvidenceColor(d.evidenceLevel)}`}>
                          {d.evidenceLevel} Evidence
                        </span>
                      )}
                   </div>
                </div>

                {d.pathophysiology && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">Molecular Pathophysiology</h5>
                    <p className="text-sm text-slate-700 leading-relaxed italic">{d.pathophysiology}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-tighter block mb-2">Clinical Hypo-state</span>
                    <p className="text-sm text-slate-800 leading-snug">{d.lowLevelEffect}</p>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-tighter block mb-2">Clinical Hyper-state</span>
                    <p className="text-sm text-slate-800 leading-snug">{d.highLevelEffect}</p>
                  </div>
                </div>

                {d.therapeuticFocus && (
                  <div className="flex items-start gap-3 p-4 bg-indigo-50/30 rounded-xl border border-indigo-100/50">
                    <div className="bg-indigo-600 p-2 rounded-lg text-white">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.558 1.456l-2.233.446a2 2 0 01-1.558-1.456l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-1.012 1.012a2 2 0 01-2.828 0L3.714 17.214a2 2 0 010-2.828l1.012-1.012a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-2.903-.727a2 2 0 01-1.456-1.558L.446 5.518a2 2 0 011.456-1.558l2.903-.727a2 2 0 001.414-1.96L6.696.547a2 2 0 012.828 0L10.536 1.56a2 2 0 001.022.547l2.387.477a2 2 0 001.96-1.414l.727-2.903a2 2 0 011.558-1.456l2.233-.446a2 2 0 011.558 1.456l.727 2.903a2 2 0 001.96 1.414l2.387-.477a2 2 0 001.022-.547l1.012-1.012a2 2 0 012.828 0l1.012 1.012a2 2 0 010 2.828l-1.012 1.012a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 001.414 1.96l2.903.727a2 2 0 011.456 1.558l-.446 2.233a2 2 0 01-1.456 1.558l-2.903.727a2 2 0 00-1.414 1.96l-.727 2.903a2 2 0 01-2.828 0l-1.012-1.012z" /></svg>
                    </div>
                    <div>
                       <h5 className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-1">Standard Therapeutic Focus</h5>
                       <p className="text-xs text-slate-600 font-medium">{d.therapeuticFocus}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Accordion>

        {/* Natural Sources & Lifestyle Section - Visible for All Modes */}
        <Accordion title="5. Natural Sources & Lifestyle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dietary Sources */}
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🥗</span> Dietary Sources
              </h4>
              {item.naturalModulators?.foods?.length > 0 ? (
                <ul className="space-y-2">
                  {item.naturalModulators.foods.map(food => (
                    <li key={food} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-emerald-400 mt-1.5 text-[10px]">●</span> {food}
                    </li>
                  ))}
                </ul>
              ) : <p className="text-xs text-slate-400 italic">No dietary data available.</p>}
            </div>
            
            {/* Activities */}
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <span className="text-xl">⚡</span> Activities
              </h4>
              {item.naturalModulators?.activities?.length > 0 ? (
                <ul className="space-y-2">
                  {item.naturalModulators.activities.map(act => (
                    <li key={act} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-orange-400 mt-1.5 text-[10px]">●</span> {act}
                    </li>
                  ))}
                </ul>
              ) : <p className="text-xs text-slate-400 italic">No activity data available.</p>}
            </div>

            {/* Lifestyle */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🧘</span> Lifestyle
              </h4>
               {item.naturalModulators?.lifestyle?.length > 0 ? (
                <ul className="space-y-2">
                  {item.naturalModulators.lifestyle.map(style => (
                    <li key={style} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-blue-400 mt-1.5 text-[10px]">●</span> {style}
                    </li>
                  ))}
                </ul>
               ) : <p className="text-xs text-slate-400 italic">No lifestyle data available.</p>}
            </div>
          </div>
        </Accordion>

        {/* Entheogen Cross-Reference Section */}
        {item.entheogens && item.entheogens.length > 0 && (
          <Accordion title="6. Entheogen & Ethnobotanical Reference">
             <div className="mb-4 p-4 bg-purple-50 rounded-xl border border-purple-100 text-sm text-purple-900 leading-relaxed italic">
               Cross-referencing the primary ethnobotanicals and entheogenic substances known to modulate this specific neurotransmitter system.
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.entheogens.map(e => (
                  <div key={e.name} className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-800">{e.name}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        e.interaction === 'Primary' ? 'bg-purple-600 text-white' : 
                        e.interaction === 'Secondary' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-500'
                      }`}>{e.interaction}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-bold text-purple-800">Mechanism:</span> {e.mechanism}
                    </p>
                  </div>
                ))}
             </div>
          </Accordion>
        )}

        <Accordion title="7. System Nodes & Relationships">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-800 mb-3 text-sm">Coupled Transmitters</h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedNeurotransmitters.map(id => (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    className="px-4 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-lg text-sm font-medium transition-all border border-slate-200"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-900 p-4 rounded-xl shadow-inner text-white">
                <h5 className="font-bold text-indigo-300 text-[10px] mb-2 uppercase tracking-widest">Clinical Protocol</h5>
                <p className="text-sm leading-relaxed italic opacity-90">"{item.clinicalNotes}"</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl shadow-inner text-white">
                <h5 className="font-bold text-emerald-400 text-[10px] mb-2 uppercase tracking-widest">Research Abstract</h5>
                <p className="text-sm leading-relaxed italic opacity-90">"{item.researchNotes}"</p>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default NeuroDetail;
