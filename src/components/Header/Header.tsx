import { useState } from "react";
import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import Resume from "../../assets/resume/SianLennonResume.pdf";

export function Header() {
  const [isActive, setActive] = useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }
  function closeMenu() {
    setActive(false);
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          Sian Lennon
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? "active" : ""}>
          <HashLink smooth to="#home" className="navlogo">
            Home
          </HashLink>
          <HashLink smooth to="#about" className="navlogo">
            About
          </HashLink>
          <HashLink smooth to="#projects" className="navlogo">
            Projects
          </HashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>
      </Router>
    </Container>
  );
}
