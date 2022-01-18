import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'week-two-presentational',
  templateUrl: './presentational.component.html',
  styleUrls: ['./presentational.component.scss']
})
export class PresentationalComponent implements OnInit {
  @Input() data!: any[];

  ngOnInit(): void {
    console.log(this.data);
  }
}
