import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { getSongDetails } from "../../API";
import { truncate } from "../../helper";
import { WaveContext } from "../../WaveContext";
import "./SearchCard.css";

const SearchCard = ({ title, data, isSearch, setIsSearch }) => {
  const history = useHistory();
  const { currentPlayList, setCurrentPlayList } = useContext(WaveContext);

  const handleSongItem = (songId) => {
    getSongDetails(songId).then((data) => {
      history.push(`/album/${data?.albumid}`);
      !currentPlayList.includes(data) &&
        setCurrentPlayList((pv) =>
          currentPlayList?.length === 0 ? [data] : [...pv, data]
        );
    });
  };

  return (
    <div className="searchCard">
      <h3 className="search-title">{title}</h3>
      <div className="headerCard">
        {data?.map((items, index) => {
          const parts = items?.url?.split("/");

          const part = parts?.slice(-1)[0];

          return (
            <div
              className="imgText"
              key={index}
              onClick={() => {
                if (items?.type === "playlist") {
                  history.push(`/playlist/${items?.id}`);
                } else if (items?.type === "album") {
                  history.push(`/album/${items?.id}`);
                } else if (items?.type === "song") {
                  handleSongItem(items?.id);
                } else if (items?.type == "artist") {
                  history.push(`/artist/${part}`);
                }

                setIsSearch(!isSearch);
              }}
            >
              <img src={items?.image} alt="img" />
              <div className="cardText">
                <p className="search-card-name">{truncate(items?.title, 20)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCard;
