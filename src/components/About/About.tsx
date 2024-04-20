import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";

export function About() {
  return (
    <Container id="home">
      <div className="about-text">
        <p>Hello, I'm</p>
        <h1>Sian Lennon</h1>
        <h3>Software Engineer</h3>
        <p className="small-resume">4 Years of Experience</p>
      </div>
    </Container>
  );
}
