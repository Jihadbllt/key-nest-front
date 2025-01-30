import React from "react";
import CardComp from "../components/CardComp";
import cabinImg from "../assets/cabin.jpg";
import data from "../data/data.json";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="home-banner">
        <img src={cabinImg} alt="cabin key host" />
        <h2>Your key to the perfect nest</h2>
      </section>
      <section className="cards-container">
        {data.map((item) => (
          <CardComp
            key={item.id}
            text={item.title}
            imageUrl={item.cover}
            apartmentId={item.id}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;