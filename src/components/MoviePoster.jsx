import React from "react";

const MoviePoster = ({ url }) => {
  return (
    <div className="w-1/3 flex justify-center">
      <img src={url} alt="Poster" className="w-80" />
    </div>
  );
};

export default MoviePoster;
