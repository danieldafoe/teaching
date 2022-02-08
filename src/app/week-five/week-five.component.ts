import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FacadeService } from './facades/facade.service';

@Component({
  selector: 'week-five',
  templateUrl: './week-five.component.html',
  styleUrls: ['./week-five.component.scss']
})
export class WeekFiveComponent implements OnInit {
  animalImage$!: string;

  constructor(private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.facadeService.getAnimalImage().subscribe(
      (image: string) => this.animalImage$ = image);
  }
}
