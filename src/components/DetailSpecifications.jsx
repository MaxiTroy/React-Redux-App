import React from "react";
import yellowStart from "../assets/yellow-star.png";

const DetailSpecifications = ({
  title,
  year,
  ratings,
  synopsis,
  generos,
  cast,
}) => {
  return (
    <>
      <h2 className="text-4xl font-bold my-1">{`${title}, ( ${year} )`}</h2>
      <div className="flex flex-row my-1 items-center">
        <span className="text-xl font-bold w-full">{`${ratings}`}</span>
        <img src={yellowStart} alt="" className="ml-1 w-6 h-6" />
      </div>
      <p className="text-left">{`${synopsis}`}</p>
      <div className="flex flex-row my-1">
        <span className="font-bold mr-1">Genero:</span>
        <span className="mr-1">{generos}</span>
      </div>
      <div className="felx flex-row my-1 flex-wrap">
        <span className="font-bold mr-1">Cast:</span>
        <span className="mr-1">{cast}</span>
      </div>
    </>
  );
};

export default DetailSpecifications;
