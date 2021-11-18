import React, { useEffect, useState } from "react";
import { getHomeData } from "../../API";
import Cards from "../../Components/Cards";
import Search from "../../Components/Search";

import "./Home.css";

const Home = () => {
  const [homeData, setHomeData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setHomeData(await getHomeData());
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <p className="greeting">{homeData?.greeting}</p>
      <Cards
        cardData={homeData?.new_trending}
        title={homeData?.modules?.new_trending.title}
      />

      <Cards
        cardData={homeData?.new_albums}
        title={homeData?.modules?.new_albums.title}
      />

      <Cards
        cardData={homeData?.charts}
        title={homeData?.modules?.charts.title}
        large
      />
      <Cards
        cardData={homeData?.artist_recos}
        title={homeData?.modules?.artist_recos.title}
        square
      />

      <Cards cardData={homeData?.browse_discover} title={homeData?.browse_discover && "Browse"} />

      <Cards
        cardData={homeData?.city_mod}
        title={homeData?.modules?.city_mod.title}
      />

      {/* <Cards
        cardData={homeData?.promo:vx:data:23}
        title={homeData?.modules?.promo:vx:data:23.title}
      />
        <Cards
        cardData={homeData?.promo:vx:data:23}
        title={homeData?.modules?.promo:vx:data:23.title}
      />
        <Cards
        cardData={homeData?.city_mod}
        title={homeData?.modules?.city_mod.title}
      /> */}
    </div>
  );
};

export default Home;
