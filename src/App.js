import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./component/ProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
