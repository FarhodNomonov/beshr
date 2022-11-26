import React from "react";
import { Routes, Route } from "react-router-dom";
import { Rout } from "./Routes";
export default function RootRoutes() {
  return (
    <Routes>
      {Rout.map((data) => {
        return (
          <Route key={data.path} path={data.path} element={data.element} />
        );
      })}
    </Routes>
  );
}
