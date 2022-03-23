import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../redux/api/movies";
import reducerMovies from "../redux/reducers/reducerMovies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    reducerMovies,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
