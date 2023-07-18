import React from "react";
import "../Styles/Welcome.css";
export default function Welcome() {
  return (
    <div>
      <div className="welcome_wrapper">
        <div className="welcome_text">
          <h2 className="welcome_text">WELCOME TO THE TOP</h2>
        </div>
        <div className="welcome_button_wrapper">
          <button className="welcome_buy_now">NEWEST GAMES</button>
          <button className="welcome_play_now">LATEST GAMES</button>
          <button className="welcome_play_now">FIGHT GAMES</button>
          <button className="welcome_play_now">SPORT GAMES</button>
        </div>
      </div>
    </div>
  );
}
