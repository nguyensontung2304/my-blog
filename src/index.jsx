import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogDetail from "./pages/blogDetail/BlogDetail";
import SearchCode from "./pages/searchCode/SearchCode";
import Layout from "./layouts/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetail />} />
        <Route path="/search" element={<SearchCode />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
