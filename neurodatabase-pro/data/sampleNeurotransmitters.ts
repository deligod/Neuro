
import { Neurotransmitter, ActionType, SignalType } from '../types';
import { DEFAULT_NEURO_IMAGE } from '../constants';

export const sampleNeurotransmitters: Neurotransmitter[] = [
  {
    id: 'histamine',
    name: 'Histamine',
    symbol: 'HIS',
    altNames: [],
    category: 'Monoamine',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C5H9N3',
    chemicalStructureDescription: 'An organic nitrogenous compound involved in local immune responses as well as regulating physiological function in the gut and acting as a neurotransmitter for the brain, spinal cord, and uterus.',
    structureSvg: '',
    precursors: ['Histidine'],
    primaryReceptors: [
      { name: 'H1', type: 'Metabotropic', subtypes: ['Gq'] },
      { name: 'H2', type: 'Metabotropic', subtypes: ['Gs'] },
      { name: 'H3', type: 'Metabotropic', subtypes: ['Gi/o'] }
    ],
    brainRegions: ['Hypothalamus (Tuberomammillary Nucleus)', 'Cortex', 'Thalamus'],
    functions: ['Arousal/Wakefulness', 'Appetite Control', 'Learning/Memory', 'Immune Response'],
    disorders: [
      {
        condition: 'Narcolepsy',
        lowLevelEffect: 'Excessive daytime sleepiness.',
        highLevelEffect: 'N/A',
        pathophysiology: 'Loss of histaminergic neurons or dysfunction in the arousal system.',
        therapeuticFocus: 'H3 receptor antagonists/inverse agonists.',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['Fermented foods', 'Aged cheeses', 'Spinach', 'Tomatoes'],
      activities: ['Sunlight exposure'],
      lifestyle: ['Stress management']
    },
    pharmaceuticals: {
      agonists: ['Betahistine'],
      antagonists: ['Diphenhydramine', 'Cetirizine', 'Loradine'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['dopamine', 'serotonin'],
    clinicalNotes: 'Best known for its role in allergies, but vital for brain arousal.',
    researchNotes: 'Investigating H3 receptors for cognitive enhancement.',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'glycine',
    name: 'Glycine',
    symbol: 'Gly',
    altNames: [],
    category: 'Amino Acid',
    action: ActionType.INHIBITORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'CNS',
    chemicalFormula: 'C2H5NO2',
    chemicalStructureDescription: 'The smallest of the 20 amino acids commonly found in proteins. It acts as an inhibitory neurotransmitter in the spinal cord and a co-agonist for NMDA receptors in the brain.',
    structureSvg: '',
    precursors: ['Serine'],
    primaryReceptors: [
      { name: 'GlyR', type: 'Ionotropic', subtypes: ['Chloride Channel'] }
    ],
    brainRegions: ['Spinal Cord', 'Brainstem', 'Retina'],
    functions: ['Motor Control', 'Sensory Processing', 'Inhibition', 'NMDA Co-activation'],
    disorders: [
      {
        condition: 'Hyperekplexia',
        lowLevelEffect: 'Exaggerated startle response and muscle stiffness.',
        highLevelEffect: 'N/A',
        pathophysiology: 'Mutations in GlyR subunits leading to reduced inhibitory signaling.',
        therapeuticFocus: 'GABAergic modulators (Benzodiazepines).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Gelatin', 'Chicken skin', 'Beef', 'Soybeans', 'Spinach', 'Kale'],
      activities: ['Sleep hygiene'],
      lifestyle: ['Glycine supplementation']
    },
    pharmaceuticals: {
      agonists: ['Glycine', 'D-Serine'],
      antagonists: ['Strychnine (Toxic)'],
      reuptakeInhibitors: ['Bitopertin (Experimental)']
    },
    relatedNeurotransmitters: ['gaba', 'glutamate'],
    clinicalNotes: 'Essential for spinal cord inhibition. Strychnine poisoning works by blocking glycine receptors.',
    researchNotes: 'Potential for treating negative symptoms of schizophrenia via NMDA modulation.',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'adenosine',
    name: 'Adenosine',
    symbol: 'ADO',
    altNames: [],
    category: 'Purine',
    action: ActionType.INHIBITORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C10H13N5O4',
    chemicalStructureDescription: 'A purine nucleoside composed of a molecule of adenine attached to a ribose sugar molecule (ribofuranose) moiety via a β-N9-glycosidic bond.',
    structureSvg: '',
    precursors: ['ATP', 'AMP'],
    primaryReceptors: [
      { name: 'A1', type: 'Metabotropic', subtypes: ['Gi/o'] },
      { name: 'A2A', type: 'Metabotropic', subtypes: ['Gs'] },
      { name: 'A2B', type: 'Metabotropic', subtypes: ['Gs'] },
      { name: 'A3', type: 'Metabotropic', subtypes: ['Gi/o'] }
    ],
    brainRegions: ['Ubiquitous', 'Basal Ganglia', 'Cortex'],
    functions: ['Sleep Pressure', 'Vasodilation', 'Neuroprotection', 'Inhibition of Arousal'],
    disorders: [
      {
        condition: 'Insomnia',
        lowLevelEffect: 'Difficulty falling asleep due to low adenosine accumulation.',
        highLevelEffect: 'Excessive sleepiness.',
        pathophysiology: 'Dysregulation of adenosine homeostasis or receptor sensitivity.',
        therapeuticFocus: 'Adenosine receptor modulators.',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['N/A (Byproduct of energy metabolism)'],
      activities: ['Mental exertion', 'Physical exercise'],
      lifestyle: ['Caffeine restriction']
    },
    pharmaceuticals: {
      agonists: ['Adenosine (IV for SVT)'],
      antagonists: ['Caffeine', 'Theophylline'],
      reuptakeInhibitors: ['Dipyridamole']
    },
    relatedNeurotransmitters: ['dopamine', 'glutamate'],
    clinicalNotes: 'Caffeine works primarily by blocking adenosine receptors, preventing the "sleepiness" signal.',
    researchNotes: 'Role in neuroprotection during stroke and epilepsy.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'anandamide',
    name: 'Anandamide',
    symbol: 'AEA',
    altNames: ['The Bliss Molecule'],
    category: 'Endocannabinoid',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C22H37NO2',
    chemicalStructureDescription: 'An essential fatty acid neurotransmitter derived from the non-oxidative metabolism of eicosatetraenoic acid (an omega-6 essential fatty acid).',
    structureSvg: '',
    precursors: ['N-arachidonoyl phosphatidylethanolamine (NAPE)'],
    primaryReceptors: [
      { name: 'CB1', type: 'Metabotropic', subtypes: ['Gi/o'] },
      { name: 'CB2', type: 'Metabotropic', subtypes: ['Gi/o'] },
      { name: 'TRPV1', type: 'Ionotropic', subtypes: ['Vanilloid'] }
    ],
    brainRegions: ['Hippocampus', 'Basal Ganglia', 'Cerebellum', 'Prefrontal Cortex'],
    functions: ['Pain Management', 'Appetite', 'Memory Extinction', 'Reward/Euphoria'],
    disorders: [
      {
        condition: 'PTSD',
        lowLevelEffect: 'Inability to extinguish traumatic memories.',
        highLevelEffect: 'N/A',
        pathophysiology: 'Deficiency in endocannabinoid signaling in the amygdala and hippocampus.',
        therapeuticFocus: 'FAAH inhibitors (to increase AEA levels).',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['Dark chocolate', 'Black pepper', 'Truffles'],
      activities: ['Runner\'s high (aerobic exercise)', 'Yoga', 'Massage'],
      lifestyle: ['Cold exposure']
    },
    pharmaceuticals: {
      agonists: ['THC (Phytocannabinoid)', 'Synthetic Cannabinoids'],
      antagonists: ['Rimonabant (Withdrawn)'],
      reuptakeInhibitors: ['AM404']
    },
    relatedNeurotransmitters: ['dopamine', 'gaba', 'glutamate'],
    clinicalNotes: 'Named after the Sanskrit word "ananda", meaning bliss.',
    researchNotes: 'Investigating FAAH inhibitors for anxiety and pain.',
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80&w=600&h=400'
  }
];
