import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
