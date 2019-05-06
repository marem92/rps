import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => {
  return (
    <div className="score-board">
      <div className="user-label badge">you</div>
      <div className="comp-label badge">comp</div>
      <span className="user-score">{props.userScore}</span>:
      <span className="comp-score">{props.compScore}</span>
    </div>
  );
};

export default ScoreBoard;
