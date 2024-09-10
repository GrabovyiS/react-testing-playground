import { useEffect, useState } from "react";
import { getPokemon, getPokemonImgUrl } from "./fetchPokemonHelpers";
import "./Pokemon.css";

function Pokemon({ offset }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const getPokemonInfo = async () => {
    const pokemonData = await getPokemon(offset);
    const pokemon = pokemonData[0];
    const name = pokemon.name;

    const pokemonImageUrl = await getPokemonImgUrl(pokemon.url);
    setPokemonInfo({ name, imageUrl: pokemonImageUrl });
  };

  if (!pokemonInfo) {
    getPokemonInfo();
  }

  return (
    <div className="poke-card">
      {!pokemonInfo ? (
        "Loading"
      ) : (
        <>
          <img src={pokemonInfo.imageUrl} />
          <p>{pokemonInfo.name}</p>
        </>
      )}
    </div>
  );
}

export default Pokemon;
