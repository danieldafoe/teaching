import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { take } from 'rxjs/internal/operators/take';

export interface Pokemon {
  sprites: Sprites;
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
}

@Component({
  selector: 'week-twelve',
  templateUrl: './week-twelve.component.html',
  styleUrls: ['./week-twelve.component.scss']
})
export class WeekTwelveComponent implements OnInit {
  pokemon: any[] = [];
  pokemonData: any;
  selectedPokemon!: FormControl;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectedPokemon = this.fb.control('');

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(take(1)).subscribe((pokemon: any) => {
      this.pokemon = pokemon.results;
    });
  }

  changePokemon() {
    if (this.selectedPokemon) {
      const selectedPokemonId = this.getIdFromPokemon(this.selectedPokemon.value);

      this.http.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemonId}/`)
        .pipe(take(1)).subscribe((info) => this.pokemonData = info);
    }
  }

  getIdFromPokemon(pokemonName: string): string {
    const matchingPokemon = this.pokemon.find(
      (pokemon) => pokemon.name === pokemonName);
    const splitUrl = matchingPokemon.url.split('/');

    return splitUrl[splitUrl.length - 2];
  }
}
