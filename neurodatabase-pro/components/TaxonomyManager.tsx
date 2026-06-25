
import React, { useState } from 'react';

interface TaxonomyManagerProps {
  categories: string[];
  onUpdate: (cats: string[]) => void;
  onClose: () => void;
}

const TaxonomyManager: React.FC<TaxonomyManagerProps> = ({ categories, onUpdate, onClose }) => {
  const [newCat, setNewCat] = useState('');

  const addCat = () => {
    if (newCat && !categories.includes(newCat)) {
      onUpdate([...categories, newCat]);
      setNewCat('');
    }
  };

  const removeCat = (cat: string) => {
    onUpdate(categories.filter(c => c !== cat));
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-slate-200 animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Taxonomy Manager</h2>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Neurotransmitter Classes</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={newCat} 
              onChange={e => setNewCat(e.target.value)}
              className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl"
              placeholder="e.g. Purines"
            />
            <button 
              onClick={addCat}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold"
            >
              Add
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {categories.map(cat => (
            <div key={cat} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl group border border-slate-100">
              <span className="font-medium text-slate-700">{cat}</span>
              <button 
                onClick={() => removeCat(cat)}
                className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxonomyManager;
