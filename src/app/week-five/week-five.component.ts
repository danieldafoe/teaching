import { Component, OnInit } from '@angular/core';
import { FacadeService } from './facades/facade.service';

@Component({
  selector: 'week-five',
  templateUrl: './week-five.component.html',
  styleUrls: ['./week-five.component.scss']
})
export class WeekFiveComponent implements OnInit {
  // Create a new variable to hold the URL of an animal image
  animalImage$!: string;

  // Inject the FacadeService so that we can use it in this component
  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    // Get new values from the getAnimalImage() Observable in 
    // the FacadeService Every time there is a new value, 
    // set animalImage$ to the new value
    this.facadeService.getAnimalImage().subscribe(
      (image: string) => this.animalImage$ = image);
  }
}
