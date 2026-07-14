import type { ThreatCategory } from '@/types';

// Threat pattern definitions for cybersecurity extremism monitoring
export interface ThreatPattern {
  category: ThreatCategory;
  keywords: string[];
  weight: number;
  label: string;
}

export const THREAT_PATTERNS: ThreatPattern[] = [
  {
    category: 'cyber-attack',
    label: 'Cyber Attack',
    weight: 25,
    keywords: [
      'ransomware', 'malware', 'hacking', 'cyber attack', 'data breach',
      'ddos', 'phishing', 'zero-day', 'exploit', 'botnet', 'dark web',
      'cyber warfare', 'state-sponsored', 'apt', 'vulnerability',
      'supply chain attack', 'backdoor', 'trojan', 'spyware',
    ],
  },
  {
    category: 'radicalization',
    label: 'Radicalization',
    weight: 30,
    keywords: [
      'radical', 'extremist', 'radicalization', 'white supremac',
      'neo-nazi', 'far-right', 'militant', 'insurgent', 'jihad',
      'domestic terror', 'lone wolf', 'accelerationist', 'great replacement',
      'civil war', 'armed resistance', 'overthrow', 'revolution',
    ],
  },
  {
    category: 'disinformation',
    label: 'Disinformation',
    weight: 20,
    keywords: [
      'deep state', 'false flag', 'hoax', 'conspiracy', 'cover-up',
      'mainstream media lies', 'fake news', 'propaganda', 'psyop',
      'disinformation', 'misinformation', 'rigged', 'stolen election',
      'crisis actor', 'plandemic', 'globalist agenda',
    ],
  },
  {
    category: 'militia',
    label: 'Militia Activity',
    weight: 28,
    keywords: [
      'militia', 'paramilitary', 'oath keeper', 'proud boy', 'three percenter',
      'boogaloo', 'second amendment', 'stand your ground', 'patriot',
      'armed citizen', 'self-defense force', 'border militia', 'vigilante',
    ],
  },
  {
    category: 'election-interference',
    label: 'Election Interference',
    weight: 22,
    keywords: [
      'voter fraud', 'ballot harvesting', 'election fraud', 'stolen vote',
      'rigged election', 'voting machine', 'election integrity',
      'stop the steal', 'mail-in fraud', 'illegal immigrant vote',
    ],
  },
  {
    category: 'hate-speech',
    label: 'Hate Speech Indicators',
    weight: 26,
    keywords: [
      'invasion', 'replacement', 'deport', 'illegal alien', 'anchor baby',
      'welfare queen', 'thug', 'soros', 'antifa', 'cultural marxism',
      'woke mob', 'groomer', 'pedophile ring',
    ],
  },
  {
    category: 'infrastructure',
    label: 'Infrastructure Threat',
    weight: 24,
    keywords: [
      'power grid', 'critical infrastructure', 'water supply', 'pipeline',
      'nuclear', 'scada', 'industrial control', 'energy grid',
      'telecommunications', 'satellite', 'undersea cable',
    ],
  },
];

// Threat level thresholds based on composite score
export const THREAT_LEVEL_THRESHOLDS = {
  critical: 70,
  high: 45,
  medium: 20,
  low: 5,
} as const;

// Category display metadata
export const THREAT_CATEGORY_META: Record<
  ThreatCategory,
  { label: string; icon: string; color: string }
> = {
  'cyber-attack': { label: 'Cyber Attack', icon: '🛡️', color: '#ef4444' },
  radicalization: { label: 'Radicalization', icon: '⚠️', color: '#f97316' },
  disinformation: { label: 'Disinformation', icon: '🎭', color: '#a855f7' },
  militia: { label: 'Militia Activity', icon: '⚔️', color: '#dc2626' },
  'election-interference': { label: 'Election Interference', icon: '🗳️', color: '#eab308' },
  'hate-speech': { label: 'Hate Speech', icon: '🚫', color: '#ec4899' },
  infrastructure: { label: 'Infrastructure', icon: '🏗️', color: '#06b6d4' },
};

// Threat level display metadata
export const THREAT_LEVEL_META: Record<
  import('@/types').ThreatLevel,
  { label: string; color: string; bg: string }
> = {
  critical: { label: 'CRITICAL', color: '#ff1744', bg: 'rgba(255, 23, 68, 0.15)' },
  high: { label: 'HIGH', color: '#ff9100', bg: 'rgba(255, 145, 0, 0.12)' },
  medium: { label: 'MEDIUM', color: '#ffea00', bg: 'rgba(255, 234, 0, 0.1)' },
  low: { label: 'LOW', color: '#69f0ae', bg: 'rgba(105, 240, 174, 0.08)' },
  clear: { label: 'CLEAR', color: '#00e676', bg: 'rgba(0, 230, 118, 0.06)' },
};
