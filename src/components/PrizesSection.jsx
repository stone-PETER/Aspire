import React from "react";
import "./PrizesSection.css";

const prizes = [
  { place: "1st Prize", amount: "$2,000" },
  { place: "2nd Prize", amount: "$1,200" },
  { place: "3rd Prize", amount: "$800" },
  { place: "4th - 7th", amount: "$333" },
];

const PrizesSection = () => (
  <section className="prizes alt-bg">
    <div className="section-inner">
      <h2>Prizes </h2>
      <div className="prizes-list auto-grid dense">
        {prizes.map((prize, idx) => (
          <div className="prize-card card" key={idx}>
            <h3>{prize.place}</h3>
            <p>Prize Amount: {prize.amount}</p>
          </div>
        ))}
      </div>
      <p className="prizes-note">Every winner gets gadgets worth $25.</p>
      {/* <div className="registration">
        <p>
          <strong>Registration Fee:</strong> $5
        </p>
        <button className="primary cta">Register Now</button>
      </div> */}
    </div>
  </section>
);

export default PrizesSection;
