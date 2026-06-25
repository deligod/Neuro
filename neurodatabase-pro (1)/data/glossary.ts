
export interface GlossaryEntry {
  definition: string;
  details: string;
}

export const glossary: Record<string, GlossaryEntry> = {
  // --- BRAIN REGIONS ---
  "Substantia Nigra": {
    definition: "A basal ganglia structure located in the midbrain that plays an important role in reward and movement.",
    details: "Contains a high concentration of dopaminergic neurons. Degeneration here is the hallmark of Parkinson's disease."
  },
  "Ventral Tegmental Area (VTA)": {
    definition: "A group of neurons located close to the midline on the floor of the midbrain.",
    details: "The origin of the dopaminergic cell bodies of the mesocorticolimbic dopamine system, widely implicated in the drug and natural reward circuitry."
  },
  "Striatum": {
    definition: "A nucleus in the subcortical basal ganglia of the forebrain.",
    details: "A critical component of the motor and reward systems; receives inputs from the cortex and dopamine from the midbrain."
  },
  "Prefrontal Cortex": {
    definition: "The cerebral cortex covering the front part of the frontal lobe.",
    details: "Implicated in planning complex cognitive behavior, personality expression, decision making, and moderating social behavior."
  },
  "Raphe Nuclei": {
    definition: "A cluster of nuclei found in the brainstem.",
    details: "The primary source of serotonin release in the brain."
  },
  "Gastrointestinal Tract": {
    definition: "The organ system responsible for digestion.",
    details: "Contains the enteric nervous system, which holds approx 90% of the body's serotonin."
  },
  "Pineal Gland": {
    definition: "A small endocrine gland in the brain.",
    details: "Produces melatonin, which modulates sleep patterns in both circadian and seasonal cycles."
  },
  "Locus Coeruleus": {
    definition: "A nucleus in the pons of the brainstem.",
    details: "The principal site for brain synthesis of norepinephrine (noradrenaline), involved in physiological responses to stress."
  },
  "Adrenal Medulla": {
    definition: "The inner part of the adrenal gland.",
    details: "Releases epinephrine and norepinephrine directly into the bloodstream during the fight-or-flight response."
  },
  "Tuberomammillary Nucleus (Hypothalamus)": {
    definition: "A nucleus located within the posterior hypothalamus.",
    details: "The sole source of neuronal histamine in the brain, playing a key role in wakefulness."
  },
  "Cerebellum": {
    definition: "A major feature of the hindbrain.",
    details: "Crucial for motor control, coordination, precision, and accurate timing."
  },
  "Thalamus": {
    definition: "A large mass of gray matter in the diencephalon.",
    details: "Relays sensory and motor signals to the cerebral cortex and regulates consciousness and alertness."
  },
  "Basal Ganglia": {
    definition: "A group of subcortical nuclei.",
    details: "Associated with control of voluntary motor movements, procedural learning, habit learning, and emotion."
  },
  "Hippocampus": {
    definition: "A component of the limbic system.",
    details: "Plays important roles in the consolidation of information from short-term memory to long-term memory and in spatial navigation."
  },
  "Amygdala": {
    definition: "A set of neurons located deep in the brain's medial temporal lobe.",
    details: "Key role in the processing of emotions, particularly fear and threat detection."
  },
  "Basal Forebrain": {
    definition: "Structures located near the bottom of the front of the brain.",
    details: "Major source of acetylcholine projections to the cortex; heavily involved in arousal and memory."
  },
  "Neuromuscular Junction": {
    definition: "A chemical synapse between a motor neuron and a muscle fiber.",
    details: "The site where the nervous system transmits signals to muscles to cause contraction."
  },
  "Autonomic Ganglia": {
    definition: "Clusters of neuronal cell bodies in the autonomic nervous system.",
    details: "Relay stations for signals traveling from the CNS to internal organs."
  },
  "Spinal Cord": {
    definition: "The cylindrical bundle of nerve fibers and associated tissue enclosed in the spine.",
    details: "Connects nearly all parts of the body to the brain."
  },
  "Brainstem": {
    definition: "The distal part of the brain made up of the midbrain, pons, and medulla.",
    details: "Controls basic bodily functions such as breathing, swallowing, heart rate, and consciousness."
  },
  "Retina": {
    definition: "Light-sensitive layer of tissue at the back of the inner eye.",
    details: "Converts light into neural signals; uses neurotransmitters like glutamate, GABA, glycine, and dopamine."
  },
  "Pituitary Gland": {
    definition: "The major endocrine gland attached to the base of the brain.",
    details: "Secretes hormones including endorphins and oxytocin."
  },
  "Hypothalamus": {
    definition: "A region of the forebrain below the thalamus.",
    details: "Coordinates the autonomic nervous system and pituitary activity (body temp, thirst, hunger, sleep)."
  },
  "Suprachiasmatic Nucleus (SCN)": {
    definition: "A tiny region of the brain in the hypothalamus.",
    details: "Responsible for controlling circadian rhythms (the body clock)."
  },
  "Widespread (Cortex, Hippocampus, Brainstem)": {
    definition: "Distributed across multiple major brain systems.",
    details: "Glutamate is the most abundant excitatory neurotransmitter, found nearly everywhere."
  },
  "Widespread (Cortex, Striatum)": {
    definition: "Distributed broadly, with high density in the cortex and striatum.",
    details: "Adenosine builds up in these areas during wakefulness to create sleep pressure."
  },
  "Widespread (Vasculature, Synapses)": {
    definition: "Found throughout the blood vessels and neuronal synapses.",
    details: "Nitric Oxide acts locally to dilate blood vessels and modulate synaptic strength."
  },
  "Widespread": {
    definition: "Found throughout the entire central and/or peripheral nervous system.",
    details: "ATP is used as an energy source and co-transmitter in almost all cells."
  },

  // --- FUNCTIONS ---
  "Reward/Motivation": {
    definition: "The process that initiates, guides, and maintains goal-oriented behaviors.",
    details: "Heavily reliant on dopamine signaling in the mesolimbic pathway."
  },
  "Motor Control": {
    definition: "The regulation of movement in organisms.",
    details: "Involves complex feedback loops between the cortex, basal ganglia, and cerebellum."
  },
  "Executive Function": {
    definition: "Higher-level cognitive processes.",
    details: "Includes planning, decision-making, error correction, and regulating thoughts/impulses."
  },
  "Lactation inhibition": {
    definition: "The suppression of milk production.",
    details: "Dopamine (via the tuberoinfundibular pathway) inhibits prolactin release from the pituitary."
  },
  "Mood Regulation": {
    definition: "The monitoring and modification of emotional reactions.",
    details: "Serotonin, norepinephrine, and dopamine are the primary regulators."
  },
  "Sleep-Wake Cycle": {
    definition: "The biological pattern of alternating sleep and wakefulness.",
    details: "Regulated by melatonin, histamine, acetylcholine, orexin, and adenosine."
  },
  "Appetite": {
    definition: "The desire to eat food.",
    details: "Complex regulation involving serotonin (satiety), dopamine (craving), and peptides like ghrelin/leptin."
  },
  "Digestion": {
    definition: "The breakdown of food.",
    details: "Serotonin in the gut regulates intestinal movements and secretion."
  },
  "Fight or Flight": {
    definition: "The acute stress response.",
    details: "Prepares the body to fight or flee; mediated by norepinephrine and epinephrine."
  },
  "Arousal": {
    definition: "The state of being awoken or stimulated.",
    details: "Involves the reticular activating system and transmitters like norepinephrine, ACh, and histamine."
  },
  "Attention": {
    definition: "The behavioral and cognitive process of selectively concentrating on a discrete aspect of information.",
    details: "Modulated heavily by acetylcholine and norepinephrine."
  },
  "Blood Pressure Regulation": {
    definition: "Maintenance of adequate blood flow.",
    details: "Norepinephrine constricts blood vessels to increase pressure."
  },
  "Acute Stress Response": {
    definition: "Immediate physiological reaction to threat.",
    details: "Rapid release of epinephrine causes heart rate increase and energy mobilization."
  },
  "Wakefulness": {
    definition: "The state of being conscious and aware.",
    details: "Histamine and Orexin are crucial for maintaining the waking state."
  },
  "Gastric Acid Secretion": {
    definition: "Production of stomach acid for digestion.",
    details: "Histamine binding to H2 receptors stimulates acid release."
  },
  "Immune Response": {
    definition: "The body's defense against pathogens.",
    details: "Histamine is a key mediator of inflammation and allergic reactions."
  },
  "Reducing Neuronal Excitability": {
    definition: "Hyperpolarizing neurons to make them less likely to fire.",
    details: "GABA is the primary brake for the brain, preventing over-activity (seizures/anxiety)."
  },
  "Muscle Tone": {
    definition: "The continuous and passive partial contraction of the muscles.",
    details: "Regulated by GABAergic and Glycinergic inhibition in the spinal cord."
  },
  "Anxiety Control": {
    definition: "Regulation of fear and worry responses.",
    details: "Enhancing GABA activity typically produces a calming, anxiolytic effect."
  },
  "Learning and Memory": {
    definition: "Acquisition and storage of information.",
    details: "Glutamate-mediated LTP (Long Term Potentiation) is the cellular basis of memory."
  },
  "Synaptic Plasticity": {
    definition: "The ability of synapses to strengthen or weaken over time.",
    details: "Crucial for learning; heavily dependent on NMDA receptors."
  },
  "Neurodevelopment": {
    definition: "The growth and organization of the nervous system.",
    details: "Glutamate and GABA play signaling roles in neuronal migration and wiring."
  },
  "Muscle Activation": {
    definition: "Triggering muscle contraction.",
    details: "Acetylcholine is the obligatory transmitter at the neuromuscular junction."
  },
  "Memory": {
    definition: "The faculty of the mind by which data is encoded, stored, and retrieved.",
    details: "Acetylcholine is critical for encoding new memories (deficient in Alzheimer's)."
  },
  "Reflex Modulation": {
    definition: "Adjusting the strength of reflex responses.",
    details: "Glycine provides inhibition in spinal reflex arcs."
  },
  "Auditory Processing": {
    definition: "Analysis of sound information.",
    details: "Glycine is a key inhibitor in the cochlear nucleus for processing sound localization."
  },
  "Pain Relief": {
    definition: "Analgesia.",
    details: "Endorphins bind to Mu-opioid receptors to block pain signal transmission."
  },
  "Euphoria": {
    definition: "A state of intense excitement and happiness.",
    details: "Often associated with dopamine release or opioid receptor activation."
  },
  "Stress Mitigation": {
    definition: "Dampening of the stress response.",
    details: "Endorphins and endocannabinoids help return the system to baseline after stress."
  },
  "Sleep Pressure": {
    definition: "The biological drive to sleep that accumulates during wakefulness.",
    details: "Caused by the buildup of Adenosine in the brain."
  },
  "Vasodilation": {
    definition: "Widening of blood vessels.",
    details: "Nitric Oxide relaxes smooth muscle in vessel walls, increasing blood flow."
  },
  "Anti-inflammatory": {
    definition: "Reducing inflammation.",
    details: "Adenosine and certain cannabinoids have immunosuppressive effects."
  },
  "Pain Management": {
    definition: "Regulation of pain perception.",
    details: "Endocannabinoids (Anandamide) modulate pain thresholds."
  },
  "Retrograde Signaling": {
    definition: "Transmission from post-synaptic neuron back to pre-synaptic neuron.",
    details: "Nitric Oxide and Endocannabinoids travel 'backwards' to regulate neurotransmitter release."
  },
  "Fast synaptic transmission": {
    definition: "Rapid communication between neurons.",
    details: "ATP acts via P2X ion channels for millisecond-scale signaling."
  },
  "Gastrointestinal motility": {
    definition: "Movements of the digestive system.",
    details: "Regulated by ATP, Serotonin, and ACh in the gut."
  },
  "Pain signaling": {
    definition: "Transmission of nociceptive (pain) information.",
    details: "ATP released from damaged cells activates pain receptors."
  },
  "Circadian Rhythm Regulation": {
    definition: "Control of the 24-hour internal clock.",
    details: "Melatonin signals 'nighttime' to the body."
  },
  "Antioxidant Defense": {
    definition: "Protection against oxidative stress.",
    details: "Melatonin is a potent free radical scavenger."
  },
  "Reproductive Timing": {
    definition: "Regulation of seasonal breeding or cycles.",
    details: "Melatonin tracks day length to coordinate seasonal biology."
  }
};
