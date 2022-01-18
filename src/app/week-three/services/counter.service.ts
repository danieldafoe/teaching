import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  constructor() { }

  get count() {
    return this.counter;
  }

  increment(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 0;
  }
}
