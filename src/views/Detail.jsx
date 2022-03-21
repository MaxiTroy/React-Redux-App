import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "../redux/actions/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  useEffect(() => {
    dispatch(fetchMovieById(movieId));
  }, [dispatch, movieId]);

  return (
    <div>
      <p>Detail</p>
    </div>
  );
};

export default Detail;
