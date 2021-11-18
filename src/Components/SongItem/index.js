import React, { useContext, useEffect } from "react";
import "./SongItem.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react/cjs/react.development";
import { truncate } from "../../helper";
import { WaveContext } from "../../WaveContext";

const SongItem = ({ songs, id, index, fav, artist }) => {
  const [isAdd, setIsAdd] = useState(false);

  const min = Math.floor(songs?.duration / 60);
  const sec = Math.floor(songs?.duration % 60);

  const { favourites, setFavourites, currentPlayList, setCurrentPlayList } =
    useContext(WaveContext);
  useEffect(() => {
    const checkFavourite = () => {
      setIsAdd(favourites?.includes(id));
    };
    checkFavourite();
  }, [favourites, id]);

  const deleteaitem = (id) => {
    setFavourites(favourites.filter((item) => item != id));
  };
  const handleClick = () => {
    setCurrentPlayList((pv) =>
      currentPlayList?.length === 0 ? [songs] : [...pv, songs]
    );
  };

  return (
    <div className="top-songs" onClick={handleClick}>
      <div className="top-song-details">
        <p>{index + 1}</p>

        <img src={songs?.image} alt="song-image" />
        {fav ? (
          <>
            <p className="title">{songs?.song}</p>
            <p className="title">{truncate(songs?.singers, 40)}</p>
          </>
        ) : (
          <>
            <p className="title">{truncate(songs?.title, 30)}</p>
            <p className="desc">{truncate(songs?.header_desc, 40)}</p>
          </>
        )}

        <div
          className="fav-icon"
          onClick={() => {
            isAdd
              ? deleteaitem(id)
              : setFavourites((pv) =>
                  favourites?.length === 0 ? [id] : [...pv, id]
                );
          }}
        >
          {isAdd ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
        </div>
        {artist && (
          <p className="duration">
            {Math.floor(songs?.more_info?.duration / 60)}.
            {Math.floor(songs?.more_info?.duration % 60)}
          </p>
        )}

        {fav && (
          <p className="duration">
            {min}. {sec < 10 ? "0" + sec : sec}
          </p>
        )}
      </div>
    </div>
  );
};

export default SongItem;
