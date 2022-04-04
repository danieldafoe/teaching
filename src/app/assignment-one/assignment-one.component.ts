import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchBooks } from '../store/actions';
import { hasSearchBooks } from '../store/selectors';
import { SearchBookService } from './services/searchBook.service';

@Component({
  selector: 'assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent {

  hasSearchBooks$ = this.store.select(hasSearchBooks);

  constructor(
    private searchBookService: SearchBookService,
    private store: Store
  ) { }

  searchBookByTitle(title: string) {
    this.store.dispatch(searchBooks(title));
    this.searchBookService.search(title);
  }
}
