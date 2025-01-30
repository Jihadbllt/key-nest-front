import React from "react";
import BannerComp from "../components/BannerComp";
import Accordion from "../components/AccordionComp";
import bannerImage from "../assets/cabin.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <h1 className="about-title">KeyNest's Values</h1>
      <BannerComp imageUrl={bannerImage} />
      <div className="about-content">
        
        <Accordion
          title="Reliability"
          content="The listings posted on KeyNest guarantee complete reliability. The photos match the accommodations, and all information is regularly verified by our teams."
        />
        <Accordion
          title="Service"
          content="Our service ensures that your needs are met at every step. From booking to check-out, we’re here for you."
        />
        <Accordion
          title="Security"
          content="KeyNest places the highest priority on ensuring the safety of all guests and hosts with robust processes and security checks."
        />
      </div>
    </div>
  );
}

export default About;