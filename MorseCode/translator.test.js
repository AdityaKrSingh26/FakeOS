import {
    translateMorseToText,
    translateTextToMorse
} from "./translator.js"

describe('translateTextToMorse', () => {
    it('translates text to Morse code correctly', () => {
        const input = 'HELLOwoRlD';
        const expectedOutput = '.... . .-.. .-.. --- .-- --- .-. .-.. -..';
        expect(translateTextToMorse(input)).toBe(expectedOutput);
    });

    it('handles empty string input', () => {
        const input = '';
        const expectedOutput = '';
        expect(translateTextToMorse(input)).toBe(expectedOutput);
    });

    it('handles text with spaces correctly', () => {
        const input = 'HELLO WORLD';
        const expectedOutput = '.... . .-.. .-.. ---  .-- --- .-. .-.. -..';
        expect(translateTextToMorse(input)).toBe(expectedOutput);
    });

    it('throws error for invalid characters', () => {
        const input = 'HElLO@WorLD'; // contains invalid character '@'
        expect(() => translateTextToMorse(input)).toThrow('Invalid character: @');
    });
});

describe('translateMorseToText', () => {
    it('translates Morse code to text correctly', () => {
        const input = '.... . .-.. .-.. --- .-- --- .-. .-.. -..';
        const expectedOutput = 'HELLOWORLD';
        expect(translateMorseToText(input)).toBe(expectedOutput);
    });

    it('translates Morse code to text correctly', () => {
        const input = '.... . .-.. .-.. ---  .-- --- .-. .-.. -..';
        const expectedOutput = 'HELLO WORLD';
        expect(translateMorseToText(input)).toBe(expectedOutput);
    });

    it('handles empty Morse code input', () => {
        const input = '';
        const expectedOutput = '';
        expect(translateMorseToText(input)).toBe(expectedOutput);
    });

    it('handles Morse code with extra spaces correctly', () => {
        const input = ' ....  . .-.. .-..  --- ';
        const expectedOutput = 'H ELL O';
        expect(translateMorseToText(input)).toBe(expectedOutput);
    });

    it('throws error for invalid Morse code', () => {
        const input = '.... . .-.. .-.. @@@@ ---   .-- --- .-. .-.. -..'; // contains invalid Morse code '@@@@'
        expect(() => translateMorseToText(input)).toThrow('Invalid Morse code: @@@@');
    });
});
