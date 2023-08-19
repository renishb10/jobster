import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} className="logo" alt="Jobster logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            incidunt magnam minus vel consequuntur veritatis ab laudantium a
            debitis temporibus? Quidem sint excepturi architecto magnam nesciunt
            rerum consectetur, quam praesentium.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="Jobster" />
      </div>
    </main>
  );
}

export default Landing;
