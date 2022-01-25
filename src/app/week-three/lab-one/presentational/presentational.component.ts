import { Component,Input,OnInit } from '@angular/core';

@Component({
    selector: 'lab-one-presentational',
    templateUrl: './presentational.component.html',
    styleUrls: ['./presentational.component.scss']
  })
export class PresentationalComponent1 implements OnInit {
  @Input() data!: any[];

  ngOnInit(): void {
    console.log(this.data);
  }
}

