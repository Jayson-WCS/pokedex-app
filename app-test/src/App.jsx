import "./App.css";
import PokemonCard from "../components/pokemonCard";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

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

  let [curPokemon, setCurPokemon] = useState(0);
  const handlePokemonClick = (index) => setCurPokemon(index);

  return (
    <div>
      <Navbar
        handlePokemonClick={handlePokemonClick}
        pokemonList={pokemonList}
        curPokemon={curPokemon}
      />
      <PokemonCard pokemon={pokemonList[curPokemon]} />
    </div>
  );
}

export default App;
