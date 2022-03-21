import React from "react";

const ListItem = ({ imdbID, Poster, Title, onClickListItem }) => {
  const handleClick = () => {
    onClickListItem(imdbID);
  };
  return (
    <div
      key={imdbID}
      className="flex flex-row w-full mt-16"
      style={{ minWidth: 650 }}
    >
      <div className="w-1/5">
        <img src={Poster} alt={Title} className="w-32" />
      </div>
      <div className="w-4/5 flex flex-col items-start py-2 px-3">
        <p className="font-lato text-3xl">{Title}</p>
        <div className="flex h-full items-end">
          <button
            className="border-2 border-special-red rounded-md w-48 h-10 
          text-xl text-special-red hover:bg-special-red hover:text-white"
            onClick={handleClick}
          >
            Ver Mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
