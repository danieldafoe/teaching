import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from '../constants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {
  loading$: Subject<boolean> = new Subject();
  result$: Subject<any> = new Subject();

  constructor(private httpClient: HttpClient) { }

  search(title: string) {
    this.loading$.next(true);

    var books = this.httpClient.get(
      `${OPEN_LIBRARY_BASE_PATH}search.json?title=${title}`
    ).pipe(
      throttleTime(3000),
      tap(() => {
        this.loading$.next(false);
      })
    );

    this.result$.next(books);
  }
}
