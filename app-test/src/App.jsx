import "./App.css";
import PokemonCard from "../components/pokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      {pokemonList.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default App;
