import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getSongDetails } from "../../API";
import SongItem from "../../Components/SongItem";
import { WaveContext } from "../../WaveContext";
import "./Favourites.css";
import SyncLoader from "react-spinners/SyncLoader";

const Favourites = () => {
  const { favourites } = useContext(WaveContext);
  const [songData, setSongData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { nav, setNav } = useContext(WaveContext);

  useEffect(() => {
    const data = async () => {
      Promise.all(
        favourites?.map(async (fav, index) => {
          return await getSongDetails(fav);
        })
      ).then((result) => setSongData((prev) => [...prev, ...result]));
    };
    setSongData([]);
    favourites && data();
  }, [favourites]);
  useEffect(() => {
    setNav(true);
  }, []);

  return loader ? (
    <div className="loader">
      <SyncLoader
        loading="true"
        color="#00d673"
        size="15px"
        speedMultiplier="0.5"
      />
      {songData && setLoader(false)}
    </div>
  ) : (
    <div className="favourite">
      <h3>Favourites</h3>

      {songData?.map((item, index) => {
        return (
          <SongItem songs={item} key={index} index={index} id={item?.id} fav />
        );
      })}
    </div>
  );
};

export default Favourites;
