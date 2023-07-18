import React from "react";
import star from "../assets/reviewStar.svg";
import avatar1 from "../assets/reviewImg1.svg";
import verified from "../assets/verified.svg";
import tag1 from "../assets/tag1.svg";
import tag2 from "../assets/tag2.svg";
import "../Styles/Review.css";

export default function Review() {
  return (
    <div>
      <div className="review_wrapper">
        <div className="user_review_wrapper">
          <div className="star_tag_wrapper">
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="tags">
              <img className="tag_img" src={tag1} alt="" />
              <img className="tag_img" src={tag2} alt="" />
            </div>
          </div>
          <p className="feedback">
            One of the standout features of this gaming website is its extensive
            library of game guides and tutorials. It has helped me level up my
            skills, conquer challenging quests, and discover hidden secrets
            within games. The guides are comprehensive, easy to follow, and have
            undoubtedly elevated my gaming performance.
          </p>
          <div className="review_user_flex">
            <div className="review_user_info">
              <img src={avatar1} alt="" />
              <div>
                <h2>Core Philosophies</h2>
                <p>Gucci</p>
              </div>
            </div>
            <img src={verified} alt="" />
          </div>
        </div>
        <div className="user_review_wrapper">
          <div className="star_tag_wrapper">
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="tags">
              <img className="tag_img" src={tag1} alt="" />
              <img className="tag_img" src={tag2} alt="" />
            </div>
          </div>
          <p className="feedback">
            One of the standout features of this gaming website is its extensive
            library of game guides and tutorials. It has helped me level up my
            skills, conquer challenging quests, and discover hidden secrets
            within games. The guides are comprehensive, easy to follow, and have
            undoubtedly elevated my gaming performance.
          </p>
          <div className="review_user_flex">
            <div className="review_user_info">
              <img src={avatar1} alt="" />
              <div>
                <h2>Core Philosophies</h2>
                <p>Gucci</p>
              </div>
            </div>
            <img src={verified} alt="" />
          </div>
        </div>
        <div className="user_review_wrapper">
          <div className="star_tag_wrapper">
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="tags">
              <img className="tag_img" src={tag1} alt="" />
              <img className="tag_img" src={tag2} alt="" />
            </div>
          </div>
          <p className="feedback">
            One of the standout features of this gaming website is its extensive
            library of game guides and tutorials. It has helped me level up my
            skills, conquer challenging quests, and discover hidden secrets
            within games. The guides are comprehensive, easy to follow, and have
            undoubtedly elevated my gaming performance.
          </p>
          <div className="review_user_flex">
            <div className="review_user_info">
              <img src={avatar1} alt="" />
              <div>
                <h2>Core Philosophies</h2>
                <p>Gucci</p>
              </div>
            </div>
            <img src={verified} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
