
fetch("https://pokeapi.co/api/v2/type?offset0&limit=21")
  .then(response => response.json())
  .then(data => {
    const pokemonList = document.querySelector('.pokemon-list');

    data.results.forEach(item => {
      const button = document.createElement("button");
      button.innerHTML = `${item.name}`; 
      button.classList.add("btn"); 

      pokemonList.appendChild(button);

      button.addEventListener('click', () => {
        window.location.href = `index2.html?type=${item.name}`;
      });
    });
  })
  





    
    
    
 
