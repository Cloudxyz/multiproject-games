import useSound from 'use-sound';

import flipSound from '../../sounds/flip.mp3';

export const ItemImage = ({setSelected, selected, guessed, image}) => {
    const [,url] = image.split('|');
    const [playSound] = useSound(flipSound);
    return (
        <li
        onClick={() => {
            playSound();
            selected.length < 2 &&
            setSelected((selected) => selected.concat(image));
        }}
        style={{
            padding: '10px',
            border: '1px solid #666',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: selected.includes(image) ? '#000' : '#242424',
            textAlign: 'center',
            }}>
            {
            selected.includes(image) || guessed.includes(image) ? (
                <img class="animate__animated animate__flip animate__faster" src={url} alt="icon" />
            ) : (
                <img src='https://icongr.am/clarity/copy.svg?size=128&color=707070' alt="icon" />
            )
            }
        </li>
    )
}
