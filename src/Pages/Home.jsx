import React from "react";
import logo from '../Assets/CVP.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section class="container-fluid"></section>
      <section class="container-fluid">
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
