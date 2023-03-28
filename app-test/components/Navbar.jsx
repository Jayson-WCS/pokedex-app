function Navbar({ handleClickPlus, handleClickMinus, index, pokemonList }) {
  return (
    <div>
      {index > 0 && <button onClick={handleClickMinus}>Previous</button>}
      {index < pokemonList.length - 1 && (
        <button onClick={handleClickPlus}>Next</button>
      )}
    </div>
  );
}

export default Navbar;
