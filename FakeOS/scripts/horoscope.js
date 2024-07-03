document.querySelector('.btn.convert').addEventListener('click', fetchHoroscope);
document.getElementById('.finalValue').innerText = "hello world";
async function fetchHoroscope() {
    const zodiacSelect = document.getElementById('zodiac');
    const zodiacSign = zodiacSelect.value;
    console.log('Selected zodiac sign:', zodiacSign);
    if (!zodiacSign) {
        alert('Please select a zodiac sign.');
        return;
    }

    const url = `https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${zodiacSign}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '725e559e1bmshff55be141680302p1f59dajsn5fbbd7c6ab23',
            'x-rapidapi-host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
        }
    };

    try {
        console.log('Fetching horoscope...');
        const response = await fetch(url, options);
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Horoscope result:', result.prediction);
        document.getElementById('finalAmount').style.display = "block"; // Ensure this matches the actual API response field
        document.getElementById('finalValue').innerText = result.prediction; // Ensure this matches the actual API response field
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        document.getElementById('finalValue').innerText = 'Failed to fetch horoscope';
    }
}
