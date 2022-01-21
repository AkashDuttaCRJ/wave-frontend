import React, { useContext, useEffect, useState } from "react";
import { getHomeData } from "../../API";
import Cards from "../../Components/Cards";
import SyncLoader from "react-spinners/SyncLoader";
import { motion } from "framer-motion";
import axios from "axios";
import "./Home.css";
import { WaveContext } from "../../WaveContext";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [homeData, setHomeData] = useState();
  const [loader, setLoader] = useState(true);
  const { nav, setNav } = useContext(WaveContext);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  useEffect(() => {
    const fetchData = async () => {
      setHomeData(await getHomeData());
      setLoader(false);
      setNav(true);
    };
    fetchData();
  }, []);

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
      className="home"
    >
      <p className="greeting">{homeData?.greeting}</p>
      <Cards
        cardData={homeData?.new_trending}
        title={homeData?.modules?.new_trending?.title}
      />

      <Cards
        cardData={homeData?.new_albums}
        title={homeData?.modules?.new_albums?.title}
      />

      <Cards
        cardData={homeData?.charts}
        title={homeData?.modules?.charts?.title}
        large
      />
      <Cards
        cardData={homeData?.promo_vx_data_32}
        title={homeData?.modules?.promo_vx_data_32?.title}
        square
      />

      <Cards
        cardData={homeData?.promo_vx_data_56}
        title={homeData?.modules?.promo_vx_data_56?.title}
      />

      <Cards
        cardData={homeData?.promo_vx_data_68}
        title={homeData?.modules?.promo_vx_data_68?.title}
      />

      <Cards
        cardData={homeData?.promo_vx_data_76}
        title={homeData?.modules?.promo_vx_data_76?.title}
      />

      <Cards
        cardData={homeData?.promo_vx_data_81}
        title={homeData?.modules?.promo_vx_data_81?.title}
      />
      <Cards
        cardData={homeData?.promo_vx_data_96}
        title={homeData?.modules?.promo_vx_data_96?.title}
      />
    </motion.div>
  );
};

export default Home;
