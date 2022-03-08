import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selfDestruct } from '../store';

@Component({
  selector: 'week-nine',
  templateUrl: './week-nine.component.html',
  styleUrls: ['./week-nine.component.scss']
})
export class WeekNineComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // This will send an Action to our Store to tell
    // it that we want to update the state of our application
    // in some way.
    //
    // The dispatch() method accepts a parameter that is an Action.
    this.store.dispatch(selfDestruct());
  }

}
