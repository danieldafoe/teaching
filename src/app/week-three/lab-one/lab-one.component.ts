
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'lab-one',
  templateUrl: './lab-one.component.html',
  styleUrls: ['./lab-one.component.scss']
})
export class LabOneComponent implements OnInit {
cat123$!: Observable<any>;

constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.cat123$ = this.httpClient.get(
      'https://dog.ceo/api/breeds/image/random'
    );
  }

}


