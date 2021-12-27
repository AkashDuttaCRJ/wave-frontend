import "./PlayList.css";
import React, { useContext, useEffect } from "react";
import { getPlayListData, getRecoPlayList } from "../../API";
import SongItem from "../SongItem";
import { useState } from "react/cjs/react.development";
import Cards from "../Cards";
import { WaveContext } from "../../WaveContext";
import SyncLoader from "react-spinners/SyncLoader";
const PlayList = ({ match }) => {
  const [data, setData] = useState();
  const [recoPlayList, setRecoPlayList] = useState();
  const { currentPlayList, setCurrentPlayList } = useContext(WaveContext);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getPlayListsData = async () => {
      setData(await getPlayListData(match?.params?.id));
    };

    getPlayListsData();
  }, [recoPlayList]);

  useEffect(() => {
    const getRecoPlayLists = async () => {
      setRecoPlayList(await getRecoPlayList(data?.listid));
    };

    getRecoPlayLists();
  }, [match?.params?.id]);

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
    <div className="playlist">
      <div className="playlist-details">
        <img src={data?.image} alt="Image" />
        <div className="playlist-details-text">
          <h1 className="playlist-details-text-heading">{data?.listname}</h1>

          <div className="mobile-play-icon" onClick={handleClick}>
            Play
          </div>
        </div>
      </div>

      <div className="top-songs">
        <h3 className="top-song-heading">Top Songs</h3>
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

      <div className="recent-playlist">
        <Cards cardData={recoPlayList} />
      </div>
    </div>
  );
};

export default PlayList;
