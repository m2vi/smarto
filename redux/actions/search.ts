import { projectProps } from '@Types/projects';
export enum ActionTypes {
  set = 'set',
  clear = 'clear',
  deactivate = 'deactivate',
}

export interface Actions {
  type: ActionTypes;
  value?: any;
}

export interface State {
  results: [false] | [] | projectProps[];
}
export const clearSearch = (): Actions => ({
  type: ActionTypes.clear,
});
export const deactivateSearch = (): Actions => ({
  type: ActionTypes.deactivate,
});
export const setSearch = (value: any): Actions => ({
  type: ActionTypes.set,
  value,
});
