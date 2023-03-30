

function Navbar({ handlePokemonClick, pokemonList, curPokemon }) {
  curPokemon === 3 ? alert("pika pikachu") : null;

  return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
  );
}

export default Navbar;
