import React, { useState } from "react";
import "./AccordionComp.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <button className="accordion-toggle">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && <div className="accordion-body">{content}</div>}
    </div>
  );
};

export default Accordion;