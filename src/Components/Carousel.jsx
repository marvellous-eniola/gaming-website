import React, { useState } from "react";
import "../Styles/Carousel.css";
import Img1 from "../assets/themeImg1.svg";
import Img2 from "../assets/themeImg2.svg";
import Img3 from "../assets/themeImg3.svg";

export default function Carousel() {
  return (
    <div>
      <div className="image_carousel">
        <img className="carousel_img" src={Img1} alt="" />
        <div className="sneaks_wrapper">
          <img src={Img2} alt="" />
          <h4 className="sneaks">SNEAK PEEKS</h4>
        </div>
        <img className="carousel_img" src={Img3} alt="" />
      </div>
    </div>
  );
}
