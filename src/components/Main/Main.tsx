import { Container } from "./styles";

import { Home } from "../home/Home";
import { Projects } from "../Projects/Projects";

export function Main() {
  return (
    <Container>
      <Home></Home>
      <Projects></Projects>
    </Container>
  );
}
