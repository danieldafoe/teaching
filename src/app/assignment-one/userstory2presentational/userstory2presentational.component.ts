import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, throttleTime } from 'rxjs/operators';
import { OPEN_LIBRARY_BASE_PATH } from '../constants';
import { bookService } from '../service/books.service';
@Component({
  selector: 'userstory2presentational',
  templateUrl: './userstory2presentational.component.html',
  styleUrls: ['./userstory2presentational.component.scss']
})
export class Userstory2presentationalComponent implements OnInit{
  @Input() data!:any[];
  areResultsLoading:boolean = false;
  ngOnInit(): void {
      console.log();
  }

 // This is used for showing and hiding the book 
  // search results section
  // Tip: This could be stored as global state of the application
  books$!: Observable<any>;
  constructor(private service: bookService) { }

  // This gets called from the assignment-one.component.html
  // template file and gets passed the search text that's typed
  // into the input field
  searchBookByTitle(title: string) {

    this.books$ = this.service.search(title);
    this.areResultsLoading = this.service.searchresult();
  }

}
