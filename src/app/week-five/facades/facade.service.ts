import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators'
import { AnimalService } from '../services/animal.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  constructor(private animalService: AnimalService) { }

  getAnimalImage(): any {
    return this.animalService.getDogImage();
  }
}
