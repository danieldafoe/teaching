import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from '../constants';
@Component({
  selector: 'userstory2container',
  templateUrl: './userstory2container.component.html',
  styleUrls: ['./userstory2container.component.scss']
})
export class Userstory2containerComponent implements OnInit{
  books$!: Observable<any>;

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.books$ = this.httpClient.get(
     'https://openlibrary.org/'
    );
  }
}
