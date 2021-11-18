import React, { useEffect, useState } from "react";
import "./Cards.css";
import { BsPlay } from "react-icons/bs";

import { truncate } from "../../helper";
import { useHistory } from "react-router";

const Cards = ({ cardData, title, large, square }) => {
  const history = useHistory();

  // console.log(cardData);

  return (
    <div>
      <div className="container">
        <p className="title">{title}</p>
        <div className="cards">
          {cardData?.map((items, index) => {
            return (
              <div
                className="card"
                key={index}
                style={
                  (square && { "--card-width": "200px" }) ||
                  (large && { "--card-width": "300px" })
                }
                onClick={() => {
                  if (items?.type === "playlist") {
                    history.push(`/playlist/${items?.id}`);
                  } else if (items?.type === "album") {
                    history.push(`/album/${items?.id}`);
                  } else if (items?.type === "song") {
                    history.push(`/album/${items?.more_info?.album_id}`);
                  }
                }}
              >
                <img src={items.image} alt="image" />
                <div className="imgBox">
                  <BsPlay />
                </div>
                <div className="card-text">
                  <p className="card-title">
                    {large
                      ? truncate(items.title, 25)
                      : truncate(items.title, 11)}
                  </p>
                  <p className="card-type">{truncate(items.type, 10)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
