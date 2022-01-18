import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'week-three-page-two',
  templateUrl: './week-three-page-two.component.html',
  styleUrls: ['./week-three-page-two.component.scss']
})
export class WeekThreePageTwoComponent {

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
