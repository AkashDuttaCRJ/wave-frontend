import React, { useEffect, useState } from "react";
import "./Header.css";
import hamburger from "../../Assets/menu.svg";
import { motion } from "framer-motion";
import cross from "../../Assets/cross1.svg";

import { BsSoundwave } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import { BsPerson, BsHeart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

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
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
              >
                <RiHome5Line />
                <p> Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/discover"
                activeClassName="active"
                className="nav-link"
              >
                <BsSoundwave />
                <p> Discover</p>
              </NavLink>
            </li>
            <li>
              <BsPerson />
              <p> Artists</p>
            </li>
            <li>
              <BsHeart />
              <p> Favourites</p>
            </li>
          </ul>
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
