import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { Projects } from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  const [btt, setBtt] = useState("not_visible");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight) {
        setBtt("back_to_top");
      } else setBtt("not_visible");
    });
  }, []);

  return (
    <div className="App">
      {" "}
      <button
        className={btt}
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        Back To Top
      </button>
      <section class="topHeading">
        <Header />
        <Main />{" "}
      </section>
      <Projects />
      <About />
      <Contact />{" "}
    </div>
  );
}

export default App;
