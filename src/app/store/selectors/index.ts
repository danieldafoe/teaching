import { createSelector } from "@ngrx/store";
import { AppState } from "..";

// Selectors
//
// These will take the current state of the Store and
// allow us to choose what slice of state to return to
// whatever uses this function.
// { desn3037: { shouldSelfDestruct: value }}
// { shouldSelfDestruct: value }
export const selectAppState = (state: any) => state.desn3037;
export const selectSelfDestructStatus = createSelector(
  selectAppState,
  (state: AppState) => state.shouldSelfDestruct);
export const selectHasStoredItem = createSelector(
  selectAppState,
  (state: AppState) => state.hasStoredItem);