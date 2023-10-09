import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6523a229ea560a22a4e894dd.mockapi.io/',
  }),
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
  }),
});

export const { useGetCarsByPageQuery } = api;
