import {useState} from 'react';
import Words from './assets/words.json';
import { useNavigate } from 'react-router-dom';
import './App.css';

export function WordGenerator() {
    const [CurrentWord, setCurrentWord] = useState("");
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();


    const GenerateWord = () => {
        const randomIndex = Words[Math.floor(Math.random() * Words.length)];
        return randomIndex;
    };

    return (
        <div id="WordGeneratorBox">
            <h1 id="generatorTitle">Draw the Word!</h1>
            <button onClick={() => {setCurrentWord(GenerateWord()); setShowButton(true);}}> Get a Word! </button>
            <p className="ResultWord">{CurrentWord}</p>
                {showButton && (<button id="toCanvasButton" onClick={() => navigate('/canvas')}> Start Drawing!</button>)}
                {showButton && (<button className="NewWord" onClick={() => setCurrentWord(GenerateWord())}> New Word</button>)}
        </div>
    );
}
export default WordGenerator