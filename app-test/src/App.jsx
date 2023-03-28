import "./App.css";
import PokemonCard from "../components/pokemonCard";
import PropTypes from "prop-types";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "ivysaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      name: "venusaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      name: "mew",
      imgSrc: "",
    },
  ];

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div>
      {pokemonList.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default App;
