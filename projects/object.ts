import projects from './projects';

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

export class Projects {
  projects: projectArray;
  activeArray: string[];

  constructor(private keys: string[], private fetch?: boolean) {
    this.projects = projects;
  }

  setActive() {
    let bin: projectArray = this.projects;

    for (let i = 0; i < this.keys.length; i++) {
      bin[this.keys[i]].active = true;
    }

    this.projects = bin;
  }

  get() {
    return this.projects;
  }

  getActiveArray() {
    const Array = this.toArray();

    return Array.filter(p => {
      if (p.active) {
        return true;
      } else {
        return false;
      }
    });
  }

  toArray(): projectProps[] {
    return Object.entries(this.projects).map(p => p[1]);
  }

  toFilteredArray(): projectProps[] {
    return Object.entries(this.projects).map(p => {
      if (!p[1].enabled) return;
      return p[1];
    });
  }

  toJSON() {
    return JSON.stringify(this.projects);
  }
}
