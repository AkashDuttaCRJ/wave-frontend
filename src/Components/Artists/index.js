import React, { useContext, useEffect, useState } from "react";
import "./Artists.css";
import { getArtistData, getSongDetails } from "../../API";
import BrowserCard from "../BrowserCard";
import SongItem from "../SongItem";
import { WaveContext } from "../../WaveContext";
import SyncLoader from "react-spinners/SyncLoader";
const Artists = ({ match }) => {
  const [artistsData, setArtistsData] = useState();
  const { currentPlayList, setCurrentPlayList } = useContext(WaveContext);
  const [relatedArtists, setRelatedArtists] = useState(false);
  const [loader, setLoader] = useState(true);
  const { nav, setNav } = useContext(WaveContext);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setArtistsData(await getArtistData(`/artist/?id=${match?.params?.part}`));
    };
    getData();
    setNav(true);
  }, [match?.params?.part]);

  // const handleClick = (res) => {
  //   console.log(res);

  //   !currentPlayList.includes(response?.results) &&
  //     setCurrentPlayList(response?.results);
  // };

  const ids = () => {
    artistsData?.topSongs.slice(0, 10).map(async (id, index) => {
      const item = await getSongDetails(id?.id);
      setResponse((pv) => (pv.length === 0 ? [item] : [...pv, item]));
      !currentPlayList.includes(response[0]) && setCurrentPlayList(response);
    });
  };
  console.log(response);

  return loader ? (
    <div className="loader">
      <SyncLoader
        loading="true"
        color="#00d673"
        size="15px"
        speedMultiplier="0.5"
      />
      {artistsData && setLoader(false)}
    </div>
  ) : (
    <div className="main">
      <div className="artist-details">
        <img src={artistsData?.image} alt="artistImage" />
        <div className="artist-details-text">
          <h1 className="artist-details-text-heading">{artistsData?.name}</h1>
          <p className="artist-fan-count">
            Artist {artistsData?.fan_count} Listeners
          </p>
          <div className="mobile-play-icon" onClick={ids}>
            Play
          </div>
        </div>
      </div>
      <div className="top-songs">
        <h3 className="top-song-heading">
          {artistsData?.topSongs[0] && "Top Songs"}
        </h3>

        {artistsData?.topSongs.slice(0, 10)?.map((songs, index) => {
          return (
            <>
              <SongItem songs={songs} id={songs?.id} index={index} artist />
            </>
          );
        })}
      </div>
      <div className="release">
        <div className="recent-release">
          <h3>{artistsData?.latest_release[0] && "Latest Release"}</h3>
          {artistsData?.latest_release?.map((latestRelease, index) => {
            return (
              <BrowserCard newRelease={latestRelease} artistAlbum key={index} />
            );
          })}
        </div>

        <div className="recent-release">
          <h3> {artistsData?.featured_artist_playlist[0] && "Featured In"}</h3>
          {artistsData?.featured_artist_playlist?.map(
            (latestRelease, index) => {
              return (
                <BrowserCard
                  newRelease={latestRelease}
                  artistPlayList
                  key={index}
                />
              );
            }
          )}
        </div>

        <div className="recent-release">
          <h3> {artistsData?.singles[0] && "Singles"}</h3>
          {artistsData?.singles?.map((latestRelease, index) => {
            return (
              <BrowserCard newRelease={latestRelease} artistAlbum key={index} />
            );
          })}
        </div>

        <div
          className="recent-release"
          onClick={() => {
            window.scrollTo(0, 0);
            setArtistsData();
            setLoader(true);
          }}
        >
          <h3> {artistsData?.similarArtists[0] && "Related Artists"}</h3>
          {artistsData?.similarArtists?.map((latestRelease, index) => {
            return (
              <BrowserCard
                newRelease={latestRelease}
                part
                relatedArtists={relatedArtists}
                setRelatedArtists={setRelatedArtists}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artists;
