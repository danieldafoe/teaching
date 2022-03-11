
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SearchBookService } from '../services/searchBook.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentOneFacadeService {

  constructor(private searchBookService: SearchBookService) { }

  searchBookByTitle(title: string) {
    this.searchBookService.search(title);
  }
}
