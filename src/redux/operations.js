import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6523a229ea560a22a4e894dd.mockapi.io/',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
    getAdvertById: builder.query({
      query: id => `/advert/${id}`,
      providesTags: ['Advert'],
    }),
    updateFavoriteAdvertById: builder.mutation({
      query: fields => ({
        url: `/advert/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Advert'],
    }),
  }),
});

export const {
  useGetCarsByPageQuery,
  useGetAdvertsQuery,
  useGetAdvertByIdQuery,
  useUpdateFavoriteAdvertByIdMutation,
} = api;
