import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

export function Header() {
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
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
        <HashLink smooth to="#home" className="navlogo">
          Home
        </HashLink>
        <HashLink smooth to="#about" className="navlogo">
          About
        </HashLink>
        <HashLink smooth to="#projects" className="navlogo">
          Projects
        </HashLink>
        <HashLink smooth to="#resume" className="navlogo">
          Resume
        </HashLink>

        <label htmlFor="switch">Toggle</label>
      </Router>
    </Container>
  );
}
