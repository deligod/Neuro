
export enum ActionType {
  EXCITATORY = 'Excitatory',
  INHIBITORY = 'Inhibitory',
  MODULATORY = 'Modulatory',
  MIXED = 'Mixed',
  CONTEXT_DEPENDENT = 'Context-Dependent'
}

export enum SignalType {
  NEUROTRANSMITTER = 'Neurotransmitter',
  NEUROMODULATOR = 'Neuromodulator',
  HORMONE_LIKE = 'Hormone-like',
  GASOTRANSMITTER = 'Gasotransmitter'
}

export enum EduMode {
  BEGINNER = 'Beginner',
  CLINICAL = 'Clinical',
  RESEARCH = 'Research'
}

export interface Receptor {
  name: string;
  type: 'Ionotropic' | 'Metabotropic' | 'GPCR' | 'Intracellular Enzyme' | 'Ion Channel' | 'Other';
  subtypes: string[];
  effect?: ActionType;
}

export interface DisorderImpact {
  condition: string;
  lowLevelEffect: string;
  highLevelEffect: string;
  pathophysiology?: string;
  therapeuticFocus?: string;
  evidenceLevel?: 'Strong' | 'Moderate' | 'Emerging' | 'Mixed';
}

export interface Pathway {
  name: string;
  description: string;
}

export interface EntheogenReference {
  name: string;
  interaction: 'Primary' | 'Secondary' | 'Network';
  mechanism: string;
}

export interface BiometricData {
  id: string;
  timestamp: string;
  type: 'EKG' | 'EEG' | 'HeartRate' | 'BloodPressure';
  value: number | string;
  unit: string;
}

export interface FoodIntake {
  id: string;
  timestamp: string;
  foodName: string;
  amount: string;
  compounds: string[];
  neurotransmitters: string[];
}

export interface Neurotransmitter {
  id: string;
  name: string;
  symbol?: string;
  altNames: string[];
  category: string; // Dynamic taxonomy
  action: ActionType;
  signalType: SignalType;
  distribution: 'CNS' | 'PNS' | 'Both';
  chemicalFormula: string;
  chemicalStructureDescription: string;
  structureSvg?: string; // SVG representation of the molecule
  molarMass?: string;
  precursors: string[];
  enzymes?: { name: string; note: string }[];
  transporters?: string[];
  primaryReceptors: Receptor[];
  brainRegions: string[];
  pathways?: Pathway[];
  functions: string[];
  disorders: DisorderImpact[];
  entheogens?: EntheogenReference[];
  naturalModulators: {
    foods: string[];
    activities: string[];
    lifestyle: string[];
  };
  pharmaceuticals: {
    agonists: string[];
    antagonists: string[];
    reuptakeInhibitors: string[];
  };
  relatedNeurotransmitters: string[];
  clinicalNotes: string;
  researchNotes: string;
  image: string;
}
