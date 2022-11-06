const LOCAL_EXPOSED_ENDPOINT = 'https://3eb9-2a02-a210-2540-ea00-b15f-86b0-5096-fa2d.ngrok.io';

const BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://dakcoffeeroasters.com/api' : LOCAL_EXPOSED_ENDPOINT;

const INTERNAL_EMAILS = {
    general: 'info@dakcoffeeroasters.com',
    wholesale: 'wholesale@dakcoffeeroasters.com',
    sales: 'cristina@dakcoffeeroasters.com',
}

module.exports = {
  BACKEND_URL,
  INTERNAL_EMAILS,
};
