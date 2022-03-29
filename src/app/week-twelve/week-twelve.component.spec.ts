import { WeekTwelveComponent } from './week-twelve.component';

fdescribe('WeekTwelveComponent', () => {
  let component: WeekTwelveComponent;
  let mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
  let mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['control']);

  beforeEach(() => {
    component = new WeekTwelveComponent(mockHttpClient, mockFormBuilder);
    component.pokemon = [
      { name: 'bulbasaur', url: 'https://pokeapi.com/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.com/api/v2/pokemon/2/' },
      { name: 'venosaur', url: 'https://pokeapi.com/api/v2/pokemon/3/' }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the ID of the Pokemon', () => {
    const result = component.getIdFromPokemon('ivysaur');
    expect(result).toEqual('2');
  });
});
