
import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, Heart, Brain, Utensils, Info, Plus, Trash2, Zap, MapPin, Radio } from 'lucide-react';
import { BiometricData, FoodIntake, Neurotransmitter } from '../types';

interface WBANViewProps {
  neuroData: Neurotransmitter[];
}

const BodyMap: React.FC = () => {
  const nodes = [
    { id: 'brain', label: 'EEG Node', x: '50%', y: '12%', color: 'bg-indigo-500' },
    { id: 'heart', label: 'EKG Node', x: '48%', y: '30%', color: 'bg-red-500' },
    { id: 'wrist-l', label: 'HR Node (L)', x: '25%', y: '50%', color: 'bg-emerald-500' },
    { id: 'wrist-r', label: 'HR Node (R)', x: '75%', y: '50%', color: 'bg-emerald-500' },
    { id: 'gut', label: 'Biochemical Node', x: '50%', y: '45%', color: 'bg-yellow-500' },
    { id: 'leg-l', label: 'EMG Node (L)', x: '40%', y: '80%', color: 'bg-blue-500' },
    { id: 'leg-r', label: 'EMG Node (R)', x: '60%', y: '80%', color: 'bg-blue-500' },
  ];

  return (
    <div className="relative w-full aspect-[2/3] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center p-4">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Body Silhouette SVG */}
      <svg viewBox="0 0 100 150" className="h-full w-auto text-slate-800 fill-current drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <path d="M50,15 c-5,0 -9,4 -9,9 c0,5 4,9 9,9 s9,-4 9,-9 c0,-5 -4,-9 -9,-9 M41,25 c-3,0 -6,3 -6,6 v15 c0,3 2,5 5,5 h2 v30 c0,3 2,5 5,5 s5,-2 5,-5 v-30 h2 c3,0 5,-2 5,-5 v-15 c0,-3 -3,-6 -6,-6 h-10 Z" transform="scale(1.2) translate(-8, -5)" />
        <path d="M50,35 L50,140 M35,55 L15,100 M65,55 L85,100 M40,110 L30,155 M60,110 L70,155" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>

      {/* Sensor Nodes */}
      {nodes.map(node => (
        <div 
          key={node.id}
          className="absolute group cursor-pointer"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className={`w-3 h-3 ${node.color} rounded-full animate-ping absolute opacity-75`} />
          <div className={`w-3 h-3 ${node.color} rounded-full relative shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
            <div className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded border border-slate-700 shadow-xl">
              {node.label}
            </div>
          </div>
        </div>
      ))}

      {/* Status Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400">
            <Radio className="w-3 h-3 animate-pulse" />
            WBAN ACTIVE
          </div>
          <div className="text-[8px] text-slate-500 font-mono">ID: HAYES-001-ALPHA</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold text-slate-400">NODES ONLINE</div>
          <div className="text-lg font-black text-white leading-none">7/7</div>
        </div>
      </div>
    </div>
  );
};

// Mock food mapping
const FOOD_MAPPING: Record<string, { neurotransmitters: string[], compounds: string[] }> = {
  'Banana': { neurotransmitters: ['Dopamine', 'Serotonin', 'Norepinephrine'], compounds: ['Potassium', 'Vitamin B6'] },
  'Dark Chocolate': { neurotransmitters: ['Dopamine', 'Endorphins', 'Serotonin'], compounds: ['Flavonoids', 'Magnesium', 'Theobromine'] },
  'Coffee': { neurotransmitters: ['Dopamine', 'Glutamate', 'Norepinephrine'], compounds: ['Caffeine', 'Chlorogenic acid'] },
  'Green Tea': { neurotransmitters: ['GABA', 'Dopamine', 'Glutamate'], compounds: ['L-Theanine', 'EGCG'] },
  'Spinach': { neurotransmitters: ['Serotonin', 'GABA'], compounds: ['Folate', 'Magnesium'] },
  'Turkey': { neurotransmitters: ['Serotonin', 'Dopamine'], compounds: ['L-Tryptophan'] },
  'Eggs': { neurotransmitters: ['Acetylcholine', 'Dopamine', 'Norepinephrine'], compounds: ['Choline', 'B-Vitamins'] },
  'Blueberries': { neurotransmitters: ['Dopamine'], compounds: ['Anthocyanins'] },
  'Walnuts': { neurotransmitters: ['Serotonin', 'Melatonin', 'GABA'], compounds: ['Omega-3', 'Polyphenols'] },
  'Yogurt': { neurotransmitters: ['GABA', 'Dopamine'], compounds: ['Probiotics'] },
  'Beef Liver': { neurotransmitters: ['Acetylcholine'], compounds: ['Choline', 'Vitamin B12'] },
  'Salmon': { neurotransmitters: ['Dopamine', 'Serotonin'], compounds: ['Omega-3', 'Vitamin D'] },
  'Avocado': { neurotransmitters: ['Dopamine'], compounds: ['Tyrosine', 'Healthy Fats'] },
  'Kimchi': { neurotransmitters: ['GABA'], compounds: ['Probiotics', 'Lactic Acid'] },
  'Parmesan Cheese': { neurotransmitters: ['Glutamate', 'Serotonin'], compounds: ['Tyramine'] },
  'Tomatoes': { neurotransmitters: ['Glutamate'], compounds: ['Lycopene'] },
  'Mushrooms': { neurotransmitters: ['Glutamate'], compounds: ['Selenium', 'Vitamin D'] },
  'Almonds': { neurotransmitters: ['Dopamine', 'GABA'], compounds: ['Tyrosine', 'Magnesium'] },
  'Soy Sauce': { neurotransmitters: ['Glutamate'], compounds: ['Sodium'] },
  'Pumpkin Seeds': { neurotransmitters: ['Dopamine', 'Serotonin'], compounds: ['Zinc', 'Magnesium'] },
  'Oats': { neurotransmitters: ['Serotonin', 'Norepinephrine'], compounds: ['Beta-glucan'] },
  'Seaweed': { neurotransmitters: ['Glutamate'], compounds: ['Iodine', 'Tyrosine'] },
  'Tofu': { neurotransmitters: ['Serotonin'], compounds: ['Isoflavones'] },
  'Miso': { neurotransmitters: ['GABA', 'Glutamate'], compounds: ['Probiotics'] },
  'Chicken': { neurotransmitters: ['Dopamine', 'Acetylcholine'], compounds: ['Tryptophan', 'Choline'] },
  'Bacopa (Bacopa monnieri)': { neurotransmitters: ['Acetylcholine', 'Serotonin', 'Dopamine'], compounds: ['Bacoside A', 'Bacoside B', 'Saponins'] },
  'California Poppy (Eschscholzia californica)': { neurotransmitters: ['GABA'], compounds: ['Protopine', 'Californidine', 'Alkaloids'] },
  'Cedar (Cedrus spp.)': { neurotransmitters: ['GABA'], compounds: ['Cedrol', 'Cedrene'] },
  'Chamomile (Matricaria recutita)': { neurotransmitters: ['GABA'], compounds: ['Apigenin', 'Bisabolol'] },
  'Cinnamon (Cinnamomum verum)': { neurotransmitters: ['Dopamine', 'Glutamate'], compounds: ['Cinnamaldehyde', 'Sodium Benzoate'] },
  'Coltsfoot (Tussilago farfara)': { neurotransmitters: ['Acetylcholine'], compounds: ['Mucilage', 'Tussilagone'] },
  'Hawthorn Berry (Crataegus spp.)': { neurotransmitters: ['GABA', 'Serotonin'], compounds: ['Proanthocyanidins', 'Vitexin'] },
  'Hibiscus (Hibiscus sabdariffa)': { neurotransmitters: ['Dopamine', 'Acetylcholine'], compounds: ['Anthocyanins', 'Hibiscus Acid'] },
  'Lavender (Lavandula angustifolia)': { neurotransmitters: ['GABA', 'Acetylcholine', 'Serotonin'], compounds: ['Linalool', 'Linalyl Acetate'] },
  'Lemon Verbena (Aloysia citrodora)': { neurotransmitters: ['GABA'], compounds: ['Verbascoside', 'Citral'] },
  'Milky Oats (Avena sativa)': { neurotransmitters: ['Dopamine', 'Serotonin'], compounds: ['Avenanthramides', 'Gramine'] },
  'Mugwort (Artemisia vulgaris)': { neurotransmitters: ['GABA', 'Acetylcholine'], compounds: ['Thujone', 'Cineole'] },
  'Nettle (Urtica dioica)': { neurotransmitters: ['Acetylcholine', 'Serotonin'], compounds: ['Quercetin', 'Formic Acid'] },
  'Peppermint (Mentha piperita)': { neurotransmitters: ['Acetylcholine', 'GABA'], compounds: ['Menthol', 'Rosmarinic Acid'] },
  'Skullcap (Scutellaria lateriflora)': { neurotransmitters: ['GABA'], compounds: ['Baicalin', 'Baicalein', 'Wogonin'] },
  'Tulsi (Holy Basil) (Ocimum sanctum)': { neurotransmitters: ['Dopamine', 'Serotonin', 'GABA'], compounds: ['Eugenol', 'Ursolic Acid'] },
  'Turmeric (Curcuma longa)': { neurotransmitters: ['Dopamine', 'Serotonin'], compounds: ['Curcumin', 'Turmerone'] },
  'Yarrow (Achillea millefolium)': { neurotransmitters: ['GABA'], compounds: ['Apigenin', 'Salicylate'] },
  'Yerba Santa (Eriodictyon californicum)': { neurotransmitters: ['Acetylcholine'], compounds: ['Sterubin', 'Eriodictyol'] },
};

const WBANView: React.FC<WBANViewProps> = ({ neuroData }) => {
  const [ekgData, setEkgData] = useState<{ time: number, value: number }[]>([]);
  const [eegData, setEegData] = useState<{ time: number, value: number }[]>([]);
  const [foodLogs, setFoodLogs] = useState<FoodIntake[]>([]);
  const [newFood, setNewFood] = useState('');

  // Simulate real-time EKG/EEG
  useEffect(() => {
    const interval = setInterval(() => {
      setEkgData(prev => {
        const next = [...prev, { time: Date.now(), value: 50 + Math.sin(Date.now() / 100) * 20 + Math.random() * 5 }];
        return next.slice(-30);
      });
      setEegData(prev => {
        const next = [...prev, { time: Date.now(), value: 30 + Math.cos(Date.now() / 200) * 10 + Math.random() * 15 }];
        return next.slice(-30);
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleAddFood = () => {
    if (!newFood) return;
    
    const mapping = FOOD_MAPPING[newFood] || { neurotransmitters: ['Unknown'], compounds: ['Nutrients'] };
    
    const entry: FoodIntake = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      foodName: newFood,
      amount: '1 serving',
      neurotransmitters: mapping.neurotransmitters,
      compounds: mapping.compounds
    };

    setFoodLogs([entry, ...foodLogs]);
    setNewFood('');
  };

  const activeNeurotransmitters = useMemo(() => {
    const counts: Record<string, number> = {};
    foodLogs.forEach(log => {
      log.neurotransmitters.forEach(n => {
        counts[n] = (counts[n] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [foodLogs]);

  const activeCompounds = useMemo(() => {
    const set = new Set<string>();
    foodLogs.forEach(log => log.compounds.forEach(c => set.add(c)));
    return Array.from(set);
  }, [foodLogs]);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <Activity className="text-emerald-500 w-8 h-8" />
            Wireless Body Area Network (WBAN)
          </h2>
          <p className="text-slate-500 mt-1">Real-time biometric monitoring & biochemical intake analysis.</p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl font-bold text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            System Online
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Body Map Column */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 h-full">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-500" />
              Network Topology
            </h3>
            <BodyMap />
            <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Node Legend</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full" /> EEG
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full" /> EKG
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" /> HR
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-slate-600">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" /> BIO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biometrics Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* EKG Section */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800">Electrocardiogram (EKG)</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-red-500">72</span>
                <span className="text-xs text-slate-400 ml-1 font-bold">BPM</span>
              </div>
            </div>
            <div className="h-64 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ekgData}>
                  <defs>
                    <linearGradient id="colorEkg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#colorEkg)" strokeWidth={2} isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* EEG Section */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800">Electroencephalogram (EEG)</h3>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-xs text-slate-400 font-bold uppercase">Alpha</div>
                  <div className="text-indigo-600 font-bold">12.5Hz</div>
                </div>
                <div className="text-center border-l border-slate-100 pl-4">
                  <div className="text-xs text-slate-400 font-bold uppercase">Beta</div>
                  <div className="text-indigo-600 font-bold">18.2Hz</div>
                </div>
              </div>
            </div>
            <div className="h-64 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={eegData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <Line type="step" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Food & Biochemicals Column */}
        <div className="space-y-8">
          {/* Food Intake Form */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-emerald-500" />
              Ingestion Log
            </h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <select 
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="">Select food...</option>
                  {Object.keys(FOOD_MAPPING).map(food => (
                    <option key={food} value={food}>{food}</option>
                  ))}
                </select>
                <button 
                  onClick={handleAddFood}
                  className="p-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                {foodLogs.map(log => (
                  <div key={log.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 relative group">
                    <button 
                      onClick={() => setFoodLogs(foodLogs.filter(f => f.id !== log.id))}
                      className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="font-bold text-slate-700 text-sm">{log.foodName}</div>
                    <div className="text-[10px] text-slate-400 mb-2">{log.timestamp}</div>
                    <div className="flex flex-wrap gap-1">
                      {log.neurotransmitters.map(n => (
                        <span key={n} className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[9px] font-bold border border-indigo-100">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {foodLogs.length === 0 && (
                  <div className="text-center py-8 text-slate-400 text-sm italic">
                    No food logged today.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Biochemical Summary */}
          <div className="bg-indigo-900 rounded-3xl p-6 text-white shadow-xl">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Biochemical Status
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-xs text-indigo-300 font-bold uppercase mb-2">Active Neurotransmitters</div>
                <div className="space-y-4">
                  {activeNeurotransmitters.map(([name, count]) => {
                    const neuro = neuroData.find(n => n.name === name);
                    return (
                      <div key={name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold">{name}</span>
                          <div className="flex-1 mx-3 h-1 bg-indigo-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-400" 
                              style={{ width: `${Math.min(count * 20, 100)}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-indigo-300">+{count}</span>
                        </div>
                        {neuro && (
                          <div className="text-[10px] text-indigo-300 leading-tight italic">
                            Functions: {neuro.functions.join(', ')}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {activeNeurotransmitters.length === 0 && (
                    <div className="text-xs text-indigo-400 italic">Baseline levels only.</div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-indigo-800">
                <div className="text-xs text-indigo-300 font-bold uppercase mb-2">Detected Compounds</div>
                <div className="flex flex-wrap gap-2">
                  {activeCompounds.map(c => (
                    <span key={c} className="px-2 py-1 bg-indigo-800/50 rounded-lg text-[10px] border border-indigo-700">
                      {c}
                    </span>
                  ))}
                  {activeCompounds.length === 0 && (
                    <div className="text-xs text-indigo-400 italic">No external compounds.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WBANView;
