import { Component } from '@angular/core';

interface WeeklyContent {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weeks: WeeklyContent[]  = [
    { name: 'Week 2', url: 'week-two' },
    { name: 'Week 3', url: 'week-three' }
  ];
}