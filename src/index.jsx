import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";

import Home from "./pages/Home/Home";
import BlogDetail from "./pages/blogDetail/BlogDetail";
import SearchCode from "./pages/searchCode/SearchCode";
import { Login } from "./pages/Home/Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/search" element={<SearchCode />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
);

reportWebVitals();
