import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        className="w-20 h-20 border-4 border-solid border-special-red-800 rounded-full animate-spin"
        style={{ borderTopColor: "transparent" }}
      ></div>
      <p className="mt-3">Buscando Peliculas...</p>
    </div>
  );
};

export default Loading;
