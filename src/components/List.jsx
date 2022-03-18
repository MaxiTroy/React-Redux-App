import React from "react";

const List = ({ data }) => {
  return data?.map((item) => (
    <div
      key={item.imdbID}
      className="flex flex-row w-full mt-16"
      style={{ minWidth: 650 }}
    >
      <div className="w-1/5">
        <img src={item?.Poster} alt={item.Title} className="w-32" />
      </div>
      <div className="w-4/5 flex flex-col items-start py-2 px-3">
        <p className="font-lato text-3xl">{item.Title}</p>
        <div className="flex h-full items-end">
          <button
            className="border-2 border-special-red rounded-md w-48 h-10 
              text-xl text-special-red hover:bg-special-red hover:text-white"
          >
            Ver Mas
          </button>
        </div>
      </div>
    </div>
  ));
};

export default List;
