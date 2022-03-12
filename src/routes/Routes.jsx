import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../views/Detail";
import Home from "../views/Home";
import Results from "../views/Results";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:title" element={<Results />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
