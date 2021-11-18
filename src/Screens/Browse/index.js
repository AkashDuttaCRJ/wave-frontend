import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Browse.css";
import { getCharts, getNewReleases, getPlayList, topArtists } from "../../API";
import BrowserCard from "../../Components/BrowserCard";
import { languages } from "../../helper";
import ChartsCard from "../../Components/ChartsCard";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Browse = () => {
  const [newReleases, setNewReleaseds] = useState([]);

  const [language, setLanguage] = useState(false);
  const [playListLanguage, setPlayListLanguage] = useState(false);
  const [charts, setCharts] = useState();

  const [playList, setPlayList] = useState();

  const [artist, setArtist] = useState();

  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      setNewReleaseds(await getNewReleases(language));
    };
    fetchData();
  }, [language]);

  useEffect(() => {
    const fetchData = async () => {
      setPlayList(await getPlayList(playListLanguage));
    };
    fetchData();
  }, [playListLanguage]);

  useEffect(() => {
    const fetchChartsData = async () => {
      setCharts(await getCharts());
    };
    fetchChartsData();
  }, []);

  useEffect(() => {
    const artistData = async () => {
      setArtist(await topArtists());
    };
    artistData();
  }, []);

  // console.log(artist?.top_artists);

  return (
    <div className="browse">
      <p className="new-release">New Releases</p>
      <div className="new-releases">
        <div className="language">
          {languages.map((lang, index) => {
            return (
              <div
                className="lang"
                key={index}
                onClick={() => {
                  lang === "For You"
                    ? setLanguage(false)
                    : setLanguage(lang.toString().toLowerCase());
                }}
              >
                <p>{lang}</p>
              </div>
            );
          })}
        </div>
        <div className="bCard">
          {newReleases?.map((newRelease, index) => {
            return <BrowserCard newRelease={newRelease} key={index} />;
          })}
        </div>
      </div>

      <div className="chart">
        <p className="chart-title">Charts</p>
        <div className="charts">
          {charts?.map((chart, index) => {
            return <ChartsCard charts={chart} key={index} />;
          })}
        </div>
      </div>

      <p className="new-release">Top Playlist</p>
      <div className="new-releases">
        <div className="language">
          {languages.map((lang, index) => {
            return (
              <div
                className="lang"
                key={index}
                onClick={() => {
                  lang === "For You"
                    ? setPlayListLanguage(false)
                    : setPlayListLanguage(lang.toString().toLowerCase());
                }}
              >
                <p>{lang}</p>
              </div>
            );
          })}
        </div>
        <div className="bCard">
          {playList?.map((playList, index) => {
            return <BrowserCard newRelease={playList} key={index} />;
          })}
        </div>
      </div>

      <div className="chart">
        <p className="chart-title">Top Artists</p>
        <div className="charts">
          {artist?.top_artists?.map((chart, index) => {
            const parts = chart?.perma_url?.split("/");
            const part = parts.slice(-1)[0];
            return (
              <>
                <div
                  onClick={() => {
                    history.push(`/artist/${part}`);
                  }}
                  key={index}
                >
                  <ChartsCard charts={chart} key={index} artist />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
