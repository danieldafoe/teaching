// Actions
//
// These are the things that we will "dispatch" to the Store
// whenever we want to make a change happen to the state of our

import { createAction, props } from "@ngrx/store";

// application.
export const selfDestruct = createAction('[Week 9] Self-Destruct');
export const storeData = createAction(
  '[Week 10] Store Data',
  props<LocalStorageData>()
);

export const searchBooks = createAction(
  '[Search Book] store to local storage "HAS_SEARCH_BOOKS"',
  props<any>()
);

// Create a type to use for when we pass data
// to save with the storeData Action.
export interface LocalStorageData {
  value: string;
}
