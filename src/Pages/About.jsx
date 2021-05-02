import React from "react";
import './About.css'
import logo from '../Assets/CVP.png'
import AboutDetails from '../Components/AboutDetails'
import data from '../data/team.json'

const About = () => {
  return (
    <div>
      <section id="filler"></section>
      <section class="container-fluid">
        <img src={logo} id="logo" />
      </section>
      <section class="container-fluid-content">
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
    <section class="container-fluid-content">
      <h1 class="display-6">Want To Be A Part of Our Team?</h1>
      <p>
        We are always looking for proactive and passionate volunteers with a diverse skillset to help us advance our goal.  
      </p>
      <p>
        Reach out to learn more and opportunities to volunteer with us.
      </p>
      <button type="button" class="btn btn-primary"><a href="mailto:mail@seamus.work">Contact Us!</a></button>
    </section>
  </div>
  );
};

export default About;
