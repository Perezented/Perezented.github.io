import React from "react";

function Main() {
  return (
    <section className="title">
      <h1>Michael Perez</h1>
      <h3>Full Stack Web Dev</h3>
      <div className="icons">
        <p>
          <i
            className="fab fa-github fa-3x"
            onclick="window.location.href='https://github.com/Perezented'"
          ></i>
        </p>
        <p>
          <i
            className="fab fa-linkedin-in fa-3x"
            onclick="window.location.href='https://www.linkedin.com/in/perezenting-michael/'"
          ></i>
        </p>
      </div>{" "}
    </section>
  );
}

export default Main;
