import React from "react";
import "./BannerComp.css";

function BannerComp({ imageUrl, title }) {
  return (
    <section className="home-banner">
      <img src={imageUrl} alt="cabin key host" />
      {title && <h2>{title}</h2>} {/* Render title if it exists */}
    </section>
  );
}

export default BannerComp;