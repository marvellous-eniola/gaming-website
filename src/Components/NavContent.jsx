import React from "react";
import "../Styles/NavContent.css";
// import navContentImage from "../assets/artboard.svg";
import Gaming from "./Gaming";
export default function NavContent() {
  return (
    <div>
      <div className="BG_image_flex">
        <div
          className="nav_content_wrapper"
          // style={{
          //   background: `url(${navContentImage})`,
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   height: "70vh",
          // }}
        >
          <div className="nav_content nav_content_wrapper_flex">
            <h1>
              LET YOUR MIND <span>EXPLORE</span> NEW WORLD
            </h1>
            <p>
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
            <div className="nav_button_flex">
              <button className="buy_now">BUY NOW</button>
              <button className="play_now">PLAY NOW</button>
            </div>
            <div className="nav_status_wrapper">
              <div className="unique_style nav_status">
                <h2>300+</h2>
                <p>Unique Style</p>
              </div>
              <div className="project_finished nav_status">
                <h2>
                  <span>200+</span>
                </h2>

                <p>Project Finished</p>
              </div>
              <div className="unique_style nav_status">
                <h2>500+</h2>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          <div className="BG_image">
            {/*  */}
          </div>
        </div>
       
      </div>
      <div className="nav_content_games">
        <Gaming />
      </div>
      <div className="nav_status_container">
        <div className="btn_status_wrapper">
          <div className="nav_button_flex">
            <button className="buy_now">BUY NOW</button>
            <button className="play_now">PLAY NOW</button>
          </div>
          <div className="status_flex">
            <div className="unique_style nav_status">
              <h2>300+</h2>
              <p>Unique Style</p>
            </div>
            <div className="project_finished nav_status">
              <h2>
                <span>200+</span>
              </h2>

              <p>Project Finished</p>
            </div>
            <div className="unique_style nav_status">
              <h2>500+</h2>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
