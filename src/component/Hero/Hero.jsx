import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import hero from "./../../assets/images/hero1.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-image">
        <img src={hero} alt="" />
      </div>
      <div className="hero-content">
        <p>HI, I'M A Freelancer</p>
        <h2>React Developer</h2>
        <div className="button">
          <Link to="/products">
            <Button title={"Projects"} className={"btn"} />
          </Link>
          <Link to="/contact">
            <Button title={"Contact"} className={"btn btn-light"} />
          </Link>
        </div>
      </div>
    </header>
  );
}
