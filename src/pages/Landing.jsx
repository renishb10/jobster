import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} className="main-img" alt="Jobster" />
      </div>
    </Wrapper>
  );
}

export default Landing;
