const morseCodeMap = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
    "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--.."
};

const morseToTextMap = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
    "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
    "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z"
};

function translateTextToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
}

function translateMorseToText(morse) {
    return morse.split(' ').map(code => morseToTextMap[code] || '').join('');
}


const textToMorse = document.getElementById('textToMorse');
const morseToText = document.getElementById('morseToText');
const resultMorse = document.getElementById('resultMorse');
const resultText = document.getElementById('resultText');

textToMorse.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    resultMorse.textContent = translateTextToMorse(text);
});

morseToText.addEventListener('click', () => {
    const morseCode = document.getElementById('morseCode').value;
    resultText.textContent = translateMorseToText(morseCode);
});


module.exports = { translateTextToMorse, translateMorseToText };
