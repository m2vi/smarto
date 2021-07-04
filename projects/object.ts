import moment from "moment";
import GitHub from "./lookup/services/github";
import projects from "./projects";
import { isDevelopment } from "../utils/env/constants";
import sessionManager from "../utils/store/sessionManager";

export interface projectProps {
  enabled?: boolean;
  key?: string;
  name?: string;
  path?: string;
  icon?: StaticImageData;
  createdAt?: number;
  updatedAt?: string;
  description?: string;
  badge?: "web" | "mobile" | "desktop" | "all";
  language?: string;
  url?: string;
  repository?: {
    type?: "git";
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

  async getUpdates() {
    //! HARD TO READ

    sessionManager.get("updatedProjects", async (success: boolean, item: any) => {
      if (success && item) {
        this.projects = item;
      } else {
        let bin: [string, projectProps][] = Object.entries(this.projects);
        const revert = (Array: [string, projectProps][]) => {
          let bin: projectArray = {};
          Array.forEach((item) => {
            if (!item[1].enabled) return;
            [(bin[item[0]] = item[1])];
          });
          return bin;
        };

        for (let i = 0; i < bin.length; i++) {
          const curr = this.projects[bin[i][0]];
          if (curr.repository && curr.enabled && this.fetch) {
            const user = new GitHub(curr.repository?.user);
            const { updated_at, language } = await user.repo(curr.repository?.name);

            bin[i][1].updatedAt = moment(updated_at).fromNow();
            !bin[i][1].language && (bin[i][1].language = language ? language : false);
          }
        }
        sessionManager.store("updatedProjects", revert(bin));

        this.projects = revert(bin);
      }
    });
  }

  get() {
    return this.projects;
  }

  getActiveArray() {
    const Array = this.toArray();

    return Array.filter((p) => {
      if (p.active) {
        return true;
      } else {
        return false;
      }
    });
  }

  toArray(): projectProps[] {
    return Object.entries(this.projects).map((p) => p[1]);
  }

  toFilteredArray(): projectProps[] {
    return Object.entries(this.projects).map((p) => {
      if (!p[1].enabled) return;
      return p[1];
    });
  }

  toJSON() {
    return JSON.stringify(this.projects);
  }

  async __init__() {
    this.getUpdates().then(() => this.setActive());
  }
}
