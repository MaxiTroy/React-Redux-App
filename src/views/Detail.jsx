import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../redux/actions/actions";
import yellowStart from "../assets/yellow-star.png";

const generos = ["Comedia", "Aventura", "Accion"];

const Detail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { data, error, isFetching, isLoading, success } = useSelector(
    (state) => state.reducerMovies
  );

  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [dispatch, movieId]);

  return (
    <div className="flex flex-row px-16 h-screen items-center justify-center">
      <div className="w-1/3 flex justify-center">
        <img
          src="https://images.justwatch.com/poster/242030430/s718"
          alt=""
          className="w-80"
        />
      </div>
      <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
        <h2 className="text-4xl font-bold my-1">{`Titulo, ( Año )`}</h2>
        <div className="flex flex-row my-1 items-center">
          <span className="text-xl font-bold w-full">{`Ratings`}</span>
          <img src={yellowStart} alt="" className="ml-1 w-6 h-6" />
        </div>
        <p className="text-left">{`Aqui va todo el detalle de la pelicula cuando la llamada a la API se pueda usar de nuevo`}</p>
        <div className="flex flex-row my-1">
          <span className="font-bold mr-1">Genero:</span>
          {generos.map((item, index) => (
            <span key={index}>
              {`${item}${index !== generos.length - 1 ? "," : ""}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
