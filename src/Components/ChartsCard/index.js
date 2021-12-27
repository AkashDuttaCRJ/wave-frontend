import React from "react";
import { useHistory } from "react-router-dom";
import "./ChartsCard.css";

const ChartsCard = ({ charts, artist }) => {
  const cls = artist ? "charts-image border" : "charts-image";
  const history = useHistory();
  return (
    <div
      className="charts-card"
      onClick={() => {
        !artist && history.push(`/playlist/${charts?.listid}`);
      }}
    >
      <div className={cls}>
        <img src={charts?.image} />
      </div>
      {artist ? <p>{charts?.name}</p> : <p>{charts?.listname}</p>}
    </div>
  );
};

export default ChartsCard;
