import React from "react";
import "../Styles/Navbar.css";
import Sidebar from "../Components/Sidebar";
import logo from "../assets/logo.svg";
import bag_icon from "../assets/bagIcon.svg";

export default function Navbar() {
  return (
    <div>
      <div className="nav_links_flex">
        <div className="nav_logo_wrapper">
          <img src={logo} alt="" />
          <h2>board</h2>
        </div>
        <div className="nav_links">
          <h4>PRODUCT</h4>
          <p>APP & GAMES</p>
          <p>FEATURES</p>
          <p>SUPPORT</p>
          <p>ABOUT</p>
        </div>
        <div className="bag_icon">
          <img src={bag_icon} alt="" />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
