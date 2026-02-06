import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyChild from "./pages/MyChild";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nested1 from "./pages/Nested1";
import Nested2 from "./pages/Nested2";

const App = () => {
  return (
    <Routes>
      <Route path="/layout" element={<Layout />}>
        <Route path="nested1" element={<Nested1 />} />
        <Route path="nested2" element={<Nested2 />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
