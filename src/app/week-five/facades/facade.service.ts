import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AnimalService } from '../services/animal.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  // Inject the AnimalService so it can be used 
  // in this Angular service
  constructor(private animalService: AnimalService) { }

  // The facade method that makes it easy to get an animal image
  // If there are multiple methods in the service this uses,
  // it is easy to switch out which type of animal images we return to the // component
  getAnimalImage(): Observable<string> {
    // These call the underlying AnimalService to return the Observable
    // that has the animal image
    // return this.animalService.getDogImage();
    return this.animalService.getCatImage();
  }
}
