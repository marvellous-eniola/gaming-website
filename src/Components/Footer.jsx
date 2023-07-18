import React from "react";
import Gaming from "./Gaming";
import "../Styles/Footer.css";
import logo from "../assets/logo.svg";

import BackgroungImg from "../assets/footerBG.svg";
export default function Footer() {
  return (
    <div>
      <div className="footer_game_wrapper">
        <Gaming />
      </div>
      <div
        className="footer_wrapper"
        style={{
          backgroundImage: `url(${BackgroungImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          // height: "80vh",
        }}
      >
        <div className="footer_link_wrapper">
          {/*  */}
          <div className="footer_logo_text_wrapper">
            <div className="nav_logo_wrapper">
              <img src={logo} alt="" />
              <h2>board</h2>
            </div>
            <p className="board_parag">
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals .
            </p>
          </div>
          {/*  */}
          <div className="company_wrapper links_wrapper">
            <h2>COMPANY</h2>
            <div className="company_links li_wrapper">
              <li>Products</li>
              <li>Apps & Games</li>
              <li>Features</li>
            </div>
          </div>
          {/*  */}
          <div className="help_wrapper  links_wrapper">
            <h2>HELP</h2>
            <div className="help_links li_wrapper">
              <li>Support</li>
              <li>About</li>
              <li>Contact Us</li>
            </div>
          </div>
          {/*  */}
          <div className="resources_wrapper links_wrapper">
            <h2>RESOURES</h2>
            <div className="resources_links li_wrapper">
              <li>Youtube Playlist</li>
              <li>How To - Blog</li>
              <li>Terms & Conditions</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
