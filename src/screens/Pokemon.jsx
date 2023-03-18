import { useEffect, useState } from "react";
import useSound from "use-sound";
import { Pokemons } from "../helpers";

import pokemonSound from '../sounds/pokemon.mp3';
import { RandomImage } from "../components/pokemon";

import '../components/pokemon/styles/styles.css';
import { ReturnBar } from "../components/ReturnBar";

export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(false);
  const [play] = useSound(
    pokemonSound,
    { volume: 0.5 }
  );

  useEffect(() => {
    play();
    Pokemons().then(data => {
      data.results.map(pokemon => {
        const { name, url } = pokemon;
        const pokemonId = url.split('/')[6];
        const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`;
        // const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
        setPokemons(prevPokemons => [...prevPokemons, { name, pokemonImg }]);
      })
    });

  }, []);

  useEffect(() => {
    setRandomPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
  }, [pokemons]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(currentPokemon == ''){
      return;
    }
    setFinished(true);
    if(currentPokemon.toLowerCase() === randomPokemon.name.toLowerCase()){
      setTimeout(() => {
        Swal.fire({
          title: '¡Felicidades!',
          html: `<strong>Era ${randomPokemon.name}</strong>`,
          icon: 'success',
          confirmButtonText: 'Jugar de nuevo'
        }).then((result) => {
          if (result.isConfirmed) {
            resetGame();
          }
        });
      }, 3000);
    }else{
      setError(true);
      setTimeout(() => {
        Swal.fire({
          title: '¡Incorrecto!',
          html: `<strong>Lo siento, era ${randomPokemon.name}</strong>`,
          icon: 'error',
          confirmButtonText: 'Jugar de nuevo'
        }).then((result) => {
          if (result.isConfirmed) {
            resetGame();
          }
        });
      }, 3000);
    }
  }

  const resetGame = () => {
    setRandomPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]);
    setCurrentPokemon("");
    setFinished(false);
    setError(false);
    play();
  }

  return (
    <>
      <ReturnBar />
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
      <div className="container">
        {error && <div className="nes-container is-centered is-dark"><p>No, era {randomPokemon.name}</p></div>}
        <br/>
        <RandomImage randomPokemon={randomPokemon} finished={finished}/>
        <h2 className={ !finished ? 'title-pokemon textPokemon' : 'title-pokemon' }>¿Quién es ese pokémon?</h2>
        <form onSubmit={onHandleSubmit}>
          <div className="nes-field">
            <input
              style={{
                  backgroundColor: '#fff',
                  color: '#000',
              }}
              type="text"
              autoFocus
              value={currentPokemon}
              onChange={(e) => setCurrentPokemon(e.target.value)}
              className={ !finished ? 'nes-input inputPokemon' : 'nes-input' }
            />
          </div>
        </form>
      </div>
    </>
  )
}
