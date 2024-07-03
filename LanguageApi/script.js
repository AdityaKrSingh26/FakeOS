document.getElementById('submitBtn').addEventListener('click', async () => {
    const language = document.getElementById('inputText').value;
    const loading = document.querySelector('.loading');
    const cardWrapper = document.querySelector('.cardWrapper');
    cardWrapper.innerHTML = '';
    loading.style.display = 'block';

    try {
        const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
        const countries = await response.json();
        console.log(countries);
        loading.style.display = 'none';

        if (countries.length > 0) {
            countries.slice(0, 10).forEach(country => {
                const card = document.createElement('div');
                card.classList.add('card');

                const flag = country.flags ? country.flags.png : '';
                const name = country.name.common;
                const capital = country.capital ? country.capital[0] : 'N/A';
                const region = country.region;
                const population = country.population.toLocaleString();

                card.innerHTML = `
                    <div class="card-img">
                        <img src="${flag}" alt="Flag of ${name}">
                    </div>
                    <div class="card-info">
                        <p class="text-title">${name}</p>
                        <p class="text-body">Capital: ${capital}</p>
                        <p class="text-body">Region: ${region}</p>
                        <p class="text-body">Population: ${population}</p>
                    </div>
                `;

                cardWrapper.appendChild(card);
            });

        } else {
            cardWrapper.innerHTML = '<p>No countries found for the specified language.</p>';
        }
    } catch (error) {
        loading.style.display = 'none';
        cardWrapper.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        console.error('Error fetching data:', error);
    }
});
