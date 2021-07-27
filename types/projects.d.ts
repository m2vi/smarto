export interface projectProps {
  enabled?: boolean;
  key?: string;
  name?: string;
  path?: string;
  icon?: StaticImageData;
  createdAt?: number;
  updatedAt?: string;
  description?: string;
  badge?: 'web' | 'mobile' | 'desktop' | 'all';
  language?: string;
  url?: string;
  repository?: {
    type?: 'git';
    user?: string;
    name?: string;
  };

  tags?: string[];
  active?: boolean;
}

export interface projectArray {
  [key: string]: projectProps;
}
