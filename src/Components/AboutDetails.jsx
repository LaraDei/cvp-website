import React from "react";
import imgPlaceholder from '../Assets/img.jpg'
import './AboutDetails.css'

const AboutDetails = (props) => {
  return (
    <div class="container-sm">
      <img src={imgPlaceholder} class="about-img"/> 
      <div class="container" id="about-info">
        <h5>{props.name}</h5>
        <h6>{props.title}</h6>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default AboutDetails;
