import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./views/product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}