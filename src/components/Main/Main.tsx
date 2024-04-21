import { Container } from "./styles";

import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";

export function Main() {
  return (
    <Container>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </Container>
  );
}
