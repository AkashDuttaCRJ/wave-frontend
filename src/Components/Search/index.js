import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { getHomeData, getSearchData } from "../../API";

import SearchCard from "../SearchCard";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState("");
  const [item, setItem] = useState();
  const [searchData, setSearchData] = useState();
  let inputRef = useRef(null);

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
  }, [isSearch == true]);
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
      <div className="search-bar-top"></div>
      <motion.div className="searchBar">
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "5vh",
            width: "100%",
          }}
          animate={
            (!isSearch && { height: "5vh", opacity: 1 }) ||
            (isSearch && { height: 0, opacity: 0, display: "none" })
          }
          onClick={isExpand}
        >
          <FiSearch />
          <p>Search</p>
        </motion.div>
        <motion.div
          animate={
            (!isSearch && { height: 0, display: "none" }) ||
            (isSearch && { height: "40vh" })
          }
          className="expanded-search"
        >
          <div className="input">
            <FiSearch />
            <input
              type="text"
              value={value}
              onChange={inputEvent}
              ref={inputRef}
            />
          </div>

          <div className="clear-cross">
            <button onClick={clearValue}>Clear</button>
            <button onClick={isExpand}>
              <ImCross />
            </button>
          </div>

          <div className="headerCards">
            {value === "" ? (
              <>
                <SearchCard
                  title="Trending Now"
                  data={item?.new_trending.slice(0, 10)}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                />
              </>
            ) : (
              <>
                <SearchCard
                  title={searchData?.topquery?.data[0] && "Topquery"}
                  data={searchData?.topquery?.data}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                />
                <SearchCard
                  title={searchData?.albums?.data[0] && "Albums"}
                  data={searchData?.albums?.data}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                />
                <SearchCard
                  title={searchData?.artists?.data[0] && "Artists"}
                  data={searchData?.artists?.data}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                />
                <SearchCard
                  title={searchData?.songs?.data[0] && "Songs"}
                  data={searchData?.songs?.data}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                />
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Search;
