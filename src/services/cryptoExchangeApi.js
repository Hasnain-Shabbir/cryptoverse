import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangeHeaders = {
  'X-RapidAPI-Key': 'fe5aad1f00msh5b67d64354242c6p17088djsn274fa6c57bb4',
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
