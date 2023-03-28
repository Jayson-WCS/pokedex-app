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

  const handleClickPlus = () => {
    setIndex(++index);
  };

  const handleCLickMinus = () => {
    setIndex(--index);
  };

  return (
    <div>
      <button onClick={handleClickPlus}>Next</button>
      <PokemonCard pokemon={pokemonList[index]} />
      <button onClick={handleCLickMinus}>Next</button>
    </div>
  );
}

export default App;
