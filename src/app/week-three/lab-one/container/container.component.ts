import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lab-one-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent1 implements OnInit {
  dog$!: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dog$ = this.httpClient.get(
      'https://dog.ceo/api/breeds/image/random'
    );
  }

}
