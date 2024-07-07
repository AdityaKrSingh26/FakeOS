const morseCodeMap = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
};

function getKeyByValue(object, value) {
    return Object
        .keys(object)
        .find(key => object[key] === value);
}

function translateTextToMorse(text) {
    if (text === '') return '';
    let finalMorse = '';
    for (let char of text.toUpperCase()) {
        if (char === ' ') {
            finalMorse += ' ';
            continue;
        }
        const morse = morseCodeMap[char];
        if (!morse) {
            throw new Error(`Invalid character: ${char}`);
        }
        finalMorse += morse + ' ';
    }
    return finalMorse.trim();
}

function translateMorseToText(morse) {
    if (morse === '') return '';
    const morseCodes = morse.trim().split(' ');
    const textArray = [];
    let spaceCount = 0;
    for (let code of morseCodes) {
        if (code === '') {
            spaceCount++;
            if (spaceCount === 1) {
                textArray.push(' ');
                spaceCount = 0;
            }
            continue;
        }
        const char = getKeyByValue(morseCodeMap, code);
        if (!char) {
            throw new Error(`Invalid Morse code: ${code}`);
        }
        textArray.push(char);
        spaceCount = 0;
    }
    return textArray.join('');
}

export {
    translateTextToMorse,
    translateMorseToText
};