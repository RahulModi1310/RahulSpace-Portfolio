import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import IntroSection from "./Components/IntroSection/IntroSection";
import Projects from "./Components/Projects/Projects";

import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import QuoteOfDay from "./Components/QuoteOfDay/QuoteOfDay";

function App() {
  return (
    <>
      <Navbar />
      <QuoteOfDay />
      <IntroSection />
      <Projects />
      <Blogs />
    </>
  );
}

export default App;
