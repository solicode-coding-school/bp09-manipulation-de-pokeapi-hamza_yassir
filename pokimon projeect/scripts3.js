
const urlParams = new URLSearchParams(window.location.search);
const pokemonUrl = urlParams.get('url');
const imageContainer = document.getElementById('image');
const table = document.querySelector('.table');

fetch(pokemonUrl)
  .then(response => response.json())
  .then(data => {
    const title = document.getElementById('tit');
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    imageContainer.appendChild(img);
    title.innerHTML = data.name;

    table.innerHTML = `
      <tr><td>ID</td><td>${data.id}</td></tr>
      <tr><td>Name</td><td>${data.name}</td></tr>
      <tr><td>Height</td><td>${data.height}</td></tr>
      <tr><td>Weight</td><td>${data.weight}</td></tr>
      <tr><td>Abilities</td><td>${data.abilities.map(ability => ability.ability.name).join(', ')}</td></tr>
      <tr><td>Stats</td><td>
        <ul>
          ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
        </ul>
      </td></tr>
    `;

    
    fetch(data.species.url)
      .then(response => response.json())
      .then(speciesData => {
        
        const genderRate = speciesData.gender_rate;
        let genderText = "Not Available";

        if (genderRate === -1) {
          genderText = "Unknown";
        } else if (genderRate === 0) {
          genderText = "Male ";
        } else if (genderRate === 8) {
          genderText = "Female ";
        } else {
          genderText = "Both Male and Female";
        }

        
        const genderRow = document.createElement('tr');
        genderRow.innerHTML = `<td>Gender</td><td>${genderText}</td>`;
        table.appendChild(genderRow);
      })
  })
  


