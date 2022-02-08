import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  // Inject the HttpClient for making HTTP requests so it can
  // be used in this Angular service
  constructor(private httpClient: HttpClient) { }

  // Make a request to an API to get a dog image
  // It returns a JSON object with the structure: 
  // { message: string, status: string }
  // The dog image is in the "message" property
  getDogImage(): Observable<any> {
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random')
    .pipe(
      take(1),
      map((result: any) => result.message)
    );
  }
  
  // Make a request to an API to get a dog image
  // It returns JSON with the structure: 
  // [{ breeds: array, id: string, url: string, width: number, height: number }]
  // The cat image is in the "url" property
  getCatImage(): Observable<any> {
    return this.httpClient.get('https://api.thecatapi.com/v1/images/search')
    .pipe(
      take(1),
      map((result: any) => result[0].url)
    );
  }
}
