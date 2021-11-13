import React from "react";
import { truncate } from "../../helper";
import "./BrowserCard.css";

const BrowserCard = ({ newRelease, charts }) => {
  return (
    <div>
      <div className="BrowserCards">
        <div className="BrowserCard">
          <img src={newRelease?.image} />
        </div>
        <p className="BrowserTitle">{truncate(newRelease?.title, 12)}</p>
        <p className="BrowserSubtitle">{truncate(newRelease?.subtitle, 15)}</p>
      </div>
    </div>
  );
};

export default BrowserCard;
