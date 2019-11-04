import axios from 'axios';

export const detectBrowserLocation = async () => {
    const geo = await axios.get('https://freegeoip.app/json/');
    return geo.data.country;
}

export const getDefaultLocationCurrency = async () => {
    const location = await detectBrowserLocation();
    if (location === 'US' || location === 'CA') return 'cad';
    return 'eur'
}