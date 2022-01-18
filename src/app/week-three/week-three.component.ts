import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'week-three',
  templateUrl: './week-three.component.html',
  styleUrls: ['./week-three.component.scss']
})
export class WeekThreeComponent {

  constructor(private counterService: CounterService) { }

  getCounter(): number {
    return this.counterService.counter;
  }

  incrementCounter(): void {
    this.counterService.increment();
  }

  resetCounter(): void {
    this.counterService.reset();
  }
}
