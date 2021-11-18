import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getSongDetails } from "../../API";
import SongItem from "../../Components/SongItem";
import { WaveContext } from "../../WaveContext";
import "./Favourites.css";

const Favourites = () => {
  const { favourites, setFavourites } = useContext(WaveContext);
  const [songData, setSongData] = useState([]);

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

  return (
    <div className="favourite">
      <h3>Favourites</h3>
      {songData?.map((item, index) => {
        return <SongItem songs={item} index={index} id={item?.id} fav />;
      })}
    </div>
  );
};

export default Favourites;
