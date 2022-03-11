import { Component } from '@angular/core';
import { AssignmentOneFacadeService } from './facades/facade.service';

@Component({
  selector: 'assignment-one',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.scss']
})
export class AssignmentOneComponent {

  constructor(private facadeService: AssignmentOneFacadeService) { }

  searchBookByTitle(title: string) {
    this.facadeService.searchBookByTitle(title);
  }
}
