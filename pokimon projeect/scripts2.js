const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
//const url = urlParams.get('url');
const pokemonList = document.querySelector('.pokemon-list');
const typeNameElement = document.getElementById('type-name');

typeNameElement.innerHTML = type;  

const url = "https://pokeapi.co/api/v2/type/" + type;
fetch(url)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.pokemon;

    pokemons.forEach(item => {
      fetch(item.pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const div = document.createElement('div');
          div.classList.add('pokemon-item');
          const img = document.createElement('img');
          img.src = pokemonData.sprites.front_default;
          const name = document.createElement('p');
          name.innerHTML = pokemonData.name;
          div.appendChild(img);
          div.appendChild(name);

          
          div.addEventListener('click', () => {
            window.location.href = `index3.html?url=${encodeURIComponent(item.pokemon.url)}`;
          });
          pokemonList.appendChild(div);
        });
    });
  })
 