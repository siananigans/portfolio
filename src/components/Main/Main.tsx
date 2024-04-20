import { Container } from "./styles";

import { About } from "../About/About";
import { Projects } from "../Projects/Projects";

export function Main() {
  return (
    <Container>
      <About></About>
      <Projects></Projects>
    </Container>
  );
}
