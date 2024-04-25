import { Fade, Slide } from "react-awesome-reveal";

import { Container } from "./styles";
import postgresql from "../../assets/about/postgresql.svg";
import aws from "../../assets/about/aws.svg";
import googleCloud from "../../assets/about/googleCloud.svg";
import kubernetes from "../../assets/about/kubernetes.svg";
import docker from "../../assets/about/docker.svg";
import python from "../../assets/about/python.svg";
import java from "../../assets/about/java.svg";
import typescript from "../../assets/about/typescript.svg";
import django from "../../assets/about/django.svg";
import spring from "../../assets/about/spring.svg";
import react from "../../assets/about/react.svg";
import fastapi from "../../assets/about/fastapi.svg";
import SianLennon from "../../assets/about/SianLennon.jpg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Slide direction="left">
          <h2>About me</h2>
        </Slide>
        <Slide direction="left" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Sian, a Software Engineer with a passion for creating
            backend and frontend software. With a skill set including Python,
            Java, JavaScript / Typescript, and React, I have the fullstack tools
            and techniques to develop applications from start to finish.
          </p>
        </Slide>
        <Slide
          direction="left"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            With over 4 years of working in the software industry, I have
            experience in both backend and frontend development. Typically, in
            the past, I oversaw the whole SDLC from requiremnt gathering and
            design to testing and monotoring. For more information on specific
            experience, please see my resume!
          </p>
        </Slide>
        <Slide direction="left" delay={0.3 * 1000}>
          <p>
            I am now eager for my next opertunity and am open to Software
            Engineering roles in Vancouver, Canada.
          </p>
        </Slide>
        <Slide direction="left" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </Slide>
        <div className="hard-skills">
          <div className="hability">
            <Fade direction="up" delay={0.1 * 1000}>
              <img src={postgresql} alt="Postgres" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.12 * 1000}>
              <img src={aws} alt="Amizon Web Services" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.13 * 1000}>
              <img src={googleCloud} alt="Google Cloud Platform" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.14 * 1000}>
              <img src={kubernetes} alt="kubernetes" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.15 * 1000}>
              <img src={docker} alt="Docker" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.16 * 1000}>
              <img src={python} alt="Python" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.17 * 1000}>
              <img src={java} alt="Java" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.18 * 1000}>
              <img src={typescript} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.19 * 1000}>
              <img src={django} alt="Django" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.2 * 1000}>
              <img src={spring} alt="Spring" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.21 * 1000}>
              <img src={react} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" delay={0.22 * 1000}>
              <img src={fastapi} alt="FastApi" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-image">
        <Fade direction="right" delay={0.2 * 1000}>
          <img src={SianLennon} alt="Sian Lennon" />
        </Fade>
      </div>
    </Container>
  );
}
