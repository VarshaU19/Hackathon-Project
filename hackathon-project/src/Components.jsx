import {useEffect, useState} from 'react';
import Words from './assets/words.json';
import './App.css';

export function WordGenerator() {
    const [CurrentWord, SetCurrentWord] = useState("");


    const GenerateWord = () => {
        const randomIndex = Words[Math.floor(Math.random() * Words.length)];
        return randomIndex;
    };

    return (
        <div>
            <h1 id="generatorTitle">Random Word Generator</h1>
            <button onClick={() => SetCurrentWord(GenerateWord())}> Get a Word </button>
            <p className="ResultWord">{CurrentWord}</p>
        </div>
    );
}
export default WordGenerator