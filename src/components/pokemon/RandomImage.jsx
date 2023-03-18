export const RandomImage = ({randomPokemon, finished}) => {
  return (
    randomPokemon && <img src={randomPokemon.pokemonImg} alt={randomPokemon.name} style={{ imageRendering: 'pixelated', width: '250px' }} className={ finished ? 'showPokemon' : 'imgPokemon' } />
  )
}
