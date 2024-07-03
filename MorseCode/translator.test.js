const { translateTextToMorse, translateMorseToText } = require('./translator');

test('translates text to Morse code', () => {
    expect(translateTextToMorse('hello')).toBe('.... . .-.. .-.. ---');
    expect(translateTextToMorse('SOS')).toBe('... --- ...');
});

test('translates Morse code to text', () => {
    expect(translateMorseToText('.... . .-.. .-.. ---')).toBe('HELLO');
    expect(translateMorseToText('... --- ...')).toBe('SOS');
});
