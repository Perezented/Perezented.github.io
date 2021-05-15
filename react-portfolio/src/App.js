import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { Projects } from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import useWindowDimensions from "./components/useWindowDimensions";

function App() {
  const [btt, setBtt] = useState("not_visible");
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    window.addEventListener("load", () => {
      document.getElementById("project").classList.add("newTextAnimation");
      document.getElementById("about").classList.add("newTextAnimation");
      document.getElementById("contact").classList.add("newTextAnimation");
    });

    window.addEventListener("scroll", () => {
      if (
        document.getElementById("scrollShower").getBoundingClientRect().top <=
        window.innerHeight
      ) {
        setBtt("back_to_top");
      } else setBtt("not_visible");
    });
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      console.log(scroll);
      if (
        document.getElementById("project").getBoundingClientRect().top <
        window.innerHeight - 275
      ) {
        console.log("projects");
        document.getElementById("project").classList.add("appear");
        document.getElementById("project").classList.remove("newTextAnimation");
        document.querySelector(".scrollDown").style.display = "none";
      } else {
        document.getElementById("project").classList.remove("appear");
        document.getElementById("project").classList.add("newTextAnimation");
        document.querySelector(".scrollDown").style.display = "";
      }

      if (
        document.getElementById("about").getBoundingClientRect().top <
        window.innerHeight
      ) {
        console.log("about");
        document.getElementById("about").classList.add("appear");
        document.getElementById("about").classList.remove("newTextAnimation");
      } else {
        document.getElementById("about").classList.remove("appear");
        document.getElementById("about").classList.add("newTextAnimation");
      }

      if (
        document.getElementById("contact").getBoundingClientRect().top - 200 <
        window.innerHeight
      ) {
        console.log("contact");
        console.log(
          window.innerHeight,
          document.getElementById("contact").getBoundingClientRect().top
        );
        document.getElementById("contact").classList.add("appear");
        document.getElementById("contact").classList.remove("newTextAnimation");
      } else {
        document.getElementById("contact").classList.remove("appear");
        document.getElementById("contact").classList.add("newTextAnimation");
      }
    });
  }, []);

  // // when true, bottom is reached
  // const wrappedElement = document.getElementById("project");
  // function trackScrolling() {
  //   if (isBottom(wrappedElement)) {
  //     console.log("project bottom reached");
  //     document.removeEventListener("scroll", trackScrolling);
  //   }
  // }

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
      <section className="topHeading">
        <div
          style={{
            height: "110vh",
            overflow: "hidden",
            zIndex: "-5",
            position: "fixed",
            width: "100vw"
          }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-55,85 C149.99,150.00 145.49,24.02 550,134 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "rgb(98, 0, 289)" }}
            ></path>
          </svg>
        </div>
        <Header />
        <Main />{" "}
      </section>
      <p className="scrollDown">
        Scroll Down
        <br />
        👇👇👇
      </p>
      <Projects />
      <About />
      <Contact />{" "}
    </div>
  );
}

export default App;
