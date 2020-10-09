import React from "react";
import useWindowDimensions from "../useWindowDimensions";

function Main() {
  const { height, width } = useWindowDimensions();

  let fasize;
  if (width <= 500) {
    fasize = "fa-3x";
  } else {
    fasize = "fa-4x";
  }
  return (
    <section className="title">
      <h1>Michael Perez</h1>
      <h3>Full Stack Web Dev</h3>
      <div className="icons">
        <a href="https://github.com/Perezented">
          <i className={`fab fa-github ${fasize}`}></i>
        </a>
        <a href="https://www.linkedin.com/in/perezenting-michael/">
          <i className={`fab fa-linkedin-in ${fasize}`}></i>
        </a>
      </div>{" "}
    </section>
  );
}

export default Main;
