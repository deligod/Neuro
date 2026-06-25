
import React, { useState } from 'react';
import { Neurotransmitter, EduMode } from '../types';

interface CompareViewProps {
  data: Neurotransmitter[];
  mode: EduMode;
}

const CompareView: React.FC<CompareViewProps> = ({ data, mode }) => {
  const [selectA, setSelectA] = useState<string>(data[0].id);
  const [selectB, setSelectB] = useState<string>(data[1]?.id || data[0].id);

  const neuroA = data.find(n => n.id === selectA)!;
  const neuroB = data.find(n => n.id === selectB)!;

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-6xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-extrabold text-slate-800">Neuro-Comparison Tool</h2>
        <div className="flex items-center gap-3">
          <select 
            value={selectA} 
            onChange={e => setSelectA(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 font-medium"
          >
            {data.map(n => <option key={n.id} value={n.id}>{n.name}</option>)}
          </select>
          <span className="font-bold text-slate-400 italic">vs</span>
          <select 
            value={selectB} 
            onChange={e => setSelectB(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 font-medium"
          >
            {data.map(n => <option key={n.id} value={n.id}>{n.name}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
        {/* Headers */}
        <div className="bg-indigo-900 p-6 text-white flex flex-col items-center">
           <img src={neuroA.image} className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg mb-4" />
           <h3 className="text-2xl font-bold">{neuroA.name}</h3>
           <span className="text-xs opacity-75">{neuroA.category}</span>
        </div>
        <div className="bg-slate-800 p-6 text-white flex flex-col items-center">
           <img src={neuroB.image} className="w-24 h-24 object-cover rounded-full border-4 border-slate-600 shadow-lg mb-4" />
           <h3 className="text-2xl font-bold">{neuroB.name}</h3>
           <span className="text-xs opacity-75">{neuroB.category}</span>
        </div>

        {/* Action Row */}
        <div className="bg-white p-4">
          <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">Primary Action</span>
          <p className="font-bold text-indigo-600">{neuroA.action}</p>
        </div>
        <div className="bg-white p-4">
          <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">Primary Action</span>
          <p className="font-bold text-slate-700">{neuroB.action}</p>
        </div>

        {/* Formula Row */}
        <div className="bg-slate-50 p-4">
          <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">Chemical Formula</span>
          <code className="text-sm">{neuroA.chemicalFormula}</code>
        </div>
        <div className="bg-slate-50 p-4">
          <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-widest">Chemical Formula</span>
          <code className="text-sm">{neuroB.chemicalFormula}</code>
        </div>

        {/* Regions Row */}
        <div className="bg-white p-4 min-h-[120px]">
          <span className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-widest">Core Regions</span>
          <div className="flex flex-wrap gap-1">
            {neuroA.brainRegions.map(r => <span key={r} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded">{r}</span>)}
          </div>
        </div>
        <div className="bg-white p-4 min-h-[120px]">
          <span className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-widest">Core Regions</span>
          <div className="flex flex-wrap gap-1">
            {neuroB.brainRegions.map(r => <span key={r} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded">{r}</span>)}
          </div>
        </div>
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default CompareView;
