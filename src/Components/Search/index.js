import React, { useEffect, useState } from "react";
import "./Search.css";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { getHomeData, getSearchData } from "../../API";
import { truncate } from "../../helper";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState("");
  const [item, setItem] = useState();
  const [searchData, setSearchData] = useState();

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

  // console.log(searchData);

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
            (isSearch && { height: 0, opacity: 0 })
          }
          onClick={isExpand}
        >
          <FiSearch />
          <p>Search</p>
        </motion.div>
        <motion.div
          animate={
            (!isSearch && { height: 0 }) || (isSearch && { height: "30vh" })
          }
          className="expanded-search"
        >
          <input type="text" value={value} onChange={inputEvent} />
          <div className="clear-cross">
            <button onClick={clearValue}>Clear</button>
            <button onClick={isExpand}>
              <ImCross />
            </button>
          </div>

          <div className="headerCards">
            {value === "" ? (
              <>
                <h3>{item?.modules?.new_trending.title}</h3>
                {item?.new_trending.slice(0, 10)?.map((data, index) => {
                  return <SearchCard data={data} key={index} />;
                })}
              </>
            ) : (
              <>
                {searchData?.topquery?.data && <h3>Topquery</h3>}
                {searchData?.topquery?.data?.map((mapSearchData, index) => {
                  return <SearchCard data={mapSearchData} key={index} />;
                })}

                {searchData?.albums?.data && <h3>Albums</h3>}
                {searchData?.albums?.data?.map((mapSearchData, index) => {
                  return <SearchCard data={mapSearchData} key={index} />;
                })}

                {searchData?.artists?.data && <h3>Artists</h3>}
                {searchData?.artists?.data?.map((mapSearchData, index) => {
                  return <SearchCard data={mapSearchData} key={index} />;
                })}

                {searchData?.songs?.data && <h3>Songs</h3>}
                {searchData?.songs?.data?.map((mapSearchData, index) => {
                  return <SearchCard data={mapSearchData} key={index} />;
                })}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Search;

const SearchCard = ({ data, key }) => {
  return (
    <div>
      <div className="headerCard">
        <img src={data?.image} alt="img" />
        <div className="cardText">
          <p> {truncate(data?.title, 8)}</p>
        </div>
      </div>
    </div>
  );
};
