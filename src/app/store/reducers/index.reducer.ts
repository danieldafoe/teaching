import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { searchBooks } from '../actions';
// export const hasSearchedBooks = createAction(
//   '[Search Book] store to local storage "HAS_SEARCH_BOOKS"',
//   props<LocalStorageData>()
// );

const initialHasSearchBooksStatus = false;

export const hasSearchBooksReducer = createReducer(
  initialHasSearchBooksStatus,
  on(searchBooks, (state, { hasSearchBooks }) => {
    localStorage.setItem('HAS_SEARCH_BOOKS', JSON.stringify(true));
    return true;
  })
);
