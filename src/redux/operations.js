import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65634c50ee04015769a705d6.mockapi.io/',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `car-rental?page=${page}&limit=8`,
    }),
    getAdverts: builder.query({
      query: () => '/car-rental',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = api;
