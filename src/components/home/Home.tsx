import { Fade, Slide } from "react-awesome-reveal";
import { Container } from "./styles";

import wave from "../../assets/images/home/wave.gif";
import linkedin from "../../assets/images/home/linkedin.svg";
import github from "../../assets/images/home/github.svg";
import gmail from "../../assets/images/home/gmail.svg";
import avatar from "../../assets/images/home/avatar.svg";

export function Home() {
  return (
    <Container id="home">
      <div className="home-text">
        <p>
          Hello <img src={wave} alt="Wave" width="20px" />, I'm
        </p>
        <Fade>
          <h1>Sian Lennon</h1>
          <h3>Software Engineer</h3>
          <p className="small-resume">4 Years of Experience</p>
          <h4>Connect With Me!</h4>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/sian-lennon-64366b173/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/siananigans"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="mailto: sianlennon109@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="Email" />
            </a>
          </div>
        </Fade>
      </div>
      <div className="home-image">
        <Slide direction="right">
          <img src={avatar} alt="Avatar" />
        </Slide>
      </div>
    </Container>
  );
}
