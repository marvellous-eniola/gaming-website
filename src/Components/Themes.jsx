import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Styles/Themes.css";
import Carousel from "./Carousel";
export default function Themes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "http://localhost:5173/src/assets/avatar2.svg",
    },
  ];
  // const imagesArray = images.keys().map(images);

  const nextSlide = () => {
    setInterval(() => {
      setCurrentIndex(
        currentIndex === imagesArray.length - 1 ? 0 : currentIndex + 1
      );
    }, 1000);
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? imagesArray.length - 1 : currentIndex - 1
    );
  };
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <div className="theme_wrapper">
        <div className="theme">
          <h3>
            CHOOSE YOUR <span>FAVORITE</span> GAMES
          </h3>
          <p>
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>
        <div className="image_carousel">
          <Carousel />
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#fff",
          }}
          className="directions"
        >
          <p className="left">
            <FaArrowLeft onClick={prevSlide} />
          </p>

          <p className="right">
            <FaArrowRight onClick={nextSlide} />
          </p>
        </div>
      </div>
      <div className="theme_button_wrapper">
        <button className="theme_buy_now">VIEW ALL</button>
        <button className="theme_play_now">PLAY NOW</button>
      </div>
    </div>
  );
}
