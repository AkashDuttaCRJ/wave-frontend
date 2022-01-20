import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAlbumDetailsByYear, getAlbumsData } from "../../API";
import "./Albums.css";
import SongItem from "../SongItem";
import { truncate } from "../../helper";
import Cards from "../Cards";
import { WaveContext } from "../../WaveContext";
import SyncLoader from "react-spinners/SyncLoader";

const Albums = ({ match }) => {
  const [data, setData] = useState();
  const [recentAlbums, setRecentAlbums] = useState();
  const { currentPlayList, setCurrentPlayList } = useContext(WaveContext);
  const [loader, setLoader] = useState(true);
  const { nav, setNav } = useContext(WaveContext);
  useEffect(() => {
    const getAlbumData = async () => {
      setData(await getAlbumsData(match?.params?.id));
    };
    getAlbumData();
  }, [match?.params?.id]);

  useEffect(() => {
    const getAlbumData = async () => {
      setRecentAlbums(await getAlbumDetailsByYear(data?.year));
    };
    getAlbumData();
    setNav(true);
  }, [data]);

  const handleClick = () => {
    !currentPlayList.includes(data?.songs[0]) &&
      setCurrentPlayList((pv) =>
        currentPlayList?.length === 0
          ? [...data?.songs]
          : [...pv, ...data?.songs]
      );
  };

  return loader ? (
    <div className="loader">
      <SyncLoader
        loading="true"
        color="#00d673"
        size="15px"
        speedMultiplier="0.5"
      />
      {data && setLoader(false)}
    </div>
  ) : (
    <div className="albums">
      <div className="album-details">
        <img src={data?.image} alt="Album" />
        <div className="album-details-text">
          <h1 className="album-details-text-heading">
            {truncate(data?.name, 20)}
          </h1>
          <p className="album-release-date">
            Release Date {data?.release_date}
          </p>
          <div className="mobile-play-icon" onClick={handleClick}>
            Play
          </div>
        </div>
      </div>

      <div className="top-songs">
        <h3 className="top-song-heading">{data?.songs && "Top Songs"}</h3>
        {data?.songs?.map((songs, index) => {
          return (
            <SongItem
              songs={songs}
              key={index}
              index={index}
              fav
              id={songs?.id}
            />
          );
        })}
      </div>
      <p className="recent-album-title">{recentAlbums && "Recent Albums"}</p>
      <div
        className="recent-albums"
        onClick={() => {
          setData();
          setLoader(true);
        }}
      >
        <Cards cardData={recentAlbums} />
      </div>
    </div>
  );
};

export default Albums;
