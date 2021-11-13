import React from "react";
import "./ChartsCard.css";

const ChartsCard = ({ charts, artist }) => {
  const cls = artist ? "charts-image border" : "charts-image";

  return (
    <div className="charts-card">
      <div className={cls}>
        <img src={charts?.image} />
      </div>
      <p>{charts?.listname}</p>
    </div>
  );
};

export default ChartsCard;
