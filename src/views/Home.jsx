import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chair from "../assets/chair.png";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleInputSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleClean = () => {
    setSearch("");
  };

  const handleSearchClick = () => {
    navigate(`/results/${search.trim()}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5">
        <img
          src={Chair}
          alt="Movie Chairs"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className="text-4xl font-bold font-lato">Busca tu Pelicula...</h2>
        <input
          className="bg-special-gray font-lato w-full my-3 h-8 p-1 focus:outline-none focus:ring-2 
          focus:ring-special-gray-600 rounded"
          value={search}
          onChange={handleInputSearch}
        />
        <div className="flex w-full justify-between">
          <button
            className="bg-special-red hover:bg-special-red-800 text-white font-lato w-full shadow-lg 
              h-9"
            style={{ width: "48%" }}
            onClick={handleSearchClick}
          >
            Buscar
          </button>
          <button
            className="bg-special-red hover:bg-special-red-800 text-white font-lato w-full shadow-lg 
              h-9"
            style={{ width: "48%" }}
            onClick={handleClean}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
