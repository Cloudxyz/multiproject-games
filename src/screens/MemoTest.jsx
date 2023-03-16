import { useEffect, useState } from "react";
import { MemoImages } from "../helpers"
import { ItemImage } from "../components/memotest";
import useSound from 'use-sound';

import loseSound from '../sounds/lose.mp3';
import winSound from '../sounds/win.mp3';

export const MemoTest = () => {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [lifes, setLifes] = useState(10);
  const [playLoseSound] = useSound(loseSound);
  const [playWinSound] = useSound(winSound);

  useEffect(() => {
    clearTimeout();
    if(selected.length === 2){
      if(selected[0].split("|")[1] === selected[1].split("|")[1]){
        setGuessed(guessed => guessed.concat(selected));
      }else{
        setLifes(lifes - 1);
      }
      setTimeout(() => {
        setSelected([]);
      }, 700);

    }
  }, [selected]);

  useEffect(() => {
    if(guessed.length === MemoImages.length){
      playWinSound();
      Swal.fire({
        title: 'You win!',
        icon: 'success',
        confirmButtonText: 'Play Again'
      }).then((result) => {
        if (result.isConfirmed) {
          resetGame();
        }
      });
    }
  }, [guessed]);

  useEffect(() => {
    if(lifes === 0){
      playLoseSound();
      Swal.fire({
        title: 'You lose!',
        icon: 'error',
        confirmButtonText: 'Play Again'
      }).then((result) => {
        if (result.isConfirmed) {
          resetGame();
        }
      });
    }
  }, [lifes]);

  const getLifes = (lifes) => {
    let listLifes = [];
    for (let i = 0; i < lifes; i++) {
      listLifes.push(<span key={i}> 🧡</span>);
    }
    return listLifes;
  };

  const resetGame = () => {
    setSelected([]);
    setGuessed([]);
    setLifes(10);
  }

  return (
      <>
        <h1>Memorama</h1>
        <h2 style={{
          marginBottom: '20px',
         }}>Lifes:
          {
            getLifes(lifes)
          }
        </h2>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
          gap: '24px',
        }}>
            {
              MemoImages.map((image) => {
                return <ItemImage key={image} setSelected={setSelected} selected={selected} guessed={guessed} image={image}/>
              })
            }
        </ul>
      </>
  )
}
