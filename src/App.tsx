import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Index";
import Header from "./components/layout/header/Index";

import "./App.css";

function App() {
  // set theme as system setting
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  return (
    <Router>
      <div className="App backdrop-blur-[96px] min-h-[100vh] text-special-black dark:text-white transition-all duration-500 overflow-hidden relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
