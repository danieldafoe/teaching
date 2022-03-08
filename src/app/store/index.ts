import { createAction, createReducer, on, State } from "@ngrx/store";

// This shows us the structure of our NgRx Store
export interface AppState {
  shouldSelfDestruct: boolean | null;
}

// This is where we set the initial values of
// the properties in our Store
const initialAppState: AppState = {
  shouldSelfDestruct: null
};

// Actions
// These are the things that we will "dispatch" to the Store
// whenever we want to make a change happen to the state of our
// application.
export const selfDestruct = createAction('[Week 9] Self-Destruct');

// Reducer
// The _ prefix is used simply so that we can use
// the same name
const _appReducer = createReducer(
  initialAppState,
  on(selfDestruct, (state) => { return Object.assign({ ...state, shouldSelfDestruct: true })}),
);

// Export the reducer
export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
