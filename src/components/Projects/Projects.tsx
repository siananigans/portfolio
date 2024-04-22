import { AttentionSeeker } from "react-awesome-reveal";

import { Container } from "./styles";
import externalLink from "../../assets/projects/external-link.svg";

export function Projects() {
  return (
    <Container id="projects">
      <h2>My Personal Projects and Achievments</h2>
      <div className="projects">
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/siananigans/wordle-leaderboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Wordle Leaderboard</h3>
              <p>
                A Python & FastApi Application to gather Wordle results and
                Maintain a Leaderboard. This project leverages Googles public
                APIs to access and send emails.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>FastApi</li>
                <li>Google-api</li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/team-telnyx/demo-python-telnyx/tree/master/call-center-texml"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Call Center Solution</h3>
              <p>
                A Python & Aiohttp web appliaction built on Telnyx TeXML Apis.
                This backend server provides a way to dynamically and
                asynchronously control the flow of calls coming into your Telnyx
                numbers.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Aiohttp</li>
                <li></li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/siananigans/aiohttp-cookiecutter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Aiothttp CookieCutter</h3>
              <p>
                Template for Aiohttp applications that leverages the
                cookiecutter. This project pre-populates replicated parts of an
                application to save the developer time when starting a project.
                Additionally, I added hooks to automatically create a virtual
                environment when used.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Aiohttp</li>
                <li>CookieCutter</li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.youtube.com/watch?v=44K8AuVnaiw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Pycon Presentation</h3>
              <p>
                In 2022, I presented at Pycon in Italy about CookieCutters,
                their usage and benefits.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>CookieCutter</li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/siananigans/Question_extractor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Question Extractor</h3>
              <p>
                Django Backend server that hosts a trained Machine Learning
                model to analyze a given text & subsequently provide a list of
                questions based on the text. The server will also score any
                answers given in response the the questions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Django</li>
                <li>NLP</li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect="tada">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/siananigans/aircraft_factory"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Currency Convertor</h3>
              <p>
                Java and Spring application that provides APIs to convert any
                given amount of money to a given currency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>Spring</li>
              </ul>
            </footer>
          </div>
        </AttentionSeeker>
      </div>
    </Container>
  );
}
