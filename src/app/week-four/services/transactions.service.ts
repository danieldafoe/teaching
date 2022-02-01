import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // Create an Observable that Observers will 
  // subscribe to in order to be notified
  // when it emits a value
  // (A Subject type is a type of Observable)
  purchases$: Subject<number> = new Subject();

  constructor() { }

  // A method that will emit a new value
  // from the purchases$ Observable when 
  // it is called
  purchase(): void {
    this.purchases$.next(this.generateAmount(1, 25, 2));
  }

  // A private method created to simply
  // generate a random dollar amount for 
  // the Week 4 example
  private generateAmount(
    min: number, 
    max: number, 
    places: number): number 
  {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value.toFixed(places));
  }
}
