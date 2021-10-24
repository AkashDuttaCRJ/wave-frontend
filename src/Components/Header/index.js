import React, { useEffect, useState } from "react";
import "./Header.css";
import hamburger from "../../Assets/menu.svg";
import search from "../../Assets/search.svg";
import search1 from "../../Assets/search1.svg";
import cross from "../../Assets/cross1.svg";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [onMobile, setOnMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState("");
  const [item, setItem] = useState();
  // const [searchResult, setSearchResult] = useState(null);
  useEffect(() => {
    setItem(getSearchData());
  }, [value]);

  const getSearchData = async () => {
    const response = await fetch(
      `http://ec2-13-232-176-22.ap-south-1.compute.amazonaws.com/result/?query=${value}`
    );
    const searchData = response.json();
    return searchData;
  };

  const isExpand = () => {
    setIsSearch(!isSearch);
  };
  const onMobileExpand = () => {
    setOnMobile(!onMobile);
  };
  const inputEvent = (event) => {
    const data = event.target.value;
    setValue(data);
  };
  const clearValue = () => {
    setValue("");
  };

  console.log(item);
  return (
    <div>
      <div className="header">
        <div className="logo">Logo</div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Discover</li>
          </ul>

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
              <button onClick={clearValue}>Clear</button>
              <button onClick={isExpand}>
                <ImCross />
              </button>

              <div className="headerCards">
                {item?.Promise.map((result, index) => {
                  <div className="headerCard" key={index}>
                    <img src={result.image} alt="img" />
                    <div className="cardText">
                      <p>Name</p>
                      <p>Sub title</p>
                    </div>
                  </div>;
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="hamburger" onClick={onMobileExpand}>
          <img src={hamburger} alt="hamburger" />
        </div>
        <motion.div
          animate={
            (onMobile && { x: 0, opacity: 1, pointerEvents: "all" }) ||
            (!onMobile && { x: 300, opacity: 0, pointerEvents: "none" })
          }
          transition={{ type: "tween" }}
          className="navbar-mobile"
        >
          <ul>
            <li>Home</li>
            <li>Discover</li>
          </ul>
          <div className="search-mobile">
            <div className="mSearchInput">
              <input
                type="text"
                placeholder="whats in your mind"
                value={value}
                onChange={inputEvent}
              />
              <button onClick={clearValue}>Clear</button>
              {/* <button type="submit">
                <img src={search} alt="search" />
              </button> */}
            </div>
            <button className="cross" onClick={onMobileExpand} type="button">
              <img src={cross} alt="cross" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
