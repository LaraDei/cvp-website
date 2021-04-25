import React from "react";
import imgPlaceholder from '../Assets/img.jpg'
import './AboutDetails.css'

const AboutDetails = () => {
  return (
    <div class="container-sm">
      <img src={imgPlaceholder} class="about-img"/>
      <h6>First Last</h6>
      <p>
        description
      </p>
    </div>
  );
};

export default AboutDetails;
