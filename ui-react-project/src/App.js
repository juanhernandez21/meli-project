import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./views/product";
import NotFound from "./views/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ProductView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}