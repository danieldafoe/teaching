import { createReducer, on } from "@ngrx/store";
import { selfDestruct, storeData } from "./actions";

// Store structure interface
//
// This shows us the structure of our NgRx Store.
//
// Each property is a piece of data we would
// like to keep track of and then the data type
// of that property.
export interface AppState {
  hasStoredItem: boolean | null;
  shouldSelfDestruct: boolean | null;
}

// Initial State
//
// This is where we set the initial values of
// the properties in our Store.
//
// If you create a new property in the Store,
// it should get an initial value here.
const initialAppState: AppState = {
  hasStoredItem: null,
  shouldSelfDestruct: null
};

// Reducer
//
// This tracks what NgRx Actions we are listening for
// and how to update our Store when we receive specific Actions.
const _appReducer = createReducer(
  initialAppState,
  on(selfDestruct, (state) => {
    return Object.assign({ ...state, shouldSelfDestruct: true })
  }),
  on(storeData, (state) => {
    return Object.assign({ ...state, hasStoredItem: true })
  })
);

// Export the reducer so that it's
// usable by the NgRx Store Angular module.
//
// NOTE: You don't need to touch this.
export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
