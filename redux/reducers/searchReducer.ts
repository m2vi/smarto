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

const initialState: State = {
  results: [false],
};
export default function searchReducer(state: State = initialState, action: Actions) {
  console.log(state, action);
  switch (action.type) {
    case ActionTypes.set:
      return { results: action.value };
    case ActionTypes.clear:
      return { results: [] };
    case ActionTypes.deactivate:
      return { results: [false] };
    default:
      return state;
  }
}
