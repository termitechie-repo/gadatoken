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
  category: string;
  share: string;
  purpose: string;
  percentageEstimate?: number;
}
