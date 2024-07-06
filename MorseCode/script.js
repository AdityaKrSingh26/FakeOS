import { translateTextToMorse, translateMorseToText } from './translator.js';

const textToMorse = document.getElementById('textToMorse');
const morseToText = document.getElementById('morseToText');
const resultMorse = document.getElementById('resultMorse');
const resultText = document.getElementById('resultText');

textToMorse.addEventListener('click', () => {
    try {
        const text = document.getElementById('text').value;
        resultMorse.textContent = translateTextToMorse(text);
    } catch (error) {
        alert(error.message);
    }
});

morseToText.addEventListener('click', () => {
    try {
        const morseCode = document.getElementById('morseCode').value;
        resultText.textContent = translateMorseToText(morseCode);
    } catch (error) {
        alert(error.message);
    }
});
