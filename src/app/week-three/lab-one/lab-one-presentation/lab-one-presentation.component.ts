import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lab-one-presentation',
  templateUrl: './lab-one-presentation.component.html',
  styleUrls: ['./lab-one-presentation.component.scss']
})
export class LabOnePresentationComponent implements OnInit {
  @Input() dog123!: string;
  


  constructor() { }

  ngOnInit(): void {

  }

}
