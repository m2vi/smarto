import defaultProjects from '@projects/projects';
import { ProjectArray, ProjectProps, ProjectsOptionProps } from '@Types/projects';

export class Projects {
  projects: ProjectArray;

  constructor(private keys?: string[], private options?: ProjectsOptionProps) {
    if (options) {
      if (options.customProjects) {
        this.projects = options.customProjects;
      }
    } else {
      this.projects = defaultProjects;
    }
  }

  public getMarked() {
    const keys = this.keys ? this.keys : [];
    const projects = this.projects;
    let bin: ProjectArray = [];

    projects.forEach(project => {
      const isMarked = keys.includes(project.key);
      isMarked && bin.push(project);
    });

    return bin;
  }

  public get() {
    return this.filter();
  }

  private filter(): ProjectProps[] {
    return this.projects.map(p => {
      if (!p.enabled) return;
      return p;
    });
  }

  public toJSON() {
    return JSON.stringify(this.projects);
  }
}

export default Projects;

// TODO: getServerSideProps fetch for github info
