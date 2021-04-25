import React from "react";
import logo from '../Assets/CVP.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section class="container-fluid"></section>
      <section class="container-fluid-content">
        <div class="row">
          <div class="col" id="jumbotron-text">
            <h3>Some Great Title Text Here</h3>
            <button type="button" class="btn btn-primary">Call To Action</button>
          </div>
          <div class="col">
            <img src={logo} id="logo"></img>
          </div>
        </div>
      </section>

      <section class="container-fluid-content">
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

      <section class="container-fluid-content">
        <div class="row">
            <div class="col">
              <h1 class="display-6">Research Findings</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              <p>
              We have conducted a round of interviews with subject matter experts that work with conviction vacation and found some pain points that their clients typically face. These pain points fall in 4 general areas: determining vacation eligibility, communication with clients, finding conviction records, and interaction with courts. 
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Product & Design</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
                <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/>
              </svg>
              <p>
                As we have been making sense of our findings, the big question has been how do we make the most impact? With that question in mind the process we decided to explore is determining vacation eligibility. Multiple states have successfully implemented different versions of this type of software.  Not only do they provide a proof of concept that this type of software is in demand and can work, but also provides us with ideas for different features that we could incorporate into our work.
              </p>
            </div>
            <div class="col">
              <h1 class="display-6">Eligibility Calculator</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
              </svg>
              <p>
              We decided to create a tool that helps clients assess their eligibility.  In order to create our eligibility calculator, we have been creating a decision tree with the legal logic that goes behind calculating eligibility. 
              </p>
            </div>
        </div>
      </section>

      <section class="container-fluid-content">
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

      <section class="container-fluid-content">
        <div class="row">
          <div class="col">
            <h3>Want to Learn More?</h3>
            <h6>Contact Us!</h6>
            <button type="button" class="btn btn-primary">Contact</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
