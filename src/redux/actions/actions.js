import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://imdb-data-searching.p.rapidapi.com";
const Headers = {
  "x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
  "x-rapidapi-key": "021b8bb8fcmshbeeab97e385776cp154ed5jsnce3428b19e22",
};

export const startFetchMovieById = createAction("START_FETCH_MOVIE_BY_ID");
export const successFetchMovieById = createAction("SUCCESS_FETCH_MOVIE_BY_ID");
export const errorFetchMovieById = createAction("ERROR_FETCH_MOVIE_BY_ID");

export const fetchMovieById = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieById());
    //Hacer la llamada a la API
    const response = await fetch(`${BASE_URL}/om?i=${movieId}`, {
      method: "GET",
      headers: Headers,
    });
    const data = await response.json();
    console.log(data);
    dispatch(successFetchMovieById({ data }));
  } catch (error) {
    dispatch(errorFetchMovieById({ error }));
  }
};
