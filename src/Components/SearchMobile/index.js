import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchMobile.css";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { getHomeData, getSearchData } from "../../API";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { getSongDetails } from "../../API";
import { truncate } from "../../helper";
import { WaveContext } from "../../WaveContext";

const SearchMobile = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState("");
  const [item, setItem] = useState();
  const [searchData, setSearchData] = useState();
  const inputRef = useRef(null);
  const history = useHistory();

  const { nav, setNav } = useContext(WaveContext);
  useEffect(() => {
    const search = async () => {
      setSearchData(await getSearchData(value));
    };
    search();
  }, [value]);

  useEffect(() => {
    const trending = async () => {
      setItem(await getHomeData());
    };
    trending();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [isSearch]);
  const isExpand = () => {
    setIsSearch(!isSearch);
  };

  const inputEvent = (event) => {
    const data = event.target.value;
    setValue(data);
  };
  const clearValue = () => {
    setValue("");
  };

  return (
    <>
      <motion.div className="mobile-search">
        <div className="mobile-input">
          <FiSearch size={"24px"} />
          <input
            type="text"
            value={value}
            onChange={inputEvent}
            ref={inputRef}
          />
          <p className="input-clear" onClick={clearValue}>
            Clear
          </p>
          <div
            className="mobile-cross"
            onClick={() => {
              history.goBack();
              setNav(!nav);
            }}
          >
            <ImCross size={"15px"} />
          </div>
        </div>

        <div className="mobile-headerCards">
          {value === "" ? (
            <>
              <MobileSearchCard
                title={item?.new_trending[0] && "Trending Now"}
                data={item?.new_trending.slice(0, 10)}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            </>
          ) : (
            <>
              <MobileSearchCard
                title={searchData?.topquery?.data[0] && "Topquery"}
                data={searchData?.topquery?.data}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
              <MobileSearchCard
                title={searchData?.albums?.data[0] && "Albums"}
                data={searchData?.albums?.data}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
              <MobileSearchCard
                title={searchData?.artists?.data[0] && "Artists"}
                data={searchData?.artists?.data}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
              <MobileSearchCard
                title={searchData?.songs?.data[0] && "Songs"}
                data={searchData?.songs?.data}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
              />
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SearchMobile;

const MobileSearchCard = ({ title, data, isSearch, setIsSearch }) => {
  const history = useHistory();
  const { nav, setNav } = useContext(WaveContext);

  const handleSongItem = (songId) => {
    getSongDetails(songId).then((data) => {
      history.push(`/album/${data?.albumid}`);
    });
  };

  return (
    <div className="mobileSearchCard">
      <h3 className="mobile-search-title">{title}</h3>
      <div className="mobileheaderCard">
        {data?.map((items, index) => {
          const parts = items?.url?.split("/");

          const part = parts?.slice(-1)[0];

          return (
            <div
              className="mobileimgText"
              key={index}
              onClick={() => {
                if (items?.type === "playlist") {
                  history.push(`/playlist/${items?.id}`);
                } else if (items?.type === "album") {
                  history.push(`/album/${items?.id}`);
                } else if (items?.type === "song") {
                  handleSongItem(items?.id);
                } else if (items?.type == "artist") {
                  history.push(`/artist/${part}`);
                }

                setIsSearch(!isSearch);
                setNav(!nav);
              }}
            >
              <img src={items?.image} alt="img" />

              <div className="mobile-search-card-name">
                {truncate(items?.title, 25)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
