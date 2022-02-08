import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private httpClient: HttpClient) { }

  getDogImage(): any {
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random').pipe(
      take(1),
      map((result: any) => result.message)
    );
  }
}
