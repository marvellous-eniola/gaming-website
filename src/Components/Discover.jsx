import React from "react";
import "../Styles/Discover.css";
import star from "../assets/star.svg";
import discoverImg from "../assets/discoverImg.svg";
import Gaming from "./Gaming";

export default function Discover() {
  return (
    <div>
      <div className="discover_wrapper">
        <img className="discoverImg" src={discoverImg} alt="" />
        <div className="discover_text_wrapper">
          <h2>
            DISCOVER THE <span className="virtual">VIRTUAL </span> REALITY
            GAMING
          </h2>
          <p>
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            to convey excitement, adventure, and the immersive nature of gaming.
          </p>
          <div className="discover_button_wrapper">
            <button className="discover_play_now">PLAY NOW</button>
          </div>
        </div>
      </div>
      <div className="discover_games_wrapper">
        <Gaming />
      </div>
    </div>
  );
}
