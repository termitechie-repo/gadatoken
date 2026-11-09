export interface WhitepaperSlide {
  id: number;
  title: string;
  category: string;
  subtitle?: string;
  summary: string;
  bullets: {
    heading: string;
    description: string;
  }[];
  callout?: string;
}

export interface RoadmapPhase {
  phase: number;
  name: string;
  timeline: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
}

export interface TokenAllocation {
  id: number;
  category: string;
  share: string;
  amount: string;
  purpose: string;
  percentageEstimate: number;
}
