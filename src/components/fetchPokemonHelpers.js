const getPokemon = async (offset) => {
  const pokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`
  );
  const pokemonsJson = await pokemonsResponse.json();
  return pokemonsJson.results;
};

const getPokemonImgUrl = async (pokemonUrl) => {
  const pokemonResponse = await fetch(pokemonUrl);
  const pokemonJson = await pokemonResponse.json();
  return pokemonJson.sprites.front_default;
};

const getRandomOffset = () => {
  return Math.floor(Math.random() * 1000);
};

export { getPokemon, getPokemonImgUrl, getRandomOffset };
