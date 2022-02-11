import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from './constants';

@Component({
  selector: 'assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent {
  // This is used for showing and hiding the book 
  // search results section
  // Tip: This could be stored as global state of the application
  areResultsLoading = false;

  // This holds all of the books that come back from
  // the search
  books$!: Observable<any>;

  constructor(private httpClient: HttpClient) { }

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
      throttleTime(3000),
      tap(() => this.areResultsLoading = false)
    );
  }
}
