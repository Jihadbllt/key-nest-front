import React from "react";
import { Link } from "react-router-dom";
import "./CardComp.css";

function CardComp({ text, imageUrl, apartmentId }) {
  return (
    <Link to={`/apartment/${apartmentId}`} className="card-link">
      <article className="card">
        <h3 className="card-title">{text}</h3>
        <img className="card-img" src={imageUrl} alt={text} />
      </article>
    </Link>
  );
}

export default CardComp;