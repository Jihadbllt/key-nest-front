import React from "react";
import { useLanguage } from "../context/LanguageContext";
import BannerComp from "../components/BannerComp";
import Accordion from "../components/AccordionComp";
import bannerImage from "../assets/cabin.jpg";
import "./About.css";

function About() {
  const { currentLang } = useLanguage();
  const aboutData = require(`../data/data.about.${currentLang}.json`);

  return (
    <div>
      <h1 className="about-title">{aboutData.title}</h1>
      <BannerComp imageUrl={bannerImage} />
      <div className="about-content">
        {aboutData.accordionItems.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;