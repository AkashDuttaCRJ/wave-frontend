import React, { useContext } from "react";
import "./Cards.css";
import { BsPlay } from "react-icons/bs";

import { truncate } from "../../helper";
import { useHistory } from "react-router";
import { WaveContext } from "../../WaveContext";
import { getAlbumsData, getPlayListData } from "../../API";

const Cards = ({ cardData, title, large, square }) => {
  const history = useHistory();
  const { currentPlayList, setCurrentPlayList } = useContext(WaveContext);

  const queue = (data, index) => {
    console.log(data?.songs[0]);
    !currentPlayList.includes(data?.songs[0]?.song) &&
      setCurrentPlayList((pv) =>
        currentPlayList?.length === 0
          ? [...data?.songs]
          : [...pv, ...data?.songs]
      );
  };

  const playListData = (id, index) => {
    getPlayListData(id).then((data) => {
      queue(data, index);
    });
  };

  const albumData = (id, index) => {
    getAlbumsData(id).then((data) => {
      queue(data, index);
    });
  };

  const handleClick = (items, index) => {
    if (items?.type === "playlist") {
      playListData(items?.id, index);
    } else if (items?.type === "album") {
      albumData(items?.id, index);
    } else if (items?.type === "song") {
      albumData(items?.more_info?.album_id, index);
    }
  };
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
                  (square && {
                    "--card-width": "200px",
                    "--mobile-card-width": "150px",
                  }) ||
                  (large && {
                    "--card-width": "300px",
                    "--mobile-card-width": "200px",
                  })
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
                <img src={items.image} alt="ItemImage" />
                <div
                  className="imgBox"
                  onClick={(e) => {
                    handleClick(items, index);
                    e.stopPropagation();
                  }}
                >
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
