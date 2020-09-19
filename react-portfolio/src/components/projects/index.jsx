import React from "react";
import styled from "styled-components";

const Square = styled.div`
  max-width: 100%;
  height: auto;
  padding-bottom: 10%;
  background-color: rgba(178, 173, 173, 0.217);
`;
const SourceButtons = styled.div`
  font-size: 2rem;
  margin: 3% auto 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 50%;
`;
const SourceButton = styled.button`
  width: 90%;
  height: 2rem;
`;

const ProjectTiles = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3.3%;
`;

const ProjectParagraphs = styled.p`
  width: 80%;
  margin: 1% auto 3%;
`;

export function Projects() {
  return (
    <section class="projects" id="project">
      <div class="unskewleft">
        <h2>Projects</h2>
        <ProjectTiles>
          <Square>
            <h4>Restaurant Menu</h4>
            <h5>React.js & Node.js/Express</h5>
            <ProjectParagraphs>
              Implemented both the front end, using React.js, and back end,
              using Node.js/Express along side with PostgreSQL for this full
              stack web application.
            </ProjectParagraphs>
            <img src="/img/CoMakeSite.gif" alt="Information sentence here" />
            <SourceButtons>
              {" "}
              <SourceButton>View Source Code</SourceButton>
              <SourceButton>Visit Site</SourceButton>
            </SourceButtons>{" "}
          </Square>
          <Square>
            <h4>Dev Desk Queue</h4>
            <ProjectParagraphs>
              This project was done over the course of a week. As of April 2020,
              it is only a demonstration of front end coding. Main languages are
              HTML and CSS, with LESS as a pre-processor. Med Cabinet is an app
              to assist new cannabis users, as well as experienced users, in
              helps of keeping people off of pharmaceuticals, plus find their
              right ailment.
            </ProjectParagraphs>
            <img src="/img/MedCabinet.gif" alt="Information sentence here" />
            <SourceButtons>
              <SourceButton>View Source Code</SourceButton>
              <SourceButton>Visit Site</SourceButton>
            </SourceButtons>{" "}
          </Square>
          <Square>
            <h4>Conway's Game of Life</h4>
            <h5>React.js</h5>
            <ProjectParagraphs>
              This project was done over the course of a week. As of April 2020,
              it is only a demonstration of front end coding. Main languages are
              HTML and CSS, with LESS as a pre-processor. Med Cabinet is an app
              to assist new cannabis users, as well as experienced users, in
              helps of keeping people off of pharmaceuticals, plus find their
              right ailment.
            </ProjectParagraphs>
            <img src="/img/MedCabinet.gif" alt="Information sentence here" />
            <SourceButtons>
              <SourceButton>View Source Code</SourceButton>
              <SourceButton>Visit Site</SourceButton>
            </SourceButtons>{" "}
          </Square>
        </ProjectTiles>
      </div>
    </section>
  );
}
