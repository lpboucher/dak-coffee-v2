const LOCAL_EXPOSED_ENDPOINT = 'https://83679cf8c9d6.ngrok.io';

const BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://dakcoffeeroasters.com/api' : LOCAL_EXPOSED_ENDPOINT;

module.exports = {
  BACKEND_URL
};
