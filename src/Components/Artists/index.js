import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Artists.css";
import { getArtistData } from "../../API";

import BrowserCard from "../BrowserCard";
import SongItem from "../SongItem";

const Artists = ({ match }) => {
  const [artistsData, setArtistsData] = useState();
  const [favouriteIcon, setFavouriteIcon] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setArtistsData(
        await getArtistData(`artist/?query=${match?.params?.part}`)
      );
    };
    getData();
  }, []);

  return (
    <div className="main">
      <div className="details">
        <img src={artistsData?.image} alt="artist-image" />
        <div className="details-text">
          <h1>{artistsData?.name}</h1>
          <p>Artist {artistsData?.fan_count} Listeners</p>
          <div className="play-icon">
            <button>Play</button>
          </div>
        </div>
      </div>

      <h3>Top Songs</h3>

      {artistsData?.topSongs.slice(0, 10)?.map((songs, index) => {
        return (
          <>
            <SongItem songs={songs} id={songs?.id} index={index} artist />
          </>
        );
      })}

      <div className="recent-release">
        {artistsData?.latest_release && <h3>Latest Release</h3>}
        {artistsData?.latest_release?.map((latestRelease, index) => {
          return <BrowserCard newRelease={latestRelease} />;
        })}
      </div>

      <div className="recent-release">
        {artistsData?.featured_artist_playlist && <h3>Featured In</h3>}
        {artistsData?.featured_artist_playlist?.map((latestRelease, index) => {
          return <BrowserCard newRelease={latestRelease} />;
        })}
      </div>

      <div className="recent-release">
        {artistsData?.singles && <h3>Singles</h3>}
        {artistsData?.singles?.map((latestRelease, index) => {
          return <BrowserCard newRelease={latestRelease} />;
        })}
      </div>
    </div>
  );
};

export default Artists;
