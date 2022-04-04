import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SearchBookService } from '../services/searchBook.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  areResultsLoading = false;
  books$!: Observable<any>;

  constructor(private searchBookService: SearchBookService) { }

  ngOnInit(): void {
    this.searchBookService.loading$.subscribe((value:boolean) => {
      this.areResultsLoading = value;
    });

    this.searchBookService.result$.subscribe((value:any) => {
      this.books$ = value;
    });
  }

}
