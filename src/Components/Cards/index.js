import React, { useEffect, useState } from "react";
import "./Cards.css";
import { BsPlay } from "react-icons/bs";

import { truncate } from "../../helper";

const Cards = ({ cardData, title, large, square }) => {
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
