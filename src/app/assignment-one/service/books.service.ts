import { Injectable } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class bookService{

    areResultsLoading = false;
    books$!: Observable<any>;

    constructor(private httpClient: HttpClient) { }


    search(title: string){
        this.areResultsLoading = true;
        this.books$ = this.httpClient.get(
        `${OPEN_LIBRARY_BASE_PATH}search.json?title=${title}`
        ).pipe(
        throttleTime(3),
        tap(() => this.areResultsLoading = false)
        );
        return this.books$;
    }

    searchresult():boolean{
        return this.areResultsLoading;
    }
    
        
}