import React from "react";

import "./App.css";

import { GlobalStyles } from "./theme/GlobalStyles";
import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Background></Background>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
