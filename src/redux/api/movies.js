import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
  "x-rapidapi-key": "021b8bb8fcmshbeeab97e385776cp154ed5jsnce3428b19e22",
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://imdb-data-searching.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query({
      query: (title) => ({
        url: `om?t=${title}`,
        method: "GET",
        headers: headers,
      }),
    }),
  }),
});

export const { useGetMoviesByTitleQuery } = moviesApi;
