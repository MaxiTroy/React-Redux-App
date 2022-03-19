import React from "react";
import Loading from "../components/Loading";
import { useGetMoviesByTitleQuery } from "../redux/api/movies";
import EmptyMovie from "../assets/empty-movie.png";
import { useParams } from "react-router-dom";
import List from "../components/List";

const Results = () => {
  const { title } = useParams();
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetMoviesByTitleQuery(title);

  //Utilizando la logica fuera del return
  const renderContent = () => {
    if (error) {
      return <h3>Ha ocurrido un herror en la busqueda de tu pelicula</h3>;
    } else if (isLoading || isFetching) {
      return <Loading />;
    } else if (isSuccess && data?.Search) {
      return <List data={data?.Search} />;
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {renderContent()}
      </div>
      <div className="w-2/5">
        <img
          src={EmptyMovie}
          alt="Sala Vacia"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Results;
