import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../store';
import { storeData } from '../store/actions';
import { selectHasStoredItem } from '../store/selectors';


@Component({
  selector: 'week-ten',
  templateUrl: './week-ten.component.html',
  styleUrls: ['./week-ten.component.scss']
})
export class WeekTenComponent implements OnInit {
  hasStoredItem$!: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasStoredItem$ = this.store.pipe(select(selectHasStoredItem));
  }

  storeData(data: string): void {
    this.store.dispatch(storeData({ value: data }));
  }
}
