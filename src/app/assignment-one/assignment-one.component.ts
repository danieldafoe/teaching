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
  
}
