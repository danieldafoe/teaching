// Non-componentized code
// Imagine this was main.js
(function() {
    // Get Pokemon data
    // Display data
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => renderPokemon(data['results']));
  })();
  
  function renderPokemon(data: any) {
    let pokemonList = document.createElement('ul');
  
    data.forEach((pokemon: any) => {
      let listItem = document.createElement('li');
      listItem.innerHTML = pokemon.name;
  
      pokemonList.appendChild(listItem);
    })
  
    const view = document.getElementsByTagName('main')[0];
    view.appendChild(pokemonList);
  }