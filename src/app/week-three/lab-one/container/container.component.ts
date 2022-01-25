import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  dog$!: Observable<any>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dog$ = this.httpClient.get(
      'https://dog.ceo/api/breeds/image/random'
  }

}
