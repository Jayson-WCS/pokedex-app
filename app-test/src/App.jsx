import "./App.css";
import PokemonCard from "../components/pokemonCard";
import PropTypes from "prop-types";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  let [index, setIndex] = useState(0);

  const handleClickPlus = () => setIndex(index + 1);
  const handleClickMinus = () => setIndex(index - 1);

  return (
    <div>
      {index < pokemonList.length - 1 ? (
        <button onClick={handleClickPlus}>Next</button>
      ) : (
        ""
      )}

      <PokemonCard pokemon={pokemonList[index]} />

      {index > 0 ? <button onClick={handleClickMinus}>Previous</button> : ""}
    </div>
  );
}

export default App;
