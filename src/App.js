import React, { Component } from "react";
import Congrats from "./components/congrats/congrats";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jotto</h1>
          <Congrats />
        </header>
      </div>
    );
  }
}

export default App;
