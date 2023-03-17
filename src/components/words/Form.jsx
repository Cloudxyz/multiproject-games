import { useState } from "react";

export const Form = ({Words, word, setWord, characterCount, setCharacterCount, errors, setErrors}) => {
    const [buffer, setBuffer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(buffer === word){
            setWord(Words[Math.random() * Words.length | 0]);
            setCharacterCount(() => characterCount + word.length);
        }else{
            setErrors(() => errors + 1);
        }
        setBuffer("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{
                    borderRadius: '8px',
                    padding: '8px 20px',
                    backgroundColor: '#fff',
                    border: '0',
                    color: '#000',
                    fontSize: '24px',
                }}
                type="text"
                autoFocus
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
            />
        </form>
    )
}
