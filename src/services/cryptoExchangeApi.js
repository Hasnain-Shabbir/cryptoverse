import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiKey = process.env.REACT_APP_RAPID_API_KEY;

const cryptoExchangeHeaders = {
  'X-RapidAPI-Key': cryptoApiKey,
  'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com',
};

const baseUrl = 'https://coinpaprika1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoExchangeHeaders,
});

export const cyptoExchangeApi = createApi({
  reducerPath: 'cryptoExchangeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cyptoExchangeApi;
