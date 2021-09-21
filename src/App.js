import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Todo from "./Components/ToDo";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Todo />
      </div>
    );
  }
}