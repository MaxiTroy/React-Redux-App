import {
  startFetchMovieById,
  successFetchMovieById,
  errorFetchMovieById,
} from "../actions/actions";

const initialState = {
  isLoading: true,
  isFetching: false,
  data: {},
  success: null,
  error: null,
};

const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case startFetchMovieById.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: true,
      };
    case successFetchMovieById.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        data: action.payload.data,
        success: true,
        error: null,
      };
    case errorFetchMovieById.toString():
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        data: {},
        success: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducerMovies;
