import React, { useEffect } from "react";
import Header from "./components/layout/Header";

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
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="App backdrop-blur-[96px] min-h-[100vh]">
      <Header />
    </div>
  );
}

export default App;
