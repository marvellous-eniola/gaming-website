import React from "react";
import star from "../assets/star.svg";
import "../Styles/Gaming.css";

export default function Gaming() {
  return (
    <div>
      <div className="game_games_wrapper">
        <h4>GAMING SPANING</h4>
        <div className="game_star_wrapper">
          <img src={star} alt="" />
          <h4>ACTION - PACKED</h4>
        </div>{" "}
        <div className="game_star_wrapper">
          <img src={star} alt="" />
          <h4>MIND - BENDIND</h4>
        </div>{" "}
        <div className="game_star_wrapper">
          <img src={star} alt="" />
          <h4>COLLECTION - PACKED OG</h4>
        </div>
      </div>
    </div>
  );
}
