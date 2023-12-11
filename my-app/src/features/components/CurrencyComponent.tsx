// CurrencyComponent.tsx
import React, { useEffect, useState } from 'react';
import fetchCurrencyData from './CurrencyApi';

type CurrencyData = Record<string, number | null>;

function CurrencyComponent() {
    const [currencyData, setCurrencyData] = useState<CurrencyData>({});

    useEffect(() => {
        fetchCurrencyData('USD', ['ILS', 'EUR', 'BTC', 'ETH'])
            .then(data => {
                setCurrencyData(data);
            })
            .catch(error => {
                console.error('Failed to fetch currency data:', error);
            });
    }, []);

    // Render the currency data
    return (
        <div className="currency-container">
        {Object.entries(currencyData).map(([currency, value]) => (
            <p key={currency} className="currency-ticker">{`1 USD = ${Number(value).toFixed(10)} ${currency}`}</p>
        ))}
        </div>
    );
}

export default CurrencyComponent;