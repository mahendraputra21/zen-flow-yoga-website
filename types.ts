
export type MoodTag = 'Anxious' | 'Tired' | 'Insomnia' | 'Stiff' | 'Stressed';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string; // HTML string for rich text simulation
  tags: MoodTag[];
}

export interface YogaPose {
  id: string;
  englishName: string;
  sanskritName: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Restorative' | 'Strength' | 'Flexibility' | 'Balance' | 'Backbend';
  imageUrl: string;
  benefits: string[];
  contraindications: string[];
  steps: string[];
  tags: MoodTag[];
}

export enum AdPosition {
  HEADER = 'header',
  SIDEBAR = 'sidebar',
  IN_ARTICLE = 'in-article',
  TOOL_BOTTOM = 'tool-bottom',
}

export enum AdFormat {
  AUTO = 'auto',
  RECTANGLE = 'rectangle',
  SKYSCRAPER = 'skyscraper',
  BANNER = 'banner',
}

export interface AdSlotProps {
  position: AdPosition;
  format?: AdFormat;
  className?: string;
}
