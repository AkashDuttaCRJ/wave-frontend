import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Browse.css";
import { getCharts, getNewReleases, getPlayList, topArtists } from "../../API";
import BrowserCard from "../../Components/BrowserCard";
import { languages } from "../../helper";
import ChartsCard from "../../Components/ChartsCard";
import { useHistory } from "react-router";
import { WaveContext } from "../../WaveContext";
import { motion } from "framer-motion";
import SyncLoader from "react-spinners/SyncLoader";
import { useMediaQuery } from "react-responsive";

const Browse = () => {
  const [newReleases, setNewReleaseds] = useState([]);

  const [language, setLanguage] = useState(false);
  const [playListLanguage, setPlayListLanguage] = useState(false);
  const [charts, setCharts] = useState();

  const [playList, setPlayList] = useState();

  const [artist, setArtist] = useState();

  const [activeObject, setAciveObject] = useState(0);
  const [secondActiveObject, setSecondAciveObject] = useState(0);

  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const { nav, setNav } = useContext(WaveContext);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    const fetchData = async () => {
      setNewReleaseds(await getNewReleases(language));
      setLoader(false);
    };
    fetchData();
  }, [language]);

  useEffect(() => {
    setNav(true);
  }, []);

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

  function toggleIndex(index) {
    if (activeObject === index) {
      return "lang activeLang";
    } else {
      return "lang";
    }
  }
  function toggleSecondIndex(index) {
    if (secondActiveObject === index) {
      return "lang activeLang";
    } else {
      return "lang";
    }
  }
  const { currentPlayList } = useContext(WaveContext);

  return loader ? (
    <div className="loader">
      <SyncLoader
        loading="true"
        color="#00d673"
        size="15px"
        speedMultiplier="0.5"
      />
    </div>
  ) : (
    <motion.div
      animate={
        (currentPlayList.length === 0 && { marginRight: "0" },
        currentPlayList.length >= 1 &&
          isMobile == false && { marginRight: "100px" })
      }
      className="browse"
    >
      <p className="new-release">{newReleases[0] && "New Releases"}</p>

      <div className="new-releases">
        {newReleases[0] && (
          <div className="language">
            {languages.map((lang, index) => {
              return (
                <div
                  className={toggleIndex(index)}
                  key={index}
                  onClick={() => {
                    lang === "For You"
                      ? setLanguage(false)
                      : setLanguage(lang.toString().toLowerCase());
                    setAciveObject(index);
                  }}
                >
                  <p>{lang}</p>
                </div>
              );
            })}
          </div>
        )}
        <div className="bCard">
          {newReleases?.map((newRelease, index) => {
            return (
              <BrowserCard
                newRelease={newRelease}
                key={index}
                language={language[index]}
                album
              />
            );
          })}
        </div>
      </div>

      {charts && (
        <div className="chart">
          <p className="chart-title">Charts</p>
          <div className="charts">
            {charts?.map((chart, index) => {
              return <ChartsCard charts={chart} key={index} />;
            })}
          </div>
        </div>
      )}

      <p className="new-release">{playList && "Top Playlist"}</p>
      <div className="new-releases">
        {playList && (
          <div className="language">
            {languages.map((lang, index) => {
              return (
                <div
                  className={toggleSecondIndex(index)}
                  key={index}
                  onClick={() => {
                    lang === "For You"
                      ? setPlayListLanguage(false)
                      : setPlayListLanguage(lang.toString().toLowerCase());
                    setSecondAciveObject(index);
                  }}
                >
                  <p>{lang}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="bCard">
          {playList?.map((playList, index) => {
            return (
              <BrowserCard
                newRelease={playList}
                playList
                key={index}
                language={language[index]}
              />
            );
          })}
        </div>
      </div>

      <div className="chart">
        <p className="chart-title">{artist && "Top Artists"}</p>
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
    </motion.div>
  );
};

export default Browse;
