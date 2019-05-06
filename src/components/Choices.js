import React from "react";
import "./Choices.css";
import Rock from "../assets/images/Rock.png";
import Paper from "../assets/images/Paper.png";
import Scissors from "../assets/images/Scissors.png";

const Choices = props => {
  return (
    <div className="choices">
      <div onClick={() => props.game("Rock")} className="choice">
        <img src={Rock} alt="Rock" />
      </div>
      <div onClick={() => props.game("Paper")} className="choice">
        <img src={Paper} alt="Paper" />
      </div>
      <div onClick={() => props.game("Scissors")} className="choice">
        <img src={Scissors} alt="Scissors" />
      </div>
    </div>
  );
};

export default Choices;
