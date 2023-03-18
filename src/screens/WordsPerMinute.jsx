import { useEffect, useState } from "react"
import { ReturnBar } from "../components/ReturnBar";
import { Form } from "../components/words";
import { Words } from "../helpers"

export const WordsPerMinute = () => {
  const [word, setWord] = useState(() => Words[Math.random() * Words.length | 0]);
  const [characterCount, setCharacterCount] = useState(0);
  const [time, setTime] = useState(60);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if(time != 0){
      const timeout = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(timeout);
    }else{
      Swal.fire({
        title: 'Time End',
        html:
        `Characters typed: ${characterCount}<br/><br/><span style="color: red">Errors: ${errors}</span>`,
        icon: 'success',
        confirmButtonText: 'Play Again'
      }).then((result) => {
        if (result.isConfirmed) {
          resetGame();
        }
      });
    }
  }, [time]);

  const resetGame = () => {
    setWord(Words[Math.random() * Words.length | 0]);
    setCharacterCount(0);
    setTime(60);
    setErrors(0);
  }

  return (
    <>
      <ReturnBar />
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12",
        textAlign: "center",
      }}>
        {
          Boolean(time) && <h1 style={{
          fontSize: "60px",
          color: "#fff",
          marginBottom: "20px",
          textDecoration: "underline",
        }}>{word}</h1>
        }
        <h2 style={{
          fontSize: "42px",
        }}>Characters typed: {characterCount}</h2>
        <h3 style={{
          fontSize: "32px",
        }}>Remaining time: {time}</h3>
        <h3 style={{
          fontSize: "32px",
          marginBottom: "24px",
        }}>Errors: {errors}</h3>
        {
          time !== 0 ? <Form Words={Words} word={word} setWord={setWord} characterCount={characterCount} setCharacterCount={setCharacterCount} errors={errors} setErrors={setErrors}/> : <button style={{
            width: '200px',
            margin: '0 auto',
            borderRadius: '8px',
            padding: '8px',
            backgroundColor: '#0d6efd',
            border: '0',
            cursor: 'pointer',
        }} onClick={() => setTime(60)}>Play</button>
        }
      </div>
    </>
  )
}
