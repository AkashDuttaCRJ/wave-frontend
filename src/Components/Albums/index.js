import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAlbumsData, getPlayListData } from "../../API";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Albums.css";
import SongItem from "../SongItem";
import { truncate } from "../../helper";

const Albums = ({ match }) => {
  // const permaUrl = "https://www.jiosaavn.com/album/sooryavanshi/q3wQulyDlhg_";
  const [data, setData] = useState();

  useEffect(() => {
    const getPlayListsData = async () => {
      setData(await getPlayListData(match?.params?.id));
    };
    getPlayListsData();
  }, []);
  useEffect(() => {
    const getAlbumData = async () => {
      setData(await getAlbumsData(match?.params?.id));
    };
    getAlbumData();
  }, []);

  console.log(data);
  return (
    <div className="albums">
      <div className="details">
        <img src={data?.image} alt="artist-image" />
        <div className="details-text">
          <h1>{truncate(data?.name, 10)}</h1>
          <p>Release Date {data?.release_date}</p>
          <div className="play-icon">
            <button>Play</button>
          </div>
        </div>
      </div>

      <div className="top-songs">
        <h3>Top Songs</h3>
        {data?.songs?.map((songs, index) => {
          return (
            <SongItem songs={songs} index={index} fav id={songs?.id} />
            // <div className="top-song-details" key={index}>
            //   <p>{index + 1}</p>

            //   <p className="title">{songs?.song}</p>
            //   <p className="desc">{songs?.singers}</p>

            //   <p>
            //     {Math.floor(songs?.duration / 60)} .
            //     {Math.floor(songs?.duration % 60)}{" "}
            //   </p>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
