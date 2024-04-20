import React from "react";

import "./App.css";

import { GlobalStyles } from "./theme/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
