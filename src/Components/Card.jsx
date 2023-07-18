import React from "react";
import cardImg1 from "../assets/cardImg1.svg";
import cardImg2 from "../assets/cardImg2.svg";
import cardImg3 from "../assets/cardImg3.svg";
import cardImg4 from "../assets/cardImg4.svg";
import cardImg5 from "../assets/cardImg5.svg";
import cardImg6 from "../assets/cardImg6.svg";
//
import "../Styles/Card.css";
import star from "../assets/star.svg";
//
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";
import avatar6 from "../assets/avatar6.svg";
import Gaming from "./Gaming";

export default function Card() {
  return (
    <div>
      <div className="cards_wrapper">
        <div className="card_wrapper">
          <img className="card_img" src={cardImg1} alt="" />
          <div className="card_name">
            <p>Core Philosophies</p>
            <div className="avatar_user_wrapper">
              <img src={avatar1} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Cameron Williamson</p>
                <p className="company">Gillette</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
        <div className="card_wrapper">
          <img className="card_img" src={cardImg2} alt="" />
          <div className="card_name">
            <p>Core Philosophies</p>
            <div className="avatar_user_wrapper">
              <img src={avatar2} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Dianne Russell</p>
                <p className="company">Louis Vuitton</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
        <div className="card_wrapper">
          <img className="card_img" src={cardImg3} alt="" />
          <div className="card_name">
            <p className="user_name">user_name</p>
            <div className="avatar_user_wrapper">
              <img src={avatar3} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Jane Cooper</p>
                <p className="company">MasterCard</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
        <div className="card_wrapper">
          <img className="card_img" src={cardImg4} alt="" />
          <div className="card_name">
            <p>Core Philosophies</p>
            <div className="avatar_user_wrapper">
              <img src={avatar4} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Cody Fisher</p>
                <p className="company">The Walt Disney Company</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
        <div className="card_wrapper">
          <img className="card_img" src={cardImg5} alt="" />
          <div className="card_name">
            <p>Core Philosophies</p>
            <div className="avatar_user_wrapper">
              <img src={avatar5} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Wade Warren</p>
                <p className="company">Gillette</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
        <div className="card_wrapper">
          <img className="card_img" src={cardImg6} alt="" />
          <div className="card_name">
            <p>Core Philosophies</p>
            <div className="avatar_user_wrapper">
              <img src={avatar6} alt="" />
              <div className="company_wrapper_flex">
                <p className="user_name">Robert Fox</p>
                <p className="company">L'Oréal</p>
              </div>
            </div>
          </div>
          <div className="card_button_wrapper">
            <button className="card_buy_now">LIVE DEMO</button>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="card_games_wrapper">
        <Gaming />
      </div>
    </div>
  );
}
