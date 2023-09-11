import React, { useState } from "react";
const ContactInfo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="info__container">
      {["Location", "Email", "WhatsApp"].map((text, index) => (
        <a
          key={index}
          className={`info__card ${
            hoveredIndex === index ? "hover-effect" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          href={
            index === 0
              ? "https://www.google.com/maps?q=Kampala%20Uganda"
              : index === 1
              ? "mailto:jeanjacquesirenge40@gmail.com"
              : "https://api.whatsapp.com/send?phone=+256779907323"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="img__info">
            {index === 0 && <i className="uil uil-location-point"></i>}
            {index === 1 && <i className="bx bxl-gmail"></i>}
            {index === 2 && <i className="uil uil-whatsapp"></i>}
          </div>
          <div className="info__text">
            <h4>{text}</h4>
            <span>
              {index === 0 && "Kampala Uganda"}
              {index === 1 && "jeanjacquesirenge40@gmail.com"}
              {index === 2 && "+256 779 907 323"}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
