import { useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Create from "./Pages/Create";
import Blogs from "./Pages/Blogs";
import Comments from "./Pages/Comments";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Create />} path="/" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<Comments />} path="/comments" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;