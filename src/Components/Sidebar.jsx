import React, { useState } from "react";
import bag_icon from "../assets/bagIcon.svg";
import "../Styles/Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function SideBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="toggle">
        {!toggle && (
          <FaBars
            className="toggle_icon openBar"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      {toggle && (
        <div className="sidebar_links_wrapper">
          <div className="toogle">
            <FaTimes
              className="toggle_icon closeBar "
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div className="sidebar_links">
            <p className="product">PRODUCT</p>
            <li>APP & GAMES</li>
            <li>FEATURES</li>
            <li>SUPPORT</li>
            <li>ABOUT</li>
          </div>
          <div className="bag_icon">
            <img src={bag_icon} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
