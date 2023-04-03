import { createClient } from 'microcms-js-sdk';

const key = process.env.API_KEY;

export const client = createClient({
  serviceDomain: "1j4wvrt6af", 
  apiKey: key,
});