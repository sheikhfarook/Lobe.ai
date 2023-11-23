import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarr from "../NavBar/NavBarr";
import Over from "../over/over";

const Router = () => {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path="/" element={<Over />} />
      </Routes>
    </div>
  );
};

export default Router;
