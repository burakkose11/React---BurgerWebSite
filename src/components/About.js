import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
          iste, quae illum numquam vero blanditiis dolorem enim labore
          aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero magnam iste, quae illum numquam vero blanditiis dolorem enim
          labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Libero magnam iste, quae illum numquam vero blanditiis dolorem
          enim labore aperiam.
        </p>
      </div>
    </div>
  );
};
