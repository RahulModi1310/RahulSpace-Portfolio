import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import QuoteOfDay from "./Components/QuoteOfDay/QuoteOfDay";
import IntroSection from "./Components/IntroSection/IntroSection";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";

import "./App.css";
import CPStatusCard from "./Components/CPStatusCard/CPStatusCard";

function App() {
  return (
    <>
      <Navbar />
      <QuoteOfDay />
      <IntroSection />
      <CPStatusCard />
      <Projects />
      <Blogs />
    </>
  );
}

export default App;
