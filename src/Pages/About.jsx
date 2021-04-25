import React from "react";
import './About.css'
import logo from '../Assets/CVP.png'
const About = () => {
  return (
    <div>
      <section class="container-fluid"></section>
      <section class="container-fluid">
        <img src={logo} id="logo"></img>
      </section>
      <section class="container-fluid">
        <div class="row">
            <div class="col">
              <h1 class="display-6">Who We Are</h1>
              <p>
                The Washington Conviction Vacation Project is an all-volunteer technology driven team focused on reducing barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">The Problem</h1>
              <p>
                The process of vacating a conviction can be complex in Washington state - determining if you are eligible, gathering documents, filing motions with the court, scheduling a hearing.  Hiring an attorney for this process can be cost-prohibitive, and a volunteer attorney clinic may not be accessible.  We believe that utilizing software could help simplify this process.
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Our Goal</h1>
              <p>
                Our volunteer research team is in the process of identifying where building a software tool could provide value to Washingtonians seeking to vacate convictions from their record.  There are numerous benefits to vacating a conviction, including better opportunities for housing and employment.  
              </p>
            </div>
        </div>
      </section>

      <section class="container-fluid">
        <div class="row">
            <div class="col">
              <h1 class="display-6">Research Findings</h1>
              <p>
              We have conducted a round of interviews with subject matter experts that work with conviction vacation and found some pain points that their clients typically face. These pain points fall in 4 general areas: determining vacation eligibility, communication with clients, finding conviction records, and interaction with courts. 
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Product & Design</h1>
              <p>
                As we have been making sense of our findings, the big question has been how do we make the most impact? With that question in mind the process we decided to explore is determining vacation eligibility. Multiple states have successfully implemented different versions of this type of software.  Not only do they provide a proof of concept that this type of software is in demand and can work, but also provides us with ideas for different features that we could incorporate into our work.
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Eligibility Calculator</h1>
              <p>
              We decided to create a tool that helps clients assess their eligibility.  In order to create our eligibility calculator, we have been creating a decision tree with the legal logic that goes behind calculating eligibility. 
              </p>
            </div>
        </div>
      </section>

      <section class="container-fluid">
        <div class="row">
          <h1 class="display-6">Future Plans</h1>
            <div class="col">
              <p>
              An eligibility calculator would assist individuals in knowing if they are even eligible to start the vacation process.  We envision that additional tools could help applicants locate court documents, prepare and file relevant motions with the court, and keep track of their progress.  We are investigating the feasibility of a Turbo Tax style interface to simplify this process, and then e-filing the forms in counties where it is permitted. 
              </p>
            </div>
            <div class="col">
              <p>
              Software could also be created to assist volunteer attorneys that normally specialize in other areas of law be in a better position to assist individuals across the state with legal representation to achieve their goals.
              </p>
            </div>
            <div class="col">
              <p>
              Modern software development typically releases products in stages, each stage adding features. Our group is currently exploring and researching additional ways that software could help individuals throughout this process.              </p>
            </div>
        </div>
      </section>
  </div>
  );
};

export default About;
