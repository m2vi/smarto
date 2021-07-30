import projects from '@projects/projects';
import { ProjectArray, ProjectProps } from '@Types/projects';

export class Projects {
  projects: ProjectArray;
  activeArray: string[];

  constructor(private keys?: string[], private fetch?: boolean) {
    this.projects = projects;
  }

  setActive() {
    let bin: ProjectArray = this.projects;

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

  toArray(): ProjectProps[] {
    return Object.entries(this.projects).map(p => p[1]);
  }

  toFilteredArray(): ProjectProps[] {
    return Object.entries(this.projects).map(p => {
      if (!p[1].enabled) return;
      return p[1];
    });
  }

  toJSON() {
    return JSON.stringify(this.projects);
  }
}

export const projectArray = new Projects().toArray();

export default Projects;
