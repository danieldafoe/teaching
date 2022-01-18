import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'week-two-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
  pokemon$!: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.pokemon$ = this.httpClient.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
  }

}
