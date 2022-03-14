import React from "react";
import { useGetMoviesByTitleQuery } from "../redux/api/movies";
import EmptyMovie from "../assets/empty-movie.png";
import { useParams } from "react-router-dom";

const Results = () => {
  const { title } = useParams();
  const { data, error, isLoading } = useGetMoviesByTitleQuery(title);
  return (
    <div className="flex flex-row">
      <div className="w-3/5"></div>
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
