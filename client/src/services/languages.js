import axios from 'axios';

export const LANGUAGE_LIST = ["en", "fr", "nl"];

export const detectBrowserLocation = async () => {
  try {
    const geo = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_KEY}`);
    return geo.data.country_code2;
  } catch(err) {
    return 'NL'
  }
}

export const getDefaultLocationCurrency = async () => {
    const location = await detectBrowserLocation();
    if (location === 'US' || location === 'CA') return 'cad';
    return 'eur'
}
