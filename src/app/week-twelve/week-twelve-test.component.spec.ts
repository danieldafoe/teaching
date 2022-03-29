import { WeekTwelveComponent } from "./week-twelve.component";

describe('WeekTwelveComponent', () => {
  let component: WeekTwelveComponent;
  let mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
  let mockFormBuilder = jasmine.createSpyObj('FormBuilder', ['control']);

  describe('When the user changes the selected Pokemon', () => {
    it('should get the id of the selected Pokemon', () => {
      component = new WeekTwelveComponent(mockHttpClient, mockFormBuilder);
      component.pokemon = [
        { name: 'Bulbasaur', url: 'https://pokeapi.com/api/v2/pokemon/1/' },
        { name: 'Ivysaur', url: 'https://pokeapi.com/api/v2/pokemon/2/' },
        { name: 'Venosaur', url: 'https://pokeapi.com/api/v2/pokemon/3/' },
      ];

      const result = component.getIdFromPokemon('ivysaur');
      expect(result).toEqual('2');
    });
  });
});
