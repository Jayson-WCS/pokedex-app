function Navbar({ handlePokemonClick, pokemonList }) {
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
