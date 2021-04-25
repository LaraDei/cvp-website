import React from "react";
import './About.css'
import logo from '../Assets/CVP.png'
import AboutDetails from '../Components/AboutDetails'
import data from '../data/team.json'

const About = () => {
  return (
    <div>
      <section class="container-fluid"></section>
      <section class="container-fluid">
        <img src={logo} id="logo" />
      </section>
      <section class="container-fluid">
        <h1 class="display-6">Our Team</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {data.map((person, id) =>
          (
            <div class="col">
              <AboutDetails 
                name={person.name}
                title={person.title}
                img={person.img}
                description={person.description}
              />
            </div>
          ))}
      </div>
    </section>
  </div>
  );
};

export default About;
