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
    const morseCodeArray = [];
    for (let char of text.toUpperCase()) {
        if (!morseCodeMap[char]) {
            throw new Error(`Invalid character: ${char}`);
        }
        morseCodeArray.push(morseCodeMap[char]);
    }
    return morseCodeArray.join(' ');
}

function translateMorseToText(morse) {
    const morseCodes = morse.trim().split(' ');
    const textArray = [];
    for (let code of morseCodes) {
        if (!morseToTextMap[code] && code !== '') {
            throw new Error(`Invalid Morse code: ${code}`);
        }
        textArray.push(morseToTextMap[code]);
    }
    return textArray.join('');
}


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
