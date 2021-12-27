import React, { useContext, useState } from "react";
import "./Header.css";

import { motion } from "framer-motion";

import logo from "../../Assets/logo.svg";
import cross from "../../Assets/cross.svg";
import menu from "../../Assets/menu.svg";

import { BsSoundwave } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import { BsPerson, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { WaveContext } from "../../WaveContext";

const Header = () => {
  const [onMobile, setOnMobile] = useState(false);
  const { nav, setNav } = useContext(WaveContext);

  const history = useHistory();

  const onMobileExpand = () => {
    setOnMobile(!onMobile);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
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
              <NavLink
                exact
                to="/favourites"
                activeClassName="active"
                className="nav-link"
              >
                <BsHeart />
                <p>Favourites</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <motion.div
        className="mobile"
        animate={
          (nav && { x: 0, opacity: 1 }) || (!nav && { y: -100, opacity: 0 })
        }
        transition={{ type: "tween" }}
      >
        <div
          className="mobile-logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logo} alt="logo" />
        </div>

        <div className="hamburger">
          <div className="search-icon">
            <FiSearch
              size={"20px"}
              onClick={() => {
                history.push("/search");
                setNav(!nav);
              }}
            />
          </div>
          <div className="ham-icon" onClick={onMobileExpand}>
            {onMobile ? (
              <img src={cross} alt="cross" />
            ) : (
              <img src={menu} alt="cross" />
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={
          (onMobile && { x: 0, opacity: 1, pointerEvents: "all" }) ||
          (!onMobile && { x: 100, opacity: 0, pointerEvents: "none" })
        }
        transition={{ type: "tween" }}
        className="navbar-mobile"
      >
        <ul
          onClick={() => {
            setOnMobile(!onMobile);
          }}
        >
          <li>
            <NavLink exact to="/" activeClassName="active" className="nav-link">
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
            <NavLink
              exact
              to="/favourites"
              activeClassName="active"
              className="nav-link"
            >
              <BsHeart />
              <p>Favourites</p>
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
