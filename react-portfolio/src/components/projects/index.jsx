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
  height: 10%;
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
            <h4>Restaurant Menu</h4>
            <h5>React.js & Node.js/Express</h5>
            <ProjectParagraphs>
              This Restaurant Menu is an online menu where customers are able to
              select their orders and send them to a back end server, which will
              then send them back to front end to have a restaurant be able to
              see the incoming orders. <br />• Solely responsible for both front
              end and back end. <br />• Worked independently on free time to get
              the the back end server working, as well as get a gui setup for
              anyone looking to order. <br />• Used Node.js to send both the
              menu data and categories to the front end and have the front end
              send JSON data back to the node server in a form of a customer
              order{" "}
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
              Quick Student Login: test@email.com <br />
              Quick Student Password: encrypted <br />
              Quick Helper Login: testt@email.com --( 2 t's in the testt) <br />{" "}
              Quick Helper Password: encrypted
              <br />• Students are able to make an account and put in tickets
              for anything that goes wrong as well as be able to edit or delete
              their own post. <br />• The whole list of tickets put in are able
              to be seen by everyone so students do not put in tickets already
              called in by other students. <br />
              • Students are able to comment on tickets put in. <br />
              • Helpers have all the same abilities that students have and are
              able to maintain tickets by addressing them as 'in progress',
              'returned to queue', or 'completed'. <br />• A helper is also able
              to put in comments about a specific ticket to let other helpers
              know what has happened with the ticket already.{" "}
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
          <Square>
            <h4>Conway's Game of Life</h4>
            <h5>React.js</h5>
            <ProjectParagraphs>
              Worked with react.js to develop a web app of a remake of a classic
              zero player game that is accessable to those on mobile, tablet,
              and desktop. <br />• Live cells will remain alive if there are 2
              or 3 neighborly live cells around. Neighborly being any cell
              around the specified cell (Left, right, up, down, and diagonals.{" "}
              <br />• If a dead cell has exactly 3 neighbors, the dead cell
              comes back to life. <br />• All other cells remain dead, walls in
              this version are to be claimed as dead cells. Controls <br />•
              Play/pause controls along with clear and speed buttons. • There
              are some clickable templates that have a picture representing what
              it will display. <br />• The grid is clickable if the game is
              paused. <br />• Lastly, grid resizing buttons, restricted to your
              screen size.
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
          </Square>
        </ProjectTiles>
      </div>
    </section>
  );
}
