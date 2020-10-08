import React from "react";
import styled from "styled-components";
import conways from "../../imgs/gameOfLifeGif.gif";
import restaurant from "../../imgs/restGif.gif";
import devdesk from "../../imgs/devDeskGif.gif";
const Square = styled.div`
  max-width: 100%;
  height: auto;
  background-color: rgba(178, 173, 173, 0.217);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SourceButtons = styled.div`
  font-size: 2rem;
  margin: 5% auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 90%;
  row-gap: 20%;
`;
const SourceButton = styled.button`
  width: 90%;
  height: 2.5rem;
  margin: auto 0;
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
  text-align: left;
  line-height: 1.8rem;
`;

export function Projects() {
  return (
    <section class="projects" id="project">
      <div class="unskewleft">
        <h2>Projects</h2>
        <ProjectTiles>
          <Square>
            <img src={restaurant} alt="Information sentence here" />
            <h4>Restaurant Menu</h4>
            <h5>React.js & Node.js/Express</h5>
            <ProjectParagraphs>
              <p>
                This Restaurant Menu is an online menu where customers are able
                to select their orders and send them to a back end server, which
                will then send them back to front end to have a restaurant be
                able to see the incoming orders.
              </p>
              <br />
              <li>Solely responsible for both front end and back end.</li>
              <li>
                Worked independently on free time to get the the back end server
                working, as well as get a gui setup for anyone looking to order.
              </li>
              <li>
                Used Node.js to send both the menu data and categories to the
                front end and have the front end send JSON data back to the node
                server in a form of a customer order{" "}
              </li>
            </ProjectParagraphs>
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
            <img src={devdesk} alt="Information sentence here" />
            <h4>Dev Desk Queue</h4>
            <h5>React.js</h5>{" "}
            <ProjectParagraphs>
              Quick Student Login: test@email.com <br />
              Quick Student Password: encrypted <br />
              <br />
              Quick Helper Login: testt@email.com --( 2 t's in the testt) <br />{" "}
              Quick Helper Password: encrypted <br />
              <br />
              <p>
                A help desk ticket mock web app to assist students quicker with
                any school related issues or inquiries.
              </p>
              <li>
                Collaborated along side 4 other developers to deliver a web app
                online all within a week
              </li>
              <li>
                Used React.js to code and design the front-end along with
                connecting to the back-end database achieved through Axios
              </li>
              <li>
                Authentication is achieved by including protected routers and
                using JSON Web Tokens, resulting in different account types{" "}
              </li>
            </ProjectParagraphs>
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
          <Square>
            <img src={conways} alt="info ehre" />
            <h4>Conway's Game of Life</h4>
            <h5>React.js</h5>
            <ProjectParagraphs>
              <p>
                Worked with react.js to develop a web app of a remake of a
                classic zero player game that is accessable to those on mobile,
                tablet, and desktop.
              </p>
              <br />
              <li>
                Live cells will remain alive if there are 2 or 3 neighborly live
                cells around. Neighborly being any cell around the specified
                cell (Left, right, up, down, and diagonals.{" "}
              </li>
              <li>
                If a dead cell has exactly 3 neighbors, the dead cell comes back
                to life.
              </li>
              <li>
                All other cells remain dead, walls in this version are to be
                claimed as dead cells. Controls
              </li>
              <li>Play/pause controls along with clear and speed buttons.</li>
              <li>
                • There are some clickable templates that have a picture
                representing what it will display.
              </li>
              <li>The grid is clickable if the game is paused.</li>
              <li>
                Lastly, grid resizing buttons, restricted to your screen size.
              </li>
            </ProjectParagraphs>
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
          </Square>
        </ProjectTiles>
      </div>
    </section>
  );
}
