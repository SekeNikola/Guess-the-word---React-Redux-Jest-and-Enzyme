import React, { Component } from "react";
import "./App.css";
import Congrats from "./components/congrats/congrats";
import GuessedWords from "./components/guessWord/guessedWords";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jotto</h1>
          <Congrats success={false} />
          <GuessedWords
            guessedWords={[
              {
                guessedWord: "train",
                letterMatchCount: 3
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
