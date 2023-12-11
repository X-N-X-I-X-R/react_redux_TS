// CurrencyAp// CurrencyApi.tsx
import axios from 'axios';

async function fetchCurrencyData(fromCurrency: string, toCurrencies: string[]) {
    const results: Record<string, number | null> = {};

    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        headers: {
            'X-RapidAPI-Key': '9d9df909b3msh3c86b3d1c9eba50p179804jsn6f0ab4294782',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        },
        params: {}
    };

    for (const toCurrency of toCurrencies) {
        options.params = {
            from: fromCurrency,
            to: toCurrency,
            q: 1
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            results[toCurrency] = response.data || null; 
        } catch (error) {
            console.error(error);
            results[toCurrency] = null;
        }
    }

    return results;
}

export default fetchCurrencyData;