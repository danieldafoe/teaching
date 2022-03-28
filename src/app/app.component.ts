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
    { name: 'Week 3', url: 'week-three' },
    { name: 'Week 4', url: 'week-four' },
    { name: 'Week 5', url: 'week-five' },
    { name: 'Week 6', url: 'week-six' },
    { name: 'Week 7', url: 'week-seven' },
    { name: 'Week 9', url: 'week-nine' },
    { name: 'Week 10', url: 'week-ten' },
    { name: 'Week 11', url: 'week-eleven' },
  ];
}
