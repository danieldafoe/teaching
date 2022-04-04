import { Component } from '@angular/core';
import { SearchBookService } from './services/searchBook.service';

@Component({
  selector: 'assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent {

  constructor(private searchBookService: SearchBookService) { }

  searchBookByTitle(title: string) {
    this.searchBookService.search(title);
  }
}
