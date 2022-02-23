function fetchPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`We cant find this pokemon ${pokemonName}`)
      );
    }
  );
}

const api = {
  fetchPokemon,
};

export default api;
