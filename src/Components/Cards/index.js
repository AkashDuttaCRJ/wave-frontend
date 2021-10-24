import React from "react";
import "./Cards.css";
import play from "../../Assets/play.svg";
import { BsPlayFill } from "react-icons/bs";

const Cards = () => {
  let currDate = new Date();
  currDate = currDate.getHours();

  let greeting = "";
  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return (
    <div>
      <div className="container">
        <h1>{greeting}</h1>
        <h2>Trending</h2>
        <h1></h1>
        <div className="cards">
          <div className="card">
            <div className="imgBox">
              <BsPlayFill />
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
