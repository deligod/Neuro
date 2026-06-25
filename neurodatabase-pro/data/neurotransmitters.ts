
import { Neurotransmitter, ActionType, SignalType } from '../types';

export const neurotransmitters: Neurotransmitter[] = [
  {
    id: 'dopamine',
    name: 'Dopamine',
    symbol: 'DA',
    altNames: [],
    category: 'Monoamine',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C8H11NO2',
    chemicalStructureDescription: 'Consists of a catechol group (benzene ring with two -OH groups) and an amine group attached via an ethyl chain. Structure: HO-⎕-OH-CH₂-CH₂-NH₂.',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l20 -35 l40 0 l20 35 l-20 35 l-40 0 Z" fill="none" stroke="#4f46e5" stroke-width="2"/><path d="M40 60 l-20 -10 m0 20 l20 -10" stroke="#4f46e5" stroke-width="2"/><text x="5" y="55" font-size="10" fill="#4f46e5">OH</text><text x="5" y="75" font-size="10" fill="#4f46e5">OH</text><path d="M120 60 l25 0 l15 25" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="160" y="90" font-size="10" fill="#4f46e5">NH2</text></svg>`,
    precursors: ['Tyrosine', 'L-DOPA'],
    primaryReceptors: [
      { name: 'D1-Like', type: 'Metabotropic', subtypes: ['D1', 'D5'] },
      { name: 'D2-Like', type: 'Metabotropic', subtypes: ['D2', 'D3', 'D4'] }
    ],
    brainRegions: ['Substantia Nigra', 'Ventral Tegmental Area (VTA)', 'Striatum', 'Prefrontal Cortex'],
    functions: ['Reward/Motivation', 'Motor Control', 'Executive Function', 'Lactation inhibition'],
    disorders: [
      { 
        condition: "Parkinson's Disease", 
        lowLevelEffect: 'Tremors, bradykinesia, rigidity, and postural instability.', 
        highLevelEffect: 'Dyskinesia (involuntary movements) often as a complication of L-DOPA treatment.',
        pathophysiology: 'Degeneration of dopaminergic neurons in the Substantia Nigra pars compacta leading to depletion of dopamine in the striatum.',
        therapeuticFocus: 'Dopamine precursors (L-DOPA), MAO-B inhibitors, and Dopamine agonists.',
        evidenceLevel: 'Strong'
      },
      { 
        condition: 'Schizophrenia', 
        lowLevelEffect: 'Negative symptoms: Avolition, anhedonia, and social withdrawal.', 
        highLevelEffect: 'Positive symptoms: Hallucinations and delusions.',
        pathophysiology: 'The "Dopamine Hypothesis" suggests subcortical hyper-dopaminergia (D2) and cortical hypo-dopaminergia (D1).',
        therapeuticFocus: 'D2 receptor antagonists (Antipsychotics).',
        evidenceLevel: 'Strong'
      },
      { 
        condition: 'ADHD', 
        lowLevelEffect: 'Inattention and distractibility due to insufficient tonic dopamine levels in the prefrontal cortex.', 
        highLevelEffect: 'Impulsivity and sensation-seeking behaviors.',
        pathophysiology: 'Reduced dopamine transporter (DAT) efficiency or lower density of D2/D3 receptors in reward circuits.',
        therapeuticFocus: 'Psychostimulants (Methylphenidate, Amphetamines) that inhibit reuptake or stimulate release.',
        evidenceLevel: 'Strong'
      },
      {
        condition: 'Substance Use Disorder',
        lowLevelEffect: 'Withdrawal: Dysphoria, lack of motivation, and intense craving.',
        highLevelEffect: 'Intoxication: Euphoria and heightened risk-taking.',
        pathophysiology: 'Chronic overstimulation of the mesolimbic reward pathway leads to receptor down-regulation and "anhedonic" baseline states.',
        therapeuticFocus: 'Dopaminergic modulation and behavioral therapy.',
        evidenceLevel: 'Strong'
      }
    ],
    entheogens: [
      { name: 'Blue Lotus', interaction: 'Primary', mechanism: 'Dopaminergic + mild sedative' },
      { name: 'Cacao (Ceremonial)', interaction: 'Secondary', mechanism: 'MAO inhibition, phenethylamine accumulation' },
      { name: 'Ibogaine', interaction: 'Secondary', mechanism: 'Multi-system reset, dopamine system regulation' },
      { name: 'Mescaline', interaction: 'Secondary', mechanism: 'Indirect dopaminergic modulation' },
      { name: 'Cannabis (THC)', interaction: 'Secondary', mechanism: 'Downstream dopamine release via CB1 modulation' }
    ],
    naturalModulators: {
      foods: ['Eggs', 'Chicken', 'Turkey', 'Beef', 'Salmon', 'Sardines', 'Almonds', 'Walnuts', 'Avocados', 'Bananas', 'Pumpkin seeds', 'Sesame seeds', 'Dark chocolate', 'Yogurt', 'Cottage cheese', 'Velvet Beans (Mucuna pruriens)', 'Bacopa (Bacopa monnieri)', 'Cinnamon (Cinnamomum verum)', 'Hibiscus (Hibiscus sabdariffa)', 'Milky Oats (Avena sativa)', 'Tulsi (Holy Basil) (Ocimum sanctum)', 'Turmeric (Curcuma longa)'],
      activities: ['Exercise', 'Listening to music', 'Achieving small goals', 'Meditation'],
      lifestyle: ['Adequate sleep', 'Sunlight exposure']
    },
    pharmaceuticals: {
      agonists: ['Pramipexole', 'Ropinirole', 'Apomorphine'],
      antagonists: ['Haloperidol', 'Risperidone', 'Clozapine'],
      reuptakeInhibitors: ['Methylphenidate', 'Bupropion', 'Cocaine']
    },
    relatedNeurotransmitters: ['serotonin', 'norepinephrine', 'acetylcholine'],
    clinicalNotes: 'The "Reward Center" neurotransmitter. Essential for addiction studies.',
    researchNotes: 'Recent research focuses on tonic vs. phasic dopamine firing and its role in uncertainty.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'serotonin',
    name: 'Serotonin',
    symbol: '5-HT',
    altNames: [],
    category: 'Monoamine',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C10H12N2O',
    chemicalStructureDescription: 'Consists of an indole ring system with a 5-hydroxy group (-OH) and an ethylamine side chain. Structure: ⎕-NH-CH₂-CH₂-NH₂ (with OH at 5th pos).',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l15 -25 l30 10 l0 30 l-30 10 Z" fill="none" stroke="#4f46e5" stroke-width="2"/><path d="M85 75 l30 0 l15 -25" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="135" y="55" font-size="10" fill="#4f46e5">NH2</text><text x="35" y="30" font-size="10" fill="#4f46e5">OH</text></svg>`,
    precursors: ['Tryptophan', '5-HTP'],
    primaryReceptors: [
      { name: '5-HT1 to 5-HT7', type: 'Metabotropic', subtypes: ['5-HT1A', '5-HT2A', '5-HT2C'] },
      { name: '5-HT3', type: 'Ionotropic', subtypes: ['5-HT3'] }
    ],
    brainRegions: ['Raphe Nuclei', 'Gastrointestinal Tract', 'Pineal Gland'],
    functions: ['Mood Regulation', 'Sleep-Wake Cycle', 'Appetite', 'Digestion'],
    disorders: [
      { 
        condition: 'Major Depressive Disorder (MDD)', 
        lowLevelEffect: 'Persistent sadness, fatigue, and sleep disturbances.', 
        highLevelEffect: 'Agitation, "Serotonin Syndrome" in extreme pharmaceutical excess.',
        pathophysiology: 'The "Monoamine Hypothesis" suggests reduced synaptic availability of serotonin.',
        therapeuticFocus: 'SSRIs (Selective Serotonin Reuptake Inhibitors) and SNRIs.',
        evidenceLevel: 'Strong'
      },
      { 
        condition: 'Obsessive-Compulsive Disorder (OCD)', 
        lowLevelEffect: 'Inability to inhibit repetitive thoughts and behaviors.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Dysfunction in the cortico-striato-thalamo-cortical (CSTC) circuits involving serotonin modulation.',
        therapeuticFocus: 'High-dose SSRIs and Clomipramine.',
        evidenceLevel: 'Strong'
      },
      {
        condition: 'Irritable Bowel Syndrome (IBS)',
        lowLevelEffect: 'Constipation-predominant IBS (IBS-C).',
        highLevelEffect: 'Diarrhea-predominant IBS (IBS-D).',
        pathophysiology: 'Serotonin (90% in the gut) regulates GI motility; dysregulation leads to transit speed issues.',
        therapeuticFocus: '5-HT3 antagonists (Alosetron) or 5-HT4 agonists (Prucalopride).',
        evidenceLevel: 'Moderate'
      }
    ],
    entheogens: [
      { name: 'Psilocybin Mushrooms', interaction: 'Primary', mechanism: '5-HT2A agonism' },
      { name: 'LSD', interaction: 'Primary', mechanism: '5-HT2A, 5-HT1A agonism' },
      { name: 'DMT', interaction: 'Primary', mechanism: 'Rapid serotonergic signaling' },
      { name: 'Ayahuasca', interaction: 'Primary', mechanism: 'DMT + MAO-A inhibition' },
      { name: 'Mescaline', interaction: 'Primary', mechanism: '5-HT2A agonism' },
      { name: 'Kanna (Sceletium)', interaction: 'Primary', mechanism: 'SRI + PDE4 inhibition' },
      { name: 'Syrian Rue', interaction: 'Primary', mechanism: 'MAO-A inhibition' },
      { name: 'Ibogaine', interaction: 'Primary', mechanism: 'Serotonergic system reset' }
    ],
    naturalModulators: {
      foods: ['Turkey', 'Eggs', 'Cheese', 'Milk', 'Tofu', 'Tempeh', 'Pineapple', 'Kiwi', 'Bananas', 'Oats', 'Brown rice', 'Sunflower seeds', 'Spinach', 'Sweet potatoes', 'Dark chocolate', 'Walnuts', 'Bacopa (Bacopa monnieri)', 'Hawthorn Berry (Crataegus spp.)', 'Lavender (Lavandula angustifolia)', 'Milky Oats (Avena sativa)', 'Nettle (Urtica dioica)', 'Tulsi (Holy Basil) (Ocimum sanctum)', 'Turmeric (Curcuma longa)'],
      activities: ['Exposure to bright light', 'Aerobic exercise', 'Mindfulness'],
      lifestyle: ['Gut health management']
    },
    pharmaceuticals: {
      agonists: ['Buspirone', 'Sumatriptan', 'LSD'],
      antagonists: ['Ondansetron', 'Atypical Antipsychotics'],
      reuptakeInhibitors: ['Fluoxetine (Prozac)', 'Sertraline (Zoloft)', 'Escitalopram']
    },
    relatedNeurotransmitters: ['dopamine', 'melatonin', 'gaba'],
    clinicalNotes: 'Primarily found in the gut (90%), but crucial for psychiatric health.',
    researchNotes: 'Investigating the role of 5-HT2A receptors in neuroplasticity via psychedelics.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'gaba',
    name: 'GABA',
    symbol: 'GABA',
    altNames: [],
    category: 'Amino Acid',
    action: ActionType.INHIBITORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'CNS',
    chemicalFormula: 'C4H9NO2',
    chemicalStructureDescription: 'Gamma-Aminobutyric Acid. The primary inhibitory neurotransmitter in the CNS.',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l30 0 l30 -20 l30 20" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="10" y="65" font-size="10" fill="#4f46e5">NH2</text><text x="135" y="65" font-size="10" fill="#4f46e5">COOH</text></svg>`,
    precursors: ['Glutamate'],
    primaryReceptors: [
      { name: 'GABA-A', type: 'Ionotropic', subtypes: ['Chloride Channel'] },
      { name: 'GABA-B', type: 'Metabotropic', subtypes: ['Gi/o Coupled'] }
    ],
    brainRegions: ['Cerebellum', 'Thalamus', 'Basal Ganglia', 'Cortex'],
    functions: ['Reducing Neuronal Excitability', 'Muscle Tone', 'Anxiety Control'],
    disorders: [
      { 
        condition: 'Generalized Anxiety Disorder', 
        lowLevelEffect: 'Hyper-vigilance, excessive worry, and panic.', 
        highLevelEffect: 'Sedation and cognitive impairment (typically from medication).',
        pathophysiology: 'Reduced GABAergic inhibitory tone leading to neuronal over-activity in fear circuits.',
        therapeuticFocus: 'GABA-A positive allosteric modulators (Benzodiazepines).',
        evidenceLevel: 'Strong'
      },
      { 
        condition: 'Epilepsy', 
        lowLevelEffect: 'Lowered seizure threshold and recurrent seizures.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Imbalance between GABA inhibition and Glutamate excitation.',
        therapeuticFocus: 'Anticonvulsants that enhance GABA (Vigabatrin, Tiagabine).',
        evidenceLevel: 'Strong'
      }
    ],
    entheogens: [
      { name: 'Amanita muscaria', interaction: 'Primary', mechanism: 'GABA-A agonism (Muscimol)' },
      { name: 'Kava', interaction: 'Primary', mechanism: 'GABAergic modulation' }
    ],
    naturalModulators: {
      foods: ['Fermented yogurt', 'Kefir', 'Kimchi', 'Sauerkraut', 'Miso', 'Tempeh', 'Spinach', 'Broccoli', 'Kale', 'Almonds', 'Walnuts', 'Cashews', 'Brown rice', 'Buckwheat', 'Green tea', 'California Poppy (Eschscholzia californica)', 'Cedar (Cedrus spp.)', 'Chamomile (Matricaria recutita)', 'Hawthorn Berry (Crataegus spp.)', 'Lavender (Lavandula angustifolia)', 'Lemon Verbena (Aloysia citrodora)', 'Mugwort (Artemisia vulgaris)', 'Peppermint (Mentha piperita)', 'Skullcap (Scutellaria lateriflora)', 'Tulsi (Holy Basil) (Ocimum sanctum)', 'Yarrow (Achillea millefolium)'],
      activities: ['Yoga', 'Deep breathing', 'Stretching'],
      lifestyle: ['Magnesium supplementation']
    },
    pharmaceuticals: {
      agonists: ['Benzodiazepines', 'Barbiturates', 'Alcohol'],
      antagonists: ['Flumazenil (competitive)', 'Bicuculline'],
      reuptakeInhibitors: ['Tiagabine']
    },
    relatedNeurotransmitters: ['glutamate', 'glycine'],
    clinicalNotes: 'The "Brain\'s Brake Pedal". Critical for managing hyper-excitability.',
    researchNotes: 'Focus on GABAergic dysfunction in neurodevelopmental disorders.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'acetylcholine',
    name: 'Acetylcholine',
    symbol: 'ACh',
    altNames: [],
    category: 'Cholinergic',
    action: ActionType.MIXED,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C7H16NO2+',
    chemicalStructureDescription: 'An ester of acetic acid and choline. Structure: CH₃COOCH₂CH₂N⁺(CH₃)₃.',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l20 0 l10 -20 l20 0 l10 20 l20 0" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="130" y="65" font-size="10" fill="#4f46e5">N+(CH3)3</text></svg>`,
    precursors: ['Choline', 'Acetyl-CoA'],
    primaryReceptors: [
      { name: 'Nicotinic', type: 'Ionotropic', subtypes: ['α7', 'α4β2'] },
      { name: 'Muscarinic', type: 'Metabotropic', subtypes: ['M1', 'M2', 'M3', 'M4', 'M5'] }
    ],
    brainRegions: ['Basal Forebrain', 'Striatum', 'Neuromuscular Junction'],
    functions: ['Memory/Learning', 'Attention', 'Muscle Contraction', 'REM Sleep'],
    disorders: [
      { 
        condition: "Alzheimer's Disease", 
        lowLevelEffect: 'Severe cognitive decline and memory loss.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Degeneration of cholinergic neurons in the basal forebrain.',
        therapeuticFocus: 'Cholinesterase inhibitors (Donepezil).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Eggs', 'Beef liver', 'Chicken', 'Fish', 'Soybeans', 'Quinoa', 'Broccoli', 'Brussels sprouts', 'Peanuts', 'Sunflower seeds', 'Bacopa (Bacopa monnieri)', 'Coltsfoot (Tussilago farfara)', 'Hibiscus (Hibiscus sabdariffa)', 'Lavender (Lavandula angustifolia)', 'Mugwort (Artemisia vulgaris)', 'Nettle (Urtica dioica)', 'Peppermint (Mentha piperita)', 'Yerba Santa (Eriodictyon californicum)'],
      activities: ['Cognitive training', 'Learning new skills'],
      lifestyle: ['Choline supplementation']
    },
    pharmaceuticals: {
      agonists: ['Nicotine', 'Muscarine', 'Pilocarpine'],
      antagonists: ['Atropine', 'Scopolamine', 'Curare'],
      reuptakeInhibitors: ['N/A (Degraded by AChE)']
    },
    relatedNeurotransmitters: ['dopamine', 'glutamate'],
    clinicalNotes: 'The first neurotransmitter ever discovered. Essential for neuromuscular function.',
    researchNotes: 'Focus on cholinergic modulation of attention and sensory processing.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'glutamate',
    name: 'Glutamate',
    symbol: 'Glu',
    altNames: [],
    category: 'Amino Acid',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'CNS',
    chemicalFormula: 'C5H9NO4',
    chemicalStructureDescription: 'The primary excitatory neurotransmitter in the CNS.',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l30 0 l20 -20 l30 0" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="130" y="45" font-size="10" fill="#4f46e5">COOH</text></svg>`,
    precursors: ['Glutamine'],
    primaryReceptors: [
      { name: 'AMPA', type: 'Ionotropic', subtypes: ['GluA1-4'] },
      { name: 'NMDA', type: 'Ionotropic', subtypes: ['GluN1, GluN2A-D'] },
      { name: 'mGluR', type: 'Metabotropic', subtypes: ['Group I, II, III'] }
    ],
    brainRegions: ['Ubiquitous in CNS', 'Cortex', 'Hippocampus'],
    functions: ['Synaptic Plasticity', 'Learning', 'Memory', 'Brain Development'],
    disorders: [
      { 
        condition: 'Excitotoxicity', 
        lowLevelEffect: 'Cognitive dulling.', 
        highLevelEffect: 'Neuronal death (Stroke, TBI, ALS).',
        pathophysiology: 'Excessive glutamate over-activates NMDA receptors, leading to calcium influx and cell death.',
        therapeuticFocus: 'NMDA antagonists (Memantine).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Parmesan cheese', 'Soy sauce', 'Tomatoes', 'Mushrooms', 'Seaweed', 'Cured meats', 'Walnuts', 'Green tea', 'Cinnamon (Cinnamomum verum)'],
      activities: ['Intense mental focus'],
      lifestyle: ['Avoid MSG excess in sensitive individuals']
    },
    pharmaceuticals: {
      agonists: ['NMDA', 'AMPA', 'Kainate'],
      antagonists: ['Ketamine', 'Memantine', 'PCP'],
      reuptakeInhibitors: ['N/A (EAAT transporters)']
    },
    relatedNeurotransmitters: ['gaba', 'aspartate'],
    clinicalNotes: 'The most abundant neurotransmitter. Essential for long-term potentiation (LTP).',
    researchNotes: 'Investigating glutamate dysregulation in chronic pain and depression.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    symbol: 'NE',
    altNames: ['Noradrenaline'],
    category: 'Monoamine',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C8H11NO3',
    chemicalStructureDescription: 'A catecholamine that acts as both a hormone and a neurotransmitter.',
    structureSvg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 60 l20 -35 l40 0 l20 35 l-20 35 l-40 0 Z" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="160" y="90" font-size="10" fill="#4f46e5">NH2</text></svg>`,
    precursors: ['Dopamine'],
    primaryReceptors: [
      { name: 'Alpha-Adrenergic', type: 'Metabotropic', subtypes: ['α1', 'α2'] },
      { name: 'Beta-Adrenergic', type: 'Metabotropic', subtypes: ['β1', 'β2', 'β3'] }
    ],
    brainRegions: ['Locus Coeruleus', 'Adrenal Glands', 'Amygdala'],
    functions: ['Arousal/Alertness', 'Fight or Flight', 'Attention', 'Blood Pressure'],
    disorders: [
      { 
        condition: 'ADHD', 
        lowLevelEffect: 'Distractibility and poor executive function.', 
        highLevelEffect: 'Hyper-arousal.',
        pathophysiology: 'Insufficient NE signaling in the prefrontal cortex.',
        therapeuticFocus: 'NE reuptake inhibitors (Atomoxetine).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Bananas', 'Beans', 'Cheese', 'Eggs', 'Fish', 'Meat', 'Nuts', 'Oats', 'Seeds'],
      activities: ['Cold exposure', 'High-intensity interval training'],
      lifestyle: ['Stress management']
    },
    pharmaceuticals: {
      agonists: ['Clonidine', 'Phenylephrine'],
      antagonists: ['Propranolol', 'Prazosin'],
      reuptakeInhibitors: ['Atomoxetine', 'Reboxetine', 'Venlafaxine']
    },
    relatedNeurotransmitters: ['dopamine', 'epinephrine'],
    clinicalNotes: 'Crucial for the body\'s stress response. Targets of many cardiovascular drugs.',
    researchNotes: 'Role in PTSD and memory consolidation of emotional events.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'epinephrine',
    name: 'Epinephrine',
    symbol: 'EPI',
    altNames: ['Adrenaline'],
    category: 'Monoamine',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C9H13NO3',
    chemicalStructureDescription: 'A catecholamine and phenethylamine that acts as both a hormone and a neurotransmitter. Structure: (HO)₂C₆H₃CH(OH)CH₂NHCH₃.',
    structureSvg: '',
    precursors: ['Norepinephrine'],
    primaryReceptors: [
      { name: 'Alpha-Adrenergic', type: 'Metabotropic', subtypes: ['α1', 'α2'] },
      { name: 'Beta-Adrenergic', type: 'Metabotropic', subtypes: ['β1', 'β2', 'β3'] }
    ],
    brainRegions: ['Adrenal Medulla', 'Brainstem (Medulla Oblongata)', 'Hypothalamus'],
    functions: ['Fight or Flight', 'Heart Rate Regulation', 'Blood Pressure Control', 'Metabolic Rate'],
    disorders: [
      { 
        condition: 'Anaphylaxis', 
        lowLevelEffect: 'Life-threatening allergic reaction requiring immediate EPI injection.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Systemic release of histamine and other mediators leading to vasodilation and bronchoconstriction.',
        therapeuticFocus: 'Epinephrine (EpiPen).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Coffee', 'Tea', 'Citrus fruits', 'Bananas'],
      activities: ['Extreme sports', 'Public speaking', 'Acute stress'],
      lifestyle: ['Cold exposure']
    },
    pharmaceuticals: {
      agonists: ['Epinephrine', 'Isoproterenol'],
      antagonists: ['Beta-blockers (Propranolol)', 'Alpha-blockers'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['norepinephrine', 'dopamine'],
    clinicalNotes: 'The primary hormone of the adrenal medulla. Essential for emergency medicine.',
    researchNotes: 'Role in memory enhancement for emotionally charged events.',
    image: 'https://images.unsplash.com/photo-1516589174184-c685eaa3df32?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'melatonin',
    name: 'Melatonin',
    symbol: 'MT',
    altNames: ['N-acetyl-5-methoxytryptamine'],
    category: 'Monoamine',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C13H16N2O2',
    chemicalStructureDescription: 'An indoleamine derivative of serotonin. Structure: CH₃OC₁₀H₉N-CH₂CH₂NHCOCH₃.',
    structureSvg: '',
    precursors: ['Serotonin', 'Tryptophan'],
    primaryReceptors: [
      { name: 'MT1', type: 'Metabotropic', subtypes: ['Gi/o'] },
      { name: 'MT2', type: 'Metabotropic', subtypes: ['Gi/o'] }
    ],
    brainRegions: ['Pineal Gland', 'Suprachiasmatic Nucleus (SCN)', 'Retina'],
    functions: ['Circadian Rhythm Regulation', 'Sleep Induction', 'Antioxidant Activity', 'Immune Modulation'],
    disorders: [
      { 
        condition: 'Insomnia', 
        lowLevelEffect: 'Difficulty falling or staying asleep.', 
        highLevelEffect: 'Excessive daytime sleepiness.',
        pathophysiology: 'Reduced pineal melatonin production or phase-shifted release.',
        therapeuticFocus: 'Melatonin supplements, MT receptor agonists (Ramelteon).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Tart cherries', 'Walnuts', 'Grapes', 'Tomatoes', 'Milk', 'Oats'],
      activities: ['Darkness exposure', 'Evening relaxation'],
      lifestyle: ['Avoiding blue light at night']
    },
    pharmaceuticals: {
      agonists: ['Ramelteon', 'Tasimelteon', 'Agomelatine'],
      antagonists: ['Luzindole (Research only)'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['serotonin', 'gaba'],
    clinicalNotes: 'The "Hormone of Darkness". Crucial for biological clock synchronization.',
    researchNotes: 'Investigating neuroprotective effects in neurodegenerative diseases.',
    image: 'https://images.unsplash.com/photo-1511295744334-f4d56f514d8c?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'oxytocin',
    name: 'Oxytocin',
    symbol: 'OXT',
    altNames: ['The Love Hormone', 'The Cuddle Chemical'],
    category: 'Neuropeptide',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C43H66N12O12S2',
    chemicalStructureDescription: 'A cyclic nonapeptide (nine amino acids). Structure: Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂.',
    structureSvg: '',
    precursors: ['Oxytocin-Neurophysin I Prepropeptide'],
    primaryReceptors: [
      { name: 'OXTR', type: 'Metabotropic', subtypes: ['Gq/11'] }
    ],
    brainRegions: ['Hypothalamus (Paraventricular & Supraoptic Nuclei)', 'Posterior Pituitary', 'Amygdala', 'Nucleus Accumbens'],
    functions: ['Social Bonding', 'Trust & Empathy', 'Childbirth (Uterine Contraction)', 'Lactation (Milk Ejection)'],
    disorders: [
      { 
        condition: 'Social Anxiety', 
        lowLevelEffect: 'Difficulty with social interaction and trust.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Reduced oxytocin signaling in social processing circuits.',
        therapeuticFocus: 'Intranasal oxytocin (Experimental).',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['N/A (Primarily released via social stimuli)'],
      activities: ['Physical touch (hugging)', 'Social bonding', 'Breastfeeding', 'Orgasm'],
      lifestyle: ['Petting animals', 'Meaningful conversation']
    },
    pharmaceuticals: {
      agonists: ['Pitocin (Synthetic Oxytocin)', 'Carbetocin'],
      antagonists: ['Atosiban'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['dopamine', 'vasopressin', 'serotonin'],
    clinicalNotes: 'Crucial for maternal-infant bonding and complex social behaviors.',
    researchNotes: 'Potential therapeutic for Autism Spectrum Disorder and Schizophrenia.',
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'endorphin',
    name: 'Beta-Endorphin',
    symbol: 'β-END',
    altNames: ['Endogenous Morphine'],
    category: 'Neuropeptide',
    action: ActionType.INHIBITORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C158H251N39O46S',
    chemicalStructureDescription: 'A 31-amino acid neuropeptide derived from pro-opiomelanocortin (POMC).',
    structureSvg: '',
    precursors: ['POMC'],
    primaryReceptors: [
      { name: 'Mu-Opioid (MOR)', type: 'Metabotropic', subtypes: ['Gi/o'] },
      { name: 'Delta-Opioid (DOR)', type: 'Metabotropic', subtypes: ['Gi/o'] }
    ],
    brainRegions: ['Pituitary Gland', 'Hypothalamus', 'Periaqueductal Gray (PAG)', 'Amygdala'],
    functions: ['Pain Relief (Analgesia)', 'Euphoria', 'Stress Response Regulation', 'Immune Function'],
    disorders: [
      { 
        condition: 'Chronic Pain', 
        lowLevelEffect: 'Increased sensitivity to pain (Hyperalgesia).', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Depletion of endogenous opioids or receptor down-regulation.',
        therapeuticFocus: 'Opioid analgesics (Exogenous), Exercise.',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Dark chocolate', 'Spicy foods (Chili peppers)', 'Ginseng'],
      activities: ['Aerobic exercise (Runner\'s high)', 'Laughter', 'Meditation'],
      lifestyle: ['Acupuncture', 'Massage']
    },
    pharmaceuticals: {
      agonists: ['Morphine', 'Fentanyl', 'Oxycodone'],
      antagonists: ['Naloxone', 'Naltrexone'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['dopamine', 'enkephalin', 'dynorphin'],
    clinicalNotes: 'The body\'s natural painkiller. Responsible for the "Runner\'s High".',
    researchNotes: 'Role in the placebo effect and reward processing.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'nitric-oxide',
    name: 'Nitric Oxide',
    symbol: 'NO',
    altNames: ['Nitrogen Monoxide'],
    category: 'Gasotransmitter',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'NO',
    chemicalStructureDescription: 'A free radical gas that acts as a biological signaling molecule. Structure: :N=O:.',
    structureSvg: '',
    precursors: ['L-Arginine'],
    primaryReceptors: [
      { name: 'Soluble Guanylyl Cyclase (sGC)', type: 'Intracellular Enzyme', subtypes: ['α1β1', 'α2β1'] }
    ],
    brainRegions: ['Ubiquitous in CNS', 'Cerebellum', 'Hippocampus', 'Endothelium'],
    functions: ['Vasodilation', 'Synaptic Plasticity (LTP)', 'Immune Response', 'Neuroprotection'],
    disorders: [
      { 
        condition: 'Erectile Dysfunction', 
        lowLevelEffect: 'Inability to maintain vasodilation for erection.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Reduced NO bioavailability in the corpus cavernosum.',
        therapeuticFocus: 'PDE5 inhibitors (Sildenafil) which enhance NO signaling.',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Beets', 'Spinach', 'Arugula', 'Garlic', 'Watermelon', 'Pomegranate'],
      activities: ['Nasal breathing', 'Sunlight exposure', 'Exercise'],
      lifestyle: ['Avoiding mouthwash (preserves oral NO-producing bacteria)']
    },
    pharmaceuticals: {
      agonists: ['Nitroglycerin', 'Sodium Nitroprusside'],
      antagonists: ['L-NAME (Research only)'],
      reuptakeInhibitors: ['N/A (Gas diffusion)']
    },
    relatedNeurotransmitters: ['glutamate', 'acetylcholine'],
    clinicalNotes: 'Unique as it is a gas that diffuses through membranes rather than using vesicles.',
    researchNotes: 'Role in retrograde signaling and long-term potentiation.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600&h=400'
  },
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
  },
  {
    id: 'vasopressin',
    name: 'Vasopressin',
    symbol: 'AVP',
    altNames: ['Antidiuretic Hormone', 'ADH'],
    category: 'Neuropeptide',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'C46H65N15O12S2',
    chemicalStructureDescription: 'A nonapeptide hormone synthesized in the hypothalamus. Structure: Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly-NH₂.',
    structureSvg: '',
    precursors: ['Prepro-AVP-neurophysin II'],
    primaryReceptors: [
      { name: 'V1a', type: 'Metabotropic', subtypes: ['Gq'] },
      { name: 'V1b', type: 'Metabotropic', subtypes: ['Gq'] },
      { name: 'V2', type: 'Metabotropic', subtypes: ['Gs'] }
    ],
    brainRegions: ['Hypothalamus', 'Posterior Pituitary', 'Lateral Septum', 'Amygdala'],
    functions: ['Water Retention', 'Blood Pressure', 'Social Behavior', 'Aggression', 'Pair Bonding'],
    disorders: [
      { 
        condition: 'Diabetes Insipidus', 
        lowLevelEffect: 'Excessive thirst and dilute urine.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Deficiency of AVP or resistance to its action in the kidneys.',
        therapeuticFocus: 'Desmopressin (Synthetic AVP).',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['N/A'],
      activities: ['Dehydration', 'Social competition', 'Stress'],
      lifestyle: ['Hydration management']
    },
    pharmaceuticals: {
      agonists: ['Desmopressin', 'Terlipressin'],
      antagonists: ['Tolvaptan', 'Conivaptan'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['oxytocin', 'epinephrine'],
    clinicalNotes: 'Closely related to oxytocin; often associated with male-typical social behaviors.',
    researchNotes: 'Role in autism and social dysfunction.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'substance-p',
    name: 'Substance P',
    symbol: 'SP',
    altNames: [],
    category: 'Neuropeptide',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'Both',
    chemicalFormula: 'C63H98N18O13S',
    chemicalStructureDescription: 'An undecapeptide (11 amino acids) member of the tachykinin neuropeptide family.',
    structureSvg: '',
    precursors: ['Protachykinin-1'],
    primaryReceptors: [
      { name: 'NK1', type: 'Metabotropic', subtypes: ['Gq'] }
    ],
    brainRegions: ['Spinal Cord (Dorsal Horn)', 'Amygdala', 'Hypothalamus', 'Substantia Nigra'],
    functions: ['Pain Transmission', 'Inflammation', 'Stress Response', 'Emesis (Vomiting)'],
    disorders: [
      { 
        condition: 'Chronic Pain', 
        lowLevelEffect: 'N/A', 
        highLevelEffect: 'Heightened pain sensitivity (Hyperalgesia).',
        pathophysiology: 'Over-activity of Substance P in the dorsal horn of the spinal cord.',
        therapeuticFocus: 'NK1 receptor antagonists.',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['Spicy foods (Capsaicin initially releases then depletes SP)'],
      activities: ['Physical injury', 'Intense stress'],
      lifestyle: ['Capsaicin creams for pain']
    },
    pharmaceuticals: {
      agonists: ['N/A'],
      antagonists: ['Aprepitant (Antiemetic)', 'Rolapitant'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['glutamate', 'endorphin'],
    clinicalNotes: 'The primary transmitter of pain signals from the periphery to the CNS.',
    researchNotes: 'Investigating NK1 antagonists for depression and anxiety.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'aspartate',
    name: 'Aspartate',
    symbol: 'Asp',
    altNames: ['L-Aspartic Acid'],
    category: 'Amino Acid',
    action: ActionType.EXCITATORY,
    signalType: SignalType.NEUROTRANSMITTER,
    distribution: 'CNS',
    chemicalFormula: 'C4H7NO4',
    chemicalStructureDescription: 'An α-amino acid that is used in the biosynthesis of proteins. It acts as an excitatory neurotransmitter, similar to glutamate.',
    structureSvg: '',
    precursors: ['Oxaloacetate'],
    primaryReceptors: [
      { name: 'NMDA', type: 'Ionotropic', subtypes: ['Co-agonist with Glutamate'] }
    ],
    brainRegions: ['Visual Cortex', 'Cerebellum', 'Spinal Cord'],
    functions: ['Excitatory Signaling', 'Metabolism', 'Urea Cycle'],
    disorders: [
      { 
        condition: 'Excitotoxicity', 
        lowLevelEffect: 'N/A', 
        highLevelEffect: 'Neuronal damage.',
        pathophysiology: 'Excessive activation of NMDA receptors.',
        therapeuticFocus: 'NMDA antagonists.',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['Sprouting seeds', 'Oats', 'Avocado', 'Asparagus', 'Sugarcane'],
      activities: ['N/A'],
      lifestyle: ['Balanced protein intake']
    },
    pharmaceuticals: {
      agonists: ['NMDA'],
      antagonists: ['Ketamine', 'Memantine'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['glutamate', 'gaba'],
    clinicalNotes: 'Often co-released with glutamate. Less abundant but still significant.',
    researchNotes: 'Role in neurodevelopment and metabolic disorders.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'carbon-monoxide',
    name: 'Carbon Monoxide',
    symbol: 'CO',
    altNames: [],
    category: 'Gasotransmitter',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'CO',
    chemicalStructureDescription: 'A colorless, odorless, and tasteless flammable gas that is slightly less dense than air.',
    structureSvg: '',
    precursors: ['Heme (via Heme Oxygenase)'],
    primaryReceptors: [
      { name: 'Soluble Guanylyl Cyclase (sGC)', type: 'Intracellular Enzyme', subtypes: ['α1β1'] }
    ],
    brainRegions: ['Hypothalamus', 'Hippocampus', 'Olfactory Bulb'],
    functions: ['Circadian Rhythm', 'Neuroprotection', 'Vasodilation', 'Olfactory Signaling'],
    disorders: [
      { 
        condition: 'CO Poisoning', 
        lowLevelEffect: 'N/A', 
        highLevelEffect: 'Hypoxia and neurological damage.',
        pathophysiology: 'CO binds to hemoglobin with much higher affinity than oxygen.',
        therapeuticFocus: 'Oxygen therapy.',
        evidenceLevel: 'Strong'
      }
    ],
    naturalModulators: {
      foods: ['N/A'],
      activities: ['N/A'],
      lifestyle: ['N/A']
    },
    pharmaceuticals: {
      agonists: ['CORM (CO-Releasing Molecules)'],
      antagonists: ['N/A'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['nitric-oxide', 'glutamate'],
    clinicalNotes: 'Produced endogenously by heme oxygenase. Acts as a signaling molecule at low concentrations.',
    researchNotes: 'Investigating CO as a therapeutic agent for inflammation and neuroprotection.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d3a4461a?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'hydrogen-sulfide',
    name: 'Hydrogen Sulfide',
    symbol: 'H2S',
    altNames: [],
    category: 'Gasotransmitter',
    action: ActionType.MODULATORY,
    signalType: SignalType.NEUROMODULATOR,
    distribution: 'Both',
    chemicalFormula: 'H2S',
    chemicalStructureDescription: 'A colorless chalcogen hydride gas with the characteristic foul odor of rotten eggs.',
    structureSvg: '',
    precursors: ['L-Cysteine'],
    primaryReceptors: [
      { name: 'K-ATP Channels', type: 'Ion Channel', subtypes: ['Kir6.x'] }
    ],
    brainRegions: ['Ubiquitous', 'Hippocampus', 'Striatum'],
    functions: ['Neuroprotection', 'Vasodilation', 'Anti-inflammatory', 'LTP Enhancement'],
    disorders: [
      { 
        condition: "Alzheimer's Disease", 
        lowLevelEffect: 'Reduced H2S levels in the brain.', 
        highLevelEffect: 'N/A',
        pathophysiology: 'Decreased production of H2S may contribute to neurodegeneration.',
        therapeuticFocus: 'H2S donors (Experimental).',
        evidenceLevel: 'Moderate'
      }
    ],
    naturalModulators: {
      foods: ['Garlic', 'Onions', 'Cruciferous vegetables (Broccoli, Cabbage)'],
      activities: ['N/A'],
      lifestyle: ['Sulfur-rich diet']
    },
    pharmaceuticals: {
      agonists: ['GYY4137 (H2S Donor)'],
      antagonists: ['N/A'],
      reuptakeInhibitors: ['N/A']
    },
    relatedNeurotransmitters: ['nitric-oxide', 'glutamate'],
    clinicalNotes: 'The third gasotransmitter discovered. Vital for cardiovascular and neurological health.',
    researchNotes: 'Investigating H2S for longevity and stress resistance.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600&h=400'
  }
];
