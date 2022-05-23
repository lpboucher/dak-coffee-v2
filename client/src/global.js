const LOCAL_EXPOSED_ENDPOINT = 'https://5c77-2a02-a210-2504-5c80-b983-4f90-2477-2049.ngrok.io';

const BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://dakcoffeeroasters.com/api' : LOCAL_EXPOSED_ENDPOINT;

const INTERNAL_BUSINESS_EMAIL = 'info@dakcoffeeroasters.com';
const INTERNAL_WHOLESALE_EMAIL = 'wholesale@dakcoffeeroasters.com';

module.exports = {
  BACKEND_URL,
  INTERNAL_BUSINESS_EMAIL,
  INTERNAL_WHOLESALE_EMAIL,
};
