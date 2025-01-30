import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Carousel from "../components/CarouselComp";
import Accordion from "../components/AccordionComp";
import "./Apartment.css";

const Apartment = () => {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <div className="apartment-not-found">Apartment not found</div>;
  }

  return (
    <div className="apartment-page">
      <Carousel images={apartment.pictures} />
      <div className="apartment-header">
        <div className="apartment-info">
          <h1 className="apartment-title">{apartment.title}</h1>
          <h3 className="apartment-location">{apartment.location}</h3>
          <div className="tags-container">
            {apartment.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host-info">
            <img
              className="host-picture"
              src={apartment.host.picture}
              alt={apartment.host.name}
            />
            <span className="host-name">{apartment.host.name}</span>
          </div>
          <div className="rating">
            <span className="rating-text">Rating: {apartment.rating} / 5</span>
          </div>
        </div>
      </div>

      <div className="apartment-body">
        <div className="accordion-container">
          <Accordion
            title="Description"
            content={apartment.description}
          />
          <Accordion
            title="Equipment"
            content={
              <ul className="apartment-equipment-list">
                {apartment.equipments.map((equipment, index) => (
                  <li key={index} className="equipment-item">
                    {equipment}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      <div className="related-apartments">
        <h3 className="section-title">You might also like</h3>
        <div className="related-container">
          {data
            .filter((item) => item.id !== apartment.id)
            .slice(0, 4)
            .map((relatedApartment) => (
              <div key={relatedApartment.id} className="related-card">
                <img
                  src={relatedApartment.cover}
                  alt={relatedApartment.title}
                  className="related-image"
                />
                <h4 className="related-title">{relatedApartment.title}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;