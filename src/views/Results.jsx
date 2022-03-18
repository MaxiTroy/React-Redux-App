import React from "react";
import Loading from "../components/Loading";
import { useGetMoviesByTitleQuery } from "../redux/api/movies";
import EmptyMovie from "../assets/empty-movie.png";
import { useParams } from "react-router-dom";
import List from "../components/List";

const Results = () => {
  const { title } = useParams();
  const { data, error, isLoading, isFetching } =
    useGetMoviesByTitleQuery(title);

  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {isLoading && isFetching ? <Loading /> : <List data={data?.Search} />}
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
