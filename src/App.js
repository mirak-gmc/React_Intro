/**External Librarys imports *******/
import React from "react";

/*Local Files (components , functions ...) */
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

/***********Css Files*****************/
import "./App.css";
// import logo from "./logo.svg";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
