import React from "react";
import profile from "../../../assets/profile.webp";
import "./index.css";
import CardUI from "../../../common/card";
import ButtonUI from "../../../common/button";

const Team = () => {
  const cardArray = [
    {
      icon: (
        <img
          src={profile}
          alt="team"
          width="50%"
          style={{ borderRadius: "50%", marginBottom: '10px' }}
        />
      ),
      title: "CA Garima Baid",
      content: "Founder & Managing Partner",
    },
    {
      icon: (
        <img
          src={profile}
          alt="team"
          width="50%"
          style={{ borderRadius: "50%", marginBottom: '10px' }}
        />
      ),
      title: "CA Rajendra Rampuria",
      content: "Partner",
    },
    {
      icon: (
        <img
          src={profile}
          alt="team"
          width="50%"
          style={{ borderRadius: "50%", marginBottom: '10px' }}
        />
      ),
      title: "CA Vardhman Chhalani",
      content: "Partner",
    },
    {
      icon: (
        <img
          src={profile}
          alt="team"
          width="50%"
          style={{ borderRadius: "50%", marginBottom: '10px' }}
        />
      ),
      title: "CA. Sunil Bansal",
      content: "Partner",
    },
  ];
  return (
    <div className="team-container">
      <div className="team-head">
        <h1>Our Team</h1>
        <p>
          Our team comprises of competent professionals with extensive
          knowledge, calibre and experience who specializes in their respective
          fields.
        </p>
      </div>
      <div className="team-cards-container">
        {cardArray.map((el) => (
          <CardUI
            key={el.title}
            icon={el.icon}
            title={el.title}
            content={el.content}
            backgroundColor="#f6f6f6"
            width='200px'
          />
        ))}
      </div>
      <ButtonUI btnText="View all members" />
    </div>
  );
};

export default Team;
