import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from './constants';
import { AppState } from '../store';
import { select, Store } from '@ngrx/store';
import { storeData } from '../store/actions';
import { selectHasStoredItem } from '../store/selectors';

@Component({
  selector: 'assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.scss']
})

export class AssignmentTwoComponent implements OnInit{

    // This is used for showing and hiding the book 
  // search results section
  // Tip: This could be stored as global state of the application
  areResultsLoading = false;

  // This holds all of the books that come back from
  // the search
  books$!: Observable<any>;
  hasStoredItem$!: Observable<any>;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasStoredItem$ = this.store.pipe(select(selectHasStoredItem));
  }



  // This gets called from the assignment-one.component.html
  // template file and gets passed the search text that's typed
  // into the input field
  searchBookByTitle(title: string) {

    // This indicates that the results are loading after someone
    // has made a search request using the form
    this.areResultsLoading = true;

    // This sets the variable books$ to be 
    // the response from calling the OpenLibrary API.
    // The structure of the response looks something like:
    // { numFound: number, docs: array }
    // The docs array will have every book that matches the title.
    // Tip: This fetches data
    this.books$ = this.httpClient.get(
      `${OPEN_LIBRARY_BASE_PATH}search.json?title=${title}`
    ).pipe(
      // Wait for 3 seconds before executing another search
      throttleTime(3000),
      // Update the results loading variable 
      // when book results are returned
      tap(() => this.areResultsLoading = false)
    );
    this.store.dispatch(storeData({value: title}));
  }

}
