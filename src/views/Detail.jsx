import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../redux/actions/actions";
import Loading from "../components/Loading";
import MoviePoster from "../components/MoviePoster";
import DetailSpecifications from "../components/DetailSpecifications";

const generos = ["Comedia", "Aventura", "Accion"];

const Detail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { data, error, isFetching, isLoading, success } = useSelector(
    (state) => state.reducerMovies
  );

  let detail =
    "Aqui va todo el detalle de la pelicula cuando la llamada a la API se pueda usar de nuevo";

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [dispatch, movieId]);

  const renderContent = () => {
    if (isFetching || isLoading) {
      return <Loading message="Obteniendo informacion de la pelicula..." />;
    } else if (error) {
      return <h3>Ha ocurrido un error en la busqueda de la pelicula</h3>;
    }
    return (
      <>
        <MoviePoster url="https://images.justwatch.com/poster/242030430/s718" />
        <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
          <DetailSpecifications
            title="Titulo"
            year="Año"
            ratings={5}
            synopsis={detail}
            generos={generos}
            cast={generos}
          />
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-row px-16 h-screen items-center justify-center">
      {renderContent()}
    </div>
  );
};

export default Detail;
