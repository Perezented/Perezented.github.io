import React from "react";
import styled from "styled-components";
import conways from "../../imgs/ConwaysGameOfLife.gif";
import restaurant from "../../imgs/Restaurant.gif";
import devdesk from "../../imgs/DevDesk.gif";
const Square = styled.div`
  max-width: 100%;
  height: auto;
  padding-bottom: 1%;
  background-color: rgba(178, 173, 173, 0.217);
`;
const SquareLast = styled.div`
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
  width: 90%;
`;
const SourceButton = styled.button`
  width: 90%;
  height: 2rem;
  margin-bottom: 3vh;
`;

const ProjectTiles = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1%;
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              iure, necessitatibus eum soluta non blanditiis aliquam voluptates
              culpa delectus quasi est enim? Hic, deserunt? Esse voluptate aut
              cumque fugiat dolore.
            </ProjectParagraphs>
            <img src={restaurant} alt="Information sentence here" />
            <SourceButtons>
              {" "}
              <SourceButton
                onClick={() => {
                  window.location.href =
                    "https://github.com/Perezented/react-menu";
                }}
              >
                View React.js Source Code
              </SourceButton>
              <SourceButton
                onClick={() => {
                  window.location.href = "https://react-menu.vercel.app/";
                }}
              >
                Visit Site
              </SourceButton>{" "}
              <SourceButton
                onClick={() => {
                  window.location.href = "https://github.com/Perezented/Menu";
                }}
              >
                View Node.js Source Code
              </SourceButton>
              <SourceButton
                onClick={() => {
                  window.location.href = "https://node-menu.herokuapp.com/menu";
                }}
              >
                Visit API
              </SourceButton>
            </SourceButtons>{" "}
          </Square>
          <Square>
            <h4>Dev Desk Queue</h4>
            <h5>React.js</h5>
            <ProjectParagraphs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quisquam velit deserunt ratione quod unde distinctio sint cumque,
              vel molestias ipsam eaque voluptatem tempora maxime nesciunt. Quas
              laudantium fuga dolores.
            </ProjectParagraphs>
            <img src={devdesk} alt="Information sentence here" />
            <SourceButtons>
              <SourceButton
                onClick={() => {
                  window.location.href =
                    "https://github.com/Build-Week-Dev-Queue-3/front-end";
                }}
              >
                View Source Code
              </SourceButton>
              <SourceButton
                onClick={() => {
                  window.location.href =
                    "https://devdeskapp.netlify.app/index.html";
                }}
              >
                Visit Site
              </SourceButton>
            </SourceButtons>{" "}
          </Square>
          <SquareLast>
            <h4>Conway's Game of Life</h4>
            <h5>React.js</h5>
            <ProjectParagraphs>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              iure, necessitatibus eum soluta non blanditiis aliquam voluptates
              culpa delectus quasi est enim? Hic, deserunt? Esse voluptate aut
              cumque fugiat dolore.
            </ProjectParagraphs>
            <img src={conways} alt="info ehre" />
            <SourceButtons>
              <SourceButton
                onClick={() => {
                  window.location.href =
                    "https://github.com/Perezented/ConwaysGameOfLife";
                }}
              >
                View Source Code
              </SourceButton>
              <SourceButton
                onClick={() => {
                  window.location.href =
                    "https://conways-game-of-life.perezented.vercel.app/";
                }}
              >
                Visit Site
              </SourceButton>
            </SourceButtons>{" "}
          </SquareLast>
        </ProjectTiles>
      </div>
    </section>
  );
}
