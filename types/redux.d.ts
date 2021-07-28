import { projectProps } from '@Types/projects';

export enum ActionTypes {
  set = 'set',
  clear = 'clear',
  deactivate = 'deactivate',
}

export interface Actions {
  type: ActionTypes;
}

export interface State {
  results: [false] | [] | projectProps[];
}
