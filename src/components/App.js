import React from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import Result from "./Result";
import Choices from "./Choices";
import Button from "./Button";

class App extends React.Component {
  state = { userScore: 0, compScore: 0, result: "Make your move!" };

  resetScore = () => {
    this.setState({ userScore: 0, compScore: 0, result: "Make your move!" });
  };

  game = userChoice => {
    const compChoice = (() => {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber];
    })();

    switch (userChoice + compChoice) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        this.setState(prevState => {
          return {
            userScore: prevState.userScore + 1,
            result: `Computer picked ${compChoice}, You Win!`
          };
        });
        break;
      case "RockPaper":
      case "PaperScissors":
      case "ScissorsRock":
        this.setState(prevState => {
          return {
            compScore: prevState.compScore + 1,
            result: `Computer picked ${compChoice}, You Lose!`
          };
        });
        break;
      default:
        this.setState({ result: `Computer picked ${compChoice}, It's a Tie!` });
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="header">Rock Paper Scissors</h1>
        <ScoreBoard
          userScore={this.state.userScore}
          compScore={this.state.compScore}
        />
        <Choices game={this.game} />
        <Result result={this.state.result} />
        <Button name={"Reset Score"} handleClick={this.resetScore} />
      </div>
    );
  }
}

export default App;
